// Questions Array
const questions = [
    {
        question: "Which language is used to create a web page?",
        options: ["CSS", "HTML", "Java", "Python"],
        answer: "HTML"
    },
    {
        question: "Which language is used to style a web page?",
        options: ["JavaScript", "HTML", "CSS", "C++"],
        answer: "CSS"
    },
    {
        question: "Which tag is used for the largest heading?",
        options: ["<h1>", "<h6>", "<p>", "<head>"],
        answer: "<h1>"
    },
    {
        question: "Which keyword declares a variable in JavaScript?",
        options: ["let", "print", "display", "input"],
        answer: "let"
    },
    {
        question: "Which symbol is used for a single-line comment?",
        options: ["##", "//", "<!-- -->", "**"],
        answer: "//"
    }
];

// Variables
let currentQuestion = 0;
let score = 0;
let timeLeft = 20;
let timer;
let shuffledQuestions = [];
let answered = false;


// Shuffle Questions
function shuffleQuestions() {

    shuffledQuestions = [...questions];

    for (let i = shuffledQuestions.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));

        [shuffledQuestions[i], shuffledQuestions[j]] =
        [shuffledQuestions[j], shuffledQuestions[i]];
    }
}


// Start Timer
function startTimer() {

    clearInterval(timer);

    timeLeft = 20;

    document.getElementById("timer").textContent = timeLeft;

    timer = setInterval(function() {

        timeLeft--;

        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 0) {

            clearInterval(timer);

            timeOut();
        }

    }, 1000);
}


// Display Question
function displayQuestion() {

    answered = false;

    let q = shuffledQuestions[currentQuestion];

    document.getElementById("question-number").textContent =
    "Question " + (currentQuestion + 1) +
    " of " + shuffledQuestions.length;

    document.getElementById("question").textContent = q.question;

    document.getElementById("feedback").textContent = "";

    document.getElementById("next-btn").disabled = true;

    document.getElementById("options").innerHTML = "";

    q.options.forEach(function(option) {

        let button = document.createElement("button");

        button.textContent = option;

        button.className = "option-btn";

        button.onclick = function() {
            checkAnswer(option, button);
        };

        document.getElementById("options").appendChild(button);

    });

    startTimer();
}


// Check Answer
function checkAnswer(selectedAnswer, button) {

    if (answered) return;

    answered = true;

    clearInterval(timer);

    let correctAnswer = shuffledQuestions[currentQuestion].answer;

    let buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(function(btn) {

        btn.disabled = true;

        if (btn.textContent === correctAnswer) {
            btn.classList.add("correct");
        }

    });

    if (selectedAnswer === correctAnswer) {

        score++;

        document.getElementById("feedback").textContent =
        "Correct Answer! Well Done.";

    } else {

        button.classList.add("incorrect");

        document.getElementById("feedback").textContent =
        "Wrong Answer! Correct answer: " + correctAnswer;

    }

    document.getElementById("next-btn").disabled = false;
}


// Time Out
function timeOut() {

    if (answered) return;

    answered = true;

    let correctAnswer = shuffledQuestions[currentQuestion].answer;

    let buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(function(btn) {

        btn.disabled = true;

        if (btn.textContent === correctAnswer) {
            btn.classList.add("correct");
        }

    });

    document.getElementById("feedback").textContent =
    "Time is up! Correct answer: " + correctAnswer;

    document.getElementById("next-btn").disabled = false;
}


// Next Question
function nextQuestion() {

    if (!answered) return;

    currentQuestion++;

    if (currentQuestion < shuffledQuestions.length) {

        displayQuestion();

    } else {

        showResult();

    }
}


// Show Result
function showResult() {

    clearInterval(timer);

    document.getElementById("quiz-screen").hidden = true;

    document.getElementById("result-screen").hidden = false;

    document.getElementById("score").textContent =
    score + " / " + shuffledQuestions.length;

}


// Start Quiz
function startQuiz() {

    clearInterval(timer);

    currentQuestion = 0;

    score = 0;

    shuffleQuestions();

    document.getElementById("start-screen").hidden = true;

    document.getElementById("result-screen").hidden = true;

    document.getElementById("quiz-screen").hidden = false;

    displayQuestion();

}