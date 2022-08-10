let words = ["education",  "principle", "defendant",  "incentive", "jackscrew", "maximizer", "kickboxer", "bamboozle", "checkmark", "lockboxes",
];


let letterBtn = document.querySelectorAll(".letterBtn")
let button = document.querySelectorAll("button")
let displayedWord = document.querySelector(".wordDisplay");
let newWord = document.querySelector(".newWord");
let randomWord =words[Math.floor(Math.random() * words.length)];
// let wordsArr = words[randomWord]
let finalWord = randomWord.replace(/[a-z]/gi, '-');
let letter = "A-Z";
let lettersDiv = document.querySelector(".lettersDiv");
let revealWord = document.querySelector(".revealWord");
let hearts = document.querySelector("p");
let restart = document.querySelector(".restartButton")

newWord.addEventListener('click', () =>{
    finalWord = randomWord.replace(/[a-z]/gi, '-');
    displayedWord.textContent = finalWord;
    randomWord =words[Math.floor(Math.random() * words.length)];
   /* wordsArr = words[randomWord];
    words.splice(randomWord, 1) */
 });

revealWord.addEventListener('click', () =>{
    displayedWord.textContent = randomWord;
})

restart.addEventListener('click', () =>{
   window.location.reload();
})


letterBtn.forEach((letter) => {
    letter.addEventListener('click', () =>{
        letter.disabled = true;
        let charArray = randomWord.split("");
        if (charArray.includes((letter.textContent).toLowerCase())) {
            charArray.forEach((char, index) => {
                if (char === letter.textContent.toLowerCase()){
                    let dashArr = displayedWord.textContent.split("");
                    dashArr[index] = char;
                    let newString = dashArr.join("");
                    displayedWord.textContent = newString;
                    if (randomWord === displayedWord.textContent.toLowerCase()) {
                        hearts.textContent = "You Win"
                         }
                }
            })
        
        } else {
            let heartArr = hearts.textContent
            hearts.textContent = heartArr.slice(0, -1);
            if (heartArr.length == 1) {
           hearts.textContent = "You Lose"
            }
        }
    })
})