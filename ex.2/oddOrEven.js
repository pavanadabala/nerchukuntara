var userInput = document.getElementById("userInput")
var resultDiv = document.getElementById("result")

document.getElementById("checkButton").addEventListener("click", function () {
    var number = parseFloat(userInput.value);



    if (isNaN(number)) {
        resultDiv.textContent = "Please enter valid number";
    } else {
        if (number % 2 === 0) {
            resultDiv.textContent = number + "is an even number.";
        } else {
            resultDiv.textContent = number + "is an odd number.";
        }
    }
})


