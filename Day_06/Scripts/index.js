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
/*
function outer(){
    console.log("Outer Function");

    return function inner(){
        console.log("Inner");
    }
    // inner();
}
let retFunc = outer();
console.log(retFunc());
*/

// Callback Function 
/*
const toCallBack = false;
function demo(buzz){
    console.log("This is a demo Function");

    if(toCallBack) buzz();
}

demo(function(){
    console.log("That is a buzz function");
});
*/
// Pure Function and HoF 
// Pure Function
/*
    Pure function is a function that returns or provide the same output for the same input.
*/
/*
function sayHello(name){
    return "Hello " + name;
}
// Here the function sayHello is returning same output for the same input. The function is not relying on any other intermediaries.
console.log(sayHello("Yasin"));
console.log(sayHello("Yasin"));
console.log(sayHello("Yasin"));

// If the output of function defer for the same input by relying other intermediaries, then it is called side effect of pure function.
let salam = "Assalamu 'Alaikum";
function sayHey(name){
    return salam +" " + name;
}
console.log(sayHey("Yasin"));
console.log(sayHey("Yasin"));

salam = "Salom AAlekoom";

console.log(sayHey("Yasin"));
console.log(sayHey("Yasin"));
*/
// HoF or High order function
/*
A high order function(HoF) is a function that takes another function as a parameter argument and can return a function from it.
*/
/*
function getCamera(camera,mobile){
    camera();
    mobile();
}
getCamera(function(){
    console.log("Cannon");
},function(){
    console.log("Sony Eriction");
});
// or 
function returnFunc(){
    return function(){
        console.log("Hello Yasin");
    }
}
let reF = returnFunc();
console.log(reF());
*/

// Arrow function 
let greeting = () => console.log("Arrow Function");

greeting();
// or
let greetByName = (name) => "Hello " + name;

console.log(greetByName("Yasin"));
// or 
let greetMe = (name)=> {
    return "Take my Greetings " + name;
}

console.log(greetMe("Yasin"));

// IIFE (Immediately Invoke Function Expression)
// Run or execute the function right after creating it. No function invoking is required.
(function(name){
    console.log("Hola ", name);
})("Yasin");

// Call Stack 

// Recurtion
function factorial(N){
    if(N===0) return 1;
    return N * factorial(N-1);
}
console.log(factorial(8));