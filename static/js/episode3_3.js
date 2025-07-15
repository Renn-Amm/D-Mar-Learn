function submitQuiz2() {
    var answers = {
        "q1.2": "b",
        "q2.2": "a",
        "q3.2": "c",
        "q4.2": "a",
        "q5.2": "c",
        "q6.2": "a",
        "q7.2": "b",
        "q8.2": "a",
        "q9.2": "c",
        "q10.2": "a"
    };

    var score = 0;
    for (var question in answers) {
        var selectedAnswer = document.querySelector(`input[name="${question}"]:checked`);
        var correctAnswerDiv = document.getElementById(`answer-${question}`);
        if (selectedAnswer) {
            if (selectedAnswer.value === answers[question]) {
                score++;
                correctAnswerDiv.textContent = "Correct!";
                correctAnswerDiv.style.color = "green";
            } else {
                correctAnswerDiv.textContent = `Incorrect! The correct answer is ${answers[question]}.`;
                correctAnswerDiv.style.color = "red";
            }
        } else {
            correctAnswerDiv.textContent = `Please select an answer. The correct answer is ${answers[question]}.`;
            correctAnswerDiv.style.color = "red";
        }
    }

    document.getElementById("result2").textContent = `You scored ${score}/10.`;
    document.getElementById("retake-btn2").style.display = "block";
}

function retakeQuiz2() {
    var correctAnswerDivs = document.querySelectorAll('.correct-answer2');
    correctAnswerDivs.forEach(div => div.textContent = '');

    var radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach(radio => radio.checked = false);

    document.getElementById("result2").textContent = '';
    document.getElementById("retake-btn2").style.display = "none";
}