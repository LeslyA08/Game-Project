const words = ["education", "voter", "principle", "defendant", "elapse", "incentive"];
const chosenWord = words[Math.floor(Math.random()*words.length)];

let displayedWord = document.querySelector("p");
displayedWord.innerHTML = chosenWord;