let arrNumRandom;
const bella = "ciao"

function generateNumber (numeroGenerato) {
    
}
for(let i = 1; i <= 5; i++) {
    arrNumRandom = getRandomInteger(0, 100);
    arrNumRandom[i];
   
    // const arrNumDobble = [arrNumRandom];
    // if (arrNumRandom !== arrNumDobble[arrNumRandom]) {
    //     //arrNumRandom.push(arrNumDobble);
    //     console.log(bella)
    // } else {
    //     console.log("none")
    // }
}




console.log(arrNumDobble);



















function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) - min);
}