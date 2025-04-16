// console.log();
function convertUpperCase(str){
    let upper = "";
    for(let i = 0; i< str.length ; i++){
        if(i === 0) {
            upper = upper.concat(str.charAt(i).toUpperCase());
        }else if(str.charAt(i) === " "){
            upper = upper.concat(str.charAt(i));
            i++;
            upper = upper.concat(str.charAt(i).toUpperCase());
        }else{
            upper = upper.concat(str.charAt(i));
        }
    }
    // str.toUpperCase();
    return upper;
}

let string = "an eliphant is a very large animal in the world";
console.log(convertUpperCase(string));