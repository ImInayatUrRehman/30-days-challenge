// Feature Request
// 1. variable types Consloe Log : write a script that declares variables of different data types and logs both the value and type of each variable to the console.

const fullName : string = 'Inayat Ur Rehman';
const agg:number = 23;
const isLearning:boolean = true;
const obj : {name:string , age : number} = {
  name : 'Ali',
  age : 45,

}
type myArr = number | string
const arr:myArr[] = [1,2,3,"4"]



// Reassignment  Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment

let mutableValue : string = 'initial';
console.log(mutableValue)

mutableValue = 'new value'
console.log(mutableValue)

const immutableValue : string= "const value"
console.log(immutableValue)

// immutableValue = 'new value'; // Cannot assign to 'immutableValue' because it is a constant.