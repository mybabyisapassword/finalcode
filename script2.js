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
// Variable to store the currently selected language.

let currentDifficulty = '';
// Variable to store the currently selected difficulty level.

let currentQuestionIndex = 0;
// Variable to keep track of the current question index.

let score = 0;
// Variable to store the score.

document.addEventListener('DOMContentLoaded', function() {
  // Event listener for the DOMContentLoaded event.
  var hardButton = document.getElementById('hardbutton');
  // Get the element with the ID 'hardbutton'.
  hardButton.addEventListener("click", checkAnswer);
  // Add a click event listener to the 'hardButton' element.
});

function showform1() {
  // Function to show the first form.
  document.getElementById("form1").style.display = "block";
  // Display the element with the ID 'form1'.
  document.getElementById("form3").style.display = "none";
  // Hide the element with the ID 'form3'.
}

function showForm2() {
  // Function to show the second form.
  document.getElementById("form1").style.display = "none";
  // Hide the element with the ID 'form1'.
  document.getElementById("form2").style.display = "block";
  // Display the element with the ID 'form2'.
}

function showForm3(language) {
  // Function to show the third form based on the selected language.
  currentLanguage = language;
  // Set the value of 'currentLanguage' to the selected language.
  document.getElementById("language").textContent = "Selected Language: " + language;
  // Set the text content of the element with the ID 'language' to display the selected language.
  document.getElementById("form2").style.display = "none";
  // Hide the element with the ID 'form2'.
  document.getElementById("form3").style.display = "block";
  // Display the element with the ID 'form3'.
}

function startGame(difficulty) {
  // Function to start the game with the selected difficulty level.
  currentDifficulty = difficulty;
  // Set the value of 'currentDifficulty' to the selected difficulty level.
  document.getElementById("form3").style.display = "none";
  // Hide the element with the ID 'form3'.
  document.getElementById("game").style.display = "block";
  // Display the element with the ID 'game'.
  document.getElementById("score").style.display = "block";
  // Display the element with the ID 'score'.
  document.getElementById("languageType").textContent = "Selected Language: " + currentLanguage;
  // Set the text content of the element with the ID 'languageType' to display the selected language.
  document.getElementById("score").textContent = "";
  // Clear the text content of the element with the ID 'score'.
  showQuestion();
  // Call the 'showQuestion' function to display the first question.
  const form0 = document.querySelector(".form0");
  // Get the first element with the class 'form0'.

  if (game !== null) {
    form0.style.display = "none";
    // Hide the element with the class 'form0'.
    if (difficulty === "hard") {
      document.getElementById("hardfield").style.display = "flex";
      // Display the element with the ID 'hardfield'.
      document.getElementById("hardbutton").style.display = "flex";
      // Display the element with the ID 'hardbutton'.
      const choicesElement = document.getElementById("choices");
      choicesElement.style.display = "none";
      // Hide the element with the ID 'choices'.
    } else {
      document.getElementById("hardfield").style.display = "none";
      // Hide the element with the ID 'hardfield'.
      document.getElementById("hardbutton").style.display = "none";
      // Hide the element with the ID 'hardbutton'.
    }
  } else {
    form0.style.display = "none";
    // Hide the element with the class 'form0'.
  }
}

function showQuestion() {
  // Function to display the current question.
  const questionElement = document.getElementById("question");
  // Get the element with the ID 'question'.
  const choicesElement = document.getElementById("choices");
  // Get the element with the ID 'choices'.
  const currentQuestion = quizData[currentLanguage][currentDifficulty][currentQuestionIndex];
  // Get the current question based on the selected language, difficulty, and question index.

  questionElement.textContent = currentQuestion.question;
  // Set the text content of the 'questionElement' to the current question's question property.
  choicesElement.innerHTML = '';
  // Clear the inner HTML of the 'choicesElement'.

  for (let i = 0; i < currentQuestion.choices.length; i++) {
    const choice = document.createElement("button");
    // Create a new button element.

    choice.textContent = currentQuestion.choices[i];
    // Set the text content of the 'choice' button to the current choice.
    choice.type = "button";
    // Set the type of the 'choice' button to "button".
    choice.value = currentQuestion.choices[i];
    // Set the value of the 'choice' button to the current choice.

    choice.style.display = "block";
    // Set the display style of the 'choice' button to 'block' to stack buttons vertically.
    choice.style.marginLeft = "5vh";
    // Set the left margin of the 'choice' button.
    choice.style.padding = "20px";
    // Set the padding of the 'choice' button.
    choice.style.fontSize = "20px";
    // Set the font size of the 'choice' button.
    choice.style.backgroundColor = "white";
    // Set the background color of the 'choice' button.
    choice.style.color = "black";
    // Set the text color of the 'choice' button.
    choice.style.border = "none";
    // Set the border of the 'choice' button.
    choice.style.borderRadius = "20px";
    // Set the border radius of the 'choice' button.

    choice.addEventListener("click", checkAnswer);
    // Add a click event listener to the 'choice' button to check the answer.

    choicesElement.appendChild(choice);
    // Append the 'choice' button to the 'choicesElement'.
  }
}

