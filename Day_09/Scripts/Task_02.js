// Variable Hoisting
console.log("My Roll is", roll);
var roll = "MSc-240207";
console.log("My Roll is",roll);

// Functional Hoisting
unit("Md. Yasin Mollah");

function unit(fname){
    console.log("Hello");
    person(fname);
}
function person(fname){
    console.log(fname)
}

// Functional Hoisting as a referance value of variable
callHim("Hey Champ!!");

var callHim = function(callThePerson){
    console.log(callThePerson);
}