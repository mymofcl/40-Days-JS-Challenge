console.log("Day 03");

// Operators & Expressions

// Operator - Symbols + - * /
// Operands - x+y, x and y are operands
// Expression - x = 5 / 3 + 4

//  Arrithmatic Operator
/*
let x = 25;
let y = 5;
console.log(x+y);//Addition
console.log(x-y);//Subtraction
console.log(x*y);//Multiplication
console.log(x/y);//Division
console.log(x**y);//Exponent
console.log(x%y);//Remaining / Modulus 
let count = 3;
console.log(count++);//Post-increment
console.log(++count);//Pre-increment
console.log(count--);//Post-decrement
console.log(--count);//Pre-decrement
*/

// Assignment Operator
/*
let abc = 5;
console.log(abc);
abc+=5;
console.log(abc);
abc-=3;
console.log(abc);
abc*=4;
console.log(abc);
abc/=7;
console.log(abc);
*/

// Comparison Operator
/*
console.log(4 == 5);
console.log(4 == "4");
console.log(4 === "4");
console.log(null == null);
console.log(undefined == undefined);
console.log(NaN == NaN);
// Also included >,>=,<,<=
let x = {'Name': 'Yasin'}
let y = {'Name': 'Yasin'}
console.log(x == y);
console.log(x !== y);
*/

// Relational Operator

// Logical Operator
/*
// && , ||, ??, !, {Only true or false}
// a && b, if  a is false, then it will return a, otherwise b. if any aperands is false, then the output will be false. if and only if both operands are true, the output eill be true.
console.log(false && false);//false
console.log(false && true);//false
console.log(true && false);//false
console.log(true && true);//true

console.log("Duck" && "Hen");//Hel

// a || b, if a is true or any positive value, then it will return a, otherwise b. if any operand is true, then the output will be true. if and only if both operands are false, the output will be false.
console.log(false || false);//false
console.log(false || true);//true
console.log(true || false);//true
console.log(true || true);//true

console.log("Duck" || "Hen");//Duck

// Nullish Qualishing Operator, ??
// a ?? b, if a is null or undefined, then it will return b, if a have any kind of value, it will return a.
console.log(null ?? 1);
console.log(undefined ?? 3);
console.log("Yasin" ?? "Mollah");
*/

// Bitwise Operator
/*
// 32 bits in binary 
// &(AND), |(OR), ^(XOR), ~(NOT), <<(Left SHift), >>(Right SHift)
console.log(15 & 14); //Bitwise AND
console.log(15 | 4); // Bitwise OR
console.log(15 ^ 9);
console.log(~11);
console.log(15<<2);
console.log(15>>2);
*/
// Conditional Operator
/*
// condition ? Value1 : Value2
let age = 29;
console.log(age>=60?"Senoor Citizen": age <30? "Baccha Shishu": "Young Adult");
*/

// Grouping
/*
let a = 2;
let b = 3;
let c = 4;
console.log(a + b * c);
console.log(a + (b*c));
console.log((a+b)*c);
*/

// typeof Operator
// This operator will return string as the result of the type of the given data
let x = typeof "Yasin";
console.log(x);

// instanceof Operator
