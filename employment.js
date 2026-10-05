// =================================
// TPAO EMPLOYMENT JAVASCRIPT
// =================================


// =================================
// MOBILE NAVIGATION
// =================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function () {

        navLinks.classList.toggle("show");

    });

}


// Close mobile menu when a navigation link is clicked

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {

            navLinks.classList.remove("show");

        }

    });

});


// =================================
// APPLY BUTTONS
// =================================

const applyButtons =
    document.querySelectorAll(".apply-button");

const positionInput =
    document.getElementById("position");


applyButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const job =
            button.getAttribute("data-job");


        if (positionInput) {

            positionInput.value = job;

        }


        const application =
            document.querySelector(".application");


        if (application) {

            application.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// =================================
// CV FILE NAME DISPLAY
// =================================

const cvInput =
    document.getElementById("cv");

const cvFileName =
    document.getElementById("cvFileName");


if (cvInput && cvFileName) {

    cvInput.addEventListener("change", function () {

        if (cvInput.files.length > 0) {

            cvFileName.textContent =
                "Selected CV: " +
                cvInput.files[0].name;

        } else {

            cvFileName.textContent =
                "No CV selected.";

        }

    });

}


// =================================
// APPLICATION FORM
// =================================

const employmentForm =
    document.getElementById("employmentForm");

const formMessage =
    document.getElementById("formMessage");


if (employmentForm) {

    employmentForm.addEventListener(
        "submit",
        function (event) {

            const cv =
                document.getElementById("cv");


            // -----------------------------
            // CHECK CV
            // -----------------------------

            if (!cv || cv.files.length === 0) {

                event.preventDefault();

                if (formMessage) {

                    formMessage.textContent =
                        "Please upload your CV before submitting.";

                    formMessage.style.color =
                        "#c0392b";

                }

                return;

            }


            // -----------------------------
            // GET SELECTED FILE
            // -----------------------------

            const selectedFile =
                cv.files[0];


            // -----------------------------
            // ALLOWED FILE TYPES
            // -----------------------------

            const allowedTypes = [
                "application/pdf",
                "image/jpeg",
                "image/png"
            ];


            if (
                !allowedTypes.includes(
                    selectedFile.type
                )
            ) {

                event.preventDefault();

                if (formMessage) {

                    formMessage.textContent =
                        "Please upload your CV as PDF, JPG, or PNG.";

                    formMessage.style.color =
                        "#c0392b";

                }

                return;

            }


            // -----------------------------
            // MAXIMUM FILE SIZE
            // -----------------------------

            const maximumSize =
                5 * 1024 * 1024;


            if (selectedFile.size > maximumSize) {

                event.preventDefault();

                if (formMessage) {

                    formMessage.textContent =
                        "Your CV must be 5 MB or smaller.";

                    formMessage.style.color =
                        "#c0392b";

                }

                return;

            }


            // -----------------------------
            // VALID FORM
            // -----------------------------
            //
            // IMPORTANT:
            // We DO NOT use preventDefault()
            // here.
            //
            // This allows the browser to send
            // the form normally to FormSubmit.
            //
            // FormSubmit will then redirect the
            // applicant to thank-you.html using
            // the _redirect field in employment.html.
            // -----------------------------

            const submitButton =
                employmentForm.querySelector(
                    'button[type="submit"]'
                );


            if (submitButton) {

                submitButton.disabled = true;

                submitButton.textContent =
                    "Submitting...";

            }

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


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (entry.isIntersecting) {

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

            element.classList.add("reveal");

            observer.observe(element);

        }
    );


} else {

    // Fallback for browsers that do not
    // support IntersectionObserver.

    revealElements.forEach(
        function (element) {

            element.classList.add("visible");

        }
    );

}


// =================================
// PAGE LOADED
// =================================

console.log(
    "TPAO Employment page loaded successfully."
);
