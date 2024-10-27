// Function to save the journal entry to local storage
function saveJournal() {
    const entryText = document.getElementById("journalEntry").value;
    const date = new Date().toLocaleDateString();
    const journalEntry = { id: Date.now(), date, entry: entryText };

    let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    entries.push(journalEntry);
    localStorage.setItem("journalEntries", JSON.stringify(entries));

    displayEntries();
    document.getElementById("journalEntry").value = ""; // Clear textarea
}

// Function to clear the current journal entry input
function clearJournal() {
    document.getElementById("journalEntry").value = "";
}

// Function to delete a specific journal entry
function deleteEntry(id) {
    let entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    entries = entries.filter(entry => entry.id !== id);
    localStorage.setItem("journalEntries", JSON.stringify(entries));
    displayEntries();
}

// Function to display saved journal entries
function displayEntries() {
    const journalHistory = document.getElementById("journalHistory");
    journalHistory.innerHTML = "";

    const entries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    entries.forEach(entry => {
        const entryDiv = document.createElement("div");
        entryDiv.className = "journal-entry";
        entryDiv.innerHTML = `
            <strong>${entry.date}</strong><br>${entry.entry}
            <button onclick="deleteEntry(${entry.id})" class="delete-button">Delete</button>
            <hr>
        `;
        journalHistory.appendChild(entryDiv);
    });
}

// Load entries when the page is loaded
window.onload = displayEntries;