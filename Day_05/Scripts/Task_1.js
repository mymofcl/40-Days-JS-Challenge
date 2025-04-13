/*
*
**
***
****
*/
let pattern1 ="" ;
for(let i = 1; i<=5;i++){
    for(let j = 1; j<=i;j++){
        // console.log("* ");
        pattern1=pattern1.concat("* ");
    }
    pattern1=pattern1.concat("\n");
}
console.log(pattern1);