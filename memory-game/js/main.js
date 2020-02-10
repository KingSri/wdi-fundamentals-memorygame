
/*
console.log("Up and running!");

let cardOne = "queen";
let cardTwo = "king";
let cardThree = "queen";
let cardFour = "king";


console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
*/
const cards = ["queen", "queen","king","king"];
const cardsInPlay = [];

let cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	console.log("yep.");
}
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
}
else{
	alert("Sorry, try again");
}


