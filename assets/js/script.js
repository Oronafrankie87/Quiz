// Nonsense question

const questions = [
  {
    question: "How much wood would a Woodchuck chuck if a Woodchuck could chuck wood?",
    choices: ["a. $12.32 worth","b. About 700 pounds", "c. 8 times the body weigh of a Mexican Jumping Frog from Sri Lanka","d. Slightly more than 3 branches"],
    answer: "b. About 700 pounds",
  },
  {
    question: "What is always coming but will never arrive?",
    choices: ["a. The end of COVID","b. Your lunch from Grubhub","c. Tomorrow","d. The new Beetlejuice movie"],
    answer: "c. Tomorrow",
  },
  {
    question: "During an Eclipse, is it safe to stare directly at William Defoe?",
    choices: ["a. Only with protective shades","b. Yes","c. As long as you have a burrito in one hand","d. Its never safe to stare directly at William Defoe"],
    answer: "d. Its never safe to stare directly at William Defoe",
  },
  {
    question: "What is the main ingredient in a unicorn sandwich?",
    choices: ["a. A good nights sleep","b. Butter","c. Asbestos","d. Flugengroggle extract"],
    answer: "b. Butter",
  },
  {
    question: "Two of the hardest words to say are sorry and...?",
    choices: ["a. Worcestershire sauce","b. Bamboozled","c. Hippopotomonstrosesquippedaliophobia","d. Rural"],
    answer: "a. Worcestershire sauce",
  },
  {
    question: "What are you actually doing when you wash your hands?",
    choices: ["a. Break dancing","b. Cleaning your top feet","c. Supervising your hands while they commit bacterial genocide","d. Making Soap disappear"],
    answer: "c. Supervising your hands while they commit bacterial genocide",
  },
  {
    question: "When doing the Hokey Pokey, what is it all about?",
    choices: ["a. Playing leapfrog with a stranger in a Taco Bell parking lot","b. Lolly Gaging","c. Putting your right hand in, then out, then shaking it all about","d. Playing Amazing Graze with your nose"],
    answer:"c. Putting your right hand in, then out, then shaking it all about",
  },
  {
    question: "Whats the difference between a Crocodile and an Alligator?",
    choices: ["a. One sees you later and the other sees you after a while","b. All Crocodiles are born Crocodiles but Alligators are born lizards and turn into Alligators at age 15","c. If you split an Alligator in half it becomes a Partigator, when you split a Crocodile in half it just dies","d. One starts with W and the other starts with X"],
    answer: "a. One sees you later and the other sees you after a while",
  },
  {
    question: "The singer Meatloaf would do anything for love, except?",
    choices: ["a. Carry on his Wayward son","b. This","c. That","d. File his taxes early"],
    answer: "c. That",
  },
  {
    question:
      "What is the most effective way to stop a fully grown Danny DeVito from charging at you?",
    choices: ["a. Playing dead","b. Jumping over him","c. Throw him an oven roasted turkey leg","d. Yelling, STOP as loud as you can in sign language"],
    answer: "b. Jumping over him",
  },
  {
    question:
      "What is the American Dental Association's recommended way of entering a Chipotle?",
    choices: ["a. Crawling through the doggie door","b. Wrapping yourself in bubble wrap and jumping through the window","c. Hiding inside a bag of rice then jump out before they open it","d. 'Kramer' in"],
    answer: "d. 'Kramer' in",
  },
  {
    question:
      "Barry Gibb, the oldest and only living member of the singing group the Bee Gees is very good at?",
    choices: ["a. Jive Talkin'","b. Gettin' that night fever","c. Stayin' Alive","d. Mending a broken heart"],
    answer: "c. Stayin' Alive",
  },
];

//Element references to grab
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("timeLeft");
var timesUp = document.getElementById("timesUp");
var startDiv = document.getElementById("start");
var startQuizBtn = document.getElementById("start-quiz-button");
var questionDiv = document.getElementById("questionDiv");
var questionTitle = document.getElementById("questionTitle");
var choiceA = document.getElementById("btn0");
var choiceB = document.getElementById("btn1");
var choiceC = document.getElementById("btn2");
var choiceD = document.getElementById("btn3");
var answerCheck = document.getElementById("answerCheck");
var summary = document.getElementById("summary");
var submitInitialBtn = document.getElementById("submitInitialBtn");
var initialInput = document.getElementById("initialInput");
var everything = document.getElementById("everything");
var highScoreSection = document.getElementById("highScoreSection");
var finalScore = document.getElementById("finalScore");
var goBackBtn = document.getElementById("goBackBtn");
var clearHighScoreBtn = document.getElementById("clearHighScoreBtn");
var viewHighScore = document.getElementById("viewHighScore");
var listOfHighScores = document.getElementById("listOfHighScores");

