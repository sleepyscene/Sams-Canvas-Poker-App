/**
 * An object that defines the poker suits.
 */
var Suits = {
	diamonds :	2,
	hearts :	3,
	spades :	4,
	clubs :		5
};


/**
 * Returns the human name for a suit.
 * @param {Suit} suit A suit.
 */
Suits.humanName = function(suit){
	switch(suit){
		case Suits.diamonds:
			return 'Diamonds';
		case Suits.hearts:
			return 'Hearts';
		case Suits.spades:
			return 'Spades';
		case Suits.clubs:
			return 'Clubs';
	}
}