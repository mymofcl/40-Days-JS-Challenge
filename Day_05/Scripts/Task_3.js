console.log("Summation of all add numbers between 1 to 500");

let sumOfOdd = 0;
for(let i = 1; i<500; i++){
    if(i%2!==0) sumOfOdd+=i;
}

console.log(sumOfOdd);