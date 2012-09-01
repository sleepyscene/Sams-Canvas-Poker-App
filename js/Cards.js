/**
 * An object that represents a Card.
 * @param {Suit} inSuit The suit of the new card.
 * @param {Integer} inNumber The number of our new card.
 */
function Card(inNumber, inSuit){

	this.suit = inSuit;
	this.number = inNumber;

}


/**
 * Check if one card is equal to another.
 * @param  {Card} compareCard The card we are comparing.
 * @return {Boolean} A flag representing if the two cards are equal.
 */
Card.prototype.equals = function(compareCard) {

	return
		this.suit == compareCard.suit
		&& this.number = compareCard.number;
};


/**
 * Turn a card into a human readable expression.
 * @return {String} Human readable card.
 */
Card.prototype.toString = function(){

	var cardNumber, cardSuit;

	switch(this.number){
		case 1:
			cardNumber = 'Ace';
			break;
		case 11:
			cardNumber = 'Jack';
			break;
		case 12:
			cardNumber = 'Queen';
			break;
		case 13:
			cardNumber = 'King';
			break;
		default:
			cardNumber = this.number;
	}

	switch(this.suit){
		case Suits.diamonds:
			cardSuit = 'Diamonds';
			break;
		case Suits.hearts:
			cardSuit = 'Hearts';
			break;
		case Suits.spades:
			cardSuit = 'Spades';
			break;
		case Suits.clubs:
			cardSuit = 'Clubs';
			break;
	}

	return cardNumber + ' of ' + cardSuit;

}