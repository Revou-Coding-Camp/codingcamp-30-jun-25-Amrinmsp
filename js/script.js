// Welcome message functionality
document.addEventListener('DOMContentLoaded', function() {
    // Ask for user's name when page loads
    const userName = prompt("Masukkan nama Anda:");
    const namePlaceholder = document.getElementById("name-placeholder");
    
    if (userName && userName.trim() !== "") {
        namePlaceholder.textContent = userName;
    } else {
        namePlaceholder.textContent = "There";
    }

    // Form submission handler
    document.getElementById("inquiryForm").addEventListener("submit", function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById("name").value.trim();
        const date = document.getElementById("date").value; 
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();
        
        // Validate form
        if (!name || !date || !email || !phone || !message) {
            showFormMessage("Please fill out all fields.", "error");
            return;
        }

        if (!validateEmail(email)) {
            showFormMessage("Please enter a valid email address.", "error");
            return;
        }

        if (!validatePhone(phone)) {
            showFormMessage("Please enter a valid phone number.", "error");
            return;
        }

        // If validation passes, show success message and form data
        showFormData(name, date, email, phone, message);
        showFormMessage("Thank you! Your message has been sent.", "success");
        this.reset();
    });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-()+]{10,}$/;
    return re.test(phone);
}

function showFormMessage(message, type) {
    const formMessage = document.getElementById("formMessage");
    formMessage.textContent = message;
    formMessage.className = type;
}

function showFormData(name, date, email, phone, message) {
    document.getElementById("formName").textContent = `Name: ${name}`;
    document.getElementById("formDate").textContent = `Date: ${date}`; 
    document.getElementById("formEmail").textContent = `Email: ${email}`;
    document.getElementById("formPhone").textContent = `Phone: ${phone}`;
    document.getElementById("formMessage").textContent = `Message: ${message}`;
    
    const formResult = document.getElementById("formResult");
    formResult.style.display = "block";
}