import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Entry from './entry.js';

function handleJournal(event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const passage = document.getElementById("passage").value;
  const entry = new Entry(title, passage);
  const words = entry.wordAnalyzer()
  const sentenceArr = entry.sampleSentence()
  let vowels = 0
  let consonants = 0 
  vowels = entry.vCounter()
  consonants = entry.cCounter()  
  let firstSentence = document.getElementById("first-sentence")
  firstSentence.innerText = sentenceArr.join(" ")
  let tws = document.getElementById("tws");
  tws.innerText = words;
  let vs = document.getElementById("vs");
  vs.innerText = vowels;
  let cs = document.getElementById("cs");
  cs.innerText = consonants;
}

document.querySelector("form#journal-entry").addEventListener("submit", handleJournal);