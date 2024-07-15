// Feature Request
// 1. variable types Consloe Log : write a script that declares variables of different data types and logs both the value and type of each variable to the console.
var fullName = 'Inayat Ur Rehman';
var agg = 23;
var isLearning = true;
var obj = {
    name: 'Ali',
    age: 45,
};
var arr = [1, 2, 3, "4"];
// Reassignment  Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment
var mutableValue = 'initial';
console.log(mutableValue);
mutableValue = 'new value';
console.log(mutableValue);
var immutableValue = "const value";
console.log(immutableValue);
// immutableValue = 'new value'; // Cannot assign to 'immutableValue' because it is a constant.
