
var map = new Map();

/*
set(Key, Value): add key and values to the map
get(key): returns the value
delete(key): removes from the map
has(key): verifies

keys(): returns all the keys
values(): returns all the values
*/
map.set("Highlander", 35000);
map.set("RX350", 45000);

console.log(map);
/*
for of loop:
    for( var [X, Y] of mapName )
*/
for(var [key, value] of map){
    console.log(key+" "+value);
}

console.log(map.get("RX350")); //get(key): returns the value

map.delete("RX350");
console.log(map);

/*
Keys():
values():
*/

var students = new Map();
students.set("Nurzat", 1);
students.set("Samat", 2);
students.set("KZ", 3);

for( var key of students.keys()){
    console.log(key);
}
console.log("======================================");
for(var value of students.values()){
    console.log(value);
}
