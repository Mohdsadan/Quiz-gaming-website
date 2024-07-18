const quizData = [
  {
    // 1
    question: "What does HTML stand for?",
    option: [
      "Hypertext Markup Langauage",
      "Hyper Transfer Markup Language",
      "Hyper machine Language",
      "Hyper and Text Markup Language",
    ],
    current: 0,
  },
  {
    // 2
    question:
      "Which CSS Proprty is used to control the spacing between element?",
    option: ["margin",
       "padding", 
       "spacing", 
       "border-spacing"
      ],
    current: 1,
  },
  {
    // 3
    question:
      "Which of the following element is responsible for making the text bold in HTML?",
    option: ["<pre>",
       "<a>", 
       "<b>", 
       "<br>"
      ],
    current: 2,
  },
  {
    // 4
    question:
      "Which of the following tag is used for inserting the largest heading in HTML?",
    option: ["<h3>",
      "<h1>",
      "<h5>",
      "<h6>"
    ],
    current: 1,
  },
  {
    // 5
    question:
      "How to create an unordered list (a list with the list items in bullets) in HTML?",
    option: ["<ul>",
      "<ol>",
      "<li>",
      "<i>"
    ],
    current: 0,
  },
  {
    // 6
    question:
      "How to insert an image in HTML?",
    option: ["<img href = 'jtp.png' />",
      "<img url = 'jtp.png' />",
      "<img link = 'jtp.png' />",
      "<img src = 'jtp.png' />"
    ],
    current: 3,
  },
  {
    // 7
    question:
      "How to add a background color in HTML?",
    option: ["<marquee bg color: 'red'>",
      "<marquee bg-color = 'red'>",
      "<marquee bgcolor = 'red'>",
      "<marquee color = 'red'>"
    ],
    current: 2,
  },
  {
    // 8
    question:
      "<input> is -",
    option: ["a format tag.",
      "an empty tag."
      ,"All of the above"
      ,"None of the above"
    ],
    current: 1,
  },
  {
    // 9
    question:
      "Which of the following tag is used to define options in a drop-down selection list?",
    option: ["<select>",
      "<list>",
      "<dropdown>",
      "<option>"
    ],
    current: 3,
  },
  {
    // 10
    question:
      " The <hr> tag in HTML is used for -",
    option: ["new line",
      "vertical ruler",
      "new paragraph",
      "horizontal ruler"
    ],
    current: 3,
  },
  {
    // 11
    question:
      "Which of the following tag is used to add rows in the table?",
    option: ["<td> and </td>",
      "<th> and </th>",
      "<tr> and </tr>",
      "None of the above"
    ],
    current: 2,
  },
  {
    // 12
    question:
      "Which of the following attribute is used to provide a unique name to an element?",
    option: ["class",
      "id",
      "type",
      "None of the above"
    ],
    current: 1,
  },
  {
    // 13
    question:
      " A program in HTML can be rendered and read by -",
    option: ["Web browser",
      "Server",
      "Interpreter",
      "None of the above"
    ],
    current: 0,
  },
  {
    // 14
    question:
      "Which of the following is the root tag of the HTML document?",
    option: ["<body>",
      "<head>",
      "<title>",
      "<html>"
    ],
    current: 3,
  },
  {
    // 15
    question:
      "In HTML5, which of the following tag is used to initialize the document type?",
    option: ["<Doctype HTML>",
      "<\Doctype html>",
      "<Doctype>",
      "<!DOCTYPE html>"
    ],
    current: 3,
  },
];

// JavaScript Initializaton

const answerElm = document.querySelectorAll(".answer");
const quiz = document.querySelector("#quiz");
const scores = document.querySelector(".score");

const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question",
    "option_1",
    "option_2",
    "option_3",
    "option_4"
  );

const submit = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

// Load Quiz Function

const loadQuiz = () => {
  const { question, option } = quizData[currentQuiz];
  questionElm.innerText = `${currentQuiz + 1}: ${question}`;
  scores.innerText = `Score : ${score}/${quizData.length}`;
  option.forEach((curOpt, index) => {
    window[`option_${index + 1}`].innerText = curOpt
  });
};
loadQuiz();

// Get Selecter Answer Function on Button click

const getSelectedOpting = () => {
  let answerElemnt = Array.from(answerElm);
  return answerElemnt.findIndex((currentElm) => currentElm.checked);
};

const deselectedAnwers = () => {
  return answerElm.forEach((currElm) => (currElm.checked = false));
};

submit.addEventListener("click", () => {
  const selecterOptIndex = getSelectedOpting();
  console.log(selecterOptIndex);
  if (selecterOptIndex === quizData[currentQuiz].current) {
    score = score + 1;
  }
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    deselectedAnwers();
    loadQuiz();
  }
  else {
    quiz.innerHTML = `
      <div class="result">
      <h2> Your Score: ${score}/${quizData.length} Correct Answers </h2>
      <p> Congratulations on completing the Quiz-game!! </p>
      <button class= "reload-button" onclick="location.reload()">Play Again </button>
      </div>
      `;
  }
});
