# Introduction
- During the course so far, we have developed a number of graphics applications using P5js. For this assignment you are tasked with developing a snooker app. You have to draw the snooker table with pockets, lines etc., add the balls and the cue. A standard full-size snooker table measures 12 ft × 6 ft. Here you choose the size of table in pixels, but you should maintain the ratio i.e., table width = table length / 2.
- The ball size is approximately 2 inches in diameter so you could use the formula below
ball diameter = table width / 36.
- The pocket size should be 1.5 times the size of the ball’s diameter. The cue ball is only inserted in the “D” zone. Use the Snooker wiki (https://en.wikipedia.org/wiki/Snooker) for more detailed information so you can complete the table as seen below.

# Gaming aspects
- 1. When the cue ball is in the pocket it should be given back to the player (run step 6 again). A potted cue ball can only be placed back inside the "D" zone
- 2. If a coloured ball is potted, it should be re-spotted on its designated spot on the table
- 3. If two consecutive coloured balls fall in the pocket then notify the user of this mistake

# Commentary
- Explain the app design: e.g. why you used a mouse-based only cue function - how does it work? The report quality (i.e. language) will also be assessed. Also discuss your extension and why it is a unique idea. Be precise and deliver the information within 500 words. Include this in your main .js file.