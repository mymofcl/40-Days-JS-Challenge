console.log("Reverse digit using while loop");

let N =9876;
let numString = N.toString();
let reversString ="";
let revNum;
let strLen = numString.length;
while(strLen>=0){
    reversString = reversString.concat(numString.charAt(strLen-1));
    strLen--;
}

revNum = parseFloat(reversString)

console.log(revNum);