let words = ["education", "voter", "principle", "defendant", "elapse", "incentive"];


let displayedWord = document.querySelector("p");
let newWord = document.querySelector(".newWord");

newWord.addEventListener('click', () =>{
   displayedWord.textContent = words[Math.floor(Math.random() * words.length)];
});