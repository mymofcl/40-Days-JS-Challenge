// Variable Hoisting with var
console.log("Hello Mr. ",fName);
var fName;
fName = "Yasin";
console.log("Hello Mr. ",fName);

// Variable Hoisting with let & const
/*
console.log("Hello Mr. ",sName,"",tName);
let sName= "Yasin";
const tName= "Yasin";
// sName = "Yasin";
console.log("Hello Mr. ",tName);
*/

// Temporal Dead Zone(TDZ)
// TDZ = an area where you can not access a variable until it is initialized