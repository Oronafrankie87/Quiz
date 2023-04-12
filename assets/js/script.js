//List of Questions and Answers
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
// const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
const countdown = document.getElementById('timerCount');


let timer = 0
let timerCount =200
let interval = setInterval(startTime, 1000);
let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
// let questionCounter = 0;
let availableQuestions = [];

var questions = [
  {
    question:
      "How much wood would a Woodchuck chuck if a Woodchuck could chuck wood?",
    choice1: "$12.32 worth",
    choice2: "About 700 pounds",
    choice3:
      "8 times the body weigh of a Mexican Jumping Frog from Sri Lanka",
    choice4: "Slightly more than 3 branches",
    answer: 2,
  },
  {
    question: "What is the correct answer to this question? Guess..",
    choice1: "This one",
    choice2: "4",
    choice3: "None of these",
    choice4: "Every Other Leap Year",

    answer: 1,
  },
  {
    question: "What are two things you can NEVER eat for breakfast?",
    choice1: "Lasagna",
    choice2: "Squirrels",
    choice3: "Dinner",
    choice4: "Hand Soap",
    answer: 3,
  },
  {
    question: "What is always coming but will never arrive?",
    choice1: "The end of COVID",
    choice2: "Your lunch from Grubhub",
    choice3: "Tomorrow",
    choice4: "The of the Full Stack boot camp",
    answer: 3,
  },
  {
    question:
      "During an Eclipse, is it safe to stare directly at William Defoe?",
    choice1: "Only with protective shades",
    choice2: "Yes",
    choice3: "As long as you have a burrito in one hand",
    choice4: "Its never safe to stare directly at William Defoe",
    answer: 4,
  },
  {
    question: "What is the main ingredient in a unicorn sandwich?",
    choice1: "A good nights sleep",
    choice2: "Butter",
    choice3: "Asbestos",
    choice4: "Flugengroggle extract",
    answer: 2,
  },
  {
    question:
      "When you are standing, why aren't your feet on top of your head?",
    choice1: "Because it would hurt",
    choice2: "Because your standing on them stupid",
    choice3: "Because of the way you look at yourself in the mirror",
    choice4: "To avoid athletes forehead",
    answer: 2
  },
  {
    question: "Whats the difference between a Crocodile and an Alligator?",
    choice1: "One sees you later and the other sees you after a while",
    choice2:
      "All Crocodiles are born Crocodiles but Alligators are born lizards and turn into Alligators when they turn 15 years old",
    choice3:
      "If you split an Alligator in half it becomes a Partigator, when you split a Crocodile in half it just dies.",
    choice4: "One starts with C and the other starts with A",
    answer: 1,
  },
  {
    question: "The singer Meatloaf would do anything for love, except?",
    choice1: "Carry on his Wayward son",
    choice2: "This",
    choice3: "That",
    choice4: "File his taxes early",
    answer: 3,
  },
  {
    question:
      "What is the most effective way to stop a fully grown Danny DeVito from charging and headbutting you?",
    choice1: "You can't stop Danny DeVito",
    choice2: "Jump over him",
    choice3: "Throw him an oven roasted turkey leg",
    choice4: "Yell, STOP as loud as you can sign language",
    answer: 2,
  },
  {
    question:
      "What is the American Dental Association's recommended way of entering a Chipotle?",
    choice1: "Through the doggie door",
    choice2:
      "Wrapping yourself in bubble wrap and jumping through the window>",
    choice3: "Hide inside a bag of rice then jump out before they open it",
    choice4: "'Kramer' in",
    answer: 4,
  },
];

const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 11;



startGame = () => {
  timerCount = 200;
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  startTime();
  getNewQuestion();
};

function startTime() {
  timer++;
  countdown.innerHTML = convertSeconds(timerCount - timer);
  if (timer == timerCount) {
    clearInterval(interval);

    itAlive()
  }
}

function itAlive() {
  return window.location.assign("/The-Nonsense-Quiz/game.html")
}

getNewQuestion = () => {
    if(availableQuestions.length ===0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score);
    return window.location.assign("/end.html");
   }
  // questionCounter++;

  currentQuestion = availableQuestions[questionCounter];
  question.innerText = currentQuestion.question;


  // const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  // currentQuestion = availableQuestions[questionIndex];
  // question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset.number;
    choice.innerText = currentQuestion["choice" + number];

  });

  // availableQuestions.splice(questionIndex, 1);

  questionCounter++;
  acceptingAnswers = true;

};

const nextButton = document.getElementById("nextButton");
nextButton.addEventListener("click", () => {
  getNewQuestion();
});

// getNextQuestion = () => {
//   questionCounter++;
//   currentQuestion = questions[questionCounter - 1]
//   question.innerText = currentQuestion.question;
// }

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dadaset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? 'correct' : "incorrect";
      if(classToApply === 'correct') {
        incrementScore(CORRECT_BONUS);
      }


    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout( () => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});  
  // if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
  //   localStorage.setItem('mostRecentScore', score);
  //   return window.location.assign("/end.html");
  // }
  // getNextQuestion();



// choice.addEventListener("click", e => {
//   if (!acceptingAnswers) return;
// });
  //   acceptingAnswers = false;
  //   const selectedChoice = e.target;
  //   const selectedAnswer = selectedChoice.dataset["number"];

  //   const classToApply = 
  //     selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';
   
  //   if(classToApply === 'correct') {
  //     incrementScore(CORRECT_BONUS);
  //   }

  //   selectedChoice.parentElement.classList.add(classToApply);

  //   setTimeout( () => {
  //     selectedChoice.parentElement.classList.remove(classToApply);
  //     getNewQuestion();
  //   },  1000);

//   });
// })

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame();
