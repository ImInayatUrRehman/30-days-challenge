// Loop 
// For Loop 
(function () {
    // Task  : write a program print number from 1 to 10 using for loop
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
})();
(function () {
    // Task : write a program to print multiplication table of 5 using for loop
    for (var i = 1; i <= 10; i++) {
        var num = 5;
        console.log("".concat(num, " * ").concat(i, " = ").concat(num * i));
    }
})();
(function () {
    // Task : write a program to calculate the sum of numbers from 1 to 10 using a while loop.
    var sum = 0;
    var num = 1;
    while (num <= 10) {
        sum += num;
        num++;
    }
    console.log("the sum of number of 1 to 10 : ".concat(sum));
})();
(function () {
    // Task : write a program to print a number from 10 to 1 using while loop;
    var num = 10;
    while (num >= 1) {
        console.log(num);
        num--;
    }
})();
(function () {
    // do... while loop 
    // Task : write a program to print numbers from 1 to 5 using do while loop;
    var num = 1;
    do {
        console.log("do while Task ".concat(num));
        num++;
    } while (num <= 5);
})();
(function () {
    // write a program to calculate the factorial of a given number using a do-while loop:
    var num = 4;
    var result = 1;
    var i = 1;
    do {
        result *= i;
        i++;
    } while (i <= num);
    console.log("The factorial of ".concat(num, " is ").concat(result));
})();
(function () {
    // Task : write a program to print a pattern using nested for loop;
    for (var i = 1; i <= 5; i++) {
        var pattern = '';
        for (var j = 1; j <= i; j++) {
            pattern = '*';
        }
        console.log(pattern);
    }
})();
(function () {
    // write  a program to print number from 1 to 10, but skip the number 5 using continue statement 
    for (var i = 1; i <= 10; i++) {
        if (i === 5) {
            continue;
        }
        console.log(i);
    }
})();
(function () {
    // write  a program to print number from 1 to 10, but stop the loop when the number is 7 using break statement 
    for (var i = 1; i <= 10; i++) {
        if (i === 7) {
            break;
        }
        console.log(i);
    }
})();
