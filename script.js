confirm("Are you ready? If so, click ok.");

let userInput = prompt("Type 'paper' or 'rock' or 'scissor'");
console.log(userInput);
userInput = userInput.toLowerCase();
console.log(userInput);

function interactiveGame(userInput) {

    let gotIt = false;
    while (!gotIt) {

        if (userInput == "paper") {
            alert("im scissor")
            document.write("Your paper got cut by my scissor.");
            gotIt = true
        } else if (userInput == "rock") {
            alert("im paper")
            document.write("Your rock got wrapped with my paper.");
            gotIt = true
        } else if (userInput == "scissor") {
            alert("im rock")
            document.write("Your scissor broke trying to cut my rock.");
            gotIt = true
        } else {
            userInput = prompt("Type 'paper' or 'rock' or 'scissor'")
        
        }

    }
}
interactiveGame(userInput)



//vvvvvvvvvvvvvvvvvvv ( lab08 ) vvvvvvvvvvvvvvvvvv

let userPick = prompt("Pick a number between 1 and 5 (images to show)");
console.log(userPick);
userPick = parseInt(userPick)
for (let i = 0; i < userPick; i += 1){
    document.write('<img src="thumb wrestling sml.png"/>')
}

// function pickNumber(userPick){

//     let gotIt = false;
//     while (!gotIt) {

//         if (userPick == '1') {
//             document.write (img src= "thumb wrestling.png")
//             document.write (img src="thumb wrestling.png");
//             gotIt = true
//         } else if (userInput == '2') {
//             alert("im paper");
//             gotIt = true
//         } else if (userInput == "scissor") {
//             alert("im rock");
//             gotIt = true
//         } else {
//             userInput = prompt("Type 'paper' or 'rock' or 'scissor'")     
//         }
//     }
// }
// pickNumber(userPick)

//^^^^^^^^^^^^^^^^^^ ( lab08 ) ^^^^^^^^^^^^^^^^^^^^^