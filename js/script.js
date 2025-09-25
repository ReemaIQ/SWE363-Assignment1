// Run this code only after the page has fully loaded
document.addEventListener("DOMContentLoaded", function() {

    // Find the place where the greeting and clock will show
    let greeting = document.getElementById("greeting");
    let clock = document.getElementById("clock");

    // Function to update greeting + clock
    function updateGreetingAndClock() {
        let now = new Date();          // get the current date & time
        let hour = now.getHours();     // get the hour (0-23)
        let minutes = now.getMinutes();// get minutes (0-59)
        let seconds = now.getSeconds();// get seconds (0-59)


        // Change greeting depending on the time of day
        if (hour < 12) {
            msg = "Good Morning, welcome to my portfolio!";
        } else if (hour < 18) {
            msg = "Good Afternoon, glad you're here!";
        } else {
            msg = "Good Evening, thanks for visiting!";
        }

        // Show the greeting
        greeting.textContent = msg;

        // Format clock to always show 2 digits
        let hh = String(hour).padStart(2, "0");
        let mm = String(minutes).padStart(2, "0");
        let ss = String(seconds).padStart(2, "0");

        // Show digital clock in HH:MM:SS
        clock.textContent = hh + ":" + mm + ":" + ss;
    }

    // Call function once right away
    updateGreetingAndClock();

    // Update clock + greeting every second
    setInterval(updateGreetingAndClock, 1000);
});






// Find the form by its ID and listen when someone clicks "Send"
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop the page from refreshing when form is submitted

    // Get what the user typed in the "name" box
    let name = e.target.name.value;
    // Find the <p> that will show the thank you message
    let status = document.getElementById("form-status");

    // Show a message with the person's name if they typed one
    if (name.trim() !== "") {
        status.textContent = "Thank you, " + name + "! Your message has been recorded.";
    } else {
        // no name? general thank you
        status.textContent = "Thank you! Your message has been recorded.";
    }

    e.target.reset(); // Clear all the boxes in the form
});
