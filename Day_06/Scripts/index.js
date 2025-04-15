// console.log();
console.log("Day 06 of 40 days of javascript");

// Contents Covered

// What is a function
// Function is a methodology in programming using you can save yourself from repeatative tasks. 

// Defining a a function
/*function sayHello(){
    console.log(" Hello World");
}
// Call or invoke the function
sayHello();

// Function as Expression 
let print = function(){
    console.log("Print Hello World");
}

console.log(print);
// or 
print();*/

// Parameters and arguments
/*function sum(a, b){
    const result = a + b;
    // console.log(result);
    return result;
}
let result = sum(12,17);
console.log(result);

function double(x){
    return 2*x;
}
console.log(double(result));*/


// Default and Rest Parameter
// Default parameter
/*function calc(a,b){
    return (2*(a+b));
}
console.log(calc(2,9)); //Output 22
console.log(calc(2)); //Output NaN

function calc2(x=0,y=0){ //Assigning a value to the parameters while creating the function is known an default parameters
    return (2*(x+y));
}
console.log(calc2(9));*/

// Rest Parameter
/*function count (a,b,...Rest){
    console.log(a, b, Rest)
}
count(24, "02", 7, 2,4,0,2,0,9);*/

// Nested Function 

// Callback Function 
// Pure Function and HoF 
// Arrow function 
// IIFE 
// Call Stack 
// Recurtion