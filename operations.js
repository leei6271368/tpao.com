// =================================
// TPAO OPERATIONS PAGE JAVASCRIPT
// =================================


// =================================
// MOBILE NAVIGATION
// =================================

const menuButton = document.getElementById("menuButton");

// Your HTML uses class="nav-links",
// so we select it using the class.
const navLinks = document.querySelector(".nav-links");


if (menuButton && navLinks) {

    menuButton.addEventListener("click", function (event) {

        event.stopPropagation();

        navLinks.classList.toggle("show");

    });

}


// =================================
// CLOSE MOBILE NAVIGATION
// AFTER CLICKING A LINK
// =================================

if (navLinks) {

    const navigationLinks =
        navLinks.querySelectorAll("a");


    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

        });

    });

}


// =================================
// CLOSE MOBILE NAVIGATION
// WHEN CLICKING OUTSIDE
// =================================

document.addEventListener("click", function (event) {

    if (
        navLinks &&
        menuButton &&
        !navLinks.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        navLinks.classList.remove("show");

    }

});


// =================================
// SCROLL REVEAL
// =================================

const revealElements =
    document.querySelectorAll(
        ".operation-content, .principle-card, .offshore-content"
    );


if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

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


    revealElements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });

} else {

    // Fallback for older browsers

    revealElements.forEach(function (element) {

        element.classList.add("visible");

    });

}


// =================================
// CONSOLE MESSAGE
// =================================

console.log(
    "TPAO Operations page loaded successfully."
);
