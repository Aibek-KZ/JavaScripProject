var numbers = [1,2,3,3.5,7.5, "Aibek", true, '$'];
//index:       0 1 2  3   4      5      6     7
console.log(numbers);
console.log(numbers[5]); //used index number 5

var name = numbers[5];
var bool = numbers[6];
console.log(name); //Aibek
console.log(bool); //true
console.log(numbers[10]); //undefined

/*
sort(): sorts in accending order
push(): add method
pop(): LIFO -> last in first out
shift(): FIFO-> First in first out
unshift(value): inserts the value to index 0
length: returns the length

*/
var nums = [9,8,2,4,55,7,88,96,3];
nums.push(700);
nums.shift();
nums.sort; // rukes of ASCII table
console.log(nums);
console.log(nums.length);

/*
var nums = [9,8,7,6,5,4,3,2,1];
 nums.sort();  // ascii table
nums.push(100);
 console.log(nums);
 console.log(nums.pop());
 console.log(nums);
 console.log(nums.shift()); 
 console.log(nums);
 nums.unshift(1);
 console.log(nums);
 console.log(nums.length);
 */