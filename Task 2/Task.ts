// Arithmetic Operations ....
// Arithmetic Operations ....
(() => {
  const numberOne: number = 20;
  const numberTwo: number = 10;

  // Task 1: Write a program to add two numbers and log the result to the console
        // const addTwoNumbers: string = `Sum of ${numberOne} + ${numberTwo} = ${numberOne + numberTwo}`;
        // console.log(addTwoNumbers);

  // Task 2: Write a program to subtract two numbers and log the result to the console
      // const subtractTwoNumbers: string = `${numberOne} - ${numberTwo} = ${numberOne - numberTwo}`;
      // console.log(subtractTwoNumbers);

  // Task 3: Write a program to multiply two numbers and log the result to the console
      // const multiplyTwoNumbers: string = `${numberOne} * ${numberTwo} = ${numberOne * numberTwo}`;
      // console.log(multiplyTwoNumbers);

  // Task 4: Write a program to divide two numbers and log the result to the console
      // const divideTwoNumbers: string = `${numberOne} / ${numberTwo} = ${numberOne / numberTwo}`;
      // console.log(divideTwoNumbers);

  // Task 5: Write a program to find the remainder when number one is divided by another number and log it to the console
      // const remainder: string = `Remainder is: ${numberOne % numberTwo}`;
      // console.log(remainder);


   // Assignment Operators
    // Tasks 6 : Use the += operator to add a number to a variable and log the result to the console.

        // let num : number = 10;
        // num += 2;
        // console.log(num)
    // Tasks 6 : Use the -= operator to subtract a number from a variable and log the result to the console.

        // num -=5;
        // console.log(num)


    // Comparison Operators 
    // Task 7 : write a program to compare a two number using > adn < and log the result to the console.
    
        // console.log(numberOne > numberTwo)
        // console.log(numberOne<numberTwo)

     // Task 8 : write a program to compare a two number using >= adn <= and log the result to the console.
      console.log(numberOne>=numberTwo)
      console.log(numberOne<=numberTwo)


    // Task 9 : write a program to compare a two number using == adn === and log the result to the console.

    console.log(numberOne==numberTwo)
    console.log(numberOne===numberTwo)

    
})();

// Logical Operators 
   (()=>{
     // Task 10 : write a program that  uses the && operator to combine two condition and log the result to the console.

     const conditionOne : boolean = true;
     const conditionTwo : boolean = false;
     const result : boolean = conditionOne && conditionTwo;
     console.log(`Result of conditionOne && conditionTwo: ${result}`)
 
   })();

   (()=>{
     // Task 10 : write a program that  uses the || operator to combine two condition and log the result to the console.
     const conditionOne : boolean = true;
     const conditionTwo : boolean = false;
    const result : boolean = conditionOne || conditionTwo;
    console.log( `Result of conditionOne || conditionTwo: ${result}`)
   })();

   (()=>{

     // Task 11 : write a program that  uses the ! operator to negate  condition and log the result to the console.
    const condition : boolean = true;
    const result : boolean = !condition;
    console.log(`Result of !condition : ${result}`)
   })();

   (()=>{
    // Task : write a program that uses the ternary operator to check if a number is passitive or negative and log the result to the console 
    const num : number = -9;
    const result : string = num >= 0 ? "passitive" :'negative'
    console.log(`number is : ${result}`)
   })()