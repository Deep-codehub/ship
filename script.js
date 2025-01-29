document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Here you can add code to send this data to a server or show a success message
    console.log("Form Submitted:", { name, email, phone, message });

    // Show a success message (you can replace this with a real submission logic)
    alert("Thank you for contacting us. We will get back to you shortly!");
});