function checkAnswer(event) {
  // Function to check the selected answer.
  event.preventDefault();
  // Prevent the default behavior of the event.
  const selectedAnswer = event.target.value;
  // Get the value of the selected answer from the event target.
  const currentQuestion = quizData[currentLanguage][currentDifficulty][currentQuestionIndex];
  // Get the current question based on the selected language, difficulty, and question index.
  const resultElement = document.getElementById("result");
  // Get the element with the ID 'result'.
  const hiddenField = document.getElementById('hardfield').value;
  // Get the value of the element with the ID 'hardfield'.

  if (hiddenField !== null && hiddenField !== "") {
    if (hiddenField === currentQuestion.correctAnswer) {
      resultElement.innerHTML = "Correct! <br>" + "output: &nbsp&nbsp" + currentQuestion.output;
      resultElement.style.fontSize = "20px";
      resultElement.style.color = "#39FF14";
      resultElement.style.fontFamily = "rockwell";
      score++;
      resultElement.style.textShadow = "0 0 15px #39FF14, 0 0 20px red, 0 0 20px blue";
    } else {
      resultElement.textContent = "Incorrect!";
      resultElement.style.fontSize = "30px";
      resultElement.style.color = "#ffcccb";
      resultElement.style.textShadow = "0 0 10px #ffcccb, 0 0 20px #ffcccb, 0 0 30px #ffcccb";
    }
  } else {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      resultElement.innerHTML = "Correct! <br>" + "output: &nbsp&nbsp" + currentQuestion.output;
      resultElement.style.fontSize = "20px";
      resultElement.style.color = "#39FF14";
      resultElement.style.fontFamily = "rockwell";
      score++;
      resultElement.style.textShadow = "0 0 15px #39FF14, 0 0 20px red, 0 0 20px blue";
    } else {
      resultElement.textContent = "Incorrect!";
      resultElement.style.fontSize = "30px";
      resultElement.style.color = "#ffcccb";
      resultElement.style.textShadow = "0 0 10px #ffcccb, 0 0 20px #ffcccb, 0 0 30px #ffcccb";
    }
  }

  event.target.checked = false;
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

// Function to end the game
function endGame() {
  // Replace background image with a GIF
  document.body.style.backgroundImage = 'url("image/confetti.gif")';
  document.querySelector(".form0").style.display = "none";

  // Hide the game element
  document.getElementById("game").style.display = "none";

  // Update the score display
  document.getElementById("score").textContent = " YOUR SCORE IS ! \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n" + score + "/" + quizData[currentLanguage][currentDifficulty].length;
  document.getElementById("score").style.display = "block";




  // Reload the page after 3 seconds
  setTimeout(function() {
    location.reload();    
  }, 5000);
}

//para ito sa back sa quiz bali baback sha sa prev question 
//tinanggal ko kc ayaw nyo kiya pinalitan ng back to another form
function goBack() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
  }
}




 // function of the back button 
 function exit() {
      document.getElementById("form1").style.display = "none";
      document.getElementById("form2").style.display = "block";
      document.getElementById("form3").style.display = "none";
      document.getElementById("game").style.display = "none";
      document.getElementById("score").style.display = "none";
      document.getElementById("backButton").style.display = "none";
    }function exit1() {
      document.getElementById("form1").style.display = "none";
      document.getElementById("form2").style.display = "block";// pag ni click mo yung back button matik pupunta sa form2 kiya naka block
      //Ang paglalagay ng block na element na may id na form2 ay ipapakita ang form kong ano naka lagay sa id 
      document.getElementById("form3").style.display = "none";
      document.getElementById("game").style.display = "none";
      document.getElementById("score").style.display = "none";
      document.getElementById("backButton").style.display = "none";
    }
function exit2() {
      document.getElementById("form1").style.display = "none";
      document.getElementById("form2").style.display = "none";
      document.getElementById("form3").style.display = "block";
      document.getElementById("game").style.display = "none";
      document.getElementById("score").style.display = "none";
      document.getElementById("backButton").style.display = "none";
    }

