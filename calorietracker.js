// Predefined list of food items with their calorie counts
const foodCalories = {
    "apple": 95,
    "banana": 105,
    "orange": 62,
    "grapes": 104,
    "strawberries": 49,
    "watermelon": 85,
    "carrot": 41,
    "broccoli": 55,
    "chicken breast": 165,
    "rice": 206,
    "potato": 161,
    "egg": 68,
    "cheese": 113,
    "yogurt": 100,
    "peanut butter": 94,
    "big mac": 564,
    "koshari": 836, 
    "beetroot": 58, 
    "cabbage": 61,
    "chickpea": 106,
    "peanuts": 171
};

// Function to check calories and update the display
document.getElementById("checkCalories").addEventListener("click", function() {
    const foodItem = document.getElementById("foodItem").value.trim().toLowerCase(); // Get food item and trim whitespace

    // Check if the food item exists in the predefined list
    if (foodCalories[foodItem] !== undefined) {
        const calories = foodCalories[foodItem]; // Get calorie count for the food item
        document.getElementById("foodDisplay").textContent = foodItem.charAt(0).toUpperCase() + foodItem.slice(1);
        document.getElementById("calorieCount").textContent = calories; // Update calorie count display
    } else {
        alert("Food item not found. Please try a different item.");
        document.getElementById("foodDisplay").textContent = "";
        document.getElementById("calorieCount").textContent = "0";
    }

    // Clear input field
    document.getElementById("foodItem").value = "";
});

// Reset tracker button functionality
document.getElementById("resetTracker").addEventListener("click", function() {
    document.getElementById("foodDisplay").textContent = "";
    document.getElementById("calorieCount").textContent = "0"; // Reset displayed calorie count
    document.getElementById("foodItem").value = ""; // Clear input field
});
