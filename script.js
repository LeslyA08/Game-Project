let words = ["education", "voter", "principle", "defendant", "elapse", "incentive"];


let letterBtn = document.querySelectorAll(".letterBtn")
let displayedWord = document.querySelector(".wordDisplay");
let newWord = document.querySelector(".newWord");
let randomWord =words[Math.floor(Math.random() * words.length)]
let dashedWord = randomWord.toString();


newWord.addEventListener('click', () =>{
    displayedWord.textContent = words[Math.floor(Math.random() * words.length)].replace(/[a-z]/gi, '-');
 });

 letterBtn.forEach((letter) => {
    letter.addEventListener('click', () =>{
    displayedWord.textContent = letter.textContent;
})
 });


