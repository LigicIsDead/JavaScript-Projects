let input = "That moment when the"; //Input to turn into whale talk
const vowels = ["a", "e", "i", "o", "u"]; //Array for vowels
let resultArray = [];

//Makes the input whale talk

for (let i = 0; i < input.length; i++) {
  //console.log(i)
  for (let j = 0; j < vowels.length; j++) {
    //console.log(j)
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
      if (input[i] === "e" || input[i] === "u") {
        resultArray.push(input[i]);
      }
    }
  }
}

//Removes gaps in text and logs the result

let resultString = resultArray.join("").toUpperCase();

console.log(resultString);

