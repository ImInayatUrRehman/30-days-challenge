// Loop 
// For Loop 
(()=>{

  // Task  : write a program print number from 1 to 10 using for loop
  for(let i:number = 1 ; i<= 10 ; i++){
    console.log(i)
  }
})();
(()=>{
  // Task : write a program to print multiplication table of 5 using for loop
  for(let i:number = 1 ; i<=10; i++){
    let num:number = 5;
    console.log(`${num} * ${i} = ${num*i}`)
  }
})();

(()=>{
  // Task : write a program to calculate the sum of numbers from 1 to 10 using a while loop.
  let sum:number = 0
  let num:number =1;
  while (num<=10) {
   sum += num;
   num++;
  } 
  console.log(`the sum of number of 1 to 10 : ${sum}`)
})();

(()=>{
  // Task : write a program to print a number from 10 to 1 using while loop;
  let num:number = 10;
  while (num>=1){
    console.log(num)
    num--;
  } 
})();

(()=>{
  // do... while loop 
  // Task : write a program to print numbers from 1 to 5 using do while loop;
  let num:number = 1
  do {
    console.log(`do while Task ${num}`)
    num++
  } while (num<=5);
})();

(()=>{

  // write a program to calculate the factorial of a given number using a do-while loop:

  let num : number = 4;
  let result : number = 1;
  let i :number = 1;
  do{
    result *= i;
    i++
  }while(
    i<=num
  )
  console.log(`The factorial of ${num} is ${result}`);
})();

(()=>{
  // Task : write a program to print a pattern using nested for loop;
  for(let i: number = 1;  i<=5; i++){
    let pattern : string = ''
    for(let j : number = 1 ; j<= i ; j++){
      pattern += '*'
    }
    console.log(pattern)
  }
})();

(()=>{
  // write  a program to print number from 1 to 10, but skip the number 5 using continue statement 
  for(let i : number = 1; i<=10;i++){
    if(i===5){
      continue;
    }
    console.log(i)
  }
})();

(()=>{
  // write  a program to print number from 1 to 10, but stop the loop when the number is 7 using break statement 
  for(let i : number = 1; i<=10;i++){
    if(i===7){
      break;
    }
    console.log(i)
  }
})()

