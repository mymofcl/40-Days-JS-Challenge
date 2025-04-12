// console.log();
console.log("Day 04 of Javascript Learning");

// Control Flow
//if-else
/*
let condition = false;

if (condition){
    console.log("I'll meet the goal");
}else{
    console.log("I can't meet the goal");
}

let age =10;
if (age >= 18){
    console.log("You are eligible for voting");
}else{
    console.log("You are not eligible to vote");
}
*/

// Multiple If-else
// example: Grading System
/*
let marks = 85 ;
if (marks>=80 && marks <=100){
    console.log("You get A+");
}else if (marks >=71 && marks <80){
    console.log("You get A");
}else if (marks >=61 && marks <70){
    console.log("You get A-");
}else if (marks >=51 && marks <60){
    console.log("You get B");
}else if (marks >=41 && marks <50){
    console.log("You get C");
}else if (marks >=33 && marks <40){
    console.log("You get D");
}else if (marks <33 && marks>=0){
    console.log("You failed");
}else{
    console.log("Invalid Marks");
}*/

//Nested If-else
//example: Leap Year
/*
const year = 2100;

if(year%4==0){
    if(year%100==0){
        if(year%400==0){
            console.log(year, " is a leap year");
        }
        else{
            console.log(year, " is not a leap year");
        }
    }else{
        console.log(year, " is a leap year");
    }
}else{
    console.log(year, " is not a leap year");
}*/

//Switch-case
//example: find the Month
const month = 10 ;

switch(month){
    case 1:
        console.log("The ",month,"No. month is January");
        break;
    case 2:
        console.log("The ",month,"No. month is February");
        break;
    case 3:
        console.log("The ",month,"No. month is March");
        break;
    case 4:
        console.log("The ",month,"No. month is April");
        break;
    case 5:
        console.log("The ",month,"No. month is May");
        break;
    case 6:
        console.log("The ",month,"No. month is June");
        break;
    case 7:
        console.log("The ",month,"No. month is July");
        break;
    case 8:
        console.log("The ",month,"No. month is August");
        break;
    case 9:
        console.log("The ",month,"No. month is September");
        break;
    case 10:
        console.log("The ",month,"No. month is October");
        break;
    case 11:
        console.log("The ",month,"No. month is November");
        break;
    case 12:
        console.log("The ",month,"No. month is December");
        break;
    default:
        console.log("Invalid Month Value");
}