// Function to update counters
function updateTimers() {
    const today = new Date();
    
    // Known since June 6, 2025
    const knownDate = new Date('2025-06-06');
    const diffKnown = today - knownDate;
    const daysKnown = Math.floor(diffKnown / (1000 * 60 * 60 * 24));
    document.getElementById('days-known').innerText = daysKnown;

    // Official since Nov 3, 2025
    const officialDate = new Date('2025-11-03');
    const diffOfficial = today - officialDate;
    const daysOfficial = Math.floor(diffOfficial / (1000 * 60 * 60 * 24));
    document.getElementById('days-official').innerText = daysOfficial;
}

// Message of the Day Logic
const dailyMessages = [
    "You're my favorite person to crashout with. ❤️",
    "Just a reminder that you're doing amazing at uni today.",
    "I'm so proud of everything you're becoming.",
    "Counting down the seconds until I can finally see you.",
    "You make everything feel a little bit brighter.",
    "I'm so lucky i decided to hit you up on IG."
];

function displayMOTD() {
    const motdElement = document.getElementById('motd-text');
    const randomIndex = Math.floor(Math.random() * dailyMessages.length);
    motdElement.innerText = dailyMessages[randomIndex];
}

// Dark Mode Toggle
const toggleBtn = document.getElementById('dark-mode-toggle');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleBtn.innerText = document.body.classList.contains('dark-mode') ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Virtual Hug Animation
const hugBtn = document.getElementById('hug-btn');
const heartOverlay = document.getElementById('heart-overlay');

hugBtn.addEventListener('click', () => {
    heartOverlay.classList.remove('hidden');
    heartOverlay.classList.add('animate-heart');
    setTimeout(() => {
        heartOverlay.classList.add('hidden');
        heartOverlay.classList.remove('animate-heart');
    }, 1500);
});

// Study Motivation
const studyQuotes = [
    "You got this, bebe! Focus mode on! 📚",
    "I'm so proud of you sayang.",
    "Take a break, drink some water. You're doing great my princess."
];

document.getElementById('study-btn').addEventListener('click', () => {
    const msg = studyQuotes[Math.floor(Math.random() * studyQuotes.length)];
    alert(msg);
});

// Surprise Message Button
const surpriseMessages = [
    "Abil Kalogeras loves you so much! ❤️",
    "Your smile is my favorite thing.",
    "I'm so lucky to be your support system."
];

document.getElementById('surprise-btn').addEventListener('click', () => {
    const msg = surpriseMessages[Math.floor(Math.random() * surpriseMessages.length)];
    alert(msg);
});

// Initialize on Load
updateTimers();
displayMOTD();