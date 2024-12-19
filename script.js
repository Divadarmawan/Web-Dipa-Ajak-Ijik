// Feedback Form Submission (User Form)
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById("feedbackName").value;
    const email = document.getElementById("email").value;
    const comments = document.getElementById("comments").value;

    // Simple validation
    if (!name || !email || !comments) {
      alert("Please fill in all fields.");
      return;
    }

    // Process the feedback (e.g., store or send it)
    // Display success message
    document.getElementById("feedbackMessage").style.display = "block";
    document.getElementById("feedbackForm").reset(); // Reset form fields
  });

// Ticket Reservation Form (User Form)
document.querySelector("#ticket form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get form data
  const name = document.getElementById("name").value;
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  const tickets = document.getElementById("tickets").value;

  // Simple validation
  if (!name || !destination || !date || !tickets) {
    alert("Please fill in all fields.");
    return;
  }

  // Process the ticket reservation (e.g., store or send it)
  alert(`Ticket for ${destination} reserved for ${name} on ${date}.`);

  // Reset form
  document.querySelector("#ticket form").reset();
});

// Admin Form for managing website content (Add Destinations)
document.getElementById("adminForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get admin form data
  const adminName = document.getElementById("adminName").value;
  const destinationName = document.getElementById("destinationName").value;
  const destinationDetails =
    document.getElementById("destinationDetails").value;

  // Simple validation for admin form
  if (!adminName || !destinationName || !destinationDetails) {
    alert("All fields are required!");
    return;
  }

  // Process the admin form (e.g., store or send it to the database)
  alert(`Admin ${adminName} has added a new destination: ${destinationName}`);

  // Reset the form
  document.getElementById("adminForm").reset();
});
