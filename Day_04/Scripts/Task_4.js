// console.log();
console.log("Movie Ticket Price");

let age = 25;

if(age < 18 && age >= 0){
    console.log("The Ticket Price is $3");
}else if(age >= 18 && age < 60){
    console.log("The Ticket Price is $10");
}else if(age >= 60){
    console.log("The Ticket Price is $8");
}else{
    console.log("Invalid Age input");
}