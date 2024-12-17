let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

document.getElementById('submit-guess').addEventListener('click', function () {
    const userGuess = parseInt(document.getElementById('guess-input').value);
    const feedback = document.getElementById('game-feedback');
    const guessCount = document.getElementById('guess-count');
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedback.textContent = "Please enter a valid number between 1 and 100.";
        feedback.style.color = "red";
    } else if (userGuess === randomNumber) {
        feedback.textContent = `Congratulations! You guessed it in ${attempts} attempts.`;
        feedback.style.color = "green";
    } else if (userGuess < randomNumber) {
        feedback.textContent = "Too low! Try again.";
        feedback.style.color = "orange";
    } else {
        feedback.textContent = "Too high! Try again.";
        feedback.style.color = "orange";
    }

    guessCount.textContent = `Attempts: ${attempts}`;
});
