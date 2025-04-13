// console.log();
console.log("Find the Triangle");

let s1 = 24;
let s2 = 23;
let s3 = 30;

if(s1+s2>s3 && s2+s3>s1 && s1+s3>s2 ){
    if(s1 === s2 && s2=== s3 && s1 === s3){
        console.log("The Triangle as Equilateral Triangle");
    }else if(s1 === s2 || s2=== s3 || s1 === s3){
        console.log("The Triangle as Isosceles Triangle");
    }else{
        console.log("The Triangle as Scalene Triangle");
    }
}else{
    console.log("The sides ratio of the triangle is invalid");
}