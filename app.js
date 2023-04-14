alert("Ola Todos")
prompt("Hey! What's your name?")

// TODO: Ask the user's name.

// TODO: Ask 5 y/n questions.
let answerOne = prompt("Do I have a car?");
let answerTwo = prompt("Do I live with my family?");
let answerThree = prompt("Was I born in California?") 
let answerFour = prompt("Am I disabled?")
let answerFive = prompt("Is my favorite color orange?")

if(answerOne === 'y' || answerOne ==='yes'){
  console.log ("You got it!")
} else {
   // if 'n' then you're incorrect
   console.log("Nope! Wrong answer!");
}

if(answerOne === 'y' || answerTwo === 'yes'){
  console.log ("You got it!")
} else {
   // if 'n' then you're incorrect
   console.log("Nope!");
}

if(answerOne === 'n' || answerThree === 'no'){
  console.log ("You got it!")
} else {
   // if 'y' then you're incorrect
   console.log("Nope! Never been to California!");
}

if(answerOne === 'y' || answerFour === 'yes'){
  console.log ("You got it!")
} else {
   // if 'n' then you're incorrect
   console.log("Nope! Recovering from a spinal tumor!");
}

if(answerOne === 'n' || answerFive === 'no'){
  console.log ("You got it!")
} else {
   // if 'y' then you're incorrect
   console.log("Nope! Orange, really?")
}