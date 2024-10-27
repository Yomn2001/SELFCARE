const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinButton = document.getElementById("spinButton");
const resultText = document.getElementById("result");

const exercises = [
    "Pushups", "Squats", "Jumping Jacks", "Burpees", 
    "Lunges", "Plank", "Mountain Climbers", "High Knees"
];

const sliceCount = exercises.length;
const sliceAngle = (2 * Math.PI) / sliceCount;
let currentAngle = 0;
let spinAngle = 0;
let isSpinning = false;

// Draw the exercise wheel
function drawWheel() {
    for (let i = 0; i < sliceCount; i++) {
        // Draw slices
        ctx.beginPath();
        ctx.moveTo(250, 250);
        ctx.arc(250, 250, 250, i * sliceAngle, (i + 1) * sliceAngle);
        ctx.closePath();

        // Alternate colors for each slice
        ctx.fillStyle = i % 2 === 0 ? "#DBACFF" : "#FFACFA";
        ctx.fill();

        // Add exercise text
        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate(i * sliceAngle + sliceAngle / 2);
        ctx.textAlign = "right";
        ctx.fillStyle = "#fff";
        ctx.font = "bold 20px Arial";
        ctx.fillText(exercises[i], 230, 10);
        ctx.restore();
    }
}

// Spin the wheel
function spinWheel() {
    if (isSpinning) return;

    isSpinning = true;
    let randomDegree = Math.floor(Math.random() * 360) + 720; // At least two full spins
    let currentSpin = 0;
    let spinInterval = setInterval(() => {
        currentSpin += 10;
        spinAngle += 10;
        currentAngle += (Math.PI / 180) * 10;
        ctx.clearRect(0, 0, 500, 500);
        ctx.save();
        ctx.translate(250, 250);
        ctx.rotate(currentAngle);
        ctx.translate(-250, -250);
        drawWheel();
        ctx.restore();

        if (currentSpin >= randomDegree) {
            clearInterval(spinInterval);
            isSpinning = false;
            displayResult();
        }
    }, 20);
}

// Display the selected exercise based on where the arrow lands (bottom)
function displayResult() {
    const rotationOffset = (Math.PI) - (currentAngle % (2 * Math.PI)); // Bottom arrow
    const winningSliceIndex = Math.floor((rotationOffset + sliceAngle / 2) / sliceAngle) % sliceCount;
    resultText.textContent = `You got: ${exercises[winningSliceIndex]}!`;
}

// Event listener for the spin button
spinButton.addEventListener("click", spinWheel);

// Initial wheel drawing
drawWheel();