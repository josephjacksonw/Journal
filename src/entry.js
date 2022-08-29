export default function Entry(title, passage) {
  this.title = title;
  this.passage = passage;
 }

Entry.prototype.wordAnalyzer = function() {
  let words = 0;
  let passArr = [];
  passArr = this.passage.split(" ");
  if (this.passage === "") {
    return 0;
  }
  passArr.forEach(function(){
    words += 1;
  });
  return words;
};

Entry.prototype.sampleSentence = function() {
  let passArr = [];
  passArr = this.passage.split(" ");
  let sentenceArr = [];
  for(let i = 0; i < 8; i++) {
    sentenceArr.push(passArr[i])
    if ( i === passArr.length || passArr[i].includes(".")) {
      i = 9;
    }
  }
  return sentenceArr;
}

Entry.prototype.vCounter = function() {
  let vowels = 0
  let passArr = this.passage.split("")
  passArr.forEach(function (i) {
    if (i === "a" || i === "e" || i === "o" || i === "i" || i === "u" || i === "y") {
      vowels += 1;
    }
  });
  return vowels;
}

Entry.prototype.cCounter = function() {
  let consonant = 0
  let passArr = this.passage.split("")
  passArr.forEach(function (i) {
    if (i != "a" || i != "e" || i != "o" || i != "i" || i != "u" || i != "y") {
      consonant += 1;
    }
  });
  return consonant;
}