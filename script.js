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

// Hug Animation
document.getElementById('hug-btn').addEventListener('click', () => {
    const heart = document.getElementById('heart-overlay');
    heart.classList.remove('hidden');
    heart.classList.add('animate-heart');
    setTimeout(() => {
        heart.classList.remove('animate-heart');
        heart.classList.add('hidden');
    }, 1500);
});

// Study Motivation
const studyQuotes = [
    "You got this, bebe! Focus mode on! 📚",
    "I'm so proud of you sayang.",
    "Take a break, drink some water. You're doing great my princess.",
    "Don't be stressed, I'm here for you always."
];

document.getElementById('study-btn').addEventListener('click', () => {
    const msg = studyQuotes[Math.floor(Math.random() * studyQuotes.length)];
    alert(msg);
});

// Surprise Messages
const messages = [
    "Abil Kalogeras loves you so much! ❤️",
    "I'm so glad i decided to hit you up on IG.",
    "Your smile is my favorite thing.",
    "I'm so lucky to be your support system."
];

document.getElementById('surprise-btn').addEventListener('click', () => {
    const msg = messages[Math.floor(Math.random() * messages.length)];
    alert(msg);
});

// Start the timers
updateTimers();