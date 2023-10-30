var rectangleForm = document.getElementById("rectangleForm");
var resultDiv = document.getElementById("result");

document.getElementById("calculateButton").addEventListener("click", function () {
    var length = parseFloat(document.getElementById("lengthInput").value);
    var width = parseFloat(document.getElementById("widthInput").value);

    if (isNaN(length) || isNaN(width)) {
        resultDiv.textContent = "Please sariga number ivvara p****. "
    } else {
        var area = length * width;
        resultDiv.textContent = "The area of the rectangle is: " + area + " square units.";
    }
});