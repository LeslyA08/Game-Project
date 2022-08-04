let words = ["education", "voter", "principle", "defendant", "elapse", "incentive"];


let letterBtn = document.querySelectorAll(".letterBtn")
let displayedWord = document.querySelector("p");
let newWord = document.querySelector(".newWord");

newWord.addEventListener('click', () =>{
   displayedWord.textContent = words[Math.floor(Math.random() * words.length)];
});

letterBtn.forEach((letter) => {
    letter.addEventListener('click', () =>{
    displayedWord.textContent = letter.textContent;
})
 });

