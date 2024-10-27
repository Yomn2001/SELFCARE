let prayerTimes = {};

// Function to fetch prayer times from Aladhan API based on the user's city
async function fetchPrayerTimes() {
    const city = document.getElementById("city").value;

    if (city) {
        const apiUrl = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=&method=2`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();

            if (data.code === 200) {
                prayerTimes = data.data.timings;
                displayPrayerTimes();
                checkPrayerTimes();
            } else {
                alert("Could not fetch prayer times. Please check the city name.");
            }
        } catch (error) {
            alert("An error occurred while fetching prayer times. Please try again.");
        }
    } else {
        alert("Please enter a city name.");
    }
}

// Function to display the prayer times
function displayPrayerTimes() {
    const prayerListElement = document.getElementById("prayerList");
    prayerListElement.innerHTML = "";

    Object.entries(prayerTimes).forEach(([prayer, time]) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${prayer}: ${time}`;
        prayerListElement.appendChild(listItem);
    });
}

// Function to check if it's time for any of the prayers
function checkPrayerTimes() {
    setInterval(() => {
        const currentTime = new Date();
        const currentHours = String(currentTime.getHours()).padStart(2, '0');
        const currentMinutes = String(currentTime.getMinutes()).padStart(2, '0');
        const formattedCurrentTime = `${currentHours}:${currentMinutes}`;

        Object.entries(prayerTimes).forEach(([prayer, time]) => {
            if (time === formattedCurrentTime) {
                document.getElementById("reminderMessage").textContent = `It's time for ${prayer}!`;
            }
        });
    }, 60000); // Check every minute
}
