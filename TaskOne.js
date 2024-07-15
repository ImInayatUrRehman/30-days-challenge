// ## Variable Declaration
(function () {
    //  Decalre a variable using var, assing it a number, and log the value to the console...
    var num = 12;
    console.log(num);
    //  Declare a variable using let, assing it a string, and log the value to the console.
    var fullName = 'Noman Khan';
    console.log(fullName);
    // Declare a variable using const, assign it a boolean value, and log the value to the console.
    var isTrue = true;
    console.log(isTrue);
    // create variable of different data types (number,string,boolean, object,array) and log each variable's type using the typeof operator.
    var val = 1;
    var add = 'Battagram';
    var isFalse = false;
    var obj = {
        name: 'Khan',
        age: 24
    };
    var arr = [1, true, 'ali', { name: 'john' }];
    console.log(arr);
    console.log("typeof val : ".concat(typeof val));
    console.log("typeof add : ".concat(typeof add));
    console.log("typeof isFalse : ".concat(typeof isFalse));
    console.log("typeof obj is : ".concat(typeof obj));
    console.log("typeof arr is : ".concat(typeof arr, " "));
    // Declare a variable using let, assign it an initaial value, reassign a neww value, and log both values to the console.
    var value = 100;
    console.log("initail value : ".concat(value));
    value = 'new value';
    console.log(value);
    // Try reassigning a variable declared with const and observe the error.
    var constVal = 'initial value';
    console.log(constVal);
    // constVale = 'new value' // TyperError Constant value 
})();
