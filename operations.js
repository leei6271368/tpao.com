```javascript
// =================================
// TPAO OPERATIONS PAGE JAVASCRIPT
// =================================


// Mobile navigation
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("show");

    });

}


// Close mobile navigation after
// clicking a navigation link

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("show");

    });

});


// =================================
// SCROLL REVEAL
// =================================

const revealElements =
    document.querySelectorAll(
        ".operation-content, .principle-card, .offshore-content"
    );


const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(function(element) {

    element.classList.add("reveal");

    observer.observe(element);

});


// =================================
// CONSOLE MESSAGE
// =================================

console.log(
    "TPAO Operations page loaded successfully."
);
```
