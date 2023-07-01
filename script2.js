const quizData = {
  "c": {
    "easy": [
      {
        "question": "1.\n#include <stdio.h> \n __ main() { \n  printf(\"Hello World!\"); \n return 0; }\n\nCorrect answer:",
        "choices": ["<"],
        "correctAnswer": "<",
        "output": "Hello World!"
      },
    ],
  },
};

let currentLanguage = '';
let currentDifficulty = '';
let currentQuestionIndex = 0;
let score = 0;

function showform1() {
  document.getElementById("form1").style.display = "block";
  document.getElementById("form3").style.display = "none";
}

function showForm2() {
  document.getElementById("form1").style.display = "none";
  document.getElementById("form2").style.display = "block";
}

function showForm3(language) {
  currentLanguage = language;
  document.getElementById("language").textContent = "Selected Language: " + language;
  document.getElementById("form2").style.display = "none";
  document.getElementById("form3").style.display = "block";
}

function startGame(difficulty) {
  currentDifficulty = difficulty;
  document.getElementById("form3").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("score").style.display = "block";
  document.getElementById("languageType").textContent = "Selected Language: " + currentLanguage;
  document.getElementById("score").textContent = "Score: 0";
  showQuestion();
  const form0 = document.querySelector(".form0");

  if (game !== null) {
    form0.style.display = "block";
  } else {
    form0.style.display = "none";
  }
}

function showQuestion() {
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const currentQuestion = quizData[currentLanguage][currentDifficulty][currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;
  choicesElement.innerHTML = '';

  for (let i = 0; i < currentQuestion.choices.length; i++) {
    const choiceInput = document.createElement("input");
    choiceInput.type = "text";
    choiceInput.id = "choice-input-" + i;
    choiceInput.placeholder = "Enter answer";
    choiceInput.style.marginBottom = "10px";

    choicesElement.appendChild(choiceInput);
  }

  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.type = "button";
  submitButton.style.marginTop = "10px";
  submitButton.addEventListener("click", checkAnswer);

  choicesElement.appendChild(submitButton);
}

function checkAnswer(event) {
  event.preventDefault();
  const currentQuestion = quizData[currentLanguage][currentDifficulty][currentQuestionIndex];
  const resultElement = document.getElementById("result");
  let isCorrect = true;

  for (let i = 0; i < currentQuestion.choices.length; i++) {
    const choiceInput = document.getElementById("choice-input-" + i);
    const userAnswer = choiceInput.value.trim();

    if (userAnswer.toLowerCase() !== currentQuestion.correctAnswer.toLowerCase()) {
      isCorrect = false;
      break;
    }
  }

  if (isCorrect) {
    resultElement.innerHTML = "Correct! <br>" + "Output: &nbsp;&nbsp;" + currentQuestion.output;
    resultElement.style.fontSize = "20px";
    resultElement.style.color = "#39FF14";
    resultElement.style.fontFamily = "rockwell";
    resultElement.style.textShadow = "0 0 15px #39FF14, 0 0 20px red, 0 0 20px blue";
    score++;
  } else {
    resultElement.textContent = "Incorrect!";
    resultElement.style.fontSize = "30px";
    resultElement.style.color = "#ffcccb";
    resultElement.style.textShadow = "0 0 10px #ffcccb, 0 0 20px #ffcccb, 0 0 30px #ffcccb";
  }

  setTimeout(function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData[currentLanguage][currentDifficulty].length) {
      showQuestion();
      document.getElementById("result").textContent = "";
    } else {
      endGame();
    }
  }, 1500);
}

function home() {
  location.reload();
}

function endGame() {
  document.body.style.backgroundImage = 'url("image/confetti.gif")';
  document.querySelector(".form0").style.display = "none";
  document.getElementById("game").style.display = "none";
  document.getElementById("score").textContent = "Your score: " + score + "/" + quizData[currentLanguage][currentDifficulty].length;
  document.getElementById("score").style.display = "block";
  setTimeout(function() {
    location.reload();
  }, 5000);
}
