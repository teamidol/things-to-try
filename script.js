confirm("Are you ready? If so, click ok.");

let userInput = prompt("Type 'paper' or 'rock' or 'scissor'");
console.log(userInput);
userInput = userInput.toLowerCase();

function interactiveGame(userInput) {

    let gotIt = false;
    while (!gotIt) {

        if (userInput == "paper") {
            alert("im scissor");
            gotIt = true
        } else if (userInput == "rock") {
            alert("im paper");
            gotIt = true
        } else if (userInput == "scissor") {
            alert("im rock");
            gotIt = true
        } else {
            userInput = prompt("Type 'paper' or 'rock' or 'scissor'")
        
        }

    }
}
interactiveGame(userInput)
