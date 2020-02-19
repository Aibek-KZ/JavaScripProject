// to print same line process.stdout.write()

var set = new Set();
/*
add(value): add the value to the set
delete(value): allows to delete stuff
clear(): removes everything
has(value): contains

*/
set.add(10);
set.add(10);
set.add(10);
set.add("Toyota");
set.add("Lexus");
set.add("Honda");
set.add('$');set.add('$');
console.log(set);//only single 10, no duplicates

set.delete(10);
console.log(set);//only one 10, no duplicates

//set.clear();
console.log(set);//only one 10, no duplicates

var bool = set.has("Honda");
console.log(bool); //false


/*
for of loop: similar to for each loop
   for( var varname of set.values() ){

   }
*/
for(var each of set.values()){
    console.log(each);
}

var cars = ["BMW", "Mazda", "Tesla"];
for(var eachCar of cars.values()){
    console.log(eachCar);
}

