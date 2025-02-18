// User Activity Tracker with File Logging

const fs = require('fs');
const path = require('path');

// Log file path
const logFile = path.join(__dirname, 'user_activity_log.txt');

// Function to log user activity
function logActivity(user, action) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] User: ${user}, Action: ${action}\n`;
    fs.appendFile(logFile, logEntry, (err) => {
        if (err) console.error('Error writing to log file:', err);
    });

}



// Simulated user actions
const users = ['Alice', 'Bob', 'Charlie', 'David'];
const actions = ['Login', 'Logout', 'Viewed Page', 'Clicked Button', 'Made Purchase'];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate and log random user activity
function logRandomActivity() {
    const user = getRandomElement(users);
    const action = getRandomElement(actions);
    logActivity(user, action);
    console.log(`Logged activity - User: ${user}, Action: ${action}`);
}

// Schedule activity logging
setInterval(logRandomActivity, 5000); // Every 5 seconds

// Initial log message
logActivity('System', 'User Activity Tracker started.');
console.log('User Activity Tracker started.');

// Stop after 1 minute
setTimeout(() => {
    logActivity('System', 'User Activity Tracker stopped.');
    console.log('User Activity Tracker stopped.');
    process.exit(0);
}, 60000);
