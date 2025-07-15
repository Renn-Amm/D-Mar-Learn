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

// function playGame() {
//     alert('Play the game clicked!');
// }

// 


document.addEventListener('DOMContentLoaded', function() {
    const draggables = document.querySelectorAll('.draggable');
    const dropzones = document.querySelectorAll('.dropzone');
    const showAnswerButton = document.getElementById('showAnswerButton');
    const showFeedbackButton = document.getElementById('showFeedback');
    const finishButton = document.querySelector('button[onclick="checkAnswers()"]');
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

    const answers = [
        'Robber',          // A person who commits robbery
        'Offence',         // Synonym of crime
        'Criminal',        // A person who has committed a crime
        'Fraud Offence',   // The crime of gaining money by financial benefits by a trick or by lying
        'Offender',        // Synonym of criminal
        'Burglar',         // A person who commits burglary
        'Crime',           // An act that is against the law and punishable by the authorities
        'Robbery',         // The act of stealing from a person or place, often using force or threats
        'Criminally',      // In a manner that relates to crime or criminals
        'Stalking Offence',// The crime of repeatedly following or harassing another person, causing them fear or distress
        'Burglary'         // The act of illegally entering a building with the intent to commit a crime, especially theft
    ];

    window.checkAnswers = function() {
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

    window.resetActivity = function() {  // Renamed the function to match the button
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



// Correct answers object
const correctAnswers = {
    unanalytical: 'unanalytical',
    analysis: 'analysis',
    argumentatively: 'argumentatively',
    compare: 'compare',
    contrast: 'contrast',
    convicing: 'convincing',
    debater: 'debater',
    discussion: 'discussion',
    examined: 'examined',
    examine: 'examine',
    inexplicable: 'inexplicable',
    inexplicably: 'inexplicably'
};

// Function to check answers and display results
function checkAnswers3() {
    let allCorrect = true;

    Object.keys(correctAnswers).forEach(id => {
        const inputElement = document.getElementById(id);
        const userAnswer = inputElement.value.trim().toLowerCase();
        const correctAnswer = correctAnswers[id].toLowerCase();

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
        document.getElementById('showAnswerButton3').style.display = 'inline-block';
        document.getElementById('tryAgainButton3').style.display = 'inline-block';
    }

    // Hide the "Finish" button after checking answers
    document.querySelector('button[onclick="checkAnswers3()"]').style.display = 'none';
}

// Function to show correct answers
function showAnswers3() {
    Object.keys(correctAnswers).forEach(id => {
        const inputElement = document.getElementById(id);
        inputElement.value = correctAnswers[id];
        inputElement.style.backgroundColor = '#E3FEE3';
        inputElement.style.color = 'black';
        inputElement.disabled = true; // Disable input after showing correct answer
    });

    // Hide the "Show Answer" button after showing the correct answers
    document.getElementById('showAnswerButton3').style.display = 'none';
}

// Function to reset the activity
function resetActivity3() {
    Object.keys(correctAnswers).forEach(id => {
        const inputElement = document.getElementById(id);
        inputElement.value = ''; // Clear the input
        inputElement.style.backgroundColor = ''; // Reset background color
        inputElement.style.color = ''; // Reset text color
        inputElement.disabled = false; // Enable input
    });

    // Hide "Show Answer" and "Try Again" buttons
    document.getElementById('showAnswerButton3').style.display = 'none';
    document.getElementById('tryAgainButton3').style.display = 'none';

    // Show the "Finish" button again
    document.querySelector('button[onclick="checkAnswers3()"]').style.display = 'inline-block';
}
