/**
 * This file defines the possible hands in poker, converts cards to hands
 * and decides which hands win.
 */
var Hands = {

	highCard : { 
		value : 0,
		humanName : 'High Card',
		handMatches : function(cardCollection){

			// A hand can always make a high card.
			return TRUE;
		}
	},
	onePair : { 
		value : 1,
		humanName : 'One Pair',
		handMatches : function(cardCollection){


			
		}
	},
	twoPair : { 
		value : 2,
		humanName : 'Two Pair',
		handMatches : function(cardCollection){

			
		}
	},
	trips : { 
		value : 3,
		humanName : 'Trips',
		handMatches : function(cardCollection){

			
		}
	},
	straight : { 
		value : 4,
		humanName : 'Straight',
		handMatches : function(cardCollection){

			
		}
	},
	flush : { 
		value : 5,
		humanName : 'Flush',
		handMatches : function(cardCollection){

			
		}
	},
	fullHouse : { 
		value : 6,
		humanName : 'Full House',
		handMatches : function(cardCollection){

			
		}
	},
	quads : { 
		value : 7,
		humanName : 'Quads',
		handMatches : function(cardCollection){

			
		}
	},
	staightFlush : { 
		value : 8,
		humanName : 'Straight Flush',
		handMatches : function(cardCollection){

			
		}
	},
	broadwayFlush : { 
		value : 9,
		humanName : ' Broadway Flush',
		handMatches : function(cardCollection){

			
		}
	}
};


/**
 * The function calculates highest winning hand from a card collection.
 * @param  {CardCollection} A card collection
 * @return {Hand} The winning hand value.
 */
Hands.highestMadeHand = function(cardCollection){

}
