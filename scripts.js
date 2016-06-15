document.addEventListener('DOMContentLoaded',function() {
document.getElementById("add").addEventListener('click', add);
function add(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
 
    davidsLib.add(num1, num2, function(err, result){
   	    if (err) {
            console.log ("is this thing on?");
            alert ("An error has occurred. Try again.");
        }else{
            alert("The sum is " + result);
        }
    })
}

document.getElementById("subtract").addEventListener('click', subtract);
function subtract(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    
    davidsLib.subtract(num1, num2, function(err, result) {
        if (err) {
            alert ("An error has occurred. Try again.");
        } else {
            alert("The difference is " + result);
        }
    })
}

document.getElementById("multiply").addEventListener('click', multiply);
function multiply() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    davidsLib.multiply(num1, num2, function(err, result) {
        if (err) {
            alert ("An error has occurred. Try again.");
        } else {
            alert("The quotient is " + result);
        }
    })
}

document.getElementById("divide").addEventListener('click', divide);
function divide() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    davidsLib.divide(num1, num2, function(err, result) {
        if (err) {
            alert("An error has occurred. Try again.");
        } else {
            alert("The dividend is " + result);
        }
    })

}
});