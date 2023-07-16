const quizData = {
  "c": {
  "easy": [
    {
    "question": "1.\n#include <stdio.h> \n __ main() { \n  printf(\"Hello World!\"); \n return 0; }\n\nCorrect answer:",
    "choices": ["int", "<", "*Printf"],
    "correctAnswer": "int" ,
    "output": "Hello World!"
  },
  {
    "question": "2.\n#include <stdio.h> \n int main___ { \n  printf(\"Hello students!\"); \n  printf(\"Im here to teach C programming.\"); \n return 0; }\n\nCorrect answer:",
    "choices": ["printf", "()","int"],
    "correctAnswer": "()",
    "output": "Hello students!Im here to teach C programming."
  },
  {
    "question": "3.\n#include <stdio.h>\nint main() {\n  printf(\"Hello Teacher!____\");\n  printf(\"I am learning C.\\nAnd it is awesome!\");\n  return 0;\n}\n\nCorrect answer:",
    "choices": ["I'm", "You", "And"],
    "correctAnswer": "\\n",
    "output": "Hello Teacher!\nI am learning C.\nAnd it is awesome!"
  },
  {
    "question": "4.\n#include <stdio.h>\nint main() {\n  int ____ = 15;\n  printf(\"%d\", myNum);\n  return 0;\n}\n\nCorrect answer:",
    "choices": ["main", "myNum", "int"],
    "correctAnswer": "myNum",
    "output": "15"
  },
  {
    "question": "5.\n#include <stdio.h>\nint main() {\n  float my__Num = 3.5;\n  double myDoubleNum = 19.99;\n  printf(\"%f\\n\", myFloatNum);\n  printf(\"%If\", myDoubleNum);\n  return 0;\n}\n\nCorrect answer:",
    "choices": ["Loaf", "Float", "float"],
    "correctAnswer": "Float",
    "output": "3.500000\n19.990000"
  },
  {
    "question": "6.\n#include <stdio.h>\nint main() {\n  int x = 5;\n  ______= 2;\n  int sum = 5 / 2;\n  printf(\"%d\", sum);\n  return 0;\n}\n\nCorrect answer:",
    "choices": ["int y", "sum", "int x"],
    "correctAnswer": "int y",
    "output": "2"
  },
  {
    "question": "7.\n____include <stdio.h>\nint main() {\n  int myNum = 100 + 50;\n  printf(\"%d\", myNum);\n  return 0;\n}\n\nCorrect answer:",
    "choices": ["%", "+", "#"],
    "correctAnswer": "#",
    "output": "150"
  },
  {
    "question": "8.\n#include <stdio.h>\nint main() {\n  printf(\"%d\", 10 > 9); \n // ______ 1 (true) because 10 is greater than 9\n  return 0;\n}\n\nCorrect answer:",
    "choices": ["1", "Returns", "10"],
    "correctAnswer": "Returns",
    "output": "1"
  },
  {
    "question": "9.\n#include <stdio.h>\nint main() {\n  if (20 > 18) {\n    ______(\"20 is greater than 18\");\n  }\n  return 0;\n}\n\nCorrect answer:",
    "choices": ["printf", "int", "main"],
    "correctAnswer": "printf",
    "output": "20 is greater than 18"
  },
  {
    "question": "10.\n#include <stdio.h>\nint main() {\n  short a;\n  long b;\n\n\n  printf(\"1.a)______ of short = %d bytes\\n\", sizeof(a));\n  printf(\"size of long = %d 1.b)______\\n\", sizeof(b));\n  return 0;\n}\n\nCorrect answer:\n",
    "choices": ["SIZE","size","Size"],
    "correctAnswer": "size",
    "output": "size of short = 2 bytes\nsize of long = 8 bytes"
  },
  // ADD QUIZ HERE
    
  ],
  "normal": [
   {
    "question": "1.\n#include <stdio.h>\nint main() 1.b)__\n  int 1.a)myNum = 15;\n  printf(\"%d\", myNum)____\n  return 0;\n}\n",
    "choices": ["A.)\n;", ", ", ";"],
    "correctAnswer": ",",
    "output": "15"
  },
  {
    "question": "2.\n#include <stdio.h>\nint main() {\n    int number;\n    printf(\"Enter an integer: \");\n    1.a)____(\"%d\", &number);\n    // true if number is less than 0\n    if (number < 0) {\n        printf(\"You entered %d.1.b)______\", number);\n    }\n    printf(\"The if statement is easy.\"); for \n    return 0;\n}\n",
    "choices": [",", "scanf", "Print"],
    "correctAnswer": "scanf",
    "output": "WHAT IS THE SECOND ONE ?"
  },
  {
    "question": "2.\n#include <___.h>\nint main() {\n    int number;\n    printf(\"Enter an integer: \");\n    1.a)_scanf_(\"%d\", &number);\n    // true if number is less than 0\n    if (number < 0) {\n        printf(\"You entered %d.1.b)______\", number);\n    }\n    printf(\"The if statement is easy.\"); for \n    return 0;\n}\n",
    "choices": ["scan", "stdio", "%d"],
    "correctAnswer": "stdio",
    "output": "Enter an integer: 6\nThe if statement is easy."
  },

  {
    "question": "3.\n#include <stdio.h>\n______ main() {\n    int number1, number2;\n    printf(\"Enter two integers: \");\n    scanf(\"%d %d\", &number1, &number2);\n\n    if (number1 >= number2) {\n      if (number1 == number2) {\n        printf(\"Result: %d = %d\",number1,number2);\n      }\n      else {\n        printf(\"1.a)Result: %d> %d\", number1, number2);\n      }\n    }\n    else {\n        1.b)printf(\"Result: %d < %d\",number1, number2);\n    }\n\n    return 0;\n}\n",
    "choices": ["}", "int", "0"],
    "correctAnswer": "int",
    "output": "WHAT IS THE SECOND ONE ?"
  },

  {
    "question": "3.\n#include <stdio.h>\n_int_ main() {\n    int number1, number2;\n    printf(\"Enter two integers: \");\n    scanf(\"%d ___\", &number1, &number2);\n\n    if (number1 >= number2) {\n      if (number1 == number2) {\n        printf(\"Result: %d = %d\",number1,number2);\n      }\n      else {\n        printf(\"1.a)Result: %d>\", number1, number2);\n      }\n    }\n    else {\n        1.b)printf(\"Result: %d < %d\",number1, number2);\n    }\n\n    return 0;\n}\n",
    "choices": ["%d", "int", "+"],
    "correctAnswer": "%d",
    "output": "Result: 2 < 7"
  },





  {
    "question": "// Print numbers from 1 to 10\n#include <stdio.h>\n\nint main() {\n  1.a)______\n  for (i = 1; i < 11; ++i)\n  {\n    printf(\"1.b)_____ \", i);\n  }\n  return 0;\n}\n",
    "choices": ["Int", "int ;", "int i;"],
    "correctAnswer": "int i;",
    "output": "WHAT IS THE SECOND ONE ?"
  },


  {
    "question": "// Print numbers from 1 to 10\n#include <stdio.h>\n\nint main() {\n  1.a)__int i;__\n  for (i = 1; i < 11; ++i)\n  {\n    printf(\"1.b)_____ \", i);\n  }\n  return 0;\n}\n",
    "choices": ["%d", "%m", "=="],
    "correctAnswer": "%d",
    "output": "1 2 3 4 5 6 7 8 9 10"
  },




  {
    "question": "// Print numbers from 1 to 5\n\n#include <stdio.h>\nint main() {\n  int i = 1;\n    \n  1.a)_____ (i <= 5) {\n    printf(\"%d\\n\", i);\n1.b)_____  }\n\n  return 0;\n}\n",
    "choices": ["for", "while", "When"],
    "correctAnswer": "while",
    "output": "WHAT IS THE SECODE ONE ?"
  },


{
    "question": "// Print numbers from 1 to 5\n\n#include <stdio.h>\nint main() {\n  int i = 1;\n    \n  1.a)___while__ (i <= 5) {\n    printf(\"%d\\n\", i);\n1.b)_____  }\n\n  return 0;\n}\n",
    "choices": ["++:", "++i;", "j==;"],
    "correctAnswer": "++i;",
    "output": "1\n2\n3\n4\n5"
  },





  {
    "question": "#include <stdio.h>\n\nint main() {\n  int my1.a)______[]= {25, 50, 75, 100};\n  int i;\n  \n  for (i = 0; i < 4; i++) {\n    printf(\"%d\\n\", 1.b)_______);\n  }\n \n  return 0;\n}\n",
    "choices": ["()", "Numbers", ";"],
    "correctAnswer": "Numbers",
    "output": "what is the next one ?"
  },



{
    "question": "#include <stdio.h>\n\nint main() {\n  int my1.a)___Numbers[]___= {25, 50, 75, 100};\n  int i;\n  \n  for (i = 0; i < 4; i++) {\n    printf(\"%d\\n\", 1.b)myNumbers____);\n  }\n \n  return 0;\n}\n",
    "choices": ["number", "[i]", "("],
    "correctAnswer": "[i]",
    "output": "25\n50\n75\n100"
  },

  // ADD QUIZ HERE
  // ADD QUIZ HERE
  // ADD QUIZ HERE
    
  ],
  "hard": [
    
    {
      "question": "What is the output of the following code?\n\n```c\n#include <stdio.h>\n\nint main() {\n   int arr[5];\n   printf(\"%d\", sizeof(arr));\n   return 0;\n}\n```\n",
      "choices": ["5", "20", "4" ],
      "correctAnswer": "20",
      "output": "20"
    },

     {
      "question": "What is the missin code of the following?\n\n```c\n#include <stdio.h>\n\nint main() {\n   int arr[5];\n   printf(\"%d\", sizeof(arr));\n  _____\n}\n```\n",
      "choices": ["5", "return 0;", "4" ],
      "correctAnswer": "return 0;",
      "output": "return 0"
    },


    {
      "question": "What is the output of the following code?\n\n```c\n#include <stdio.h>\n\nint main() {\n   int arr[5] = {1, 2, 3, 4, 5};\n   int *p = &arr[1];\n   printf(\"%d\", *(p + 2));\n   return 0;\n}\n```\n",
      "choices": ["1", "2", "4","3"],
      "correctAnswer": "4",
      "output": "4"
    },
    {
      "question": "What is the output of the following code?\n\n```c\n#include <stdio.h>\n\nint main() {\n   char str[] = \"Hello World!\";\n   printf(\"%c\", str[5]);\n   return 0;\n}\n```\n",
      "choices": ["H", "Error", " "],
      "correctAnswer": " ",
      "output": " "
    },
    {
      "question": "What is the output of the following code?\n\n```c\n#include <stdio.h>\n\nint main() {\n   int x = 5;\n   printf(\"%d\", x++ + x++);\n   return 0;\n}\n```\n",
      "choices": ["10", "11", "Error" ],
      "correctAnswer": "11",
      "output": "11"
    },
    // ADD QUIZ HERE
    // ADD QUIZ HERE
    // ADD QUIZ HERE
    
  ]
},

  "html": {
  "easy": [
    
  {
    question: '1. <____DOCTYPE html>\n<html>\n    <head>\n    <title>First Web Page</title>\n</head>\n<body>Hello World!</body>\n</html>\nOutput:\nHello World!',
    correctAnswer: '!',
    choices: ['?', '!', '#'],
    output:"Hello World!"
  },
  {
    question: '2. html document\n<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n<h1>The Car<____ >\n<p>The Car type is honda and its color red.</p>\n</body>\n</html>\nOutput:\nThe Car\nThe Car type is honda and its color red.\n',
    correctAnswer: '/h1',
    choices: ['/H1', 'h1', '/h1'],
    output:"The Car\nThe Car type is honda and its color red."
  },
  {
    question: '3. html links\n<!DOCTYPE html>\n<html>\n<body>\n<h2> HTML _____</h2>\n<a href="https://www.identicode.com">\nidenticode</a>\n</body>\n</html>\nOutput:\nHTML Links\nidenticode\n',
    correctAnswer: 'Links',
    choices: ['"Links"', 'links', 'Links'],
    output:"HTML Links\nidenticode"
  },
  {
    question: '4. html image\n<!DOCTYPE html>\n<html>\n<body>\n<h2> HTML Images</h2>\n<img src= "https:\n//upload.wikimedia.org/\nwikipedia/commons\n/thumb/7/74/\nA-Cat.jpg/1200px-A-Cat.\njpg?20101227100718"\n_______="300"\nheight="200.75">\n</body>\n</html>\nOutput:\nHTML Images\n',
    correctAnswer: 'width',
    choices: ['widht', 'width', 'px'],
    output:"HTML Images width"
  },
  {
    question: '5. html image\n<!DOCTYPE html>\n<html>\n<body>\n\n<h2>HTML Image</h2>\n<img src__"pic_trulli.jpg" alt="Trulli" \nwidth="500" \nheight="333">\n\n</body>\n</html>\nOutput:\nHTML Image\n',
    correctAnswer: '=',
    choices: ['=', ':', '-'],
    output:"HTML Image"
  },
  {
    question: '6. html Button\n<!DOCTYPE html>\n<html>\n<body>\n<h2>HTML Buttons\n</h2><p>HTML buttons\n are defined \nwith the button\n tag:</p><button>\nClick me<______\n ></body></html>\nOutput:\nHTML Buttons\nHTML buttons\n are defined \nwith the button tag:\n(Click me)\n',
    correctAnswer: '/button',
    choices: ['/button', '</p>', '</>'],
    output:"HTML Buttons\nHTML buttons are defined \nwith the button tag:\n(Click me)"
  },
  {
    question: '<!DOCTYPE>\n<html>\n<body>\n<h2>An Unordered HTML List</h2>\n<ul>\n  <li>Coffee</li>\n  <li>Tea</li>\n  <li>Milk<___>\n</ul>  \n</body>\n</html>\nOutput:\nAn Unordered HTML List\nCoffee\nTea\nMilk\n',
    correctAnswer: '/li',
    choices: ['/Li', 'li', '/li'],
    output:"An Unordered HTML List\n .Coffee\n.Tea\n.Milk"
  },
  {
    question: '<!DOCTYPE html>\n<html>\n<body>\n\n<!-- This is a comment -->\n______This is a paragraph.</p>\n<!-- Comments are not displayed in the browser -->\n\n</body>\n</html>\nOutput:\nThis is a paragraph\n',
    correctAnswer: '<p>',
    choices: ['<h1>', '</h>', '<p>'],
    output:"This is a paragraph "
  },
  {
    question: '<!DOCTYPE html>\n<html>\n<body>\n<h2>HTML\n Links</h2>\n<p>HTML links\n are defined \nwith the a \ntag:</p>\n<a________"https://\nwww.Identicode.com\n">Identicode</a>\n</body>\n</html>\n\nOutput:\nHTML Links\nHTML links \nare defined with\n the a tag:\n\nIdenticode\n',
    correctAnswer: 'href=',
    choices: ['body', 'href=', '<div'],
    output:"HTML Links\n"
  },
  {
    question: '1. <!DOCTYPE html__\n<html>\n    <head>\n    <title>First Web Page</title>\n</head>\n<body>Hello World!</body>\n</html>\nOutput:\nHello World!',
    correctAnswer: '>',
    choices: ['!', '>', '#'],
    output:"Hello World!"
  },


  // ADD QUIZ HERE
  // ADD QUIZ HERE
  // ADD QUIZ HERE


],
  "normal": [
    {
        'question': '1. <!DOCTYPE html>\n<html><body>\n<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>\n\n</body></html>',
        'choices': ['<Body>', '</body>', '<body>'],
        'correctAnswer': '<body>',
        'output': 'What is the second one ?'
    },
    {
        'question': '1. <!DOCTYPE html>\n<html>\nn___<body>__\n\n<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>\n<h6>Heading 6</h6>\n\n</body>\n</html>',
        'choices': ['</Html>', '<html>', '</html>'],
        'correctAnswer': 'b.) </html>',
        'output': 'Heading 1\nHeading 2\nHeading 3\nHeading 4\nHeading 5\nHeading 6'
    },

    {
        'question': '<!DOCTYPE html>\n<html>\n<body>\n\n1a.)__I am normal</p>\n<p style="color:red;">I am red</p>\n<p style="color:blue;">I am blue</p>\n<p style="1b.)________50px;">I am big</p>\n\n</body>\n</html>\n ',
        'choices': ['a.) <P>', 'a.) <p>', 'a.) </p>'],
        'correctAnswer': 'a.) <p>',
        'output': 'what is the second one ?'
    },
    {
        'question': '<!DOCTYPE html>\n<html>\n<body>\n\n1a.)__<p>__I am normal</p>\n<p style="color:red;">I am red</p>\n<p style="color:blue;">I am blue</p>\n<p style="1b.)________50px;">I am big</p>\n\n</body>\n</html>\n ',
        'choices': [ 'b.) font-size:', 'b.) font-size;', 'b.) Font-size:'],
        'correctAnswer': 'b.) font-size:',
        'output': 'I am normal\nI am red\nI am blue\nI am big'
    },




    {
        'question': '<!DOCTYPE html>\n<html>\n<body>\n\n<h1 style="background1a.)_______:\npowderblue;">This is a \nheading</h1><p style=1b.)\n___________-color:tomato;">\nThis is a paragraph.</p>\n</body>\n</html>\n ',
        'choices': ['a.) -Color:', 'a.) color;', 'a.) color:'],
        'correctAnswer': 'a.) color:',
        'output': 'what is the second one ? '
    },
    {
        'question': '<!DOCTYPE html>\n<html>\n<body>\n\n<h1 style="background-1a.)____color___:\npowderblue;">This is a \nheading</h1><p style=background1b.)\n_____color:tomato;">\nThis is a paragraph.</p>\n</body>\n</html>\n ',
        'choices': ['b.) "image:', 'b.) background', 'b.) "-'],
        'correctAnswer': 'b.) "-',
        'output': 'This is a heading\nThis is a paragraph.'
    },




    {
        'question': '<!DOCTYPE html>\n<html>\n<body>\n\n<p>1a.)___This text is \nbold</b></p>\n<p><i>This text \nis italic</i></p>\n<p>This is1b.)______ subscript</sub>\n and <sup>superscript\n</sup></p>\n\n</body>\n</html>\n ',
        'choices': ['a.) </b>', 'a.) <B>', 'a.) <b>'],
        'correctAnswer': 'a.) <b>',
        'output': 'what is the second one ? '
    },
    {
        'question': '<!DOCTYPE html>\n<html>\n<body>\n\n<p>1a.)__ <b>___This text is\n bold</b></p>\n<p><i>This text \nis italic</i></p>\n<p>This is1b.)______ subscript</sub>\n and <sup>superscript\n</sup></p>\n\n</body>\n</html>\n ',
        'choices': ['b.) </sub>', 'b.) <Sub>', 'b.) <sub>'],
        'correctAnswer': 'b.) <sub>',
        'output': 'This text is bold\nThis text is italic\nThis is subscript and superscript'
    },




    {
        'question': '<!DOCTYPE html>\n<html>\n<body>\n\n<h2>Absolute ____</h2>\n<p><a href="https\n://www.w3.org/">\nW3C</a></p>\n<p><a href__"https://www\n.google.com/">Google</a></p>\n\n<h2>Relative URLs</h2>\n<p><a href="html_images.asp">\nHTML Images</a></p>\n<p><a href="/css/default.asp">\nCSS Tutorial</a></p>\n\n</body>\n</html>\n',
        'choices': ['a.) </h2>', 'a.) url', 'a.) URLs'],
        'correctAnswer': 'a.) URLs',
        'output': 'what is the second one ? '
    },
    {
        'question': '<!DOCTYPE html>\n<html>\n<body>\n\n<h2>Absolute URLs</h2>\n<p><a href="https\n://www.w3.org/">\nW3C</a></p>\n<p><a href="https://www\n.google.com/">Google</a></p>\n\n<h2>Relative URLs</h2>\n<p><a href="html_images.asp">\nHTML Images</a></p>\n<p><a href="/css/default.asp">\nCSS Tutorial</a></p>\n\n</body>\n</html>',
        'choices': ['b.) =', 'b.) ==', 'b.) href'],
        'correctAnswer': 'b.) =',
        'output': 'Absolute URLs\nW3C\nGoogle\nRelative URLs\nHTML Images\nCSS Tutorial'
    },




    {
        'question': '<!DOCTYPE html>\n____\n<body>\n\n<h2>Link to an Email Address</h2\>\n\n<p>To create a link \nthat opens in the user\'s email program\n (to let them send a new email),\n use mailto: inside the href\n attribute:</p>\n\n<p><a href="mailto:someone@example.com\n">Send email_____</p>\n\n</body>\n</html>\n',
        'choices': ['a.) <h1>', 'a.) html', 'a.) <html>'],
        'correctAnswer': 'a.) <html>',
        'output': 'what is the second one ?'
     },
    {
        'question': '<!DOCTYPE html>\n<html>\n<body>\n\n<h2>Link to an Email Address</h2>\n\n<p>To create a link\n that opens in the user\'s email program \n(to let them send a new email),\n use mailto: inside the href\n attribute:</p>\n\n<p><a href="mailto:someone@example.com\n">Send email_____</p>\n\n</body>\n</html>\n',
        'choices': ['b.) /a', 'b.) </a>', 'b.) <a>'],
        'correctAnswer': 'b.) </a>',
        'output': 'Link to an Email Address\nTo create a link that opens in the user\'s email program (to let them send a new email), use mailto: inside the href attribute:\nSend email'
    },




    {
        'question': '<!DOCTYPE html>\n<html>\n<head>\n<style>\n1a.)___myHeader {\n  background-color: lightblue;\n  color: black;\n  padding: 40px;\n  1b.)______ center;\n} \n</style>\n</head>\n<body>\n\n<h2>The id Attribute</h2>\n<p>Use CSS to style an element \n with the id "myHeader":</p>\n\n<h1 id="myHeader">My Header</h1>\n\n</body>\n</html>\n',
        'choices': ['a.) (', 'a.) #', 'a.) {'],
        'correctAnswer': 'a.) #',
        'output': 'what is the second one ?'
    },

    {
        'question': '<!DOCTYPE html>\n<html>\n<head>\n<style>\n1a.)#myHeader{\n  background-color: lightblue;\n  color: black;\n  padding: 40px;\n  1b.)text-______ center;\n} \n</style>\n</head>\n<body>\n\n<h2>The id Attribute</h2>\n<p>Use CSS to style an element \nwith the id "myHeader":</p>\n\n<h1 id="myHeader">My Header</h1>\n\n</body>\n</html>\n',
        'choices': ['b.) color', 'b.) size', 'b.) align:'],
        'correctAnswer': 'b.) align:',
        'output': 'The id Attribute\nUse CSS to style an element with the id "myHeader":\nMy Header'
    },







    {
        'question': '<!DOCTYPE html>\n<html>\n<body>\n\n<h1>My First JavaScript</h1>\n\n<p>JavaScript can change the\n content of an HTML element:</p>\n\n<button type="button" \nonclick="myFunction()">\nClick Me!</button>\n\n<p id="demo">This is a demonstration.</p>\n\n<script>\nfunction myFunction() { \n  document.getElementById\n("demo")__innerHTML = "Hello JavaScript!";\n____\n</script>\n\n</body>\n</html>\n',
        'choices': ['a.()', '1a \n.', 'a.)'],
        'correctAnswer': '1a \n.',
        'output': 'what is the second one ? '
    },
     {
        'question': '<!DOCTYPE html>\n<html>\n<body>\n\n<h1>My First JavaScript</h1>\n\n<p>JavaScript can change the\n content of an HTML element:</p>\n\n<button type="button" \nonclick="myFunction()">\nClick Me!</button>\n\n<p id="demo">This is a demonstration.</p>\n\n<script>\nfunction myFunction() { \n  document.getElementById\n("demo").innerHTML = "Hello JavaScript!";\n____\n</script>\n\n</body>\n</html>\n',
        'choices': ['b.()', 'b.}', 'b.)'],
        'correctAnswer': 'b.}',
        'output': 'My First JavaScript\nJavaScript can change the content of an HTML element:\nClick Me!\nThis is a demonstration.'
    },



    {
        'question': '<!DOCTYPE html>\n<html>\n<body>\n\n<h1>My First JavaScript</h1>\n\n<button 1a.)________"button"\nonclick="document.\ngetElementById(\'demo\').\ninnerHTML = Date()">\nClick me to display Date\n and Time.</button>\n\n<p id=1b.)________></p>\n\n</body>\n</html>\n',
        'choices': ['a.) type=', 'a.) Type=', 'a.) type='],
        'correctAnswer': 'a.) type=',
        'output': 'what is the second one ? '
    },

    {
        'question': '<!DOCTYPE html>\n<html>\n<body>\n\n<h1>My First JavaScript</h1>\n\n<button 1a.)________"button"\nonclick="document.\ngetElementById(\'demo\').\ninnerHTML = Date()">\nClick me to display Date\n and Time.</button>\n\n<p id=1b.)________></p>\n\n</body>\n</html> ',
        'choices': ['b.) "Demo"', 'b.) \'demo\'', 'b.) "demo"'],
        'correctAnswer': 'b.) "demo"',
        'output': 'My First JavaScript\nClick me to display Date and Time.'
    },
    // ADD QUIZ HERE// ADD QUIZ HERE

],
  "hard": [
    
    {
    question: `1. Which code snippet correctly assigns values to variables x, y, and z? \n
    
    <code>\n
    x = 5;\n
    y = 6;\n
    z = x + y;\n
    </code>`,
    choices: ["<code>", "<h1>", "<q>"],
    correctAnswer: "<code>",
    output: "<code>"
  },
  {
    question: `2. What is the correct way to display an email address and link it to "hege@example.com"?

    <footer>
      <p>Author: Hege Refsnes</p>
      <p><a href="mailto:hege@example.com">hege@example.com________</p>
    </footer>`,
    choices: ["</a>", "<a>", "</footer>"],
    correctAnswer: "</a>",
    output: "<footer><p>Author: Hege Refsnes</p><p><a href=______\"mailto:hege@example.com\">hege@example.com</a></p></footer>`"
  },
  {
    question: `3. How can you create a navigation menu with HTML, CSS, JavaScript, and jQuery?

    <nav>
      <a href="/html/">HTML</a> |
      <a href="/css/">CSS</a> |
      <a href="/js/">JavaScript</a> |
      <a href="/jquery/">________</a>
    </nav>`,
    choices: ["<a href=\"/html/\">", "<a href= Html", "jQuery"],
    correctAnswer: "jQuery",
    output:"<nav><a href=\"/html/\">HTML</a> | <a href=\"/css/\">CSS</a> | <a href=\"/js/\">JavaScript</a> |<a href=\"/jquery/\">jQuery</a>"
  },
  {
    question: `4. What HTML entity represents the yen sign?

    <h1>HTML Entity Example</h1>

    <h2>The yen sign: ________;</h2>`,
    choices: ["&yen", "&copy;", "&amp;"],
    correctAnswer: "&yen",
    output: "<h1>HTML Entity Example</h1>\n<h2>The yen sign:&yen;</h2>"
  },
  {
    question: `5. How can you display the copyright sign using HTML entities?

    <h1>HTML Entity Example</h1>

    <h2>The copyright sign: &copy; ________`,
    choices: ["</h2>", "</body>", "<h>"],
    correctAnswer: "</h2>",
    output:"<h1>HTML Entity Example</h1>\n<h2>The copyright sign: &copy;</h2>"
  },
  {
    question: `6. How can you display the letter "a" with an acute accent using HTML special characters?

    <h1>HTML Special Character Example ________

    <h2>An "a" with an acute accent: a&#769;</h2>`,
    choices: ["</h1>", "</h2>", "<h1>"],
    correctAnswer: "</h1>",
    output:"<h1>HTML Special Character Example</h1>\n<h2>An a with an acute accent: a&#769;</h2>"
  },
  {
    question: `7. What tag is used to define the character encoding for an HTML document?

    <head>
      _________
    </head>
    <body>

    <p>I will display A B C</p>
    <p>I will display &#65; &#66; &#67;</p>

    </body>
    </html>`,
    choices: ["<meta charset=\"UTF-8\">", "System.out.print;", "<meta charset=\"ASCII\">"],
    correctAnswer: "<meta charset=\"UTF-8\">",
    output:"<p>I will display A B C</p>\n<p>I will display &#65; &#66; &#67;</p>"
  },
  {
    question: `8. How can you display sized emojis using HTML?

    <html>
    <head>Sized Emojis______

    <p style="font-size:48px">
    &#128512; &#128516; &#128525; &#128151;
    </p>

    </body>
    </html>`,
    choices: ["<meta charset=\"UTF-8\">", "</head>", "</h2>"],
    correctAnswer: "</head>",
    outpu:"<head>Sized Emojis</head><p style=\"font-size:48px\">&#128512; &#128516; &#128525; &#128151;</p>"
  },
  {
    question: `9. How can you define a CSS rule to set the font size to 20px for the body element?

    <html>
    _________
    {
      font-size: 20px;
    }
    </style>
    <body>

    <span style='font-size:100px;'>&#8361;</span>
    <p>I will display &#8361;</p>
    <p>I will display &#x20A9;</p>

    </body>
    </html>`,
    choices: ["<html>", "<style>", "<p>"],
    correctAnswer: "<style>",
    output:"<style>{font-size: 20px;}</style><span style='font-size:100px;'>&#8361;</span><p>I will display &#8361;</p>\n<p>I will display &#x20A9;</p>"
  },
  {
    question: `10. How can you display the right-pointing arrow character using HTML entities?

    <html>
    <body>
    <span style='font-size:100px;' ____I will display &#8627; </span>
    </body>
    </html>`,
    choices: ["</span>", "</p>", ">"],
    correctAnswer: ">",
    output:"<span style='font-size:100px;'>I will display &#8627; </span>"
  }
  ],
},


"c++": {
  "easy": [
    {
    question: `1. #include <iostream>
using namespace std;
int main_____ {
  cout << "Hello World!";
  return 0;
}
`,
    choices: ["&", ">>", "()"],
    correctAnswer: "()",
    output: "Hello World!"
  },




  {
    question: `2. C++ Output (Print Text)
#include <iostream>
using namespace std;
int main() {
  cout ____"Hello World!";
  cout << "I am learning C++";
  return 0;
}
`,
    choices: ["++", "<<", ":"],
    correctAnswer: "<<",
    output: "Hello! I am learning C++"
  },




  {
    question: `3. #include <iostream>
using namespace std;
________
{
  cout << "Hello World! \n\n";
  cout << "I am learning C++";
  return 0;
}
`,
    choices: ["int main()", "int main{};", "{"],
    correctAnswer: "int main()",
    output: "Hello World!\n\nI am learning C++"
  },




  {
    question: `4. #include <iostream>
using namespace std;
int main() {
  int myNum ____ 15;
  cout << myNum;
  return 0;
}
`,
    choices: ["%", "=", "{}"],
    correctAnswer: "=",
    output: "15"
  },



  {
    question: `5. #include <iostream>
using namespace std;
int main() {
  int myAge = 35;
  cout << "I am " << myAge << " ______ old.";
  return 0;
}
`,
    choices: ["Yrs", "years", "YEARS"],
    correctAnswer: "years",
    output: "I am 35 years old."
  },



  {
    question: `6. #include <iostream>
using namespace std;
int main() {
  // Good name
  int minutesPerHour = 60;
  // OK, but not so easy to understand what m actually is
  int m = 60;
  cout << minutesPerHour << "____";
  cout << m;
  return 0;
}
`,
    choices: ["\\n", "\"\"", ","],
    correctAnswer: "\\n",
    output: "60\n60"
  },






  {
    question: `7. #include <iostream>
using namespace std;
____main() {
  const int minutesPerHour = 60;
  const float PI = 3.14;
  cout << minutesPerHour << "\\n";
  cout << PI;
  return 0;
}
`,
    choices: ["INT", "iNT", "int"],
    correctAnswer: "int",
    output: "60\n3.14"
  },




  {
    question: `8. #include <iostream>
using namespace std;
int main() {
  int x, y;
  int sum;
  cout << "Type a number: ";
  cin >> x;
  cout << "Type another number: ";
  cin >> y;
  sum = x + y;
  cout << "Sum is: " << sum;
  return ___;
} 
`,
    choices: ["7", "1","0"],
    correctAnswer: "0",
    output: "Type a number: 4\nType another number: 7\nSum is: 11"
  },



  {
    question: `9. #include <iostream>
using namespace std;

int main() {
  bool isCodingFun = ____;
  bool isFishTasty = false;
  cout << isCodingFun << "\\n";
  cout << isFishTasty;
  return 0;
}
`,
    choices: ["True", "False", "Maybe"],
    correctAnswer: "True",
    output: "True\nFalse"
  },





  {
    question: `10. #include <iostream>
using namespace std; 
int main () {
  ______a = 65, b = 66, c = 67;
  cout << a;
  cout << b;
  cout << c;
  return 0;
}
`,
    choices: ["Chart", "Char", "&"],
    correctAnswer: "Char",
    output: "ABC"
  }



  ],


























  "normal": [
   {
    question: `#include <iostream>
using namespace std;\n

__________{
  cout << "Hello World!";
  return 0;
}`,
    choices: [
      ">>",
     
      "Cout<",
      "int main()"
    ],
    correctAnswer: "int main()",
    output: "Hello World!"
  },


  {
    question: `#include <iostream>
using namespace std;\n

int main() {
  ______ 15;   // Now myNum is 15\n
  myNum = 10;       // Now myNum is 10
  cout << myNum;
  return 0;
}`,
    choices: [
     
      "int =",
      "NUM =",
      "myNum ="
    ],
    correctAnswer: "myNum =",
    output: "10"
  },


  {
    question: `#include <iostream>\n
using _________;

int main() {\n
  int x = 5;\n
  int y = 6;\n
  int sum = x + y;\n
  cout << sum;\n
  return 0;
}`,
    choices: [
      "myNum=",
      "num=",
      "namespace std"
    ],
    correctAnswer: "namespace std",
    output: "11"
  },


  {
    question: `#include <iostream>\n\n
using namespace std;\n

int main() {\n
  int x = 5, y = 6, z = 50;  \n\n
  _________x + y + z;\n
  return 0;
}`,
    choices: [
      "Cout <<",
      "Court<<",
      "COUT<<"
    ],
    correctAnswer: "Cout <<",
    output: "61"
  },


  {
    question: `#include <iostream>\n
using namespace std;\n

int main() {\n
  int _______\n
  x = y = z = 50;\n
  cout << x + y + z;\n
  return 0;
}`,
    choices: [
      "XYZ",
     
      "AbC",
      "x,y,z;"
    ],
    correctAnswer: "x,y,z;",
    output: "150"
  },


  {
    question: `#include_________
using namespace std;\n
int main() {
  const int minutesPerHour = 60;\n
  const float PI = 3.14;
  cout << minutesPerHour << "\\n";\n
  cout << PI;
  return 0;
}`,
    choices: [
      "<iostream",
      "(iostream)",
      "<iostream>"
    ],
    answer: "<iostream>",
    output: "60\n3.14"
  },



  {
    question: `#include <iostream>
using namespace std;\n
int main() {
  int x, y;\n
  _______
  cout << "Type a number: ";
  cin >> x;\n\n
  cout << "Type another number: ";
  cin >> y;\n
  sum = x + y;
  cout << "Sum is: " << sum;
  return 0;\n
}`,
    choices: [
      "int sum;",
      "INT sum:",
      "int Num;"
    ],
    correctAnswer: "int sum;",
    output: "Type a number: 3\nType another number: 6\nSum is: 9"
  },



  {
    question: `#include <iostream>
#include <string>\n
using namespace std;
int main() {\n
  int myNum = 5;
  float
  _______ 5.99;\n
  double myDoubleNum = 9.98;
  char myLetter = 'D';\n
  bool myBoolean = true;
  string myString = "Hello";\n
   
  cout << "int: " << myNum << "\\n";\n
  cout << "float: " << myFloatNum << "\\n";\n
  cout << "double: " << myDoubleNum << "\\n";\n
  cout << "char: " << myLetter << "\\n";\n
  cout << "bool: " << myBoolean << "\\n";\n
  cout << "string: " << myString << "\\n";\n
 
  return 0;
}`,
    choices: [
      " myFloatNum =",
      "floatnum",
      "\"String:\""
    ],
    correctAnswer: " myFloatNum =",
    output: "int: 5\nfloat: 5.99\ndouble: 9.98\nchar: D\nbool: 1\nstring: Hello"
  },




  {
    question: `#include <iostream>
int main() {\nusing 
  _________ std;
  bool isCodingFun = true;\n
  bool isFishTasty = false;\n
  cout << isCodingFun << "\\n";
  cout << isFishTasty;\n
  return 0;
}`,
    choices: [
      "namespace",
      "Namespace",
      "nameSpace"
    ],
    correctAnswer: "namespace",
    output: "1\n0"
  },




  {
    question: `#include <iostream>
int main() {\n
  _________
  return 0;
}`,
    choices: [
      "RETURN;",
      "return 0;",
      "Turn:"
    ],
    correctAnswer: "return 0;",
    output: "35000\n120000"
  }
  ],












  
  "hard": [
     {
    question: `1. #include <iostream>
using namespace std;\n
int main_____ {
  cout << "Hello World!";\n
  return 0;
}
`,
    choices: ["&", ">>", "()"],
    correctAnswer: "()",
    output: "Hello World!"
  },




  {
    question: `2. C++ Output (Print Text)
#include <iostream>\n
using namespace std;
int main() {\n\n
  cout ____"Hello World!";
  cout << "I am learning C++";\n
  return 0;\n
}
`,
    choices: ["++", "<<", ":"],
    correctAnswer: "<<",
    output: "Hello! I am learning C++"
  },




  {
    question: `3. #include <iostream>
using namespace std; int
________
{
  cout << "Hello World! \n\n";
  cout << "I am learning C++";
  return 0;
}
`,
    choices: ["main()", "main{};", "{"],
    correctAnswer: "main()",
    output: "Hello World!\n\nI am learning C++"
  },




  {
    question: `4. #include <iostream>
using namespace std;
int main() {
  int myNum ____ 15;
  cout << myNum;
  return 0;
}
`,
    choices: ["%", "=", "{}"],
    correctAnswer: "=",
    output: "15"
  },



  {
    question: `5. #include <iostream>
using namespace std;
int main() {
  int myAge = 35;
  cout << "I am " << myAge << " ______ old.";
  return 0;
}
`,
    choices: ["Yrs", "years", "YEARS"],
    correctAnswer: "years",
    output: "I am 35 years old."
  },



  {
    question: `6. #include <iostream>
using namespace std;
int main() {\n
  // Good name
  int minutesPerHour = 60;\n
  // OK, but not so easy to understand what m actually is
  int m = 60;\n
  cout << minutesPerHour << "____";
  cout << m;\n
  return 0;
}
`,
    choices: ["\\n", "\"\"", ","],
    correctAnswer: "\\n",
    output: "60\n60"
  },






  {
    question: `7. #include <iostream>
using namespace std;\n
____main() {
  const int minutesPerHour = 60;\n
  const float PI = 3.14;
  cout << minutesPerHour << "\\n";\n
  cout << PI;
  return 0;
}
`,
    choices: ["INT", "iNT", "int"],
    correctAnswer: "int",
    output: "60\n3.14"
  },




  {
    question: `8. #include <iostream>
using namespace std;\n
int main() {
  int x, y;\n\n
  int sum;\n
  cout << "Type a number: ";\n
  cin >> x;\n
  cout << "Type another number: ";\n
  cin >> y;\n
  sum = x + y;\n
  cout << "Sum is: " << sum;\n
  return ___;
} 
`,
    choices: ["7", "1","0"],
    correctAnswer: "0",
    output: "Type a number: 4\nType another number: 7\nSum is: 11"
  },



  {
    question: `9. #include <iostream>
using namespace std;\n\n

int main() {
  bool isCodingFun = ____;\n
  bool isFishTasty = false;
  cout << isCodingFun << "\\n";\n
  cout << isFishTasty;\n
  return 0;
}
`,
    choices: ["True", "False", "Maybe"],
    correctAnswer: "True",
    output: "True\nFalse"
  },





  {
    question: `10. #include <iostream>
using namespace std; \n
int main () {\n
  ______a = 65, b = 66, c = 67;\n
  cout << a;\n
  cout << b;\n
  cout << c;\n
  return 0;
}
`,
    choices: ["Chart", "Char", "&"],
    correctAnswer: "Char",
    output: "ABC"
  }
  ],
},



























































  "js": {
      "easy": [
         {
   
    question: `
      <h2>What Can\n JavaScript Do?</h2>\n
      <p ___"demo">JavaScript \ncan change HTML \ncontent.</p>\n
      <button type="button"\n onclick='document.\ngetElementById("demo").\ninnerHTML =\n "Hello JavaScript!"'>\nClick Me!</button>\n
    `,

    choices: ['id=', 'Id=', 'id =' ],
      
    correctAnswer: 'id=',
    output:'The output of the\n\n code you provided would \n\nbe an HTML button with \nthe following structure:'
  },



{
   
    question: `
      <h2>JavaScript \nin Body</h2>\n
      <p id="demo"></p>
      _______\n
      document.getElementById\n("demo").innerHTML = \n"My First JavaScript";\n\n
    `,
    choices: [
      '<Script>',
      '<script>',
      '{script}'
    ],
    correctAnswer: '<script>',
    output:'The output would \nbe an HTML paragraph\n element \n(<p>) with the id \nattribute set to "\ndemo" and no initial content.'
  },






  {
    question: `
      <h2>Demo JavaScript\n in Head</h2>\n
      <p id="demo">A Paragraph\n.</p>
      _______ \ntype="button" onclick=\n"myFunction()">\nTry it</button>\n
    `,
    choices: [
      '<button>',
      '<Button',
      '<button'
    ],
    correctAnswer: '<button',
    output:'The output of the \nprovided code would \nbe an HTML page displaying \na heading that says \n\n"Demo JavaScript in Head,"\n a paragraph with the\n text "A Paragraph.," \n\nand a button labeled\n "Try it."'
  },






  {
    question: `
      <h2>Demo External\n JavaScript</h2>\n
      <p id="demo">\nA Paragraph.</p>\n
      <button type=\n"button" onclick=\n"myFunction()">\nTry it</button>\n
      <p>This example \nlinks to \n"myScript.js".____</p>\n
      <p>(myFunction is \nstored in "\nmyScript.js")</p>\n
      <script src="myScript.js\n\n"></script>
    `,
    choices: [
      '<p>',
      '</P>',
      '</p>'
    ],
    correctAnswer: '</p>',
    output:'The output would\n be an HTML page with a heading\n saying "Demo External\n JavaScript," \n\na paragraph with the \ntext "A Paragraph.," a \nbutton labeled "Try it," \n\n\n\n\n\na paragraph mentioning the link to an external JavaScript file, and another paragraph stating that\n\n\n\n the function myFunction() is stored in the external file "myScript.js," which is linked to \n\nthe HTML page using the <script> tag with the src attribute set to "myScript.js".'
  },




  {
    question: `
      <h2>External JavaScript</h2>\n
      ______
      <p id="demo">A\n Paragraph.</p>\n\n
      <button type=\n"button" onclick=\n"myFunction()">\nClick Me</button>\n
      <p>This example\n uses a full web \nURL to link to \n"myScript.js".</p>\n
      <p>(myFunction \nis stored in \n"myScript.js")</p>\n
      </body>\n
      <script src=\n"https://www.w3schools.\ncom/js/myScript.\njs"></script>
    `,
    choices: [
      '<body>',
      '<Body>',
      '</body>'
    ],
    correctAnswer: '<body>',
    output:'The output would\n be an HTML page\n with a heading saying \n"External JavaScript," \n\na paragraph with \nthe text "A Paragraph.,\n" a button labeled "Click Me,"\n\n a paragraph mentioning the\n use of a full web\n URL to link to the \nexternal JavaScript file \n\n\n\n\n\n\n\n\n\n"myScript.js," and another paragraph stating that the function \n\n\n\n\n\n\n\nmyFunction() is stored in the external file "myScript.js," \n\n\n\n\n\nwhich is linked to the HTML page using the <script> tag with t\n\n\n\nhe src attribute set to "https://www.w3schools.com/js/myScript.js".'
  },



  {
    question: `
      __________
      <h2>My First\n Web Page</h2>\n
      <p>My First \nParagraph.</p>\n
      <p id="demo"></p>\n
      <script>\n
        document.getElementById\n("demo").innerHTML\n = 5 + 6;\n
      </script>
      </html>
    `,
    choices: [
      '<!DOCTYPE html>',
      '<DOCTYPE html>',
      '<!DOCTYPE Html>'
    ],
    correctAnswer: '<!DOCTYPE html>',
    output:'The output would be an\n HTML page displaying a \n\nheading saying\n\n "My First Web Page," \na paragraph saying "My \nFirst Paragraph.," \n\nand an empty paragraph,\n which is filled by \nJavaScript code to \ndisplay the result of\n\n\n\n\n\n the expression "5 +\n 6," which is "11."'
  },





  {
    question: `
      <h2>Activate\n Debugging_____\n\n
      <p>F12 on your\n keyboard will \nactivate debugging.</p>\n
      <p>Then select \n"Console" in the \ndebugger menu.</p>\n
      <p>Then click\n Run again.</p>\n
      <script>\n\n
        console.log(5 + 6);\n
      </script>
    `,
    choices: [
      '</H2>',
      '<h2>',
      '</h2>'
    ],
    correctAnswer: '</h2>',
    output:'The output would be\n an HTML page with a \nheading saying \n"Activate Debugging,"\n\n\n\n and three paragraphs with \n\ninstructions for\n activating debugging,\n\n followed by a JavaScript\n code block that logs\n the result of the expression \n\\n\nn"5 + 6" (which is 11) to the\n browser console.'
  },


  {
    question: `
      <h2>The window.\nprint() Method</h2>\n
      <p>Click the button \nto print the\n current page.</p>\n
      <button onclick=\n"window._____">Print\n this page</button>\n
    `,
    choices: [
      'print()',
      'print',
      'Print()'
    ],
    correctAnswer: 'print()',
    output:'The output would be\n an HTML page with a\n heading saying \n\n"The window.print() Method,"\n a paragraph with the \ntext "Click the\n\n button to print the\n current page," and a\n button labeled "Print \nthis page."\n\n When the button is clicked,\n it triggers the window.print() \nmethod, which opens \n\nthe browser s print dialog\n to print the current page.'
  },





  {
    question: `
      <h2>JavaScript\n Statements</h2>\n
      <p>In HTML, JavaScript\n statements are \nexecuted by the browser.</p>\n
      <p id="demo"></p>\n
      <script>\n
        document.getElementById\n(______).innerHTML = \n"Hello Dolly.";\n
      </script>
    `,
    choices: [
      '"Demo"',
      'demo',
      '"demo"'
    ],
    correctAnswer: '"demo"',
    output:'The output would \nbe an HTML page \ndisplaying a heading \nsaying "JavaScript Statements,"\n\n a paragraph about JavaScript\n statements being executed by\n the browser, \n\nand an empty paragraph with the id "demo" that is filled with the text "Hello Dolly." using JavaScript.'
  },




  {
    question: `
      <h2>JavaScript\n Numbers</h2>\n
      <p>Number can be\n written with or \nwithout decimals.</p>\n
      <p id="demo"></p>\n
      <script>\n\n
        document.getElementById\n("demo")__________ = 10.50;\n
      </script>
    `,
    choices: [
      '.innerHTML',
      'innerHTML',
      '.InnerHTML'
    ],
    correctAnswer: '.innerHTML',
    output:'The output would\n be an HTML page \nwith a heading saying \n"JavaScript Numbers," \n\na paragraph stating that \nnumbers can be written with\n or without decimals\n\nan empty paragraph with the \nid attribute set to "demo," and a \nJavaScript code block that sets\n the content of the element with\n the id "demo" (<p id="demo"></p>)\n to the number 10.50 using the\n innerHTML property.'
  }
  ],




  "normal": [
    {
      "question": "What is the output\n of the following code?\n\nconsole.log(typeof 42);",
      "choices": ["number", "string", "boolean"],
      "correctAnswer": "number"
    },
    {
      "question": "Which method is\n used to remove the last \nelement from an array in JavaScript?",
      "choices": ["pop()", "shift()", "remove()"],
      "correctAnswer": "pop()"
    },
    
    
    {
      "question": "Which function is used\n to convert a string to\n an integer in JavaScript?",
      "choices": ["parseInt()", "toString()", "toFixed()"],
      "correctAnswer": "parseInt()"
    },
    {
      "question": "What is the output \nof the following code?\n\nconsole.log(3 === '3')\n;",
      "choices": ["true", "false", "NaN"],
      "correctAnswer": "false"
    },
  ],
  "hard": [
    {
    question: `1.) <!DOCTYPE html>
______
<body>

<h1>JavaScript String Operators</h1>\n

<p>All conditional operators can be used on both numbers and strings.</p>\n

<p id="demo">_________
<script>\n
let text1 = "A";\n
let text2 = "B";\n
________ text1 < text2;\n
document.getElementById("demo").innerHTML = "Is A less than B? " + result;\n
</script>\n

</body>\n
</html>\n

Correct answer:
<html>
</p>`,
    choices: [
      "let result =",
      "result",
    
      "let"
    ],
    correctAnswer: "let result =",
    output: "Is A less than B? true"
  },



  {
    question: `2.) <!DOCTYPE html>
<html>\n
<body>\n

<h1>JavaScript String Operators</h1>\n
<h2>The + Operator</h2>\n
<p>The + operator concatenates (adds) strings.</p>\n

<p id=____demo"></p>\n

_______
let text1 = "John";\n
let text2 = "Doe"___
let text3 = text1 + " " + text2;\n
document.getElementById("demo").innerHTML = text3;\n
</script>\n

</body>\n
</html>
\n
`,
    choices: [
      "\"",
      "'",
      "''",
      "``"
    ],
    correctAnswer: "\"",
    output: "John Doe"
  },



  {
    question: `3.) <!DOCTYPE html>
<html>\n
<body>
\n
<h1>JavaScript String Operator______\n
<h2>The + Operator</h2>\n
<p>Adding a number and a string, returns a string.</p>\n

______"demo"></p>\n

<script>\n
let x = 5 + 5;
let y = "5" + 5;\n
let z = "Hello" + 5;\n
document.getElementById("demo").innerHTML =\n
x + "<br>" + y + "<br>" + z;
</script>\n

______
</html>\n

`,
    choices: [
      "\"",
      "'",
      "``",
      "''"
    ],
    correctAnswer: "\"",
    output: "10\n55\nHello5"
  },



  {
    question: `4.) <!DOCTYPE html>
<html>\n\n\n
<body>\n\n

<h1>JavaScript Arithmetic</h1>\n
<h2>Arithmetic Operations</h2>\n
______A typical arithmetic operation takes two numbers (or expressions) and produces a new number.</p>\n
\n
<p id="demo"></p>
\n
<script>
_____ a = 3;\n
let x = (100 + 50) * a____\n
document.getElementById("demo").innerHTML = x;\n
</script>\n

</body>\n
</html>
`,
    choices: [
      "let",
      "const",
      "int"
    ],
    correctAnswer: "let",
    output: "450"
  },



  {
    question: `5.) <!DOCTYPE html>
<html>\n
<body>\n

___h1>JavaScript Arithmetic</h1>\n
<h2>The % Operator</h2>\n

<p id="demo"></p>\n

<script>\n
let x = 5;\n
let y = 2;\n\n
let z = x ____y;\n
document.getElementById("demo").innerHTML = z;\n
</script>\n
\n
</body>\n\n
<__html>\n
`,
    choices: [
      "<",
      "%",
      "/",
      ">"
    ],
    correctAnswer: "<",
    output: "1"
  },



  {
    question: `6.) <!DOCTYPE html>
<html>\n
<body>\n\n

<h1>JavaScript Arithmetic</h1>\n
<h2>Operator Precedence</h2>\n
<p>Multiplication has precedence over addition.</p>\n

<p id=_____></p>\n

<script>\n
document.getElementById("demo").innerHTML = 100 ___ 50 * 3;\n
</script>\n

</body>\n
</html>\n
`,
    choices: [
      "!",
      "\"demo\"",
      "+"
      
    ],
    correctAnswer: "+",
    output: "250"
  },


  {
    question: `7.) <!DOCTYPE html>
<html>\n
<body>\n

<h1>JavaScript Functions</h1>\n\n

<p>Invoke (call) a function that converts from Fahrenheit to Celsius:</p>\n
<p id="demo"></p>
\n
<script>
function toCelsius(f) {\n
  ____ (5/9) * (f-32);
}\n

______ toCelsius(77);
document.getElementById("demo").innerHTML = value;\n
</script>\n

</body>
______\n
`,
    choices: [
      "return",
      "Return",
      "value="
    ],
    correctAnswer: "return",
    output: "25"
  },



  {
    question: `8.) <!DOCTYPE html>
<html>\n
<body>\n

<h1>JavaScript Functions</h1>\n
<p>Using a function as a variable:</p>\n

___________
<script>\n
let text = "The temperature is " + toCelsius(77) + " Celsius.";\n
document.getElementById("demo").innerHTML = text;\n

function toCelsius(fahrenheit) {\n
  return (5/9) * (fahrenheit-32);\n
} 
</script>\n\n

</body>\n
</html>\n

`,
    choices: [
      "<p id=\"demo\"></p>",
      "<p id=\"demo\">",
      "<p id = \"demo\">"
    ],
    correctAnswer: "<p id=\"demo\"></p>",
    output: "The temperature is 25 Celsius."
  },


  {
    question: `9.) <!DOCTYPE html>
<html>\n\n
<body>\n

<h1>JavaScript Strings</h1>\n
<h2>The slice() Method</h2>\n

<p>The sliced (extracted) part of the string is:</p>\n
_______="demo"></p>\n

<script>
_____ "Apple, Banana, Kiwi";\n
let part = text.slice(7,13);\n
document.getElementById("demo").innerHTML = part; \n
</script>\n\n\n

</body>\n\n
</html>\n
`,
    choices: [
      "<p id",
      "<p>",
      "<p = "
    ],
    correctAnswer: "<p id",
    output: "Banana"
  },



  {
    question: `10.) <!DOCTYPE html>
<html>\n\n
<body>\n

<h2>JavaScript Numbers</h2>\n

<p>Numbers can be written with or without decimals:</p>\n

<p id="demo"></p>\n

<script>\n
let x = 3.14;
let y = 3;\n
________.getElementById("demo").innerHTML = x + "<br>" + y;\n
</script>\n

</body>\n
</html>
\n
`,
    choices: [
      "document",
      "Docs",
      "document=",
    ],
    correctAnswer: "document",
    output: "3.14\n3"
  }
  ],
},  





  "java": {
  "easy": [
     {
    question: "1.) public class ______\n  public static void main(String[] args) {\n    System.out.println(\"Hello World\");\n  }\n}\n",
    choices: ["Main {", "main {", "Main{"],
    correctAnswer: "Main {",
    output: "Hello World!"
  },
  {
    question: "2.) public class Main {\n  public static void main(______ args) {\n    System.out.println(\"Hello World!\");\n    System.out.println(\"I am learning Java.\");\n    System.out.println(\"It is awesome!\");\n  }\n}\n",
    choices: ["string[]", "String[]", "String []"],
    correctAnswer: "String[]",
    output: "Hello World!\nI am learning Java.\nIt is awesome!"
  },
  {
    question: "3.) public class Main {\n  public static void main(String[] args) {\n    System____print(\"Hello World! \");\n    System.out.print(\"I will print on the same line.\");\n  }\n}\n",
    choices: [".out.", ".Out.", ",out,"],
    correctAnswer: ".out.",
    output: "Hello World! I will print on the same line."
  },
  {
    question: "4.) _____ class Main {\n  public static void main(String[] args) {\n    System.out.println(3);\n    System.out.println(358);\n    System.out.println(50000);\n  }\n}\n",
    choices: ["Public", "public_", "public"],
    correctAnswer: "public",
    output: "3\n358\n50000"
  },
  {
    question: "5.) public class Main {\n  public static void main(String[] args) {\n    ______.out.println(3 + 3);\n  }\n}\n",
    choices: ["System.", "system", "System"],
    correctAnswer: "System",
    output: "6"
  },
  {
    question: "6.) public class Main {\n  public static void main(String[] args) {\n    System.out.println(2 * 5_\n  }\n}\n",
    choices: [");", ")", "):"],
    correctAnswer: ");",
    output: "10"
  },
  {
    question: "7.) public class Main {\n  public static void main(String[] args) {\n    String name = \"John\";\n    System.out.println______;\n  }\n}\n",
    choices: ["(name);", "(Name)", "(name)"],
    correctAnswer: "(name)",
    output: "John"
  },
  {
    question: "8.) public class Main {\n  public static void main(String[] args) {\n    int _______ = 15;\n    System.out.println(myNum);\n  }\n}",
    choices: ["mynum", "myNum", "MyNum"],
    correctAnswer: "myNum",
    output: "15"
  },
  {
    question: "9.) public class Main {\n  public static void main(String[] args) {\n    int myNum = 15;\n    ________ 20;  // myNum is now 20\n    System.out.println(myNum);\n  }\n}\n",
    choices: ["myNum =", "myNum -", "myNum:"],
    correctAnswer: "myNum =",
    output: "20"
  },
  {
    question: "10.) public class Main {\n  public static void main(String[] args) {\n    String name = \"John\";\n    System.out______(\"Hello \" + name);\n  }\n}\n",
    choices: ["println", ".println", "_println"],
    correctAnswer: ".println",
    output: "Hello John"
  }
  ],
  "normal": [
    {
    question: "1.) public class Main {\n  public static void main(String[] _____\n    String greeting = \"Hello World\";\n    System.out._____(greeting);\n  }\n}\n",
    choices: ["(a.) Args) {", "(a.) args)", "(a.) args) {"],
    correctAnswer: "(a.) args) {",
    output: "what is the second one ? "
  },
  {
    question: "1.) public class Main {\n  public static void main(String[] _____\n    String greeting = \"Hello World\";\n    System.out._____(greeting);\n  }\n}\n",
    choices: ["(b.) println", "(b.) Println", "(b.) print.ln"],
    correctAnswer: "(b.) println",
    output: "Hello World"
  },




  {
    question: "2.) public class Main {\n  public static void main(String[] args) {\n    String ________ = \"John \";\n    String lastName = \"Doe\";\n    String fullName = firstName + lastName;\n    System.out.println_________;  \n  }\n}\n",
    choices: ["(a.) firstName", "(a.) FirstName", "(a.) firstname"],
    correctAnswer: "(a.) firstName",
    output: "what is the second one ?"
  },

   {
    question: "2.) public class Main {\n  public static void main(String[] args) {\n    String ________ = \"John \";\n    String lastName = \"Doe\";\n    String fullName = firstName + lastName;\n    System.out.println_________;  \n  }\n}\n",
    choices: ["(b.) [fullName]", "(b.) {fullName}", "(b.) (fullName)"],
    correctAnswer: "(b.) (fullName)",
    output: "John Doe"
  },




  {
    question: "3.) public ____ Main {\n  public static void main(String[] args) {\n    ____ = 5, y = 6, z = 50;\n    System.out.println(x + y + z);\n  }\n}\n",
    choices: ["(a.) Class", "(a.) class", "(a.) _class_"],
    correctAnswer: "(a.) class",
    output: "what is the second one ? "
  },

    {
    question: "3.) public ____ Main {\n  public static void main(String[] args) {\n    ____ = 5, y = 6, z = 50;\n    System.out.println(x + y + z);\n  }\n}\n",
    choices: ["(b.) int_x", "(b.) int x", "(b.) Int x"],
    correctAnswer: "(b.) int x",
    output: "61"
  },





  {
    question: "4.) public class Main {\n  public static void main(String[] args) {\n    int x, y, __\n    x = y = z = 50;\n    System.out.println(x + y + __\n  }\n}\n",
    choices: ["(a.) z;", "(a.) z", "(a.) Z;"],
    correctAnswer: "(a.) z;",
    output: "what is the second one ? "
  },
  {
    question: "4.) public class Main {\n  public static void main(String[] args) {\n    int x, y, __\n    x = y = z = 50;\n    System.out.println(x + y + __\n  }\n}\n",
    choices: ["(b.) z);", "(b.) Z);", "(b.) z)"],
    correctAnswer: "(b.) z);",
    output: "150"
  },








  {
    question: "5.) public class Main {\n  public static void main(String[] args) {\n    ____ myNum = 100;\n    System.out.println_________  \n  }\n}\n",
    choices: ["(a.) byte_", "(a.) byte", "(a.) Byte"],
    correctAnswer: "(a.) byte",
    output: "what is the second one ?"
  },
  {
    question: "5.) public class Main {\n  public static void main(String[] args) {\n    ____ myNum = 100;\n    System.out.println_________  \n  }\n}\n",
    choices: ["(b.) (myNum);", "(b.) (myNum)", "(b.) (MyNum);"],
    correctAnswer: "(b.) (myNum);",
    output: "100"
  },








  {
    question: "6.) public class Main {\n  public static void main(String[] args) {\n    short myNum = _____\n    System.out.println(myNum);  \n  }\n_\n",
    choices: ["(a.) 5000;", "(a.) 5000", "(a.) 500;"],
    correctAnswer: "(a.) 5000;",
    output: "what is the second one ? "
  },{
    question: "6.) public class Main {\n  public static void main(String[] args) {\n    short myNum = _____\n    System.out.println(myNum);  \n  }\n_\n",
    choices: ["(b.) }", "(b.) ]", "(b.) )"],
    correctAnswer: "(b.) }",
    output: "5000"
  },




  {
    question: "7.) public class Main {\n  public static void main(String[] args) {\n    char ________ = 'B';\n    System.out.println(myGrade__\n  }\n}\n",
    choices: ["(a.) my.Grade", "(a.) MyGrade", "(a.) myGrade"],
    correctAnswer: "(a.) myGrade",
    output: "what is the second one ? "
  },  {
    question: "7.) public class Main {\n  public static void main(String[] args) {\n    char ________ = 'B';\n    System.out.println(myGrade__\n  }\n}\n",
    choices: ["(b.) )", "(b.) ');", "(b.) );"],
    correctAnswer: "(b.) );",
    output: "B"
  },




  {
    question: "8.) public class Main {\n  public _________ main(String[] args) {\n    char myVar1 = 65, _______ = 66, myVar3 = 67;\n    System.out.println(myVar1);\n    System.out.println(myVar2);\n    System.out.println(myVar3);\n  }\n}\n",
    choices: ["(a.) static_void", "(a.) Static void", "(a.) static void"],
    correctAnswer: "(a.) static void",
    output: "what is the second one ? "
  },
  {
    question: "8.) public class Main {\n  public _________ main(String[] args) {\n    char myVar1 = 65, _______ = 66, myVar3 = 67;\n    System.out.println(myVar1);\n    System.out.println(myVar2);\n    System.out.println(myVar3);\n  }\n}\n",
    choices: ["(b.) MyVar2", "(b.) my.Var2", "(b.) myVar2"],
    correctAnswer: "(b.) myVar2",
    output: "A\nB\nC"
  },





  {
    question: "9.) __________ Main {\n  public static void main(String[] args) {\n    double myNum = 19.99__\n    System.out.println(myNum);  \n  }\n}\n",
    choices: ["(a.) public_class", "(a.) Public class;", "(a.) public class"],
    correctAnswer: "(a.) public class",
    output: "what is the second one ? "
  },
   {
    question: "9.) __________ Main {\n  public static void main(String[] args) {\n    double myNum = 19.99__\n    System.out.println(myNum);  \n  }\n}\n",
    choices: ["(b.) d;", "(b.) D;", "(b.) ;"],
    correctAnswer: "(b.) d;",
    output: "19.99"
  },






  {
    question: "10.) public class Main {\n  public static void main(String[] _____ {\n    ___________ = 5.75f;\n    System.out.println(myNum);  \n  }\n}\n",
    choices: ["(a.) args)", "(a.) args);", "(a.) Args)"],
    correctAnswer: "(a.) args)",
    output: "what is the second one ?"
  },
  {
    question: "10.) public class Main {\n  public static void main(String[] _____ {\n    ___________ = 5.75f;\n    System.out.println(myNum);  \n  }\n}\n",
    choices: ["(b.) Float myNum", "(b.) float_myNum", "(b.) float myNum"],
    correctAnswer: "(b.) float myNum",
    output: "5.75"
  }




  ],
"hard": [
          {
        question: "1.) public class Main ___\n  public static void main______ \n    boolean isJavaFun = true;\n    boolean isFishTasty = false;    \n    System.out.println(isJavaFun);\n    System.out.println(isFishTasty);\n  }\n}\n",
        choices: [
          "{",
          "[",
          "(",
          "<"
        ],
        correctAnswer: "{",
        output: "true\nfalse"
      },


      {
        question: "2.) public class Main {\n (String[] ___) {\n    int myInt = 9;\n    double myDouble = myInt; // Automatic casting: int to double\n\n    System.out.println(myInt);\n    System.out.println(myDouble);\n  }\n}\n",
        choices: [
          
          "(args)",
          "args",
          "(String)"
        ],
        correctAnswer: "args",
        output: "9\n9.0"
      },
      {
        question: "3.) public class Main {\n  public static void main(String[] args) {\ndouble myDouble __ 9.78d;\n    int myInt = (int) myDouble; // Explicit casting: double to int\n\n    System.out.println(myDouble);\n    System.out.println(myInt);\n  }\n}\n",
        choices: [
          "println",
          "=",
          
          "=="
        ],
        correctAnswer: "=",
        output: "9.78\n9"
      },
      {
        question: "4.) public class Main {\n  public static void main(String[] args) {\n    ___________ 100 + 50;\n    int sum2 = sum1 + 250;\n    int sum3 = sum2 + sum2;\n    System.out.println(sum1);\n    System.out.println(sum2);\n    System.out.println(sum3);  \n  }\n}\n",
        choices: [
          "int sum1 =",
          "sum1 =",
          "sum1"
        ],
        correctAnswer: "int sum1 =",
        output: "150\n400\n800"
      },
      {
        question: "5.) public class Main {\n  public static void main(String[] args) {\n    int x = 5;\n    int y = 3;\n  System.out.println(x > y); // returns true, because 5 is higher than 3\n  }\n}\n",
        choices: [
          "x > y",
          "txt",
          "(x > y)"
        ],
        correctAnswer: "(x > y)",
        output: "true"
      },
      {
        question: "6.) public class Main {\n  public static void main(String[] args) {\nString ____ = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\";\n    System.out.println(\"The length of the txt string is: \" + txt.length());\n  }\n}\n",
        choices: [
          "print",
          "text",
          "txt"
        ],
        correctAnswer: "txt",
        output: "The length of the txt string is: 26"
      },
      {
        question: "7.) public class Main {\n  public static void main(String[] args) {\n    String txt = \"Hello World\";\n    System.out.println(txt.toUpperCase());\n System.out._____(txt.toLowerCase());\n  }\n}\n",
        choices: [
          "println",
          "text",
          "System"
          
        ],
        correctAnswer: "println",
        output: "HELLO WORLD\nhello world"
      },
      {
        question: "8.) public class Main {\n  public static void main(String[] args) {\n    String txt = \"We are the so-called \\\"Vikings\\\" from the north.\";\n    System.__.println(txt);\n  }\n}\n",
        choices: [
          "out",
          "text",
          "ln"
          
        ],
        correctAnswer: "out",
        output: "We are the so-called \"Vikings\" from the north."
      },
      {
        question: "9.) public class Main {\n  public static void main(String[] args) {\n    ____ randomNum = (int)(Math.random() * 101);  // 0 to 100\n    System.out.println(randomNum);\n  }\n}\n",
        choices: [
          "randomNum =",
          "for",
          
          "int"
        ],
        correctAnswer: "int ",
        output: "92"
      },
      {
        question: "10.) public class Main {\n  public static void main(String[] args) {\n    int i = 0;\n    ____\n   System.out.println(i);\n i++;\n    }\n    while (i < 5);  \n  }\n}\n",
        choices: [
          "do {",
          "while {",
          "if {"
        ],
        correctAnswer: "do {",
        output: "0\n1\n2\n3\n4"
      }
  ],
},


  "python": {
  "easy": [
   
            {
        'question': '1.\n#___/bin/python3\nprint("Hello, World!")\n',
        'choices': ['?', '!', '&'],
        'correctAnswer': '!',
        'output': 'Hello, World!'
    },
    {
        'question': '2.\nif 5 > 2:\n    print("Five is greater than two!")\nif 5 __ 2:\n    print("Five is greater than two!")\n',
        'choices': ['>', '<', '='],
        'correctAnswer': '>',
        'output': 'Five is greater than two!'
    },
    {
        'question': '3.\n#This is a comment\n#written in\n#more than just one line\nprint("Hello____World!")\n',
        'choices': ['*', '_', ','],
        'correctAnswer': ',',
        'output': 'Hello, World!'
    },
    {
        'question': '4.\nx = 5\ny = "John"\nprint____\nprint(y)\n',
        'choices': ['(5)', '(y)', '(x)'],
        'correctAnswer': '(x)',
        'output': '5\nJohn'
    },
    {
        'question': '5.\nx = str(3)\ny = int(3)\nz = float____\nprint(x)\nprint(y)\nprint(z)\n',
        'choices': ['(3)', '(4)', '(5)'],
        'correctAnswer': '(3)',
        'output': '3\n3\n3.0'
    },
    {
        'question': '6.\nx, y, z = "Orange", "Banana", "Cherry"\nprint(x)\n_____(y)\nprint(z)\n',
        'choices': ['printf', 'print', 'If'],
        'correctAnswer': 'print',
        'output': 'Orange\nBanana\nCherry'
    },
    {
        'question': '7.\nx = "Python "\n____ "is "\nz = "awesome"\nprint(x + y + z)\n',
        'choices': ['y =', 's =', '!='],
        'correctAnswer': 'y =',
        'output': 'Python is awesome'
    },
    {
        'question': '8.\nx = "awesome"\n\ndef myfunc():\n  print("Python is " ____ x)\n\nmyfunc()\n',
        'choices': ['+', '>', '='],
        'correctAnswer': '+',
        'output': 'Python is awesome'
    },
    {
        'question': '9.\nx = 4\nx = "Sally"\nprint____\n',
        'choices': ['(y)', '(4)', '(x)'],
        'correctAnswer': '(x)',
        'output': 'Sally'
    },
    {
        'question': '10.\nprint("_____, World!")\n #This is a comment.\n',
        'choices': ['Hello', 'HELLO', 'H3llo'],
        'correctAnswer': 'Hello',
        'output': 'Hello, World!'
    }
],
  "normal": [
    {
        'question': '1.\nprint("Hello, World___")\n',
        'choices': ['!', '!/', '!)'],
        'correctAnswer': '!',
        'output': 'Hello, World!'
    },

    {
        'question': '1.\n______("Hello, World")\n',
        'choices': ['println', 'print', 'printl'],
        'correctAnswer': 'print',
        'output': 'Hello, World!'
    },

    {
        'question': '2.\ndef myfunc(n): 2.(a)________\n  return lambda a : a * n\n\nmydoubler = myfunc(2)\n2.(b)___________ myfunc(3)\n\nprint(mydoubler(11))\nprint(mytripler(11))\n',
        'choices': ['a * b', 'a * c','b * c'],
        'correctAnswer': 'a * b',
        'output': 'what is the second one ? '
    },
    {
        'question': '2.\ndef myfunc(n): 2.(a)___a * b___\n  return lambda a : a * n\n\nmydoubler = myfunc(2)\n2.(b)___________ myfunc(3)\n\nprint(mydoubler(11))\nprint(mytripler(11))\n',
        'choices': ['Mytripler =', '=','mytripler ='],
        'correctAnswer': 'mytripler =',
        'output': '22\n33'
    },

    {
        'question': '3.\na = 33\nb = 33\nif 3a.)______\n  print("b is greater than a")\nelif 3b.)_______\n  print("a and b are equal")\n',
        'choices': ['b > a:', 'b > a;','B > A;'],
        'correctAnswer': 'a.) b > a:',
        'output': 'what is the second one ? '
    },
    {
        'question': '3.\na = 33\nb = 33\nif 3a.)___a.) b > a:____\n  print("b is greater than a")\nelif 3b.)_______\n  print("a and b are equal")\n',
        'choices': ['A == B', 'a == b:','A == b;'],
        'correctAnswer': 'a == b:',
        'output': 'a and b are equal'
    },
    {
        'question': '4\ntry:\n  print(x)\n4a.)________\n  print("Something went wrong")\nfinally:\n  4b.)________"The \'try except\' is finished")\n',
        'choices': ['except:', 'Except:','Except;'],
        'correctAnswer': 'except:',
        'output': 'what is th second one ? '
    },


    {
        'question': '4\ntry:\n  print(x)\n4a.)____ except:____\n  print("Something went wrong")\nfinally:\n  4b.)________"The \'try except\' is finished")\n',
        'choices': ['print(', 'print;','print:'],
        'correctAnswer': ' print',
        'output': 'Something went wrong\nThe \'try except\' is finished'
    },

    {
        'question': '5\nclass Person:\n  def 5a.)________(self, name, age):\n    self.name = name\n    self.age = age\n\np1 = Person("John", 36)\n\nprint(p1.name)\nprint 5.b)__________\n',
        'choices': ['__init:__', ' __init__','init'],
        'correctAnswer': ' __init__',
        'output': 'what is the second one ? '
    },
    {
        'question': '5\nclass Person:\n  def 5a.)___init___(self, name, age):\n    self.name = name\n    self.age = age\n\np1 = Person("John", 36)\n\nprint(p1.name)\nprint 5.b)__________\n',
        'choices': ['(p1.age)', '(p1_age)','(P1.age)'],
        'correctAnswer': '(P1.age)',
        'output': 'John\n36'
    },
    
    {
        'question': '6\nclass person:\n  def __init__(self, 6.a) ____a.) = fname___, lname):\n    self.firstname = fname\n    self.lastname = lname\n\n  def printname(self):\n    print(self.firstname, self.lastname)\n\nclass Student(Person):\n  def __init__(self, fname, lname):\n    6.b)_______ .__init__(self, fname, lname)\nx = Student("Mike", "Olsen")\nx.printname()\n',
        'choices': ['a.) = fname','a.) - fname','a.) = Fname'],
        'correctAnswer': 'a.) = fname',
        'output': 'what is the second one ? '
    },

    {
        'question': '6\nclass person:\n  def __init__(self, 6.a) _______, lname):\n    self.firstname = fname\n    self.lastname = lname\n\n  def printname(self):\n    print(self.firstname, self.lastname)\n\nclass Student(Person):\n  def __init__(self, fname, lname):\n    6.b)_______ .__init__(self, fname, lname)\nx = Student("Mike", "Olsen")\nx.printname()\n',
        'choices': ['b.) Person.', 'b.) Person;','b.) person,'],
        'correctAnswer': 'b.) Person.',
        'output': 'Mike Olsen'
    },

    {
        'question': '7.\n7.a)_______ 1\ny = 2.8\nz = 1j\n\nprint7.b)________\nprint(type(y))\nprint(type(z))\n',
        'choices': ['a.) x = ', 'a.) x','a.) X ='],
        'correctAnswer': 'a.) x = ',
        'output': 'what is the second one ? '
    },

    {
        'question': '7.\n7.a)___a.) x = ____ 1\ny = 2.8\nz = 1j\n\nprint7.b)________\nprint(type(y))\nprint(type(z))\n',
        'choices': ['b.)(( type(x))', 'b.) (type ((X))','b.) (type (x))'],
        'correctAnswer': 'b.) (type (x))',
        'output': '<class \'int\'>\n<class \'float\'>\n<class \'complex\'>'
    },

    {
        'question': '8.\nf = open("demofile2.txt", "a")\n8a.)________("Now the file has more content!")\nf.close()\n\n#open and read the file after the appending:\nf = open("demofile2.txt", "r")\nprint8b.)________\n',
        'choices': ['a.) f.write ()', 'a.) f.write','a.) (f.write())'],
        'correctAnswer': 'a.) f.write',
        'output': 'what is the second one ? '
      },

    {
        'question': '8.\nf = open("demofile2.txt", "a")\n8a.)___f.write____("Now the file has more content!")\nf.close()\n\n#open and read the file after the appending:\nf = open("demofile2.txt", "r")\nprint8b.)________\n',
        'choices': ['b.) f.read ', 'b.) f.read()','b.)( f.read())'],
        'correctAnswer': 'b.) f.read()',
        'output': 'Hello! Welcome to demofile2.txt\nThis file is for testing purposes.\nGood Luck!Now the file has more content!'
    },

    {
        'question': '9\nusername 9a.)________("Enter username:")\nprint(9b.)___________ + username)\n',
        'choices': ['a.) = input()', 'a.) = Input','a.)  input'],
        'correctAnswer': 'a.)  input',
        'output': 'what is the second one ? '
    },
     {
        'question': '9\nusername 9a.)____ input____("Enter username:")\nprint(9b.)___________ + username)\n',
        'choices': ['9b.) "Username is: "', '9b.) "User is: "','= '],
        'correctAnswer': 'b.) "Username is: "',
        'output': 'Enter username:\n'
    },

    {
        'question': '10\n10a.)________(1)\ny = float(2.8)\nz = float("3")\nw = float("4.2")\nprint(x)\nprint(y)\nprint(z)\nPrint10b.)_______\n',
        'choices': ['a.) X = float', 'a.) x = Float','a.) x = float'],
        'correctAnswer': 'a.) x = float',
        'output': '1.0\n2.8\n3.0\n4.2'
    },

    {
        'question': '10\n10a.)____x = float____(1)\ny = float(2.8)\nz = float("3")\nw = float("4.2")\nprint(x)\nprint(y)\nprint(z)\nPrint10b.)_______\n',
        'choices': ['b.) (v)', 'b.) (w)','b.) (W)'],
        'correctAnswer': '10a.) x = float',
        'output': '1.0\n2.8\n3.0\n4.2'
    },



],
  "hard": [
   {
        'question': '1.\n# Python program to check if the input number is odd or even.\n# A number is even if division by 2 gives a remainder of 0.\n# If the remainder is 1, it is an odd number.\n\n1.)______________("Enter a number: "))\nif (num % 2) == 0:\n   print("{0} is Even".format(num))\nelse:\n   print("{0} is Odd".format(num))\n',
        'choices': ['num = int(input', 'num = float(input'],
        'correctAnswer': 'num = int(input',
        'output': 'Enter a number: 4\n4 is Even'
    },
    {
        'question': '2.\n# Python Program to calculate the square root\n\n# Note: change this value for a different result\nnum = 8\n\n# To take the input from the user\n#num = float(input(\'Enter a number: \'))\n\n2.)_________num ** 0.5\nprint(\'The square root of %0.3f is %0.3f\'%(num ,num_sqrt))\n',
        'choices': ['num_sqrt = math.sqrt', 'num_sqrt = pow'],
        'correctAnswer': 'num_sqrt = math.sqrt',
        'output': 'The square root of 8.000 is 2.828'
    },
    {
        'question': '3.\n# Function to print binary number using recursion\ndef convertToBinary(n):\n   if n > 1:\n       convertToBinary(n//2)\n   print(n % 2,end = \'\')\n\n# decimal number\ndec = 34\n\nconvertToBinary(dec)\n3.)_________\n',
        'choices': ['print()', 'print(end)'],
        'correctAnswer': 'print()',
        'output': '100010'
    },
    {
        'question': '4.\nmy_list = [1, 2, 3, 4, 5]\n\nprint 4.)__________\n',
        'choices': ['(my_list)', '(my_list[:])'],
        'correctAnswer': '(my_list[:])',
        'output': '[1, 2, 3, 4, 5]'
    },
    {
        'question': '5.\n5.)__________ [1, 2, 3, 4, 5]\n\nprint(my_list[2:])',
        'choices': ['my_list[:2]', 'my_list[2:]'],
        'correctAnswer': 'my_list[2:]',
        'output': '[3, 4, 5]'
    },
    {
        'question': '6.\nfrom datetime import datetime\n\n6.)____________ "June 15 2023 11:31AM"\n\ndatetime_object = datetime.strptime(my_date_string, \'%b %d %Y %I:%M%p\')\n\nprint(type(datetime_object))\nprint(datetime_object)',
        'choices': ['my_date_string = input', 'my_date_string = str'],
        'correctAnswer': 'my_date_string = input',
        'output': "class 'datetime.datetime'>\n2023-06-15 11:31:00"
    },
    {
        'question': '7.\n# Program to generate a random number between 0 and 9\n\n# importing the random module\nimport random\n\nprint(7.)________(0,9))',
        'choices': ['random.random()', 'random.randint'],
        'correctAnswer': 'random.randint',
        'output': '6'
    },
    {
        'question': '8.\n# Taking kilometers input from the user\n8.)___________(input("Enter value in kilometers: "))\n\n# conversion factor\nconv_fac = 0.621371\n\n# calculate miles\nmiles = kilometers * conv_fac\nprint(\'%0.2f kilometers is equal to %0.2f miles\' %(kilometers,miles))',
        'choices': ['kilometers = int', 'kilometers = float'],
        'correctAnswer': 'kilometers = float',
        'output': 'Enter value in kilometers: 300\n300.00 kilometers is equal to 186.41 miles'
    },
    {
        'question': '9.\n# Python Program to convert temperature in celsius to fahrenheit\n\n# change this value for a different result\ncelsius = 37.5\n\n# calculate fahrenheit\n9.)_________(celsius * 1.8) + 32\nprint(\'%0.1f degree Celsius is equal to %0.1f degree Fahrenheit\' %(celsius,fahrenheit))',
        'choices': ['fahrenheit = temp', 'fahrenheit = float'],
        'correctAnswer': 'fahrenheit = (celsius * 1.8) + 32',
        'output': '37.5 degree Celsius is equal to 99.5 degree Fahrenheit'
    },
    {
        'question': '10.\n# This program adds two numbers\n\nnum1 = 1.5\nnum2 = 6.3\n\n# Add two numbers\n10.)__________\n# Display the sum\nprint(\'The sum of {0} and {1} is {2}\'.format(num1, num2, sum))',
        'choices': ['sum = num1 + num2', 'sum = num1 - num2'],
        'correctAnswer': 'sum = num1 + num2',
        'output': 'The sum of 1.5 and 6.3 is 7.8'
    }
]
,
}

};
let currentLanguage = '';
let currentDifficulty = '';
let currentQuestionIndex = 0;
let score = 0;

