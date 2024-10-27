
function calculateStress() {
    // Get the form and answers
    const form = document.getElementById('stressTestForm');
    const answers = new FormData(form);
    
    // Initialize the total score
    let score = 0;

    // Loop through the answers and sum the values
    answers.forEach((value, key) => {
        score += parseInt(value);
    });

    // Determine the result based on the score
    let resultText;
    if (score <= 7) {
        resultText = "Your stress level is low. Keep taking care of yourself!";
    } else if (score <= 12) {
        resultText = "Your stress level is moderate. Try incorporating more relaxation into your routine.";
    } else {
        resultText = "Your stress level is high. It's important to find ways to manage your stress effectively.";
    }

    // Display the result
    document.getElementById('result').textContent = `Your Score: ${score}. ${resultText}`;
}

