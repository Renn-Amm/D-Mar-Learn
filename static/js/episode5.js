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
    // Existing drag-and-drop functionality
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

    window.checkAnswers = function() {
        const answers = ['Global temperatures increase', 'Sea levels rise', 'Extreme weather events become more frequent'];
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
        const answers = ['Global temperatures increase', 'Sea levels rise', 'Extreme weather events become more frequent'];

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


// Fourth Activity 
// Activity 1: Identifying referents functionality
const correctAnswers1 = {
    1: "It",       // Correct
    2: "They",     // Correct
    3: "it",       // Correct
    4: "These",    // Correct
    5: "It"        // Correct
};

// These are the wrong options:
const wrongAnswers1 = {
    6: "that",
    7: "Though",
    8: "which",
    9: "all"
};

let selectedAnswers1 = {};

window.selectAnswer1 = function(element, answerId) {
    element.classList.toggle("selected");
    element.style.fontWeight = "bold";

    const text = element.textContent.trim();
    if (selectedAnswers1[answerId]) {
        delete selectedAnswers1[answerId];
    } else {
        selectedAnswers1[answerId] = text;
    }
};

window.checkAnswers1 = function() {
    let correctCount = 0;

    document.querySelectorAll(".answer1").forEach((el) => {
        const answerId = parseInt(el.getAttribute('onclick').match(/selectAnswer1\(this, (\d+)\)/)[1], 10);
        const selectedAnswer = selectedAnswers1[answerId];
        
        if (correctAnswers1[answerId] && selectedAnswer === correctAnswers1[answerId]) {
            el.style.color = "green";
            correctCount++;
        } else if (selectedAnswer && Object.values(wrongAnswers1).includes(selectedAnswer)) {
            el.style.color = "red";
        } else {
            el.style.color = "#555"; // Reset to original color if not selected
        }
    });

    const totalQuestions = Object.keys(correctAnswers1).length;
    const scoreText = `You got ${correctCount} out of ${totalQuestions} correct.`;
    document.getElementById("scoreText1").textContent = scoreText;

    const scoreModal = document.getElementById("scoreModal1");
    scoreModal.style.display = "block";
};

window.resetActivity1 = function() {
    selectedAnswers1 = {};
    document.querySelectorAll(".answer1").forEach((el) => {
        el.style.color = "#555";  // Reset to the original color from your CSS
        el.style.fontWeight = "normal";  // Reset to normal font weight
        el.classList.remove("selected");
    });
};

window.closeModal1 = function() {
    const scoreModal = document.getElementById("scoreModal1");
    scoreModal.style.display = "none";
};

    //Funtion for five

// JavaScript Functionality
let selectedAnswers = {};

function selectAnswer(element, questionNumber) {
    const answerText = element.textContent;
    const blankElement = document.getElementById(`blank${questionNumber}`);

    // Only update the blank with the selected answer
    blankElement.textContent = answerText;
    selectedAnswers[questionNumber] = element;
}

function resetActivity2() {
    selectedAnswers = {};
    for (let i = 1; i <= 10; i++) {
        const blankElement = document.getElementById(`blank${i}`);
        blankElement.textContent = '_____';
        blankElement.classList.remove('correct-answer', 'wrong-answer'); // Remove the color classes

        const answerElements = document.querySelectorAll(`.answer-group:nth-of-type(${i}) .answer`);
        answerElements.forEach(answer => {
            answer.classList.remove('correct-answer', 'wrong-answer');
        });
    }
    const modal = document.getElementById('scoreModal2');
    modal.style.display = 'none';
}

function checkAnswers2() {
    let correctCount = 0;
    const totalQuestions = 10;

    for (let i = 1; i <= totalQuestions; i++) {
        const selectedAnswer = selectedAnswers[i];
        const blankElement = document.getElementById(`blank${i}`);
        
        if (selectedAnswer) {
            if (selectedAnswer.classList.contains('correct')) {
                correctCount++;
                blankElement.classList.add('correct-answer'); // Apply green color to the blank line
            } else {
                blankElement.classList.add('wrong-answer'); // Apply red color to the blank line
            }
        }
    }

    const scoreText = `You got ${correctCount} out of ${totalQuestions} correct.`;
    document.getElementById('scoreText2').textContent = scoreText;

    const modal = document.getElementById('scoreModal2');
    modal.style.display = 'block';
}

function closeModal2() {
    const modal = document.getElementById('scoreModal2');
    modal.style.display = 'none';
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('scoreModal2');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};


