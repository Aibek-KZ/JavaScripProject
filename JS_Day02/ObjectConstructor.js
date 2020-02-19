
var car1 = {
    brand : "BMW",
    milage : 50000,
    year : 2019
};

var car2 = {
    brand : "Tesla",
    milage : 6000,
    year : 2020
};

function car(brand, milage, year){
    this.brand=brand;//this refers to the object instances
    this.milage=milage;
    this.year=year;
}

var car3 = new car("Lexus", 95000, 2018);

console.log(car3);
console.log(car2);



function Employee(Name, Id,SSN, Salary){
    this.Name=Name;
    this.Id=Id;
    this.SSN=SSN;
    this.Salary=Salary;    
}
var employeeErhan = new Employee("Erhan", 99, "1234568", 127000);
console.log(employeeErhan);

var employeeSumeyya = new Employee("Sumeyya", 101, "55885548", 125000);
console.log(employeeSumeyya);
console.log(employeeSumeyya.Name+" "+employeeSumeyya.Salary);

