// Toggle between predefined and custom activity input
function toggleActivityInput() {
    const activityType = document.getElementById("activityType").value;
    const predefinedSection = document.getElementById("predefinedSection");
    const customSection = document.getElementById("customSection");

    if (activityType === "predefined") {
        predefinedSection.style.display = "block";
        customSection.style.display = "none";
    } else {
        predefinedSection.style.display = "none";
        customSection.style.display = "block";
    }
}

// Calculate Calories Burned function
document.getElementById("calculateBtn").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById("weight").value);
    const duration = parseFloat(document.getElementById("duration").value);
    const activityType = document.getElementById("activityType").value;
    let met;
    let activityName;

    // Handle predefined activity
    if (activityType === "predefined") {
        const predefinedActivity = document.getElementById("predefinedActivity");
        met = parseFloat(predefinedActivity.value);
        activityName = predefinedActivity.options[predefinedActivity.selectedIndex].text;
    }
    // Handle custom activity
    else {
        const customMet = parseFloat(document.getElementById("customMet").value);
        const customActivityName = document.getElementById("customActivityName").value;
        if (isNaN(customMet) || customActivityName === "") {
            alert("Please enter a valid MET value and custom activity name.");
            return;
        }
        met = customMet;
        activityName = customActivityName;
    }

    if (isNaN(weight) || isNaN(duration)) {
        alert("Please enter valid numbers for weight and duration.");
        return;
    }

    // Calculate calories burned using the formula
    const durationInHours = duration / 60;
    const caloriesBurned = (met * weight * durationInHours).toFixed(2);

    // Display the result
    document.getElementById("caloriesResult").textContent = caloriesBurned;
    document.getElementById("activityName").textContent = activityName;
    document.getElementById("result-section").style.display = "block";
});

// Restart button functionality
document.getElementById("restartBtn").addEventListener("click", function () {
    // Clear the input fields
    document.getElementById("weight").value = "";
    document.getElementById("duration").value = "";
    document.getElementById("customMet").value = "";
    document.getElementById("customActivityName").value = "";
    document.getElementById("predefinedActivity").value = "8"; // Reset to default value

    // Hide the result section
    document.getElementById("result-section").style.display = "none";
});

