// Activities 1
(function () {
    // Task 1 : write a program to check a number is pasitive or negative or zeror and log to the consloe..
    var num = -9;
    if (num === 0) {
        console.log("Number is Zero ");
    }
    else if (num > 0) {
        console.log("Number is Pasitive ");
    }
    else {
        console.log("Number is Negative ");
    }
})();
(function () {
    // Task 2 : write a program to check if a person is eligable to vote (age>=18) and log the result to the console.
    var age = 18;
    if (age >= 18) {
        console.log("Age ".concat(age, ": Eligible to vote"));
    }
    else {
        console.log("Age ".concat(age, ": Not eligible to vote"));
    }
})();
(function () {
    // Task 3: Write a program to find the largest of three numbers using nested if-else statements.
    var a = 12;
    var b = 5;
    var c = 16;
    if (a >= b) {
        if (a >= c) {
            console.log("a ".concat(a, " is the largest number."));
        }
        else {
            console.log("c ".concat(c, " is the largest number."));
        }
    }
    else {
        if (b >= c) {
            console.log("b ".concat(b, " is the largest number."));
        }
        else {
            console.log("b ".concat(c, " is the largest number."));
        }
    }
})();
(function () {
    // Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
    var dayName;
    var dayNumber = 3;
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
    console.log("Day ".concat(dayNumber, " is ").concat(dayName));
})();
(function () {
    // Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
    var grade;
    var score = 1050;
    switch (true) {
        case score >= 1000:
            grade = 'A';
            break;
        case score >= 700:
            grade = 'B';
            break;
        case score >= 600:
            grade = 'C';
            break;
        case score >= 400:
            grade = 'D';
            break;
        case score < 400:
            grade = 'F';
            break;
        default:
            grade = 'Invalid Marks';
            break;
    }
    console.log("Score ".concat(score, " gets grade ").concat(grade, "."));
})();
(function () {
    // Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console. 
    var num = 12;
    var result = num % 2 === 0 ? "Pasitive" : "Negative";
    console.log("number is : ".concat(result));
})();
(function () {
    // Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
    var year = 2024;
    var isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    console.log("".concat(year, " is ").concat(isLeap ? '' : 'not ', "a leap year."));
})();
