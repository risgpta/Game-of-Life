Simulating Game of Life

Read: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life

RULES OF GAME OF LIFE:

    Any live cell with fewer than two live neighbours dies, as if by underpopulation.
    Any live cell with two or three live neighbours lives on to the next generation.
    Any live cell with more than three live neighbours dies, as if by overpopulation.
    Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

(DESKTOP VERSION ONLY)
Simulation:

Manual:-
Click on the cell to give it life or take back life. (Toggle clicks make cell alive or dead)

Click on "Next generation!" to manully move to further generations.

Recommended: Make manual patterns to find out how the population goes...

Either all population becomes dead later or oscillates(or forms a cycle of pattern) or remains still or moves in a particular direction(indefinitely)

Random:-
Click on "Generate random Population" to generate random pattern of population on grid. (Usually a lot of isolated cells die in the very next generation)

Click on "Loop over next generation" to continuosly generate new generations.


Click on "Remove all population" to clear the board. 

LINK of Simulation: https://risgpta.github.io/Game-of-Life/

-Ideally, the board should be an infinite board

CODE:

Implemented using React JS(use of Hooks)

To run code-

npm install

npm start

Enjoy! :)
