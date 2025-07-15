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

document.addEventListener('DOMContentLoaded', function() {
    const draggables = document.querySelectorAll('.draggable');
    const dropzones = document.querySelectorAll('.dropzone');
    const showAnswerButton = document.getElementById('showAnswerButton');
    const showFeedbackButton = document.getElementById('showFeedback'); // Reference to Show Feedback button
    const finishButton = document.querySelector('button[onclick="checkAnswers()"]'); // Reference to Finish button
    const modal = document.getElementById('scoreModal');
    const closeBtn = document.querySelector('.close');
    const scoreText = document.getElementById('scoreText');

    draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
    });

    dropzones.forEach(dropzone => {
        dropzone.addEventListener('dragover', dragOver);
        dropzone.addEventListener('drop', drop);
    });

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.textContent);
    }

    function dragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }

    function drop(e) {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        e.target.value = data;
    }

    window.checkAnswers = function() {
        const answers = ['Deficiency', 'Tremendous', 'Risk', 'Avert', 'Exposure'];
        let correct = 0;

        dropzones.forEach((dropzone, index) => {
            if (dropzone.value.trim() === answers[index]) {
                dropzone.style.borderColor = 'green';
                correct++;
            } else {
                dropzone.style.borderColor = 'red';
            }
        });

        const percentage = (correct / answers.length) * 100;
        scoreText.textContent = `Your total score is ${correct} out of ${answers.length}, which is a score of ${percentage.toFixed(2)}%`;
        modal.style.display = 'block'; // Show the modal

        // Hide the Finish button and show the Show Feedback button
        finishButton.style.display = 'none';
        showFeedbackButton.style.display = 'inline-block';

        if (correct !== answers.length) {
            showAnswerButton.style.display = 'inline-block'; // Show the button when not all answers are correct
        }
    };

    window.resetActivity = function() {
        dropzones.forEach(dropzone => {
            dropzone.value = '';
            dropzone.style.borderColor = '#d3e4ff';
        });
        showAnswerButton.style.display = 'none'; // Hide the button on reset
        showFeedbackButton.style.display = 'none'; // Hide the Show Feedback button on reset
        finishButton.style.display = 'inline-block'; // Show the Finish button on reset
        modal.style.display = 'none'; // Hide the modal on reset
    };

    window.showAnswers = function() {
        const answers = ['Deficiency', 'Tremendous', 'Risk', 'Avert', 'Exposure'];

        dropzones.forEach((dropzone, index) => {
            dropzone.value = answers[index];
            dropzone.style.borderColor = 'green'; // Optional: Change the border color to indicate auto-fill
        });
    };

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    window.showFeedback = function() {
        // Show the feedback modal when the "Show Feedback" button is clicked
        modal.style.display = 'block';
    };
});



//////////////// Fourth Activity 
/////////////// Correct answers for each question
    const correctAnswers = {
        1: 'must',
        2: 'can',
        3: 'had to',
        4: 'can',
        5: 'should'
    };
    
    // Function to handle selecting an answer
    function selectAnswer(questionNumber, answer) {
        const answerInput = document.getElementById(`answer${questionNumber}`);
        answerInput.value = answer;
    
        // Store the selected answer
        answerInput.setAttribute('data-selected', answer);
        console.log(answerInput);
    
        // Disable all buttons for this question after an answer is selected
        const buttons = document.querySelectorAll(`.dropdownfour-question:nth-child(${questionNumber + 2}) .dropdownfour-options button`);
        buttons.forEach(button => {
            button.disabled = true;
            if (button.textContent.trim() === answer) {
                button.style.backgroundColor = '#add8e6'; // Light blue to indicate selection
            }
        });
    }
    
        // document.querySelectorAll('.dropdownfour-question').forEach((question, index) => {
        //     question.setAttribute('data-question', index + 1);
        // });
    
    // Function to check answers
    function checkAnswers() {
        let score = 0;
    
        // Loop through each question to check the answer
        for (let i = 1; i <= 5; i++) {
            const selectedAnswer = document.getElementById(`answer${i}`).getAttribute('data-selected');
            const correctAnswer = correctAnswers[i];
    
            const buttons = document.querySelectorAll(`.dropdownfour-question:nth-child(${i + 2}) .dropdownfour-options button`);
    
            // Update button colors based on correctness
            buttons.forEach(button => {
                if (button.textContent.trim() === selectedAnswer) {
                    if (selectedAnswer === correctAnswer) {
                        button.style.backgroundColor = 'green';
                        score++;
                    } else {
                        button.style.backgroundColor = 'red';
                    }
                }
            });
        }
    
        // Display feedback based on the score
        const scoreText = document.getElementById('scoreText');
        scoreText.textContent = `You got ${score} out of 5 correct.`;
    
        // Show the feedback modal
        const scoreModal = document.getElementById('scoreModal');
        scoreModal.style.display = 'block';
    
        // Show the additional buttons
        document.getElementById('showAnswerButton').style.display = 'inline-block';
        document.getElementById('showFeedback').style.display = 'inline-block';
    }
    
    // Function to reset the activity
    function resetActivity() {
        for (let i = 1; i <= 5; i++) {
            const answerInput = document.getElementById(`answer${i}`);
            answerInput.value = '';
            answerInput.removeAttribute('data-selected');
    
            const buttons = document.querySelectorAll(`.dropdownfour-question:nth-child(${i + 2}) .dropdownfour-options button`);
            buttons.forEach(button => {
                button.style.backgroundColor = '#d3e4ff';
                button.disabled = false;
            });
        }
    
        // Hide the additional buttons
        document.getElementById('showAnswerButton').style.display = 'none';
        document.getElementById('showFeedback').style.display = 'none';
    
        // Hide the feedback modal
        const scoreModal = document.getElementById('scoreModal');
        scoreModal.style.display = 'none';
    }
    
    // Function to show correct answers
    function showAnswers() {
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`answer${i}`).value = correctAnswers[i];
    
            const buttons = document.querySelectorAll(`.dropdownfour-question:nth-child(${i + 2}) .dropdownfour-options button`);
            buttons.forEach(button => {
                if (button.textContent.trim() === correctAnswers[i]) {
                    button.style.backgroundColor = 'green';
                }
            });
        }
    }
    
    // Function to show feedback
    function showFeedback() {
        const scoreModal = document.getElementById('scoreModal');
        scoreModal.style.display = 'block';
    }
    
    // Close the feedback modal when the close button is clicked
    document.querySelector('.close').onclick = function() {
        const scoreModal = document.getElementById('scoreModal');
        scoreModal.style.display = 'none';
    };
    
    // Close the modal if user clicks outside of it
    window.onclick = function(event) {
        const scoreModal = document.getElementById('scoreModal');
        if (event.target === scoreModal) {
            scoreModal.style.display = 'none';
        }
    };