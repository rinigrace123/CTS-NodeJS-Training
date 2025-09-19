const map = new Map()

map.set("a",1);//map.set(key,value) to set values in map
map.set("b",2);
map.set("c",3);

console.log(map)

//get value from map using key
console.log(map.get("a"))//1

map.set("a",97)
console.log(map.get("a"))//97

console.log(map.size);
//delete value from map
map.delete("b")

console.log(map.size)//2
