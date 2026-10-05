// ============================
// TPAO ABOUT PAGE JAVASCRIPT
// ============================


// ============================
// MOBILE NAVIGATION
// ============================

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");


// Open and close mobile navigation
if (menuButton && navLinks) {

    menuButton.addEventListener("click", function (event) {

        event.stopPropagation();

        navLinks.classList.toggle("show");

    });

}


// ============================
// CLOSE MENU AFTER CLICKING A LINK
// ============================

if (navLinks) {

    const navigationLinks = navLinks.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("show");

        });

    });

}


// ============================
// CLOSE MENU WHEN CLICKING
// OUTSIDE THE NAVIGATION
// ============================

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


// ============================
// SCROLL REVEAL ANIMATION
// ============================

const animatedElements = document.querySelectorAll(
    ".mission-card, .activity-card, .value"
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


    animatedElements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });

} else {

    animatedElements.forEach(function (element) {

        element.classList.add("visible");

    });

}


console.log("TPAO About page loaded successfully.");