document.addEventListener('DOMContentLoaded', function() {
  var hardButton = document.getElementById('hardbutton');
  hardButton.addEventListener("click", checkAnswer);
});


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
  document.getElementById("score").textContent = "";
  showQuestion();
  const form0 = document.querySelector(".form0");

  if (game !== null) {
    form0.style.display = "none";
    if (difficulty === "hard") {
      document.getElementById("hardfield").style.display = "flex";
      document.getElementById("hardbutton").style.display = "flex";
      const choicesElement = document.getElementById("choices");
      choicesElement.style.display = "none";
    } else {
      document.getElementById("hardfield").style.display = "none";
      document.getElementById("hardbutton").style.display = "none";
    }
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
    const choice = document.createElement("button");
    choice.textContent = currentQuestion.choices[i];
    choice.type = "button"; // Set type to "button" instead of "radio"
    choice.value = currentQuestion.choices[i];

    choice.style.display = "block"; // Set display to "block" to stack buttons vertically
    choice.style.marginLeft = ""; // Add margin to center the buttons horizontally
    choice.style.padding = "20px";
    choice.style.margin = "2vh"
    choice.style.fontSize = "15px";
    choice.style.backgroundColor = "white";
    choice.style.color = "black";
    choice.style.border = "none";
    choice.style.width = "110px";
    choice.style.borderRadius = "10px";

    // Add event listener to check answer on button click
    choice.addEventListener("click", checkAnswer);

    choicesElement.appendChild(choice);
  }
}

