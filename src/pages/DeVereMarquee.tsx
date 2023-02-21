import React, { useState, useEffect } from 'react'
import Marquee from "react-fast-marquee";

const marqueeText = `
The labouring man that tills the fertile soil
And reaps the harvest fruit hath not indeed
The gain, but pain, and if for all his toil
He gets the straw, the Lord will have the seed.

The Manchet fine falls not unto his share,
On coarsest cheat his hungry stomach feeds.
The Landlord doth possess the finest fare;
He pulls the flowers, the other plucks but weeds.

The mason poor, that builds the Lordly halls,
Dwells not in them, they are for high degree;
His Cottage is compact in paper walls,
And not with brick or stone as others be.

The idle Drone that labours not at all
Sucks up the sweet of honey from the Bee.
Who worketh most, to their share least doth fall;
With due desert reward will never be.

The swiftest Hare unto the Mastiff slow
Oft times doth fall to him as for a prey;
The Greyhound thereby doth miss his game we know
For which he made such speedy haste away.

So he that takes the pain to pen the book
Reaps not the gifts of goodly golden Muse,
But those gain that who on the work shall look,
And from the sour the sweet by skill doth choose.

For he that beats the bush the bird not gets,
But who sits still, and holdeth fast the nets.

Even as the wax doth melt, or dew consume away
Before the Sun, so I behold, through careful thoughts decay,
For my best luck leads me to such sinister state
That I do waste with others’ love, that hath myself in hate,
And he that beats the bush, the wished bird not gets,
But such I see as sitteth still, and holds the fowling nets.

The Drone more honey sucks, that laboureth not at all,
Than doth the Bee, to whose most pain least pleasure doth befall;
The Gardener sows the seeds whereof the flowers do grow,
And others yet do gather them that took less pain, I know;
So I the pleasant grape have pulled from the Vine,
And yet I languish in great thirst while others drink the wine.

Thus like a woeful wight I wove my web of woe;
The more I would weed out my cares, the more they seem to grow.
The which betokeneth hope, forsaken is of me,
That with the careful culver climbs the worn and withered tree
To entertain my thoughts, and there my hap to moan,
That never am less idle, lo, than when I am alone.

Framed in the front of forlorn hope, past all recovery,
I stayless stand t’abide the shock of shame and infamy.
My life, through lingering long, is lodged in lair of loathsome ways,
My death delayed to keep from life the harm of hapless days.
My sprites, my heart, my wit and force in deep distress are drowned;
The only loss of my good name is of these griefs the ground.

And since my mind, my wit, my head, my voice and tongue are weak
To utter, move, devise, conceive, sound forth, declare and speak
Such piercing plaints as answer might, or would, my woeful case,
Help crave I must, and crave I will, with tears upon my face
Of all that may in heaven or hell, in earth or air, be found
To wail with me this loss of mine, as of these griefs the ground.

Help gods, help saints, help sprites and powers that in the heaven do dwell,
Help ye that are to wail, ay wont, ye howling hounds of hell,
Help man, help beasts, help birds and worms that on the earth doth toil,
Help fish, help fowl that flocks and feeds upon the salt sea soil,
Help echo that in air doth flee, shrill voices to resound
To wail this loss of my good name, as of these griefs the ground.`

// Have text scrolling across the screen in a marquee
export const DeVereMarquee = () => {
	return (
		<div className="marquee"> 
			<Marquee gradient={false}>
				{marqueeText}
			</Marquee>
		</div>
	)
}