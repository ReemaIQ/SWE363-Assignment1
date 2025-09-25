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
        // If no name, just show a general thank you
        status.textContent = "Thank you! Your message has been recorded.";
    }

    e.target.reset(); // Clear all the boxes in the form
});
