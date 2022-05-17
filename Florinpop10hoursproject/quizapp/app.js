const quizData = [
  {
    question: "your age?",
    a: "10",
    b: "17",
    c: "20",
    d: "25",
    correct: "c",
  },
  {
    question: "best programming language",
    a: "js",
    b: "python",
    c: "c",
    d: "java",
    correct: "a",
  },
  {
    question: "who is the president of Us",
    a: "florin pop",
    b: "pato donald",
    c: "elon musk",
    d: "joe biden",
    correct: "d",
  },
  {
	  question: "2+2",
	  a: '1',
	  b: '2',
	  c: '10',
	  d: '4',
	  correct :'d'
  }
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.querySelector("#quiz");
const questionE1 = document.getElementById('question');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submitBtn = document.querySelector("#submitBtn"); 

let currentQuiz = 0;
let score = 0

loadQuiz();

function loadQuiz() {
  deselectAnswers()
	const currentQuizData = quizData[currentQuiz];
	questionE1.innerHTML = currentQuizData.question;

  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  

  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
   answerEls.forEach((answerEl) => {
      answerEl.checked = false
   });
}

submitBtn.addEventListener("click", () => {
  //check to see the answer 
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    currentQuiz++
   
    if (currentQuiz < quizData.length) {
      loadQuiz()
    }
    else {
      quiz.innerHTML = `<h2> you answered correctly ${score}/${quizData.length} questions </h2> <button onclick="location.reload()">Reload</button>`;
    }
  }
});