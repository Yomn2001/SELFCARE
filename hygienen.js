const reminders = [];

// Function to add a new reminder
function addReminder() {
    const task = document.getElementById("task").value;
    const time = document.getElementById("time").value;

    if (task && time) {
        const reminder = { task, time };
        reminders.push(reminder);
        displayReminders();
    } else {
        alert("Please select a task and time.");
    }
}

// Function to display all reminders
function displayReminders() {
    const remindersList = document.getElementById("remindersList");
    remindersList.innerHTML = "";

    reminders.forEach((reminder, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${reminder.task} at ${reminder.time}`;
        
        // Adding a delete button for each reminder
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.style.background = "#d32f2f";
        deleteButton.style.color = "#fff";
        deleteButton.style.border = "none";
        deleteButton.style.cursor = "pointer";
        deleteButton.style.marginLeft = "10px";
        deleteButton.onclick = () => removeReminder(index);

        listItem.appendChild(deleteButton);
        remindersList.appendChild(listItem);
    });
}

// Function to remove a reminder
function removeReminder(index) {
    reminders.splice(index, 1);
    displayReminders();
}

// Function to check reminders every minute
function checkReminders() {
    const currentTime = new Date();
    const currentHours = String(currentTime.getHours()).padStart(2, '0');
    const currentMinutes = String(currentTime.getMinutes()).padStart(2, '0');
    const formattedCurrentTime = `${currentHours}:${currentMinutes}`;

    reminders.forEach(reminder => {
        if (reminder.time === formattedCurrentTime) {
            document.getElementById("notification").textContent = `It's time to ${reminder.task}!`;
            setTimeout(() => {
                document.getElementById("notification").textContent = "";
            }, 60000); // Clear notification after 1 minute
        }
    });
}

// Check reminders every minute
setInterval(checkReminders, 60000);