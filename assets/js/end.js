const username = document.getElementById('username');
const savedScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

const highScores = JSON.parse(localStorage.getItem("highScores")) ||[];
console.log(highScores);
const MAX_HIGH_SCORES =10

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () =>{
  savedScoreBtn.disabled = !username.value;

});

saveHighScore = (e) => {
  e.preventDefault();


  const score = {
    score: mostRecentScore,
    name: username.value
  };

  highScores.push(score);

  localStorage.setItem("highScore", JSON.stringify(highScore));
  window.location.assign('/The-Nonsense-Quiz/')
 
}; 

console.log(highScore);

