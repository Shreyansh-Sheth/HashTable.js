class table {
			constructor(length, hashElement) {
				this.data = new Array(length);
				this.hashElement = hashElement;
			}

			set(object) {
				this.key = Object.keys(object)[this.hashElement];
				let value = object[this.key];
				let index = this.hash(value);
				if (this.data[index] == null) {
					this.data[index] = object;
				} else if (this.data[index].length == undefined) {
					let pastData = this.data[index];
					this.data[index] = [pastData];
					this.data[index].push(object);
				} else {
					this.data[index].push(object);
				}

			}
			get(data) {
				let index = this.hash(data);
				if (this.data[index].length == undefined) {
					return this.data[index];
				} else {
					let arr = this.data[index];
					for(let i = 0 ; i <arr.length ; i++){
						let element = arr[i];
						let value = element[this.key];
						if (data.localeCompare(value) == 0) {
							return element;
						}
					}
				}
			}
			hash(element) {
				let indexNum = 0;
				for (let i = 0; i < element.length; i++) {
					indexNum += element.charCodeAt(i)
				}
				return indexNum % this.data.length;
			}

		}