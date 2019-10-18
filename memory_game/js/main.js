
var cards = [
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
}];

var cardsInPlay = [];
var resetButton = document.getElementById('reset');
var userScore = 0;	
function createBoard() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', "images/back.png");
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
	function checkForMatch() {
		if (cardsInPlay.length === 2) {
			if (cardsInPlay[0] === cardsInPlay[1]) {
				userScore++
				alert("You found a match! Your score is " + userScore);

			} else {
				alert("Sorry, try again. Your score is " + userScore);
			}
		}
	}
	function flipCard() {
		var cardId = this.getAttribute('data-id');
		this.setAttribute('src', cards[cardId].cardImage);
		cardsInPlay.push(cards[cardId].rank);
		console.log('User Flipped ' + cards[cardId].rank);
  		console.log(cards[cardId].suit);
  		console.log(cards[cardId].cardImage);
		checkForMatch();	
	}
};
function reset() {
	for (var i = 0; i < cards.length; i++) {
    var cardElement = document.querySelector('img');
    cardElement.remove();
	}
	cardsInPlay.length = 0;
	userScore = 0;
	createBoard();

}

resetButton.addEventListener('click', reset);
createBoard();