// console.log();
console.log("Day 05 of Javascript Learning");
console.log("Loops and Iteration");

// For Loop
// example: print 1 - 5
/*
for(let count = 1; count<=5;count++){
    console.log(count);
}
*/
// example: Addition of even numbers between 1 to 100
/*
let sum = 0;
for(let num = 1; num<=100; num++){
    if(num%2 === 0){
        sum+=num;
    }
}
console.log(sum);
*/

// example: print each character of a string
/*
let init = "Md. Yasin Mollah";

for(let i = 0; i < init.length; i++){
    console.log(init.charAt(i));
}*/

// Nested Loop
// example: UNderstanding Rows & column
/*
for(let i = 1; i<=3; i++){
    for(let j = 1; j <=2; j++){
        console.log("Row : ",i,"Col : ",j);
    }
}*/

// Break & Continue
// Break
/*
for(let i = 1; i<=5; i++){
    if(i===3) break;
    console.log(i);
}*/
// Continue
/*
for(let i = 1; i<=5; i++){
    if(i===3) continue;
    console.log(i);
}*/

// Multiple counter in a single loop
/*
for(let i = 1, j = 10; i<=10 && j>=1; i++, j--){
    console.log("F : ",i,"  R : ",j);
}*/

// While Loop
let count = 1;
while(count<=5){
    console.log(count);
    count++;
}

// do-while Loop
let count2 =6;
do{
    console.log(count2);
    count2++;
}while(count2<=5);