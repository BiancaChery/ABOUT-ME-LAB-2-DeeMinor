alert("Hello All")
prompt("Hey! What's your name?")

// TODO: Ask the user's name.

// TODO: Ask 5 y/n questions.
let answerOne = prompt("Do I have a car?") .toLowerCase()
let answerTwo = prompt("Do I live with my family?") .toLowerCase ()
let answerThree = prompt("Was I born in California?") .toLowerCase ()
let answerFour = prompt("Am I disabled?") . toLowerCase ()
let answerFive = prompt("Is my favorite color orange?") .toLowerCase ()

if(answerOne === 'y' || answerOne ==='yes'){
 // console.log ("You got it!");
 alert("Nope! Wrong answer!")
} else {
   // if 'n' then you're incorrect
   console.log("Nope! Wrong answer!");
}

if(answerOne === 'y' || answerTwo === 'yes'){
  // console.log ("You got it!")
  alert("Nope!")
} else {
   // if 'n' then you're incorrect
   console.log("Nope!");
}

if(answerOne === 'n' || answerThree === 'no'){
 // console.log ("You got it!")
alert ("Nope! Never been to California!")
} else {
   // if 'y' then you're incorrect
   console.log("Nope! Never been to California!");
}

if(answerOne === 'y' || answerFour === 'yes'){
  // console.log ("You got it!")
  alert("Recovering from a spinal tumor!")
} else {
   // if 'n' then you're incorrect
   console.log("Recovering from a spinal tumor!");
}

if(answerOne === 'n' || answerFive === 'no'){
 // console.log ("You got it!")
alert("Orange, really?")
} else {
   // if 'y' then you're incorrect
   console.log("Orange, really?")
}