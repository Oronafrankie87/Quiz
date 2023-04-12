const username = document.getElementById('username');
const savedScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores"));
console.log(highScores);
console.log(JSON.parse(localStorage.getItem("highScores")));
finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () =>{
  savedScoreBtn.disabled = !username.value;

});

saveHighScore = e => {
  console.log('clicked the save button!');
  e.preventDefault();


  const score = {
    score: mostRecentScore,
    name: username.value
  };
 
}; 

