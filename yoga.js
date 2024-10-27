// Array of yoga poses
const yogaPoses = [
    {
        name: "Mountain Pose",
        description: "Stand with feet together, arms at sides, and weight evenly distributed.",
        image: "Archive/Mountain pose.jpeg",
        duration: 30
    },
    {
        name: "Downward Dog",
        description: "Start on all fours, lift your hips, and straighten your legs to form an inverted V.",
        image: "Archive/downward dog .jpeg",
        duration: 30
    },
    {
        name: "Tree Pose",
        description: "Stand on one leg, place the sole of your other foot on your inner thigh, and bring your hands together in front of your chest.",
        image: "Archive/Tree pose.jpeg",
        duration: 30
    },
    {
        name: "Warrior II",
        description: "Step one foot back, turn it sideways, bend the front knee, and stretch out your arms.",
        image: "Archive/warrior 2 pose.jpeg",
        duration: 30
    },
    {
        name: "Child's Pose",
        description: "Kneel, then sit back on your heels, and reach your arms forward as you rest your forehead on the floor.",
        image: "Archive/child's pose.jpeg",
        duration: 30
    },
    {
        name: "Cobra Pose",
        description: "Lie on your stomach, place your hands under your shoulders, and lift your chest up while keeping your elbows close to your body.",
        image: "Archive/cobra pose.jpeg",
        duration: 30
    },
    {
        name: "Bridge Pose",
        description: "Lie on your back, bend your knees, place your feet hip-width apart, and lift your hips.",
        image: "Archive/Bridge pose.jpeg",
        duration: 30
    }
];

let currentPoseIndex = 0;
let timerInterval;

// Function to display the current pose
function displayPose() {
    const pose = yogaPoses[currentPoseIndex];
    document.getElementById("pose-name").innerText = pose.name;
    document.getElementById("pose-description").innerText = pose.description;
    document.getElementById("pose-image").src = pose.image;
    document.getElementById("time-remaining").innerText = pose.duration;
}

// Function to start the exercise timer
function startExercise() {
    clearInterval(timerInterval); // Clear any previous timer
    let timeRemaining = yogaPoses[currentPoseIndex].duration;
    document.getElementById("time-remaining").innerText = timeRemaining;
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        document.getElementById("time-remaining").innerText = timeRemaining;
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Move to the next pose.");
        }
    }, 1000);
}

// Function to go to the next pose
function nextPose() {
    clearInterval(timerInterval); // Clear current timer
    currentPoseIndex = (currentPoseIndex + 1) % yogaPoses.length; // Move to next pose, loop to start
    displayPose(); // Display new pose
}

// Initial load
window.onload = displayPose;
