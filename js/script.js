let numRandom;
const arrNumeriRandom = [];
let screenNumber = document.querySelector(".screen-number");
const timeRecording = setTimeout(generateNumber, 5000);
screenNumber.innerHTML = arrNumeriRandom;




for(let i = 0; i < 5; i++) {
numRandom = getRandomInteger(0, 100);

arrNumeriRandom.includes(numRandom);
if (!arrNumeriRandom.includes(numRandom)) {
    arrNumeriRandom.push(numRandom);
}
}

function generateNumber () {
    return arrNumeriRandom;
}
console.log(arrNumeriRandom);
console.log(numRandom);


function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}

//const memoryNumber = parseInt(prompt("che numeri ricordi?"));