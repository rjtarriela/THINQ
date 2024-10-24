const questionNumber = document.querySelector(".question-number");
const questionText = document.querySelector(".question-text");
const optionContainer = document.querySelector(".option-container");
const answersIndicatorContainer = document.querySelector(".answers-indicator");
const homeBox = document.querySelector(".home-box");
const quizBox = document.querySelector(".quiz-box");
const resultBox = document.querySelector(".result-box");
const questionLimit = 20;
const timeDisplay = document.getElementById("time-left");
const nextButton = document.querySelector(".next-question-btn");

let questionCounter = 0;
let currentQuestion;
let availableQuestions = [];
let availableOptions = [];
let correctAnswers = 0;
let attempt = 0;
let stemScore = 0;
let abmScore = 0;
let humssScore = 0;
let gasScore = 0;
let quizAttempt = 1;
let timer;
let timeLeft = 1500;

function setAvailableQuestions() {
    const totalQuestion = quiz.length;
    for (let i = 0; i < totalQuestion; i++) {
        availableQuestions.push(quiz[i]);
    };
}

function getNewQuestion() {
    console.log(availableQuestions);
    questionNumber.innerHTML = "Question " + (questionCounter + 1) + " of " + questionLimit;
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex;
    questionText.innerHTML = currentQuestion.q;
    const index1 = availableQuestions.indexOf(questionIndex);
    availableQuestions.splice(index1, 1);

    if (currentQuestion.hasOwnProperty("img")) {
        const img = document.createElement("img");
        img.src = currentQuestion.img;
        questionText.appendChild(img);
    }

    const optionLen = currentQuestion.options.length;
    for (let i = 0; i < optionLen; i++) {
        availableOptions.push(i);
    }

    optionContainer.innerHTML = '';
    let animationDelay = 0.15;
    for (let i = 0; i < optionLen; i++) {
        const optionIndex = availableOptions[Math.floor(Math.random() * availableOptions.length)];
        const index2 = availableOptions.indexOf(optionIndex);
        availableOptions.splice(index2, 1);
        const option = document.createElement("div");
        option.innerHTML = currentQuestion.options[optionIndex];
        option.id = optionIndex;
        option.style.animationDelay = animationDelay + 's';
        animationDelay = animationDelay + 0.15;
        option.className = "option";
        optionContainer.appendChild(option)
        option.setAttribute("onclick", "getResult(this)")
    }

    questionCounter++
}

function getResult(element) {

    const id = parseInt(element.id);

    if (id === currentQuestion.answer) {
        element.classList.add("correct");
        updateAnswerIndicator("correct");
        correctAnswers++;

        if (currentQuestion.stem === 1) {
            stemScore += 1;
        } else if (currentQuestion.abm === 1) {
            abmScore += 1;
        } else if (currentQuestion.humss === 1) {
            humssScore += 1;
        } else if (currentQuestion.gas === 1) {
            gasScore += 1;
        }

    } else {

        element.classList.add("wrong");
        updateAnswerIndicator("wrong");

        const optionLen = optionContainer.children.length;

        for (let i = 0; i < optionLen; i++) {
            if (parseInt(optionContainer.children[i].id) === currentQuestion.answer) {
                optionContainer.children[i].classList.add("correct");
            }
        }

    }
    attempt++
    unclickableOptions();
}

function unclickableOptions() {
    const optionLen = optionContainer.children.length;
    for (let i = 0; i < optionLen; i++) {
        optionContainer.children[i].classList.add("already-answered");
    }

    nextButton.classList.remove("hide");
}

function answersIndicator() {
    answersIndicatorContainer.innerHTML = '';
    const totalQuestion = questionLimit;
    for (let i = 0; i < totalQuestion; i++) {
        const indicator = document.createElement("div");
        answersIndicatorContainer.appendChild(indicator);
    }
}

function updateAnswerIndicator(markType) {
    answersIndicatorContainer.children[questionCounter - 1].classList.add(markType)
}

function next() {
    nextButton.classList.add("hide");
    if (questionCounter === questionLimit) {
        console.log("quiz over");
        quizOver();
    } else {
        getNewQuestion();
    }
}

function quizOver() {
    timeLeft = 1500;
    quizBox.classList.add("hide");
    resultBox.classList.remove("hide");
    quizResult();
}

// get the quizz result
function quizResult() {
    resultBox.querySelector(".total-question").innerHTML = questionLimit;
    resultBox.querySelector(".total-attempt").innerHTML = quizAttempt;
    resultBox.querySelector(".total-stem").innerHTML = (stemScore / 5) * 100 + "%";
    resultBox.querySelector(".total-abm").innerHTML = (abmScore / 5) * 100 + "%";
    resultBox.querySelector(".total-humss").innerHTML = (humssScore / 5) * 100 + "%";
    resultBox.querySelector(".total-gas").innerHTML = (gasScore / 5) * 100 + "%";

    resultBox.querySelector(".total-correct").innerHTML = correctAnswers;
    resultBox.querySelector(".total-wrong").innerHTML = attempt - correctAnswers;

    const percentage = (correctAnswers / questionLimit) * 100;
    resultBox.querySelector(".percentage").innerHTML = percentage.toFixed(2) + "%";
    resultBox.querySelector(".total-score").innerHTML = correctAnswers + " / " + questionLimit;
}

function resetQuiz() {
    questionCounter = 0;
    correctAnswers = 0;
    attempt = 0;
    stemScore = 0;
    abmScore = 0;
    humssScore = 0;
    gasScore = 0;
    timeLeft = 1500;
}

function tryAgainQuiz() {
    resultBox.classList.add("hide");
    quizBox.classList.remove("hide");

    resetQuiz();
    setAvailableQuestions();
    getNewQuestion();
    answersIndicator();
    quizAttempt++
}

function goToHome() {
    resultBox.classList.add("hide");
    resetQuiz();
    quizAttempt = 0;
}

function updateTimer() {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
        quizOver();
    }
}

// STARTING POINT

function startQuiz() {

    // hide home-box
    homeBox.classList.add("hide");
    // show quiz-box
    quizBox.classList.remove("hide");

    // first we will set all the questions in availableQuestion Array
    setAvailableQuestions();

    // second we will call getNewQuestion() function
    getNewQuestion();

    // to create indicator of answers .. ito yung check and ekis
    answersIndicator();

    timer = setInterval(updateTimer, 1000);
}

window.onload = function () {
    homeBox.querySelector(".total-question").innerHTML = questionLimit;
}