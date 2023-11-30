var numberInput = document.getElementById("numberInput");
var tableResult = document.getElementById("tableResult");

document.getElementById("generateTableButton").addEventListener("click", function () {
    var number = parseInt(numberInput.value);

    if (isNaN(number)) {
        tableResult.textContent = "Please enter a valid number.";
    } else {
        var tableHtml = "<h2>Multiplication table for " + number + "<h2><ul>";
        for (i = 1; i <= 10; i++) {
            var result = number * i;
            tableHtml += "<li>" + number + " x " + i + "=" + result + "</li>";
        }

        tableHtml += "</ul>";
        tableResult.innerHTML = tableHtml;
    }
});