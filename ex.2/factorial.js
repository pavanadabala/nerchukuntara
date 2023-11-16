var factorialInput = document.getElementById("factorialInput");
var resultDiv = document.getElementById("result");

document.getElementById("calculateButton").addEventListener("click", function () {
    var n = parseInt(factorialInput.value);
    if (isNaN(n) || n < 0) {
        resultDiv.textContent = "Please enter a valid non-negative integer.";
    } else {
        var factResult = calculateFactorial(n);
        resultDiv.textContent = `The factorial of ${n} is ${factResult}.`;
    }
});

function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * calculateFactorial(num - 1);
    }
}