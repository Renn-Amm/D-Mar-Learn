function submitQuiz() {
    const answers = {
        q1: 'a',
        q2: 'b',
        q3: 'a',
        q4: 'a',
        q5: 'b',
        q6: 'b',
        q7: 'c',
        q8: 'a',
        q9: 'b',
        q10: 'b'
    };

    let score = 0;

    for (let question in answers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        const correctOption = document.querySelector(`input[name="${question}"][value="${answers[question]}"]`);

        // Highlight the correct answer for each question
        correctOption.parentElement.style.backgroundColor = 'lightgreen';

        if (selectedOption) {
            if (selectedOption.value === answers[question]) {
                score++;
            } else {
                // Highlight the wrong answer
                selectedOption.parentElement.style.backgroundColor = 'lightcoral';
            }
        }
    }

    const resultElement = document.getElementById('result');
   
    if (score >= 5) {
        resultElement.innerText = `You scored ${score} out of 10!You don't need to retake the test but if you want to answer again, please refresh the page`;
    } else {
        resultElement.innerHTML = `
            <p>You scored ${score} out of 10. You need at least 5 to pass.</p>
            <button onclick="retakeQuiz()">Retake Quiz</button>
        `;
    }
}

function retakeQuiz() {
    const quizForm = document.getElementById('quiz-form');
    quizForm.reset();
    document.getElementById('result').innerText = '';

    // Reset the background colors when the quiz is retaken
    const options = document.querySelectorAll('input[type="radio"]');
    options.forEach(option => {
        option.parentElement.style.backgroundColor = ''; // Remove any background color
    });
}


