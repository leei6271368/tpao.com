```javascript
// =========================
// TPAO WEBSITE JAVASCRIPT
// =========================

// Show a message when the Contact Us button is clicked
const contactButton = document.querySelector(".button");

if (contactButton) {
    contactButton.addEventListener("click", function () {
        console.log("Welcome to TPAO!");
    });
}


// Highlight the current navigation link
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});


// Simple welcome message in the browser console
console.log("TPAO website loaded successfully!");
```
