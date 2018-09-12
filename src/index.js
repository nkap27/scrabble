const URL_BASE = "http://localhost:3000/scrabble"

let words;

fetch('http://localhost:3000/scrabble')
.then(res => res.json())
.then(scrabble => app(scrabble))

function app(scrabble) {
  words = scrabble.words
  getWord(words)
}

function getWord(words) {
  words.forEach(word => {return word})
}

function displayWord(){

}







//returning array of words ["EAT", "POT", "CRY"]
// function getWords(scrabble) {
//   debugger
//   words = scrabble.words
// }
//
// function getEachWord(words){
//   // debugger
// }
//
// getEachWord(words)
