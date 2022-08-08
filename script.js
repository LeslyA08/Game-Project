let words = ["education", "voter", "principle", "defendant", "elapse", "incentive"];


let letterBtn = document.querySelectorAll(".letterBtn")
let displayedWord = document.querySelector(".wordDisplay");
let newWord = document.querySelector(".newWord");
let randomWord =words[Math.floor(Math.random() * words.length)]
let finalWord = randomWord.replace(/[a-z]/gi, '-');
let letter = "A-Z"
let lettersDiv = document.querySelector(".lettersDiv");
let revealWord = document.querySelector(".revealWord")

newWord.addEventListener('click', () =>{
    displayedWord.textContent = finalWord;
 });

revealWord.addEventListener('click', () =>{
    displayedWord.textContent = randomWord;
})

letterBtn.forEach((letter) => {
    letter.addEventListener('click', () =>{
        let charArray = randomWord.split("");
        let dashes = finalWord;
        if (charArray.includes((letter.textContent).toLowerCase())) {
            charArray.forEach((char, index) => {
                if (char == letter.textContent.toLowerCase()){
                    const dashArr = dashes.split("");
                    dashArr[index] = char;
                    let newString = dashArr.join("");
                    displayedWord.textContent = newString;
                }
            })
        }
    })
})
