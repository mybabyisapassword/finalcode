const quizData = {
  "c": {
  "easy": [
    {
    "question": "1.\n#include <stdio.h> \n __ main() { \n  printf(\"Hello World!\"); \n return 0; }\n\nCorrect answer:",
    "choices": ["^", "<", "*", "="],
    "correctAnswer": "<",
    "output": "Hello World!"
  },
  {
    "question": "2.\n#include <stdio.h> \n int main() { \n  printf(\"Hello students!\"); \n  printf(\"Im here to teach C programming.\"); \n return 0; }\n\nCorrect answer:",
    "choices": ["+", ";","int"],
    "correctAnswer": "+",
    "output": "Hello students!Im here to teach C programming."
  },
  {
    "question": "3.\n#include <stdio.h>\nint main() {\n  printf(\"Hello Teacher!____\");\n  printf(\"I am learning C.\\nAnd it is awesome!\");\n  return 0;\n}\n\nCorrect answer:",
    "choices": ["\\m", "\\n", "And"],
    "correctAnswer": "\\n",
    "output": "Hello Teacher!\nI am learning C.\nAnd it is awesome!"
  },
  {
    "question": "4.\n#include <stdio.h>\nint main() {\n  int myNum = 15;\n  printf(\"%d\", myNum);\n  return 0;\n}\n\nCorrect answer:",
    "choices": ["%", "$", "&"],
    "correctAnswer": "%",
    "output": "15"
  },
  {
    "question": "5.\n#include <stdio.h>\nint main() {\n  float my__Num = 3.5;\n  double myDoubleNum = 19.99;\n  printf(\"%f\\n\", myFloatNum);\n  printf(\"%If\", myDoubleNum);\n  return 0;\n}\n\nCorrect answer:",
    "choices": ["Loaf", "Float", "Cokefloat"],
    "correctAnswer": "Float",
    "output": "3.500000\n19.990000"
  },
  {
    "question": "6.\n#include <stdio.h>\nint main() {\n  int x = 5;\n  ______= 2;\n  int sum = 5 / 2;\n  printf(\"%d\", sum);\n  return 0;\n}\n\nCorrect answer:",
    "choices": ["int y", "printf", "int y\nPrint y"],
    "correctAnswer": "int y",
    "output": "2"
  },
  {
    "question": "7.\n____#include <stdio.h>\nint main() {\n  int myNum = 100 + 50;\n  printf(\"%d\", myNum);\n  return 0;\n}\n\nCorrect answer:",
    "choices": ["%", "+", "#"],
    "correctAnswer": "#",
    "output": "150"
  },
  {
    "question": "8.\n#include <stdio.h>\nint main() {\n  printf(\"%d\", 10 > 9); \n // ______ 1 (true) because 10 is greater than 9\n  return 0;\n}\n\nCorrect answer:",
    "choices": ["1", "Returns", "true"],
    "correctAnswer": "Returns",
    "output": "1"
  },
  {
    "question": "9.\n#include <stdio.h>\nint main() {\n  if (20 > 18) {\n    ______(\"20 is greater than 18\");\n  }\n  return 0;\n}\n\nCorrect answer:",
    "choices": ["printf", "Println", "int main"],
    "correctAnswer": "printf",
    "output": "20 is greater than 18"
  },
  {
    "question": "10.\n#include <stdio.h>\nint main() {\n  short a;\n  long b;\n\n\n  printf(\"1.a)______ of short = %d bytes\\n\", sizeof(a));\n  printf(\"size of long = %d 1.b)______\\n\", sizeof(b));\n  return 0;\n}\n\nCorrect answer:\n",
    "choices": ["A.)\nSIZE\nsize\nSeize", "B.)\nbytes\nBits\nBeats"],
    "correctAnswer": "A.)\nSIZE\nsize\nSeize\nB.)\nbytes\nBits\nBeats",
    "output": "size of short = 2 bytes\nsize of long = 8 bytes"
  },
    
  ],
  "normal": [
   {
    "question": "1.\n#include <stdio.h>\nint main() 1.b)__\n  int 1.a)______ 15;\n  printf(\"%d\", myNum);\n  return 0;\n}\n\nCorrect answer\nmyNum =",
    "choices": ["A.)\nMynum≠", "myNum =", "mynumber -"],
    "correctAnswer": "myNum =",
    "output": "15"
  },
  {
    "question": "2.\n#include <stdio.h>\nint main() {\n    int number;\n    printf(\"Enter an integer: \");\n    1.a)______(\"%d\", &number);\n    // true if number is less than 0\n    if (number < 0) {\n        printf(\"You entered %d.1.b)______\", number);\n    }\n    printf(\"The if statement is easy.\"); for \n    return 0;\n}\n\nCorrect answer\nscanf\n\\n",
    "choices": ["A.)\nprintf()", "scanf", "Println()"],
    "correctAnswer": "scanf",
    "output": "WHAT IS THE SECOND ONE ?"
  },
  {
    "question": "2.\n#include <stdio.h>\nint main() {\n    int number;\n    printf(\"Enter an integer: \");\n    1.a)_scanf_(\"%d\", &number);\n    // true if number is less than 0\n    if (number < 0) {\n        printf(\"You entered %d.1.b)______\", number);\n    }\n    printf(\"The if statement is easy.\"); for \n    return 0;\n}\n\nCorrect answer\nscanf\n\\n",
    "choices": ["B.)\n/N", "\\n", "%d"],
    "correctAnswer": "\\n",
    "output": "Enter an integer: 6\nThe if statement is easy."
  },

  {
    "question": "3.\n#include <stdio.h>\nint main() {\n    int number1, number2;\n    printf(\"Enter two integers: \");\n    scanf(\"%d %d\", &number1, &number2);\n\n    if (number1 >= number2) {\n      if (number1 == number2) {\n        printf(\"Result: %d = %d\",number1,number2);\n      }\n      else {\n        printf(\"1.a)____> %d\", number1, number2);\n      }\n    }\n    else {\n        1.b)______(\"Result: %d < %d\",number1, number2);\n    }\n\n    return 0;\n}\n\nCorrect answer\nResult: %d ",
    "choices": ["A.)\nresult:&d", "Result: %d", "Result"],
    "correctAnswer": "Result: %d",
    "output": "WHAT IS THE SECOND ONE ?"
  },

  {
    "question": "3.\n#include <stdio.h>\nint main() {\n    int number1, number2;\n    printf(\"Enter two integers: \");\n    scanf(\"%d %d\", &number1, &number2);\n\n    if (number1 >= number2) {\n      if (number1 == number2) {\n        printf(\"Result: %d = %d\",number1,number2);\n      }\n      else {\n        printf(\"1.a)Result: %d>\", number1, number2);\n      }\n    }\n    else {\n        1.b)______(\"Result: %d < %d\",number1, number2);\n    }\n\n    return 0;\n}\n\nCorrect answer\nResult: %d ",
    "choices": ["B.)\nprintf", "println", "Print();"],
    "correctAnswer": "B.)\nprintf",
    "output": "Result: 2 < 7"
  },





  {
    "question": "// Print numbers from 1 to 10\n#include <stdio.h>\n\nint main() {\n  1.a)______\n  for (i = 1; i < 11; ++i)\n  {\n    printf(\"1.b)_____ \", i);\n  }\n  return 0;\n}\n\nCorrect answer:\nint i;\n%d",
    "choices": ["A.)\nInt", "int ;", "int i;"],
    "correctAnswer": "int i;",
    "output": "WHAT IS THE SECOND ONE ?"
  },


  {
    "question": "// Print numbers from 1 to 10\n#include <stdio.h>\n\nint main() {\n  1.a)__int i;__\n  for (i = 1; i < 11; ++i)\n  {\n    printf(\"1.b)_____ \", i);\n  }\n  return 0;\n}\n\nCorrect answer:\nint i;\n%d",
    "choices": ["B.)\n%d", "%m", "=="],
    "correctAnswer": "B.)\n%d",
    "output": "1 2 3 4 5 6 7 8 9 10"
  },




  {
    "question": "// Print numbers from 1 to 5\n\n#include <stdio.h>\nint main() {\n  int i = 1;\n    \n  1.a)_____ (i <= 5) {\n    printf(\"%d\\n\", i);\n1.b)_____  }\n\n  return 0;\n}\n\nCorrect answer:\nwhile\n    ++i;",
    "choices": ["A.)\nWhile", "while", "When"],
    "correctAnswer": "while",
    "output": "WHAT IS THE SECODE ONE ?"
  },
{
    "question": "// Print numbers from 1 to 5\n\n#include <stdio.h>\nint main() {\n  int i = 1;\n    \n  1.a)___while__ (i <= 5) {\n    printf(\"%d\\n\", i);\n1.b)_____  }\n\n  return 0;\n}\n\nCorrect answer:\nwhile\n    ++i;",
    "choices": ["B.)\nI++:", "++i;", "j==;"],
    "correctAnswer": "++i;",
    "output": "1\n2\n3\n4\n5"
  },





  {
    "question": "#include <stdio.h>\n\nint main() {\n  int my1.a)______= {25, 50, 75, 100};\n  int i;\n  \n  for (i = 0; i < 4; i++) {\n    printf(\"%d\\n\", 1.b)_______);\n  }\n \n  return 0;\n}\n\nCorrect answer\nNumbers[]",
    "choices": ["A.)\nnumber()", "Numbers[]", "Num[]"],
    "correctAnswer": "Numbers[]",
    "output": "25\n50\n75\n100"
  },
{
    "question": "#include <stdio.h>\n\nint main() {\n  int my1.a)___Numbers[]___= {25, 50, 75, 100};\n  int i;\n  \n  for (i = 0; i < 4; i++) {\n    printf(\"%d\\n\", 1.b)_______);\n  }\n \n  return 0;\n}\n\nCorrect answer\nNumbers[]",
    "choices": ["B.)\nMynumber()", "myNumbers[i]", "Int num()"],
    "correctAnswer": "myNumbers[i]",
    "output": "25\n50\n75\n100"
  },
    
  ],
  "hard": [
    {
      "question": "What is the output of the following code?\n\n```c\n#include <stdio.h>\n\nint main() {\n   int x = 10;\n   int *p = &x;\n   printf(\"%d\", *p++);\n   return 0;\n}\n```\n",
      "choices": ["10", "11", "Compiler error"],
      "correctAnswer": "10"
    },
    {
      "question": "What is the output of the following code?\n\n```c\n#include <stdio.h>\n\nint main() {\n   int arr[5];\n   printf(\"%d\", sizeof(arr));\n   return 0;\n}\n```\n",
      "choices": ["5", "20", "4" ],
      "correctAnswer": "20"
    },
    {
      "question": "What is the output of the following code?\n\n```c\n#include <stdio.h>\n\nint main() {\n   int arr[5] = {1, 2, 3, 4, 5};\n   int *p = &arr[1];\n   printf(\"%d\", *(p + 2));\n   return 0;\n}\n```\n",
      "choices": ["1", "2", "4","3"],
      "correctAnswer": "4"
    },
    {
      "question": "What is the output of the following code?\n\n```c\n#include <stdio.h>\n\nint main() {\n   char str[] = \"Hello World!\";\n   printf(\"%c\", str[5]);\n   return 0;\n}\n```\n",
      "choices": ["H", "Error", " "],
      "correctAnswer": " "
    },
    {
      "question": "What is the output of the following code?\n\n```c\n#include <stdio.h>\n\nint main() {\n   int x = 5;\n   printf(\"%d\", x++ + x++);\n   return 0;\n}\n```\n",
      "choices": ["10", "11", "Error" ],
      "correctAnswer": "11"
    },
    
  ]
},

  "html": {
  "easy": [
    
    {
      "question": "What is the correct HTML tag for the largest heading?",
      "choices": ["<h1>",  "<head>", "<heading>"],
      "correctAnswer": "<h1>"
    },
    {
      "question": "Which HTML attribute is used to define inline styles?",
      "choices": ["style", "class", "id", "font"],
      "correctAnswer": "style"
    },
    {
      "question": "Which HTML tag is used to define an unordered list?",
      "choices": ["<ul>", "<ol>", "<li>", "<list>"],
      "correctAnswer": "<ul>"
    },
    {
      "question": "What is the correct HTML tag for inserting a line break?",
      "choices": ["<br>", "<break>", "<lb>", "<newline>"],
      "correctAnswer": "<br>"
    }
  ],
  "normal": [
    {
      "question": "Which attribute specifies an alternate text for an image if the image cannot be displayed?",
      "choices": ["alt", "src", "title", "href"],
      "correctAnswer": "alt"
    },
   
  ],
  "hard": [
    
    {
      "question": "Which element is used to define the document's header section?",
      "choices": ["<header>", "<head>", "<top>"],
      "correctAnswer": "<head>"
    },
    
    {
      "question": "Which HTML tag is used to define a form?",
      "choices": ["<form>", "<input>", "<label>"],
      "correctAnswer": "<form>"
    },
    {
      "question": "What is the correct HTML tag for the smallest heading?",
      "choices": ["<h6>", "<head>", "<h7>"],
      "correctAnswer": "<h6>"
    }
  ],
},


"c++": {
  "easy": [
    {
      "question": "Which of the following is the correct way to include the <iostream> library in C++?",
      "choices": ["<iostream>", "<stdlib.h>", "<stdio.h>"],
      "correctAnswer": "<iostream>"
    },
    {
      "question": "What is the output of the following code?\n\n#include <iostream>\n\nint main() {\n  int x = 5;\n  std::cout << x;\n  return 0;\n}",
      "choices": ["5", "x", "std::cout"],
      "correctAnswer": "5"
    },
    {
      "question": "Which operator is used for the modulus division in C++?",
      "choices": ["%", "/", "*", "^"],
      "correctAnswer": "%"
    },
    {
      "question": "What is the result of the following expression in C++?\n\n7 / 2",
      "choices": ["3", "3.5", "3.0", "2"],
      "correctAnswer": "3"
    },
    {
      "question": "Which keyword is used to declare a variable in C++?",
      "choices": ["var", "int", "variable", "declare"],
      "correctAnswer": "int"
    }
  ],
  "normal": [
    {
      "question": "Which of the following is the correct way to declare a constant in C++?",
      "choices": ["const","constexpr", "constant"],
      "correctAnswer": "const"
    },
    {
      "question": "What is the output of the following code?\n\n#include <iostream>\n\nint main() {\n  int x = 2;\n  x *= 3;\n  std::cout << x;\n  return 0;\n}",
      "choices": ["2", "3", "6", "Error"],
      "correctAnswer": "6"
    },
    {
      "question": "Which data type is used to store a single character in C++?",
      "choices": ["char", "string", "float"],
      "correctAnswer": "char"
    },
    {
      "question": "What is the result of the following expression in C++?\n\n3 + 2 * 4",
      "choices": ["11", "20", "9", "14"],
      "correctAnswer": "11"
    },
    {
      "question": "Which operator is used for logical AND in C++?",
      "choices": ["&&", "&", "||", "|"],
      "correctAnswer": "&&"
    }
  ],
  "hard": [
    {
      "question": "What is the output of the following code?\n\n#include <iostream>\n\nint main() {\n  int x = 10;\n  std::cout << ++x;\n  return 0;\n}",
      "choices": ["9", "10", "11", "Error"],
      "correctAnswer": "11"
    },
    {
      "question": "What is the output of the following code?\n\n#include <iostream>\n\nint main() {\n  int x = 5;\n  std::cout << x++;\n  return 0;\n}",
      "choices": ["5", "6", "0", "Error"],
      "correctAnswer": "5"
    },
    {
      "question": "Which operator is used for string concatenation in C++?",
      "choices": ["+", "*", "/", "-"],
      "correctAnswer": "+"
    },
    {
      "question": "Which library is used for input and output operations in C++?",
      "choices": ["<iostream>", "<stdlib.h>","<iomanip>"],
      "correctAnswer": "<iostream>"
    },
    {
      "question": "What is the result of the following expression in C++?\n\n10 / 3",
      "choices": ["3", "3.33", "3.0", "3.1"],
      "correctAnswer": "3"
    }
  ],
},



  "js": {
      "easy": [
    {
      "question": "Which keyword is used to declare a variable in JavaScript?",
      "choices": ["var", "int", "variable"],
      "correctAnswer": "var"
    },
    {
      "question": "What is the output of the following code?\n\nconsole.log(5 > 3);",
      "choices": ["true", "false", "NaN"],
      "correctAnswer": "true"
    },
   
    {
      "question": "Which built-in method returns the length of a string?",
      "choices": ["length()", "size()", "count()"],
      "correctAnswer": "length()"
    },
    {
      "question": "Which operator is used to concatenate strings in JavaScript?",
      "choices": ["+", "*", "-", "/"],
      "correctAnswer": "+"
    },
  ],
  "normal": [
    {
      "question": "What is the output of the following code?\n\nconsole.log(typeof 42);",
      "choices": ["number", "string", "boolean"],
      "correctAnswer": "number"
    },
    {
      "question": "Which method is used to remove the last element from an array in JavaScript?",
      "choices": ["pop()", "shift()", "remove()"],
      "correctAnswer": "pop()"
    },
    
    
    {
      "question": "Which function is used to convert a string to an integer in JavaScript?",
      "choices": ["parseInt()", "toString()", "toFixed()"],
      "correctAnswer": "parseInt()"
    },
    {
      "question": "What is the output of the following code?\n\nconsole.log(3 === '3');",
      "choices": ["true", "false", "NaN"],
      "correctAnswer": "false"
    },
  ],
  "hard": [
    {
      "question": "What will be the output of the following JavaScript code?\n\nconsole.log(2 + '2');",
      "choices": ["22", "TypeError", "NaN"],
      "correctAnswer": "22"
    },
    {
      "question": "What is the output of the following code?\n\nconsole.log(typeof NaN);",
      "choices": ["number", "string", "NaN"],
      "correctAnswer": "number"
    },
    
    {
      "question": "Which method is used to add new elements to the beginning of an array in JavaScript?",
      "choices": ["unshift()", "push()", "add()"],
      "correctAnswer": "unshift()"
    },
    {
      "question": "What is the output of the following code?\n\nconsole.log(5 + true);",
      "choices": ["6", "5", "TypeError" ],
      "correctAnswer": "6"
    }
  ],
},  

  "java": {
  "easy": [
    {
      "question": "Which keyword is used to define a class in Java?",
      "choices": ["class", "public", "void"],
      "correctAnswer": "class"
    },
    {
      "question": "What is the output of the following code?\n\nint x = 10;\nint y = 5;\nSystem.out.println(x + y);",
      "choices": ["10", "5", "15", "Error"],
      "correctAnswer": "15"
    },
    {
      "question": "Which data type is used to store a single character in Java?",
      "choices": ["char", "string", "int"],
      "correctAnswer": "char"
    },
    {
      "question": "Which operator is used for logical AND in Java?",
      "choices": ["&&", "||", "!", "&"],
      "correctAnswer": "&&"
    },
    {
      "question": "What is the default value of an uninitialized numeric variable in Java?",
      "choices": ["0", "1", "null", "NaN"],
      "correctAnswer": "0"
    }
  ],
  "normal": [
    {
      "question": "Which keyword is used to define a method that does not return a value in Java?",
      "choices": ["void", "null","int"],
      "correctAnswer": "void"
    },
    {
      "question": "What is the output of the following code?\n\nString name = \"John\";\nSystem.out.println(name.length());",
      "choices": ["4", "0", "5", "Error"],
      "correctAnswer": "4"
    },
    {
      "question": "Which data structure in Java is used to store elements in key-value pairs?",
      "choices": ["HashMap", "ArrayList","HashSet"],
      "correctAnswer": "HashMap"
    },
   
    {
      "question": "Which control structure is used to execute a block of code repeatedly as long as a condition is true in Java?",
      "choices": ["while loop", "for loop", "if statement"],
      "correctAnswer": "while loop"
    }
  ],
  "hard": [
    {
      "question": "What is the output of the following Java code?\n\nint x = 5;\nSystem.out.println(++x);",
      "choices": ["4", "5", "6", "Error"],
      "correctAnswer": "6"
    },
    {
      "question": "What is the output of the following code?\n\nString str = \"Hello\";\nstr.concat(\" World!\");\nSystem.out.println(str);",
      "choices": ["Hello", "World!", "Hello World!"],
      "correctAnswer": "Hello"
    },
    
    {
      "question": "Which method is used to convert a string to an integer in Java?",
      "choices": ["Integer.parseInt()", "toString()", "Math.round()"],
      "correctAnswer": "Integer.parseInt()"
    },
    {
      "question": "What is the output of the following code?\n\nSystem.out.println(Math.floor(2.99));",
      "choices": ["2", "3", "2.0", "3.0"],
      "correctAnswer": "2.0"
    }
  ],
},

  "python": {
  "easy": [
   
    {
      "question": "What is the output of the following code?\n\nx = 5\ny = 3\nprint(x + y)",
      "choices": ["2", "5", "8", "15"],
      "correctAnswer": "8"
    },
    {
      "question": "Which data type is used to store a sequence of characters in Python?",
      "choices": ["string", "float", "boolean"],
      "correctAnswer": "string"
    },
    {
      "question": "What is the result of the following expression in Python?\n\n5 * 2 + 3",
      "choices": ["10", "11", "13", "15"],
      "correctAnswer": "13"
    },
    {
      "question": "Which operator is used for exponentiation in Python?",
      "choices": ["**", "//", "%", "++"],
      "correctAnswer": "**"
    }
  ],
  "normal": [
    {
      "question": "Which function is used to get the length of a list in Python?",
      "choices": ["len()", "size()", "count()"],
      "correctAnswer": "len()"
    },
    {
      "question": "What is the output of the following code?\n\nfruits = ['apple', 'banana', 'cherry']\nprint(fruits[1])",
      "choices": ["apple", "banana", "cherry"],
      "correctAnswer": "banana"
    },
    {
      "question": "Which method is used to convert a string to lowercase in Python?",
      "choices": ["lower()", "upper()", "swapcase()"],
      "correctAnswer": "lower()"
    },
    {
      "question": "What is the result of the following expression in Python?\n\n12 / 5",
      "choices": ["2.4", "2.5", "2", "2.0"],
      "correctAnswer": "2.4"
    },
    {
      "question": "Which operator is used for floor division in Python?",
      "choices": ["/", "//", "%", "**"],
      "correctAnswer": "//"
    }
  ],
  "hard": [
    {
      "question": "What is the output of the following Python code?\n\nx = 10\ny = 5\nprint(x % y)",
      "choices": ["2", "5", "10", "0"],
      "correctAnswer": "0"
    },
    {
      "question": "What is the output of the following code?\n\nnums = [1, 2, 3]\nnums.append([4, 5])\nprint(len(nums))",
      "choices": ["3", "4", "5", "6"],
      "correctAnswer": "4"
    },
    {
      "question": "Which method is used to remove whitespace from both ends of a string in Python?",
      "choices": ["strip()", "rstrip()", "lstrip()"],
      "correctAnswer": "strip()"
    },
    {
      "question": "What is the result of the following expression in Python?\n\n3 + 2 * 4",
      "choices": ["9", "14", "20", "11"],
      "correctAnswer": "11"
    },
    {
      "question": "Which operator is used for string concatenation in Python?",
      "choices": ["+", "*", "/", "-"],
      "correctAnswer": "+"
    }
  ],
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
    choice.style.marginRight = "20px"; // Add some margin between buttons
    choice.style.padding = "15px";
    choice.style.fontSize = "20px";
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
    resultElement.style.fontSize = "20px";
    resultElement.style.color = "#39FF14";
    resultElement.style.fontFamily = "rockwell";
    score++;

    // Add glow effect
    resultElement.style.textShadow = "0 0 15px #39FF14, 0 0 20px red, 0 0 20px blue";
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
