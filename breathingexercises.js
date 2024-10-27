const circle = document.getElementById('circle');
const text = document.getElementById('text');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

let exerciseInterval;

// Timing variables
const inhaleTime = 3000;
const holdTime = 2000;
const exhaleTime = 3000;

startBtn.addEventListener('click', function() {
    startBreathingExercise();
    startBtn.style.display = 'none'; // Hide start button
    stopBtn.style.display = 'inline-block'; // Show stop button
});

stopBtn.addEventListener('click', function() {
    stopBreathingExercise();
    startBtn.style.display = 'inline-block'; // Show start button
    stopBtn.style.display = 'none'; // Hide stop button
});

function startBreathingExercise() {
    // Execute breathing cycle immediately and repeat indefinitely
    breathingCycle();
    exerciseInterval = setInterval(breathingCycle, inhaleTime + holdTime + exhaleTime);
}

function breathingCycle() {
    text.textContent = "Inhale...";
    circle.style.width = '300px';
    circle.style.height = '300px';

    setTimeout(() => {
        text.textContent = "Hold...";
        setTimeout(() => {
            text.textContent = "Exhale...";
            circle.style.width = '150px';
            circle.style.height = '150px';
        }, holdTime);
    }, inhaleTime);
}

function stopBreathingExercise() {
    clearInterval(exerciseInterval); // Stop the repeated cycle
    text.textContent = "Get ready to begin..."; // Reset text
    circle.style.width = '150px'; // Reset circle size
    circle.style.height = '150px'; 
}
