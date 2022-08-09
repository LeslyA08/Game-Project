Hangman
rules: 
    6 lives
    choose 1 letter
    if right: display on screen
    if wrong: lose life

Steps:
    Make file/array with word list -
    display letter buttons -
    connect word list to our javascript to pull from -
    display word, but hidden
    display amount of lives left -
    new word button -
    see answer button -
once all that is displayed:
    tie letters to the word
    when letter button is pressed, display correct letter
    when wrong letter button is pressed, hide one 'life'
    You lose screen
    you win screen
    add event listener to buttons
    can't press the letter button if it's already been pressed
    switch out hearts to actual hang man
    draw 7 seperate images and change them each time
    -can do this after implementing hearts first

    things left:

    -randomize word after every click ==
    -You won 
    -minus a heart whenever you click the wrong letter
    -lock the letter buttons after every click--
    -you lose sign once you reach 0 lives (of 6)