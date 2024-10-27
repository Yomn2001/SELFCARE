document.getElementById("calculateBtn").addEventListener("click", function () {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseFloat(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;
    const activityLevel = parseFloat(document.getElementById("activity").value);

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    let bmr;
    if (gender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const dailyCalories = Math.round(bmr * activityLevel);
    document.getElementById("calories").textContent = dailyCalories;
    document.getElementById("result-section").style.display = "block";

    // Suggest a basic diet plan
    const dietPlan = `
        <p>Here’s a simple meal plan for the day:</p>
        <ul>
            <li><strong>Breakfast</strong>: 30% of daily calories (${Math.round(dailyCalories * 0.3)} kcal)</li>
            <li><strong>Lunch</strong>: 40% of daily calories (${Math.round(dailyCalories * 0.4)} kcal)</li>
            <li><strong>Dinner</strong>: 30% of daily calories (${Math.round(dailyCalories * 0.3)} kcal)</li>
        </ul>
    `;
    document.getElementById("diet-plan").innerHTML = dietPlan;
});
