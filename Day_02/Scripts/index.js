console.log("Day 02");

// Variable: variables are used to store data in javascripts
// Var : Function Scoped. can be redeclared (Not Recommended)
var address = "Khulna";
console.log(address);

var address = "Dhaka";
console.log(address);

// let : Block Scoped. can be reassigned. 
let homeAddress = "Khulna";
console.log(homeAddress);

homeAddress = "Florida";
console.log(homeAddress);

// const : Block scoped. CAN'T be reassigned
const Pi = 3.14159;
console.log(Pi);
// Pi = 4;
// console.log(Pi);

/*
DATA TYPES:
    
    *Primitive Data Types:* **
        -`String` Text values ("Hello"`)
        -`Number' Numeric values (`25`, `3.14`)
        -`Boolean` True/False (`true`, `false`)
        -`Undefined` A variable declared but not assigned (`let x;`) 
        -'Null` Represents "nothing" (let y = null;`)
        -`BigInt` Large numbers (`BigInt (12345678901234567890)`) 
        -`Symbol` Unique identifiers (Symbol ("id")) 

    **Non-Primitive (Reference) Data Types:**
        -`Object` Collection of key-value pairs
        -`Array` Ordered list of values
        -`Function` Code that can be executed
*/

let student = {
    name: "Yasin",
    id: "MSc-240207",
    isEnroled: true
}
console.log(student);