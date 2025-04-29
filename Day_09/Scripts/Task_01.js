// Temporal Dead Zone
function tdz(){ //TDZ of fname, address & email starts here
    console.log("Hello, My Name is",fname);
    console.log("My Address is ", address);
    var address = "277, Deara, Jugihati, Rupsha, Khulna"; // TDZ of addess ends here
    var email;
    console.log("My Email is",email);

    var fname = "Yasin"; // TDZ of fname ends here
    
    email = "mdyasinmollahofficial@gmail.com"; // TDZ of email ends here

    console.log("Hello, My Name is",fname);
    console.log("My Address is ", address);
    console.log("My Email is",email);
}
tdz();