// start quiz button
startQuizBtn.addEventListener("click", newQuiz);

// Other variables defined
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

//Total time
var totalTime = 201;


//newQuiz start fuction
function newQuiz() {
  questionIndex = 0;
  totalTime = 200;
  timeLeft.textContent = totalTime;
  initialInput.textContent = "";

  startDiv.style.display = "none";
  questionDiv.style.display = "block";
  timer.style.display = "block";
  timesUp.style.display = "none";

  var startTimer = setInterval(function () {
    totalTime--;
    timeLeft.textContent = totalTime;
    if (totalTime <= 0) {
      clearInterval(startTimer);
      if (questionIndex < questions.length - 1) {
        gameOver();
      }
    }
  }, 1000);

  showQuiz();
}

//next Question function
function showQuiz() {
  nextQuestion();
}

function nextQuestion() {
  questionTitle.textContent = questions[questionIndex].question;
  choiceA.textContent = questions[questionIndex].choices[0];
  choiceB.textContent = questions[questionIndex].choices[1];
  choiceC.textContent = questions[questionIndex].choices[2];
  choiceD.textContent = questions[questionIndex].choices[3];
}

// Answer check function
function checkAnswer(answer) {
  var lineBreak = document.getElementById("lineBreak");
  lineBreak.style.display = "block";
  answerCheck.style.display = "block";
  if (
    questions[questionIndex].answer === questions[questionIndex].choices[answer]
    ) {
      correctAns++;
      answerCheck.textContent = "Correct!";
    } else {
      timeLeft -= 25;
      timeLeft.textContent = totalTime;
      answerCheck.textContent =
      "Wrong!";
    }
    questionIndex++;
    if (questionIndex < questions.length) {
      nextQuestion();
    } else {
      gameOver();
    }
  }
 //Choooooose an answer 
  function chooseA() {
    checkAnswer(0);
  }
  
  function chooseB() {
    checkAnswer(1);
  }
  
  function chooseC() {
    checkAnswer(2);
  }
  
  function chooseD() {
    checkAnswer(3);
  }
  

  //Game over fuction
  function gameOver() {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "block";
    finalScore.textContent = correctAns;
  }
  

  //High score function/initials(Lazy version of your name)
  function storeHighScores(event) {
    event.preventDefault();
    
    if (initialInput.value === "") {
      alert("Please enter the lazy version of your name!");
      return;
    }
    
    startDiv.style.display = "none";
    timer.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";
    
    var savedHighScores = localStorage.getItem("high scores");
    var scoresArray;
    
    if (savedHighScores === null) {
      scoresArray = [];
    } else {
      scoresArray = JSON.parse(savedHighScores);
    }
    
    var userScore = {
      initials: initialInput.value,
      score: finalScore.textContent,
    };
    //Value of userScore is pushed to array "scoresArray" and coverts array in a JSON string then stores array in browsers local storage with the key "high Scores"
    scoresArray.push(userScore);
    var scoresArrayString = JSON.stringify(scoresArray);
    window.localStorage.setItem("high scores", scoresArrayString);
    
    showHighScores();
  }

  //highscore function defined/ retreives high score from browsers local storage and appends them as <p>
  var f = 0;
  function showHighScores() {
    startDiv.style.display = "none";
    timer.style.display = "none";
    questionDiv.style.display = "none";
    timesUp.style.display = "none";
    summary.style.display = "none";
    highScoreSection.style.display = "block";
    
    var savedHighScores = localStorage.getItem("high scores");
    if (savedHighScores === null) {
      return;
    }
    var storedHighScores = JSON.parse(savedHighScores);
    for (; f < storedHighScores.length; f++) {
      var eachNewHighScore = document.createElement("p");
      eachNewHighScore.innerHTML =
      storedHighScores[f].initials + ": " + storedHighScores[f].score;
      listOfHighScores.appendChild(eachNewHighScore);
    }
  }

  //click event listeners for the choices
  choiceA.addEventListener("click", chooseA);
  choiceB.addEventListener("click", chooseB);
  choiceC.addEventListener("click", chooseC);
  choiceD.addEventListener("click", chooseD);
  
  submitInitialBtn.addEventListener("click", function (event) {
    storeHighScores(event);
  });
  
  viewHighScore.addEventListener("click", function (event) {
    showHighScores(event);
  });
  
  //Go back button click event listener
  goBackBtn.addEventListener("click", function () {
    startDiv.style.display = "block";
    highScoreSection.style.display = "none";
  });
  
  //clear high score click event listener
  clearHighScoreBtn.addEventListener("click", function () {
    window.localStorage.removeItem("high scores");
    listOfHighScores.innerHTML = "High Scores Cleared!";
    listOfHighScores.setAttribute(
      "style",
      "font-family: 'Archivo', sans-serif; font-style: italic;"
      );
    });