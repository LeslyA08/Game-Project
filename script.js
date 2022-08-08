let words = ["education", "voter", "principle", "defendant", "elapse", "incentive"];


let letterBtn = document.querySelectorAll(".letterBtn")
let displayedWord = document.querySelector(".wordDisplay");
let newWord = document.querySelector(".newWord");
let randomWord =words[Math.floor(Math.random() * words.length)]
let finalWord = words[Math.floor(Math.random() * words.length)].replace(/[a-z]/gi, '-');
let letter = "A-Z"
let lettersDiv = document.querySelector(".lettersDiv")
const wordDisplay = document.querySelector(".wordDisplay")

newWord.addEventListener('click', () =>{
    displayedWord.textContent = words[Math.floor(Math.random() * words.length)].replace(/[a-z]/gi, '-');
 });



letterBtn.forEach((letter) => {
    letter.addEventListener('click', () =>{
        // console.log("click");
        let charArray = randomWord.split("");
        let dashes = finalWord
        // console.log("what is charArray: " + charArray)
        if (charArray.includes((letter.textContent).toLowerCase())) {
            // console.log("entered loop")
            charArray.forEach((char, index) => {
                if (char == letter.textContent.toLowerCase()){
                   // console.log("checking letters: " + char + " index: " + index)
                    const dashArr = dashes.split("");
                    dashArr[index] = char;
                    let newString = dashArr.join("");
                    wordDisplay.textContent = newString;
                }
            })
        }
    })
})

 //console.log(randomWord)

