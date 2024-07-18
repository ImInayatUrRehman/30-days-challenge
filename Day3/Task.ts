// Activities 1

(()=>{
  // Task 1 : write a program to check a number is pasitive or negative or zeror and log to the consloe..
  const num : number = -9;
  if(num === 0){
    console.log(`Number is Zero `)
  }else if(num >0){
    console.log(`Number is Pasitive `)
  }else{
    console.log(`Number is Negative `)
  }
})();

(()=>{
  // Task 2 : write a program to check if a person is eligable to vote (age>=18) and log the result to the console.

  const age:number = 18;
  if(age>=18){
    console.log(`Age ${age}: Eligible to vote`);
  }else{
    console.log(`Age ${age}: Not eligible to vote`);
  }
})();

(()=>{
  // Task 3: Write a program to find the largest of three numbers using nested if-else statements.
  const a : number = 12;
  const b : number = 5;
  const c : number = 16;
  if(a>=b){
    if(a>=c){
      console.log(`a ${a} is the largest number.`)
    }else{
      console.log(`c ${c} is the largest number.`)
    }
  }else{
    if(b>=c){
      console.log(`b ${b} is the largest number.`)
    }else{
      console.log(`b ${c} is the largest number.`)
    }
  }
  })();


(()=>{
  // Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let dayName: string;
let dayNumber: number = 3; 

switch (dayNumber) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day number';
    break;
}

console.log(`Day ${dayNumber} is ${dayName}`);

})();

(()=>{
  // Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.

  let grade :string;
  let score :number = 1050;
  switch(true){
    case score >= 1000:
      grade = 'A'
      break;
    case score >= 700:
      grade = 'B'
      break;
    case score >=600:
      grade = 'C'
      break;
    case score>=400:
      grade = 'D'
      break;
    case score < 400 :
      grade = 'F';
      break;
    default:
      grade = 'Invalid Marks'
      break;
    }
    console.log(`Score ${score} gets grade ${grade}.`);
})();

(()=>{
  // Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console. 
  const num : number = 12;
  const result : string = num % 2 === 0?"Pasitive":"Negative";
  console.log(`number is : ${result}`)
})();

(()=>{
  // Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
  const year : number = 2024;
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)
  console.log(`${year} is ${isLeap ? '' : 'not '}a leap year.`)
})()