// var numberInput = document.getElementById("numberInput");
// var tableResult = document.getElementById("tableResult");

// document.getElementById("generateTableButton").addEventListener("click", function () {
//     var number = parseInt(numberInput.value);

//     if (isNaN(number)) {
//         tableResult.textContent = "Please enter a valid number.";
//     } else {
//         var tableHtml = "<h2>Multiplication table for " + number + "<h2><ul>";
//         for (i = 1; i <= 10; i++) {
//             var result = number * i;
//             tableHtml += "<li>" + number + " x " + i + "=" + result + "</li>";
//         }

//         tableHtml += "</ul>";
//         tableResult.innerHTML = tableHtml;
//     }
// });


function generateTable() {

    var number = document.getElementById("numberInput").value;

    if (isNaN(number)) {
        alert('Please Enter A Valid Number');
        return;
    }

    var table = document.createElement("table");


    var headerRow = table.insertRow(0);
    var headerCell = headerRow.insertCell(0);
    headerCell.textContent = "Multiplier";
    var resultCell = headerRow.insertCell(1);
    resultCell.textContent = "Result";

    for (i = 1; i <= 10; i++) {
        var row = table.insertRow(i);
        var multiplierCell = row.insertCell(0);
        multiplierCell.textContent = i;
        var resultCell = row.insertCell(1);
        resultCell.textContent = number * i;
    }


    var tableContainer = document.getElementById("tableContainer")
    tableContainer.innerHTML = "";
    tableContainer.appendChild(table)




}