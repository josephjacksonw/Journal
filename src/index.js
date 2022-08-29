import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Entry from './entry.js';
//import wordAnalyzer from './entry.js';
function handleTriangleForm(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const passage = document.getElementById("passage").value;
  console.log(title + " " + typeof(title));
  console.log(passage);
  let entry = new Entry(title, passage);
  console.log(entry);
  let words = 0
  let passArr = passage.split(" ")
  passArr.forEach(function(i) {
    console.log(i)
    words += 1
  });
  passArr = passage.split("")
  let vowels = 0
  let consonants = 0 
  passArr.forEach(function(i) {
    if (i === "a" || i === "e" || i === "o" || i === "i" || i === "u" || i === "y") {
      vowels += 1;
    } else {
      consonants += 1;
    }
  })
  console.log(passArr)
  let tws = document.getElementById("tws");
  tws.innerText = words;
  let vs = document.getElementById("vs");
  vs.innerText = vowels;
  let cs = document.getElementById("cs");
  cs.innerText = consonants;
  
  //words = wordAnalyzer(entry);
  //console.log(words);
}



document.querySelector("form#journal-entry").addEventListener("submit", handleTriangleForm);

