const questions = [
  {
    question:
      "How much wood would a Woodchuck chuck if a Woodchuck could chuck wood?",
    choice: ["a. $12.32 worth", "b. About 700 pounds", "c. 8 times the body weigh of a Mexican Jumping Frog from Sri Lanka",
     "d. Slightly more than 3 branches"],
    answer: "b. About 700 pounds",
  },
  {
    question: "What is the correct answer to this question? Guess..",
    choice: ["a. This one", "b. 4", "c. None of these", "d. Every Other Leap Year"],
    answer: "a. This one",
  },
  {
    question: "What is always coming but will never arrive?",
    choice: ["a. The end of COVID", "b. Your lunch from Grubhub", "c. Tomorrow", "d. The new Beetlejuice movie"],
    answer: "c. Tomorrow",
  },
  {
    question:
      "During an Eclipse, is it safe to stare directly at William Defoe?",
    choice: ["a. Only with protective shades", "b. Yes", "c. As long as you have a burrito in one hand", "d. Its never safe to stare directly at William Defoe"],
    answer: "d. Its never safe to stare directly at William Defoe",
  },
  {
    question: "What is the main ingredient in a unicorn sandwich?",
    choice: ["a. A good nights sleep", "b. Butter", "c. Asbestos", "d. Flugengroggle extract"],
    answer: "b. Butter",
  },
  {
    question: "Two of the hardest words to say are sorry and...?",
    choice: ["a. Worcestershire sauce", "b. Bamboozled", "c. Hippopotomonstrosesquippedaliophobia", "d. Rural"],
    answer: "a. Worcestershire sauce",
  },
  {
    question: "What are you actually doing when you wash your hands?",
    choice: ["a. Break dancing", "b. Cleaning your top feet", "c. Supervising your hands while they commit bacterial genocide.", "d. Making Soap disappear"],
    answer: "c. Supervising your hands while they commit bacterial genocide."
  },
  {
    question: "When doing the Hokey Pokey, what is it all about?",
    choice: ["a. Playing leapfrog with a stranger in a Taco Bell parking lot.", "b. Lolly Gaging", "c. Putting your right hand in, then out, then shaking it all about.", "d. Playing Amazing Graze with your nose."],
    answer: "c Putting your right hand in, then out, then shaking it all about.",
  },
  {
    question: "Whats the difference between a Crocodile and an Alligator?",
    choice: ["a. One sees you later and the other sees you after a while", "b. All Crocodiles are born Crocodiles but Alligators are born lizards and turn into Alligators when they turn 15 years old", "c. If you split an Alligator in half it becomes a Partigator, when you split a Crocodile in half it just dies.", "d. One starts with C and the other starts with A"],
    answer: "a. One sees you later and the other sees you after a while",
  },
  {
    question: "The singer Meatloaf would do anything for love, except?",
    choice: ["a. Carry on his Wayward son", "b. This", "c. That", "d. File his taxes early"],
    answer: "c. That",
  },
  {
    question: "What is the most effective way to stop a fully grown Danny DeVito from charging and headbutting you?",
    choice: ["a. You can't stop Danny DeVito", "b. Jump over him", "c. Throw him an oven roasted turkey leg", "d. Yell, STOP as loud as you can sign language"],
    answer: "b. Jump over him",
  },
  {
    question: "What is the American Dental Association's recommended way of entering a Chipotle?",
    choice: ["a. Through the doggie door", "b. Wrapping yourself in bubble wrap and jumping through the window", "c. Hide inside a bag of rice then jump out before they open it", "d. 'Kramer' in"],
    answer: "d. 'Kramer' in",
  },
  {
    question: "Barry Gibb, the oldest and only living member of the great singing group the Bee Gees is very good at?",
    choice: ["a. Jive Talkin'", "b. Getting that night fever", "c. Stayin' Alive", "d. Mending a broken heart"],
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


// Other variables defined
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;


