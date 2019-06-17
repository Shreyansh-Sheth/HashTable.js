# hash tables
This simple hash table program can simplify to make own hash table and this can avoid collisions
By Chaining  

## run this file
### initialization 
``` sh
let HashTable = new table(4 , 0) 
/*
  -here first argument is array size
  -second argument is element index for hashing and finding object
  -here 0th element of object is use to hashing and finding whole object
*/
```
### create data
``` sh
let a = {
Name:’shreyansh’, 
Age:18
}
HashTable.set(a);
```
### requesting data

```sh
HashTable.get(‘shreyansh’);
/* returns
{
Name:’shreyansh’, 
Age:18
}
*/
```
