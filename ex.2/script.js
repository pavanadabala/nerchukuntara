var helloButton = document.getElementById("HelloButton");
var addNumberForm = document.getElementById("addNumbersForm")
var resultDiv = document.getElementById("result")

document.getElementById("calculateButton").addEventListener("click", function () {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = "Please enter valid number";
    } else {
        var sum = num1 + num2;
        resultDiv.textContent = `The Sum of ${num1} and ${num2} is: ${sum}`;
    }
})

helloButton.addEventListener("click", function () {
    alert(" Hii frndsss");
})