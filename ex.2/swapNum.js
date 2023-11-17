var num1Input = document.getElementById("num1Input");
var num2Input = document.getElementById("num2Input");
var num1Result = document.getElementById("num1Result");
var num2Result = document.getElementById("num2Result");


document.getElementById("swapBsutton").addEventListener("click", function () {
    var temp = num1Input.value;
    num1Input.value = num2Input.value;
    num2Input.value = temp;

    num1Result.textContent = num1Input.value;
    num2Result.textContent = num2Input.value;
})
