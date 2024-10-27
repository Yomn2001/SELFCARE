let medications = [];

function addMedication() {
    const name = document.getElementById("medicationName").value;
    const dose = document.getElementById("dose").value;
    const time = document.getElementById("time").value;

    if (name && dose && time) {
        const medication = { name, dose, time };
        medications.push(medication);

        displayMedications();
        clearForm();
        setReminder(medication);
    } else {
        alert("Please fill in all fields.");
    }
}

function displayMedications() {
    const medicationList = document.getElementById("medicationList");
    medicationList.innerHTML = "";

    medications.forEach((medication, index) => {
        const listItem = document.createElement("li");
        listItem.className = "medication-item";
        listItem.innerHTML = `
            <span>${medication.name} - ${medication.dose} at ${medication.time}</span>
            <span class="delete-button" onclick="deleteMedication(${index})">&times;</span>
        `;
        medicationList.appendChild(listItem);
    });
}

function clearForm() {
    document.getElementById("medicationName").value = "";
    document.getElementById("dose").value = "";
    document.getElementById("time").value = "";
}

function deleteMedication(index) {
    medications.splice(index, 1);
    displayMedications();
}

function setReminder(medication) {
    const now = new Date();
    const reminderTime = new Date();

    const [hours, minutes] = medication.time.split(":");
    reminderTime.setHours(hours, minutes, 0);

    const timeDifference = reminderTime - now;

    if (timeDifference > 0) {
        setTimeout(() => {
            alert(`Reminder: It's time to take your ${medication.name} - ${medication.dose}`);
        }, timeDifference);
    }
}