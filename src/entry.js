export default function Entry(title, passage) {
  this.title = title;
  this.passage = passage;
}

Entry.prototype.wordAnalyzer = function(e) {
  let words = 0;
  let passArr = []
  passArr = e.passage.split(" ");
  passArr.forEach(function(){
    words += 1;
  });
  return words;
};