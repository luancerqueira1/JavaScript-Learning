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

const questionEl = document.getElementById('question');
const a_text =document.getElementById('a-text');
const b_text =document.getElementById('b-text');
const c_text =document.getElementById('c-text');
const d_text =document.getElementById('d-text');

let currentQuiz= 0;

loadQuiz();

function loadQuiz() {
	const currentQuizData = quizData[currentQuestion];
	questionEl.innerHTML = currentQuizData.question;


}