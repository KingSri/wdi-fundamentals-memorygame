
/*
console.log("Up and running!");

let cardOne = "queen";
let cardTwo = "king";
let cardThree = "queen";
let cardFour = "king";


console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
*/
const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];


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
	console.log("User flipped " +cards[cardId].rank);
	console.log("User flipped " +cards[cardId].cardImage);
	console.log("User flipped " +cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
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

