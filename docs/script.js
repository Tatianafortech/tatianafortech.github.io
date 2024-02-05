// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Array of jokes
    var jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the computer catch a cold? It had a bad Windows!",
        // Add more jokes here
    ];

    // Function to display a random joke
    function displayRandomJoke() {
        var jokeContainer = document.getElementById("joke-container");
        var randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        jokeContainer.textContent = randomJoke;
    }

    // Display a random joke when the page loads
    displayRandomJoke();
});
