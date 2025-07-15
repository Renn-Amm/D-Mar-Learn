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
        const answers = ['teacher', 'evening', 'of flowers', 'expensive', 'of students', 'match', 'or two', 'eyes', 'or false', 'and night'];
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
        const answers = ['teacher', 'evening', 'of flowers', 'expensive', 'of students', 'match', 'or two', 'eyes', 'or false', 'and night'];

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

