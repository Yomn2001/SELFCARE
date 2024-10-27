// Initialize variables to store total steps and goal
let totalSteps = 0;
let stepGoal = 0;

document.getElementById("addSteps").addEventListener("click", function() {
    // Get input values
    const steps = parseInt(document.getElementById("steps").value);
    const goal = parseInt(document.getElementById("goal").value);

    // Update goal if it's been set
    if (goal) {
        stepGoal = goal;
    }

    // Add steps to total
    if (steps && steps > 0) {
        totalSteps += steps;
    }

    // Update displayed total steps
    document.getElementById("totalSteps").textContent = totalSteps;

    // Calculate progress
    updateProgress();
});

// Reset the step count and reset the status message when the reset button is clicked
document.getElementById("resetSteps").addEventListener("click", function() {
    totalSteps = 0; // Reset the total steps to 0
    document.getElementById("totalSteps").textContent = totalSteps; // Update the displayed total steps
    document.getElementById("steps").value = ""; // Clear the input field
    updateProgress(); // Reset the progress bar and progress percentage

    // Reset the status message to the default
    const statusMessage = document.getElementById("statusMessage");
    statusMessage.textContent = "Keep walking!";
    statusMessage.style.color = "#dc3545"; // Reset to red color
});

// Function to update progress and display the progress bar and message
function updateProgress() {
    let progressPercent = 0;
    if (stepGoal > 0) {
        progressPercent = Math.min((totalSteps / stepGoal) * 100, 100); // Ensure progress doesn't exceed 100%
    }

    // Update progress percentage display
    document.getElementById("progress").textContent = Math.floor(progressPercent) + "%";

    // Update progress bar width
    document.getElementById("progressBar").style.width = progressPercent + "%";

    // Display message based on progress
    const statusMessage = document.getElementById("statusMessage");
    if (progressPercent === 100) {
        statusMessage.textContent = "Goal reached! Great job!";
        statusMessage.style.color = "#28a745"; // Green text
    } else if (progressPercent >= 75) {
        statusMessage.textContent = "Almost there! Keep going!";
        statusMessage.style.color = "#ffc107"; // Yellow text
    } else if (progressPercent >= 50) {
        statusMessage.textContent = "Halfway there!";
        statusMessage.style.color = "#17a2b8"; // Blue text
    } else {
        statusMessage.textContent = "Keep walking!";
        statusMessage.style.color = "#dc3545"; // Red text
    }
}