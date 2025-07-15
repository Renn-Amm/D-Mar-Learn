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
    const showAnswerButton = document.getElementById('showAnswerButton5');
    const showFeedbackButton = document.getElementById('showFeedback5');
    const finishButton = document.querySelector('button[onclick="checkAnswers5()"]');
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

    window.checkAnswers5 = function() {
        const answers = ['Fossil Fuel', 'Dig Up', 'Accumulate', 'Diurnal', 'Put Out'];
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

    window.resetActivity5 = function() {
        dropzones.forEach(dropzone => {
            dropzone.value = '';
            dropzone.style.borderColor = '#d3e4ff';
        });
        showAnswerButton.style.display = 'none'; // Hide the button on reset
        showFeedbackButton.style.display = 'none'; // Hide the Show Feedback button on reset
        finishButton.style.display = 'inline-block'; // Show the Finish button on reset
        modal.style.display = 'none'; // Hide the modal on reset
    };

    window.showAnswers5 = function() {
        const answers = ['Fossil Fuel', 'Dig Up', 'Accumulate', 'Diurnal', 'Put Out'];

        dropzones.forEach((dropzone, index) => {
            dropzone.value = answers[index];
            dropzone.style.borderColor = 'green'; // Optional: Change the border color to indicate auto-fill
        });

        showAnswerButton.style.display = 'none'; // Hide the Show Answer button after showing answers
    };

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };

    window.showFeedback5 = function() {
        // Show the feedback modal when the "Show Feedback" button is clicked
        modal.style.display = 'block';
    };
});








const correctAnswers4 = {
    Japanese: 'Japanese',
    Austrian: 'Austrian',
    Bangladeshi: 'Bangladeshi',
    English: 'English',
    French: 'French',
    Chinese: 'Chinese',
    Korean: 'Korean',
    Pakistani: 'Pakistani',
    Irish: 'Irish',
    Filipino: 'Filipino',
    Vietnamese: 'Vietnamese',
    Indian: 'Indian',
    Israeli: 'Israeli',
    Spanish: 'Spanish',
    Greek: 'Greek',
    Taiwanese: 'Taiwanese',
    Canadian: 'Canadian',
    Iraqi: 'Iraqi',
    Danish: 'Danish',
    Egyptian: 'Egyptian',
    Portuguese: 'Portuguese',
    Brazilian: 'Brazilian',
    Kuwait: 'Kuwait',
    Finnish: 'Finnish',
    Dutch: 'Dutch',
    Russian: 'Russian',
    Swedish: 'Swedish',
    Swiss: 'Swiss',
    Mexican: 'Mexican',
    British: 'British',
    Cambodian: 'Cambodian',
    Turkish: 'Turkish',
    American: 'American',
    Saudi: 'Saudi',
    Argentine: 'Argentine',
    Austrian: 'Austrian',
    Italian: 'Italian'
};

// Function to check answers and display results
function checkAnswers4() {
    let allCorrect = true;

    Object.keys(correctAnswers4).forEach(id => {
        const inputElement = document.getElementById(id);
        const userAnswer = inputElement.value.trim().toLowerCase();
        const correctAnswer = correctAnswers4[id].toLowerCase();

        if (userAnswer === correctAnswer) {
            inputElement.style.backgroundColor = '#E3FEE3';  // Correct answer (light green)
            inputElement.style.color = 'black';
        } else {
            inputElement.style.backgroundColor = '#FFCCCC';  // Wrong answer (light red)
            inputElement.style.color = 'black';
            allCorrect = false;
        }

        inputElement.disabled = true; // Disable input after checking
    });

    // Show the "Show Answer" and "Try Again" buttons if any answers are incorrect
    if (!allCorrect) {
        document.getElementById('showAnswerButton4').style.display = 'inline-block';
        document.getElementById('tryAgainButton4').style.display = 'inline-block';
    }

    // Hide the "Finish" button after checking answers
    document.getElementById('finishButton4').style.display = 'none';
}

// Function to show correct answers
function showAnswers4() {
    Object.keys(correctAnswers4).forEach(id => {
        const inputElement = document.getElementById(id);
        inputElement.value = correctAnswers4[id];
        inputElement.style.backgroundColor = '#E3FEE3';
        inputElement.style.color = 'black';
        inputElement.disabled = true; // Disable input after showing correct answer
    });

    // Hide the "Show Answer" button after showing the correct answers
    document.getElementById('showAnswerButton4').style.display = 'none';
}

// Function to reset the activity
function resetActivity4() {
    Object.keys(correctAnswers4).forEach(id => {
        const inputElement = document.getElementById(id);
        inputElement.value = ''; // Clear the input
        inputElement.style.backgroundColor = ''; // Reset background color
        inputElement.style.color = ''; // Reset text color
        inputElement.disabled = false; // Enable input
    });

    // Hide "Show Answer" and "Try Again" buttons
    document.getElementById('showAnswerButton4').style.display = 'none';
    document.getElementById('tryAgainButton4').style.display = 'none';

    // Show the "Finish" button again
    document.getElementById('finishButton4').style.display = 'inline-block';
}
