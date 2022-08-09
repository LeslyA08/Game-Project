let words = ["education",  "principle", "defendant",  "incentive"];


let letterBtn = document.querySelectorAll(".letterBtn")
let displayedWord = document.querySelector(".wordDisplay");
let newWord = document.querySelector(".newWord");
let randomWord =words[Math.floor(Math.random() * words.length)]
let finalWord = randomWord.replace(/[a-z]/gi, '-');
let letter = "A-Z"
let lettersDiv = document.querySelector(".lettersDiv");
let revealWord = document.querySelector(".revealWord")

newWord.addEventListener('click', () =>{
    finalWord = randomWord.replace(/[a-z]/gi, '-');
    displayedWord.textContent = finalWord;
    randomWord =words[Math.floor(Math.random() * words.length)];
 });

revealWord.addEventListener('click', () =>{
    displayedWord.textContent = randomWord;
})

letterBtn.forEach((letter) => {
    letter.addEventListener('click', () =>{
        letter.disabled = true;
        let charArray = randomWord.split("");
        if (charArray.includes((letter.textContent).toLowerCase())) {
            charArray.forEach((char, index) => {
                if (char == letter.textContent.toLowerCase()){
                    const dashArr = displayedWord.textContent.split("");
                    dashArr[index] = char;
                    let newString = dashArr.join("");
                    displayedWord.textContent = newString;
                }
               // if (char != letter.textContent.toLowerCase()) {

                //}
            })
        }
    })
})
