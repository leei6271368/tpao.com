// =================================
// TPAO EMPLOYMENT JAVASCRIPT
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
// when a link is clicked

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
// APPLY BUTTONS
// =================================

const applyButtons =
    document.querySelectorAll(
        ".apply-button"
    );

const positionInput =
    document.getElementById(
        "position"
    );


applyButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const job =
                button.getAttribute(
                    "data-job"
                );


            if (positionInput) {

                positionInput.value =
                    job;

            }


            const application =
                document.querySelector(
                    ".application"
                );


            if (application) {

                application.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});



// =================================
// APPLICATION FORM
// =================================

const employmentForm =
    document.getElementById(
        "employmentForm"
    );

const formMessage =
    document.getElementById(
        "formMessage"
    );


if (employmentForm) {

    employmentForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const fullName =
                document.getElementById(
                    "fullName"
                ).value.trim();


            const email =
                document.getElementById(
                    "email"
                ).value.trim();


            const position =
                document.getElementById(
                    "position"
                ).value.trim();


            if (
                fullName === "" ||
                email === "" ||
                position === ""
            ) {

                formMessage.textContent =
                    "Please complete all required fields.";

                formMessage.style.color =
                    "#c0392b";

                return;

            }


            /*
                GitHub Pages is static hosting.
                This demo does not actually send
                an application to TPAO.

                A form service or backend is required
                to receive applications.
            */

            formMessage.textContent =
                "Thank you, " +
                fullName +
                ". Your employment enquiry has been prepared successfully.";

            formMessage.style.color =
                "#16804a";


            employmentForm.reset();

        }
    );

}



// =================================
// SCROLL REVEAL
// =================================

const revealElements =
    document.querySelectorAll(
        ".benefit-card, " +
        ".career-card, " +
        ".job-card, " +
        ".development-content, " +
        ".application-info, " +
        ".application-box, " +
        ".employment-cta > div"
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
    "TPAO Employment page loaded successfully."
);
