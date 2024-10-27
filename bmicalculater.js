// Calculate BMI function
document.getElementById("calculateBtn").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height)) {
        alert("Please enter valid numbers for weight and height.");
        return;
    }

    // Convert height from cm to meters for BMI calculation
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    document.getElementById("bmiResult").textContent = bmi;
    document.getElementById("result-section").style.display = "block";

    // Determine BMI status
    let status;
    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Overweight";
    } else {
        status = "Obesity";
    }

    document.getElementById("bmiStatus").textContent = "Status: " + status;
});

// Restart button functionality
document.getElementById("restartBtn").addEventListener("click", function () {
    // Clear the input fields
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";

    // Hide the result section
    document.getElementById("result-section").style.display = "none";
});
