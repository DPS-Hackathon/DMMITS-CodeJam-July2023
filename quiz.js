const quizData = [
    {
        question: " What is the full form of ISRO?",
        a: "International Space Research Organisation",
        b: "Institute for Space Research and Observation",
        c: "Indian Space Research Organisation",
        d: "Indian Space and Research Observatory",
        correct: "c",
    },
    {
        question: " What is the full form of GSLV?",
        a: "General Satellite Lifting Vehicle",
        b: "Geosynchronous Satellite Launch Vehicle",
        c: "Geosynchronous Satellite Lifting Vehicle",
        d: "Geostar Satellite Launch Vehicle",
        correct: "b",
    },
    {
        question: " When was ISRO Established?",
        a: "Aug 15, 1969",
        b: "Jan 26, 1969",
        c: "Aug 15, 1948",
        d: "Jan 15, 1948",
        correct: "a",
    },
    {
        question: " ISRO is monitored directly under whom?",
        a: "President",
        b: "President",
        c: "Prime Minister",
        d: "none of the above",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const b_text = document.getElementById("Labelb");
const c_text = document.getElementById("Labelc");
const d_text = document.getElementById("Labeld");
const a_text = document.getElementById("Labela");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
let level = currentQuiz + 1;

const deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
};

const getSelectedOption = () => {
    let answer;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) {
            answer = answerElement.id;
        }
    });
    return answer;
};

const loadQuiz = () => {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionElement.innerText = "Q" + level + ": " + currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
    const answer = getSelectedOption();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) score++;
        // console.log(answer + " answer")
        // console.log(quizData[currentQuiz].correct)
        // console.log(score + "score")
        currentQuiz++;
        level++
        if (currentQuiz < quizData.length) loadQuiz();
        else {
            quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="history.go(0)">Play Again</button>
          `
        }
    }
});
