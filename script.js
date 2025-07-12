document.getElementById("contactForm").onsubmit = function(e) {
    e.preventDefault();
    
    const response = document.getElementById("response");
    response.textContent = "Thanks! I’ll get back to you shortly.";
    response.style.color = "green";  

    this.reset();
};
