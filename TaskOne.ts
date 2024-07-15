// ## Variable Declaration

(()=>{


//  Decalre a variable using var, assing it a number, and log the value to the console...

var num : number = 12;
console.log(num);




//  Declare a variable using let, assing it a string, and log the value to the console.

let fullName : string = 'Noman Khan'
console.log(fullName)



// Declare a variable using const, assign it a boolean value, and log the value to the console.

const isTrue : boolean = true;
console.log(isTrue)


// create variable of different data types (number,string,boolean, object,array) and log each variable's type using the typeof operator.

const val: number = 1;
const add: string = 'Battagram';
const isFalse : boolean = false;
const obj : {name:string,age:number} = {
  name : 'Khan',
  age: 24
}
type myArr = string|boolean|number|object
const arr : myArr[] = [1,true,'ali',{name:'john'}]
console.log(arr)

console.log(`typeof val : ${typeof val}`)
console.log(`typeof add : ${typeof add}`);
console.log(`typeof isFalse : ${typeof isFalse}`)
console.log(`typeof obj is : ${typeof obj}`)
console.log(`typeof arr is : ${typeof arr} `)

// Declare a variable using let, assign it an initaial value, reassign a neww value, and log both values to the console.

let value : number| string = 100;
console.log(`initail value : ${value}`)
value = 'new value'
console.log(value)


// Try reassigning a variable declared with const and observe the error.

const constVal:string = 'initial value';
console.log(constVal)

// constVale = 'new value' // TyperError Constant value 

  
})()