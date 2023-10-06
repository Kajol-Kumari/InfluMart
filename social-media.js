// social-media.js

// Get the button element by its ID
const profileButton = document.getElementById("tiktok");

// Add a click event listener to the button
profileButton.addEventListener("click", function() {
    // Redirect to TikTok
    window.location.href = "https://www.tiktok.com";
});

// Repeat the above code for other social media buttons
const profileButton2 = document.getElementById("snapchat");

profileButton2.addEventListener("click", function() {
    // Redirect to Snapchat
    window.location.href = "https://www.snapchat.com";
});

const profileButton3 = document.getElementById("twitter");

profileButton3.addEventListener("click", function() {
    // Redirect to Twitter
    window.location.href = "https://www.twitter.com";
});

const profileButton4 = document.getElementById("instagram");

profileButton4.addEventListener("click", function() {
    // Redirect to Instagram
    window.location.href = "https://www.instagram.com";
});

const profileButton5 = document.getElementById("youtube");

profileButton5.addEventListener("click", function() {
    // Redirect to YouTube
    window.location.href = "https://www.youtube.com";
});