function goToNextQuestion() {
  // Add your code here to handle going to the next question
  // You can increment the currentQuestionIndex and call the showQuestion() function again


  currentQuestionIndex++; // Increment the index to move to the next question
 if (currentQuestionIndex < quizData[currentLanguage][currentDifficulty].length) {
      showQuestion();
      document.getElementById("result").textContent = "";
    } else {
      // Quiz is complete
      endGame();

    }
  // Call showQuestion() again to display the next question
  showQuestion();
 
   
}

//code ito ng hard level


function checkAnswer(event) {
  event.preventDefault();
  const selectedAnswer = event.target.value;
  const currentQuestion = quizData[currentLanguage][currentDifficulty][currentQuestionIndex];
  const resultElement = document.getElementById("result");
  const hiddenField = document.getElementById('hardfield').value;

  if (hiddenField !== null && hiddenField !== "") { 


// ito sa correct answer

    if (hiddenField === currentQuestion.correctAnswer) {
    resultElement.innerHTML = "Correct! <br>" + "output: &nbsp&nbsp" + currentQuestion.output;
    resultElement.style.fontSize = "20px";
    resultElement.style.color = "#39FF14";
    resultElement.style.fontFamily = "rockwell";
    score++;
    resultElement.style.textShadow = "0 0 15px #39FF14, 0 0 20px red, 0 0 20px blue";
 // 4000 milliseconds = 4 seconds
}


 else 

 // ito sa incorrect answer
 {

      resultElement.textContent = "Incorrect!";
      resultElement.style.fontSize = "30px";
      resultElement.style.color = "#ffcccb";
      resultElement.style.textShadow = "0 0 10px #ffcccb, 0 0 20px #ffcccb, 0 0 30px #ffcccb";
    }
  }



//ito naman code ng ibang level like easy and normal
   else {
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
  // Move to the next question after a short delay
  setTimeout(function() {
    
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
  document.querySelector(".form0").style.display = "block";


  // Hide the game element
  document.getElementById("game").style.display = "none";


  // Update the score display
  document.getElementById("score").textContent = " YOUR SCORE IS ! \n\n\n\n\n\n\n\n" + score + "/" + quizData[currentLanguage][currentDifficulty].length;
  document.getElementById("score").style.display = "block";
 



  // Reload the page after 3 seconds
  setTimeout(function() {
    location.reload();    
  },30000);

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
  document.getElementById("form1").style.display = "block";
  document.getElementById("form2").style.display = "none";
  document.getElementById("form3").style.display = "none";
  document.getElementById("game").style.display = "none";
  document.getElementById("score").style.display = "none";
  document.getElementById("score").style.display = "none";
  document.getElementById("choices").style.display = "block";

setTimeout(function() {
  // Reload the page
  location.reload();
}, 100);
 // Refresh every 5 seconds (adjust the delay as needed)
}
