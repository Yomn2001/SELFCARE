const quests = [
    "Take 5,000 steps today.",
    "Do 15 push-ups.",
    "Stretch for 10 minutes.",
    "Try a 5-minute dance break.",
    "Do a quick 5-minute yoga session.",
    "Drink 8 glasses of water.",
    "Start the day with a glass of warm lemon water.",
    "Avoid sugary drinks today.",
    "Track all fluids consumed.",
    "Write down 3 things you're grateful for.",
    "Meditate for 5 minutes.",
    "Spend 15 minutes outside.",
    "Do a breathing exercise.",
    "Listen to your favorite relaxing music.",
    "Read for 10 minutes.",
    "Watch a video on a new topic.",
    "Write down a goal you want to achieve this week.",
    "Study a new word and use it in a sentence.",
    "Learn a fun fact about a random subject.",
    "Add an extra serving of veggies to your meals.",
    "Eat at least one piece of fruit today.",
    "Avoid processed sugar for the day.",
    "Try a new healthy recipe.",
    "Have a healthy snack between meals.",
    "Spend 10 minutes tidying up a personal space.",
    "Do a 5-minute skincare routine.",
    "Take a tech break for 30 minutes.",
    "Treat yourself to a warm bath or shower.",
    "Journal about one positive thing that happened today.",
    "Go to bed 15 minutes earlier.",
    "Avoid screens 1 hour before bed.",
    "Take a 10-minute power nap.",
    "Use a relaxation technique before sleeping.",
    "Review your sleep goals for the week.",
    "Compliment someone genuinely.",
    "Send a kind message to a friend.",
    "Offer to help someone today.",
    "Smile at a stranger.",
    "Donate to a cause or help someone in need."
];

// Function to generate a random quest
function generateQuest() {
    const questText = document.getElementById("quest-text");
    const randomIndex = Math.floor(Math.random() * quests.length);
    questText.textContent = quests[randomIndex];
}

// Function to reset the quest text to its initial message
function resetQuest() {
    document.getElementById("quest-text").textContent = "Press 'New Quest' to get today's quest!";
}
