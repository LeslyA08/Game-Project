const words = ["education", "voter", "principle", "defendant", "elapse", "incentive"];
const chosenWord = words[Math.floor(Math.random()*words.length)];
const chosenWord2 = words[Math.floor(Math.random()*words.length)];

let displayedWord = document.querySelector("p");
const newWord = document.querySelector(".newWord");

newWord.addEventListener('click', () =>{
    if (displayedWord === ""){
    displayedWord.textContent = chosenWord;
    } else {
    displayedWord.textContent = chosenWord2;
    }
});
