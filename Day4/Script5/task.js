// create a script that calculates the factorial of a number using do while ;
// 4! = 4x3x2x1 = 24 
{
    var number = 4;
    var factorial = 1;
    var i = 1;
    do {
        factorial *= i;
        i++;
    } while (i <= number);
    console.log('Factorial of ' + number + " :" + factorial);
}
