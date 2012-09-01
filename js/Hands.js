/**
 * This file defines the possible hands in poker, converts cards to hands
 * and decides which hands win.
 */
var Hands = {

	highCard : { 
		value : 0,
		humanName : 'High Card'
	},
	onePair : { 
		value : 1,
		humanName : 'One Pair'
	},
	twoPair : { 
		value : 2,
		humanName : 'Two Pair'
	},
	trips : { 
		value : 3,
		humanName : 'Trips'
	},
	straight : { 
		value : 4,
		humanName : 'Straight'
	},
	flush : { 
		value : 5,
		humanName : 'Flush'
	},
	fullHouse : { 
		value : 6,
		humanName : 'Full House'
	},
	quads : { 
		value : 7,
		humanName : 'Quads'
	},
	staightFlush : { 
		value : 8,
		humanName : 'Straight Flush'
	},
	broadwayFlush : { 
		value : 9,
		humanName : ' Broadway Flush'
	}

};


/**
 * This function calculates if a group of cards matches a specific hands.
 * @param  {Array} cards An array of cards.
 * @return {Hand} A hand object that can be compared against other hands.
 */
Hands.cardsToHand = function(cards){

}


/**
 * The function calculates the winning hand from a group of hands.
 * @param  {Array} hands Some hands to compare against eachother.
 * @return {Hand} The winning hand.
 */
Hands.winningHand = function(hands){

}
