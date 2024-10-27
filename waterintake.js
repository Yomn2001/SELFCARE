// Initialize variables
let totalIntake = 0;
let dailyGoal = 0; // Daily water intake goal in ml

// Function to update the display of total intake, remaining water, and recommended cups
function updateDisplay() {
    document.getElementById("totalIntake").textContent = totalIntake; // Update total intake
    document.getElementById("remainingIntake").textContent = Math.max(0, dailyGoal - totalIntake); // Update remaining intake
    document.getElementById("recommendedCups").textContent = (dailyGoal / 240).toFixed(2); // Recommend intake in cups (240 ml per cup)
}

// Set daily goal button functionality
document.getElementById("setGoal").addEventListener("click", function() {
    const goalInput = parseInt(document.getElementById("dailyGoalInput").value); // Get goal input

    // Validate input
    if (!isNaN(goalInput) && goalInput > 0) {
        dailyGoal = goalInput; // Set the daily goal
        document.getElementById("dailyGoal").textContent = dailyGoal; // Update the display of the daily goal
        document.getElementById("remainingIntake").textContent = dailyGoal; // Reset remaining intake
        document.getElementById("recommendedCups").textContent = (dailyGoal / 240).toFixed(2); // Recommend intake in cups
    } else {
        alert("Please enter a valid daily goal!");
    }

    // Clear input field
    document.getElementById("dailyGoalInput").value = "";
});

// Add water button functionality
document.getElementById("addWater").addEventListener("click", function() {
    const waterAmount = parseInt(document.getElementById("waterAmount").value); // Get water amount

    // Validate input
    if (!isNaN(waterAmount) && waterAmount > 0) {
        totalIntake += waterAmount; // Add to total intake
        updateDisplay(); // Update the display
    } else {
        alert("Please enter a valid amount of water!");
    }

    // Clear input field
    document.getElementById("waterAmount").value = "";
});

// Reset tracker button functionality
document.getElementById("resetTracker").addEventListener("click", function() {
    totalIntake = 0; // Reset total intake
    dailyGoal = 0; // Reset daily goal
    updateDisplay(); // Update display
    document.getElementById("waterAmount").value = ""; // Clear input field
    document.getElementById("dailyGoalInput").value = ""; // Clear goal input field
});
