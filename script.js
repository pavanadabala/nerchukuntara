function displayGreeting() {
    alert("Hello! Tiger returns.");
}
var undeclaredVariable = "i fixed the error ! :)";
console.log(undeclaredVariable);
document.getElementById("greetButton").addEventListener("click", displayGreeting);