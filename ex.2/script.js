var helloButton = document.getElementById("HelloButton");
var findLargestForm = document.getElementById("findLargestForm")
var resultDiv = document.getElementById("result")

document.getElementById("checkLargeNum").addEventListener("click", function () {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);


    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        resultDiv.textContent = "Please enter valid number";
    } else {
        var largest = Math.max(num1, num2, num3);
        resultDiv.textContent = "Largest Number:" + largest;
    }
})

helloButton.addEventListener("click", function () {
    alert(" Hii frndsss");
})