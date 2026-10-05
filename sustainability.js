// =================================
// TPAO SUSTAINABILITY JAVASCRIPT
// =================================


// =================================
// MOBILE NAVIGATION
// =================================

const menuButton =
    document.getElementById("menuButton");


// Your navigation uses:
// class="nav-links"
// instead of:
// id="navLinks"

const navLinks =
    document.querySelector(".nav-links");


if (menuButton && navLinks) {

    menuButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();

            navLinks.classList.toggle("show");

        }
    );

}


// =================================
// CLOSE MOBILE MENU
// AFTER CLICKING A LINK
// =================================

if (navLinks) {

    const navigationLinks =
        navLinks.querySelectorAll("a");


    navigationLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove("show");

                }
            );

        }
    );

}


// =================================
// CLOSE MOBILE MENU
// WHEN CLICKING OUTSIDE
// =================================

document.addEventListener(
    "click",
    function (event) {

        if (
            navLinks &&
            menuButton &&
            !navLinks.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {

            navLinks.classList.remove("show");

        }

    }
);



// =================================
// SCROLL REVEAL ANIMATION
// =================================

const revealElements =
    document.querySelectorAll(
        ".pillar-card, " +
        ".environment-item, " +
        ".people-card, " +
        ".governance-card, " +
        ".innovation-content"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        function (element) {

            element.classList.add(
                "reveal"
            );

            observer.observe(
                element
            );

        }
    );

} else {

    // Fallback for browsers
    // without IntersectionObserver

    revealElements.forEach(
        function (element) {

            element.classList.add(
                "visible"
            );

        }
    );

}



// =================================
// PAGE LOADED
// =================================

console.log(
    "TPAO Sustainability page loaded successfully."
);
