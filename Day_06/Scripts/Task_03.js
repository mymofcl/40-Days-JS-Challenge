// console.log();

function isPalindrome(str){
    let revString = "";
    for(let i = str.length-1; i >=0 ; i--){
        revString = revString.concat(str.charAt(i));
    }

    return ((str === revString) ? " is a Palindrome" : " is not a palindeom");
}

let string = "Yasin";
console.log(string, isPalindrome(string));