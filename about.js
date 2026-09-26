```javascript
// ============================
// TPAO ABOUT PAGE JAVASCRIPT
// ============================


// Mobile navigation
const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

if (menuButton) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("show");

    });

}


// Close mobile menu when a link is clicked
const links = document.querySelectorAll(".nav-links a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");

    });

});


// Simple scroll reveal animation
const animatedElements = document.querySelectorAll(
    ".mission-card, .activity-card, .value"
);

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(function(element) {

    element.classList.add("reveal");

    observer.observe(element);

});


console.log("TPAO About page loaded successfully.");
```
