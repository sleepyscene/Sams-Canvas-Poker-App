/**
 * This file defines a group of hands.
 * @param {Array} cards An array of card objects.
 */
function CardCollection(inCards){

	// Testing valid input.
	if(
		// If the cards or not an array
		!(inCards instanceof Array)
		|| (
				// If there are some elements in the array
				inCards.length != 0 

				// And the first element is not an instance of a card
				&& !(inCards[0] instanceof Card)
			)
	){
		throw 'Cards added to card collection are invalid.';
	}

	// Add the cards from the constructure to this object.
	this.cards = inCards;

	// Sort the cards that come in.
	this.cards.sort(CardCollection.prototype.compareCards);
}


/**
 * Decide if one card is lower or higher than another card in terms of poker
 * orders.
 * @param {Card} firstCard The first card.
 * @param {Card} secondCard The second card.
 */
CardCollection.prototype.compareCards = function(firstCard, secondCard){

	// Aces are high
	if(firstCard.number == 1)
		return 1;

	// Equal cards maintain a stable array.
	if(firstCard.number == secondCard.number)
		return 0;

	return firstCard.number < secondCard.number
		? -1
		: 1;
}

/**
 * Add a card to our card collection
 * @param {Card} card The card we are adding to our card collection.
 */
CardCollection.prototype.addCard = function(card){

	if(!(card instanceof Card))
		throw 'Card added to card collection is invalid.';

	// Add a new card to our array.
	this.cards.push(card);

	// Keep the cards in sorted order.
	this.cards.sort(CardCollection.prototype.compareCards);
}