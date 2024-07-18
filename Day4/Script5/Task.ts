// create a script that calculates the factorial of a number using do while ;

// 4! = 4x3x2x1 = 24 

{let number : number = 4;
let factorial : number = 1;
let i : number = 1;
do{
factorial *= i;
i++
}while(i<=number)
console.log('Factorial of '+ number +" :"+factorial)}