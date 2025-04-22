console.log("Iside Global Execution Context");
var x = 5;
function testMe() {
    var y = 10;
    console.log("Inside testMe Execution Context");
    var user = {
        name: "Yasin",
        country: "Bangladesh",
        age: 25
    };
    function testAgain() {
        console.log("Inside testAgain Execution Context");
        console.log("Exiting testAgain Execution COntext");
    }
    testAgain();
    console.log("Exiting testMe Execution Context");
}
testMe();