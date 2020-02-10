
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

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
}
else{
	alert("Sorry, try again");
}

}

function flipcard(cardId) {
	console.log("User flipped " +cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();

}
flipcard(0);
flipcard(2);
/*
// Function to check if length of array was two
if (cardsInPlay.length === 2) {
	console.log("yep.");
}
*/

