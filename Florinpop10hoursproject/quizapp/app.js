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
	const currentQuizData = quizData[currentQuiz];
	questionE1.innerHTML = currentQuizData.question;

  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  const answerEls = document.querySelectorAll(".answer");

  let answer = undefined;

  answerEls.forEach((answerE1) => {
    if (answerE1.cheked) {
      answer = answerE1.id
    }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  //check to see the answer 
  const answer = getSelected();
  console.log(answer);
  
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }
    if (currentQuiz < quizData.length) {
      loadQuiz()
    }
    else {
      alert('fimished')
    }
  }
});