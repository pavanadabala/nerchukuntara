function displayGreeting() {
    alert("Hello! Tiger returns.");
}
console.log("External script: This message will be logged second.");
var undeclaredVariable = "i fixed the error ! :)";
console.log(undeclaredVariable);
document.getElementById("greetButton").addEventListener("click", displayGreeting);