// console.log();
console.log("Calculator using switch-case");

let value1 = 11;
let value2 = 3;

let operator = "%";

switch(operator){
    case "+":
        console.log(value1," + ",value2, " = ", (value1+value2));
        break;
    case "-":
        console.log(value1," - ",value2, " = ", (value1-value2));
        break;
    case "*":
        console.log(value1," * ",value2, " = ", (value1*value2));
        break;
    case "/":
        console.log(value1," / ",value2, " = ", (value1/value2));
        break;
    case "%":
        console.log(value1," % ",value2, " = ", (value1%value2));
        break;
    default:
        console.log("Invalid Operator");    
}