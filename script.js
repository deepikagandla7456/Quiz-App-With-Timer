// script.js
let time = 60;
const timerDisplay = document.getElementById('time');
const questionContainer = document.getElementById('question-container');
const nextBtn = document.getElementById('next-btn');

function startTimer() {
    const timer = setInterval(() => {
        if (time > 0) {
            time--;
            timerDisplay.textContent = time;
        } else {
            clearInterval(timer);
            alert("Time's up!");
        }
    }, 1000);
}

function loadQuestion() {
    questionContainer.innerHTML = "<p>Sample question text?</p>";
}

nextBtn.addEventListener('click', loadQuestion);

// Initialize
loadQuestion();
startTimer();
