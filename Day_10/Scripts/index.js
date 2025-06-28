console.log("Day 10 out of 40 days of javascript");

// 4 types of Scope in javascript
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope
// 4. Module Scope

// Global Scope
// Variables declared outside of any function or block scope are in the global scope
var name = "Yasin";

function greetings(){
    console.log("Hello", name);
}

greetings();

console.log("Hello", name); //"Yasin"

// Function Scope
// Variables declared inside a function are only accessible within that function

function Target(){
    var tasks = "Learning 40 days of Javascript";
    console.log(tasks);
}

Target();
// console.log(tasks);

// Block Scope
// Variables declared using let and const inside {} can not be accessed outside the block
// Var is always a function scope and let & const are always a block scope

{
    var num = 10;
    console.log(num);
}
console.log(num);

//Scope Chain

let globalVariable = "Global Variable";
function outer(){
    let outerVar = "Outer Variable";
    function inner(){
        let innerVar = "Inner Variable;";
        console.log(innerVar);
        console.log(outerVar);
        console.log(globalVariable);
    }
    inner();
}
outer();


// Testing
var count = 10;
function outerFunc(){
    var count = 20;
    function innerFunc(){
        var count = 30;
        console.log(count);//30
    }
    innerFunc();
    console.log(count);//20
}
outerFunc();
console.log(count);//10