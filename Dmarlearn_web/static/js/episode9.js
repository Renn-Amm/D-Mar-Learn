function toggleDropdown(contentId, iconId) {
    const dropdownContent = document.getElementById(contentId);
    const icon = document.getElementById(iconId);

    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
        icon.textContent = '▼';
    } else {
        dropdownContent.style.display = 'block';
        icon.textContent = '▲';
    }
}


//////////////// Fourth Activity 
/////////////// Correct answers for each question
const correctAnswers = {
    1: 'ie',
    2: 'ie',
    3: 'viz',
    4: 'eg',
    5: 'viz',
    6: 'eg', 
    7: 'etc',
    8: 'vs',
    9: 'et al',
    10: 'BC',
};

// Function to handle selecting an answer
// Function to handle selecting an answer
function selectAnswer(questionNumber, answer) {
    const answerInput = document.getElementById(`answer${questionNumber}`);
    answerInput.value = answer;

    // Store the selected answer
    answerInput.setAttribute('data-selected', answer);

    // Get all buttons for this question
    const buttons = document.querySelectorAll(`.dropdownfour-question:nth-child(${questionNumber + 3}) .dropdownfour-options button`);
    buttons.forEach(button => {
        // Reset the button background color
        button.style.backgroundColor = '#d3e4ff';

        // Check if this button was selected
        if (button.textContent.trim() === answer) {
            button.style.backgroundColor = '#5882b5'; // Light blue to indicate selection
        }
    });
}

// Function to check answers
function checkAnswers2() {
    let score = 0;

    // Loop through each question to check the answer
    for (let i = 1; i <= 10; i++) {
        const answerInput = document.getElementById(`answer${i}`);
        const selectedAnswer = answerInput.getAttribute('data-selected');
        const correctAnswer = correctAnswers[i];

        const buttons = document.querySelectorAll(`.dropdownfour-question:nth-child(${i + 3}) .dropdownfour-options button`);

        // Reset classes and styles before applying new ones
        answerInput.classList.remove('correct', 'incorrect');
        answerInput.style.backgroundColor = ''; // Reset background color

        // Update button colors based on correctness
        buttons.forEach(button => {
            const answer = button.textContent.trim();
            if (answer === correctAnswer) {
                button.style.backgroundColor = '#E3FEE3'; 
                button.style.border = '2px solid green'; // Highlight correct answer
            }

            if (answer === selectedAnswer && selectedAnswer !== correctAnswer) {
                button.style.backgroundColor = '#FFCCCC'; // Highlight incorrect selection
                button.style.border = '2px solid red';
            }

            // Disable all buttons after checking
            button.disabled = true;
        });

        // Apply correct/incorrect classes to the input fields
        if (selectedAnswer === correctAnswer) {
            score++;
            answerInput.classList.add('correct');
            answerInput.style.backgroundColor = '#E3FEE3'; // Green background for correct answers
        } else {
            answerInput.classList.add('incorrect');
            answerInput.style.backgroundColor = '#FFCCCC'; // Red background for incorrect answers
        }
    }

    // Display feedback based on the score
    const scoreText = document.getElementById('scoreText2');
    scoreText.textContent = `You got ${score} out of 10 correct.`; // Updated to reflect 10 questions

    // Show the feedback modal
    const scoreModal = document.getElementById('scoreModal2');
    scoreModal.style.display = 'block';

    // Enable the buttons to allow showing answers and feedback
    document.getElementById('showAnswerButton2').style.display = 'inline-block';
    document.getElementById('showFeedbackButton2').style.display = 'inline-block';

    // Hide the Finish button after it's clicked
    document.getElementById('finishButton2').style.display = 'none';
}

// Function to reset the activity
function resetActivity2() {
    for (let i = 1; i <= 10; i++) {
        const answerInput = document.getElementById(`answer${i}`);
        answerInput.value = '';
        answerInput.removeAttribute('data-selected');
        answerInput.classList.remove('correct', 'incorrect'); // Remove any classes added
        answerInput.style.borderColor = ''; // Reset border color
        answerInput.style.backgroundColor = ''; // Reset background color
        answerInput.disabled = false; // Re-enable input

        const buttons = document.querySelectorAll(`.dropdownfour-question:nth-child(${i + 3}) .dropdownfour-options button`);
        buttons.forEach(button => {
            button.style.backgroundColor = '#d3e4ff'; // Reset background color of buttons
            button.style.border = ''; // Reset border style
            button.disabled = false;
        });
    }

    document.getElementById('showAnswerButton2').style.display = 'none';
    document.getElementById('showFeedbackButton2').style.display = 'none';

    const scoreModal = document.getElementById('scoreModal2');
    scoreModal.style.display = 'none';

    // Show the Finish button when resetting the activity
    document.getElementById('finishButton2').style.display = 'inline-block';
}


// Function to show correct answers
function showAnswers2() {
    for (let i = 1; i <= 10; i++) {
        const correctAnswer = correctAnswers[i];
        const answerInput = document.getElementById(`answer${i}`);
        answerInput.value = correctAnswer;  // Fill in the correct answer
        answerInput.style.borderColor = '#E3FEE3';  // Green border for correct answers
        answerInput.style.backgroundColor = '#E3FEE3'; // Green background for correct answers
        answerInput.disabled = true;  // Disable input box

        const buttons = document.querySelectorAll(`.dropdownfour-question:nth-child(${i + 3}) .dropdownfour-options button`);

        buttons.forEach(button => {
            const answer = button.textContent.trim();
            if (answer === correctAnswer) {
                button.style.backgroundColor = '#E3FEE3'; // Correct answer
            } else if (answer === answerInput.getAttribute('data-selected')) {
                button.style.backgroundColor = '#FFCCCC'; // Incorrectly selected answer
            } else {
                button.style.backgroundColor = '#d3e4ff'; // Reset other buttons
            }
        });
    }
}

// Function to show feedback
function showFeedback2() {
    const scoreModal = document.getElementById('scoreModal2');
    scoreModal.style.display = 'block';
}

// Function to close the feedback modal
function closeModal2() {
    const scoreModal = document.getElementById('scoreModal2');
    scoreModal.style.display = 'none';
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    const scoreModal = document.getElementById('scoreModal2');
    if (event.target === scoreModal) {
        scoreModal.style.display = 'none';
    }
};
