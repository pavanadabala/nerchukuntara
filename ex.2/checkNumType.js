var numberInput = document.getElementById("numberInput");
var resultDiv = document.getElementById("result");


document.getElementById("checkButton").addEventListener("click", function () {
    var number = parseFloat(numberInput.value);

    if (isNaN(number)) {
        resultDiv.textContent = "Please enter a valid number.";
    } else {
        if (number > 0) {
            resultDiv.textContent = "The entered number is positive.";
        } else if (number < 0) {
            resultDiv.textContent = "The entered number is negative. ";
        }
        else {
            resultDiv.textContent = "The entered number is zero.";
        }
    }

})