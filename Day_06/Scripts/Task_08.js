// console.log();
function greet(name, callback){

    callback(name);
}

greet("MOIMO",function(str){
    console.log("Hello ",str);
})