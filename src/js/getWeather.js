"use strict";

console.log("Fetch url")

async function fetchCityData() {
    const city = document.getElementById('cityInput').value;
    const url = `http://localhost:8080/chat?city=${encodeURIComponent(city)}`;

    try {
        console.log("Sending request to:", url); // Debugging: Log the URL
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network response was not ok. Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Response data:", data); // Debugging: Log the response data
        
        // Extract only the first choice
        const firstChoiceContent = data.Choices[0].message.content;
        document.getElementById('responseArea').value = firstChoiceContent;
    } catch (error) {
        console.error("Fetch error:", error); // Debugging: Log any errors
        document.getElementById('responseArea').value = 'Error: ' + error.message;
    }
}
