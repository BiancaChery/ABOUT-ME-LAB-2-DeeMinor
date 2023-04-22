'use strict'

let correctAnswer;
correctAnswer = "peach"
let attempts=0

while (true) {
  let favFruit = prompt("what is my favorite fruit?").toLowerCase();
  
  if (favFruit === correctAnswer) {
    console.log("correct")
    break;
  }
 else { 
  console.log ("try again");
  attempts=attempts + 1
 }
 alert(`you guessed ${attempts}`);
}

