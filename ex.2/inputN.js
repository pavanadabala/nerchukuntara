var countInput = document.getElementById("countInput");
var resultDiv = document.getElementById("result");

document.getElementById("countButton").addEventListener("click", function () {
    var n = parseInt(countInput.value);

    if (isNaN(n) || n < 1) {
        resultDiv.textContent = "Please enter a valid positive interger. ";
    } else {
        var numbers = [];
        for (var i = 1; i <= n; i++) {
            numbers.push(i);
        }
        resultDiv.textContent = "Numbers from 1 to " + n + ":" + numbers.join(', ');
    }
})