const quizData = {
  c: {
    easy: [{
        question: "#include __stdio.h>\nint main() {\n  printf(\"Hello World!\");\n  return 0;\n}\n\nCorrect answer:",
        choices: ["^", "<", "*", "="],
        correctAnswer: "<",
        output: "Hello World!"
      },
      // Add more easy C language questions here
    ],
    normal: [
      // Add more medium C language questions here
    ],
    hard: [{
        question: "#include <stdio.h>\nint main() {\n  int myNum = 15;\n  printf(\"___d\", myNum);\n  return 0;\n}\n\nCorrect answer:",
        choices: ["%", "%", "$", "&"],
        correctAnswer: "%",
        output: "15"
      },
      // Add more hard C language questions here
    ]
  },
  html: {
    easy: [{
        question: "What does HTML stand for?",
        choices: ["Hyperlink and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language", "Hyper Tool Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
      },
      // Add more easy HTML questions here
    ],
    normal: [
      // Add more medium HTML questions here
    ],
    hard: [{
        question: "What is the correct HTML element for inserting a line break?",
        choices: ["<br>", "<break>", "<lb>", "<newline>"],
        correctAnswer: "<br>"
      },
      // Add more hard HTML questions here
    ]
  },
  js: {
    easy: [{
        question: "Which keyword is used to declare a variable in JavaScript?",
        choices: ["var", "int", "variable", "declare"],
        correctAnswer: "var"
      },
      // Add more easy JavaScript (JS) questions here
    ],
    normal: [
      // Add more medium JavaScript (JS) questions here
    ],
    hard: [{
        question: "What will be the output of the following JavaScript code?\n\nconsole.log(2 + '2');",
        choices: ["4", "22", "TypeError", "NaN"],
        correctAnswer: "22"
      },
      // Add more hard JavaScript (JS) questions here
    ]
  },
  java: {
    easy: [{
        question: "Which keyword is used to define a class in Java?",
        choices: ["class", "public", "void", "new"],
        correctAnswer: "class"
      },
      // Add more easy Java questions here
    ],
    normal: [
      // Add more medium Java questions here
    ],
    hard: [{
        question: "What is the output of the following Java code?\n\nint x = 5;\nSystem.out.println(++x);",
        choices: ["4", "5", "6", "Compilation error"],
        correctAnswer: "6"
      },
      // Add more hard Java questions here
    ]
  },
  python: {
    easy: [{
        question: "Which of the following is the correct way to comment in Python?",
        choices: ["// This is a comment", "# This is a comment", "/* This is a comment */", "<!-- This is a comment -->"],
        correctAnswer: "# This is a comment"
      },
      // Add more easy Python questions here
    ],
    normal: [
      // Add more medium Python questions here
    ],
    hard: [{
        question: "What is the output of the following Python code?\n\nx = 10\ny = 5\nprint(x % y)",
        choices: ["2", "5", "10", "0"],
        correctAnswer: "0"
      },
      // Add more hard Python questions here
    ]
  }
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

  // Check if the game is active (game is not None)
  if (game !== null) {
    form0.style.display = "block"; // Display the form0
  } else {
    form0.style.display = "none"; // Hide the form0
  }
}

function showQuestion() {
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const currentQuestion = quizData[currentLanguage][currentDifficulty][currentQuestionIndex];

  questionElement.textContent = currentQuestion.question;
  choicesElement.innerHTML = '';

  for (let i = 0; i < currentQuestion.choices.length; i++) {
    const choice = document.createElement("button");
    choice.textContent = currentQuestion.choices[i];
    choice.type = "button"; // Set type to "button" instead of "radio"
    choice.value = currentQuestion.choices[i];

    choice.style.display = "inline-block"; // Set display to "inline-block" to align buttons horizontally
    choice.style.marginRight = "10px"; // Add some margin between buttons
    choice.style.padding = "25px";
    choice.style.fontSize = "35px";
    choice.style.backgroundColor = "white";
    choice.style.color = "black";
    choice.style.border = "none";
    choice.style.borderRadius = "20px";
    // Add event listener to check answer on button click
    choice.addEventListener("click", checkAnswer);

    choicesElement.appendChild(choice);
  }
}


function checkAnswer(event) {
  event.preventDefault();
  const selectedAnswer = event.target.value;
  const currentQuestion = quizData[currentLanguage][currentDifficulty][currentQuestionIndex];
  const resultElement = document.getElementById("result");

  if (selectedAnswer === currentQuestion.correctAnswer) {
    resultElement.innerHTML = "Correct! <br>" + "output: &nbsp&nbsp" + currentQuestion.output;
    resultElement.style.fontSize = "30px";
    resultElement.style.color = "#39FF14";
    resultElement.style.fontFamily = "rockwell";
    score++;

    // Add glow effect
    resultElement.style.textShadow = "0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14";
  } else {
    resultElement.textContent = "Incorrect!";
    resultElement.style.fontSize = "30px";
    resultElement.style.color = "#ffcccb";
    resultElement.style.textShadow = "0 0 10px #ffcccb, 0 0 20px #ffcccb, 0 0 30px #ffcccb";
  }

  event.target.checked = false;
  // Move to the next question after a short delay
  setTimeout(function() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData[currentLanguage][currentDifficulty].length) {
      showQuestion();
      document.getElementById("result").textContent = "";
    } else {
      // Quiz is complete
      endGame();
    }
  }, 1500); // Delay of 1.5 seconds (1500 milliseconds)
}

function home() {
  location.reload();
}

// Function to end the game
function endGame() {
  // Replace background image with a GIF
  document.body.style.backgroundImage = 'url("image/confetti.gif")';
  document.querySelector(".form0").style.display = "none";

  // Hide the game element
  document.getElementById("game").style.display = "none";

  // Update the score display
  document.getElementById("score").textContent = "Your score: " + score + "/" + quizData[currentLanguage][currentDifficulty].length;
  document.getElementById("score").style.display = "block";

  // Reload the page after 3 seconds
  setTimeout(function() {
    location.reload();
  }, 5000);
}

