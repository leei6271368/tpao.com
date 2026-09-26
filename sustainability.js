```javascript
// =================================
// TPAO SUSTAINABILITY JAVASCRIPT
// =================================


// =================================
// MOBILE NAVIGATION
// =================================

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


if (menuButton && navLinks) {

    menuButton.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle("show");

        }
    );

}


// Close mobile menu
// after clicking a link

const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


navigationLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            navLinks.classList.remove("show");

        }
    );

});



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



// =================================
// PAGE LOADED
// =================================

console.log(
    "TPAO Sustainability page loaded successfully."
);
```
