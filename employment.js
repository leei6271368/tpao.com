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

            if (navLinks) {
                navLinks.classList.remove("show");
            }

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
// CV FILE NAME DISPLAY
// =================================

const cvInput =
    document.getElementById("cv");

const cvFileName =
    document.getElementById("cvFileName");


if (cvInput) {

    cvInput.addEventListener(
        "change",
        function () {

            if (cvInput.files.length > 0) {

                cvFileName.textContent =
                    "Selected CV: " +
                    cvInput.files[0].name;

            } else {

                cvFileName.textContent =
                    "No CV selected.";

            }

        }
    );

}


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
        async function (event) {

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


            const cv =
                document.getElementById(
                    "cv"
                );


            // -----------------------------
            // Required field validation
            // -----------------------------

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


            // -----------------------------
            // CV validation
            // -----------------------------

            if (
                !cv ||
                cv.files.length === 0
            ) {

                formMessage.textContent =
                    "Please upload your CV before submitting.";

                formMessage.style.color =
                    "#c0392b";

                return;

            }


            const selectedFile =
                cv.files[0];


            // Allowed file types

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

                formMessage.textContent =
                    "Please upload your CV as PDF, JPG, or PNG.";

                formMessage.style.color =
                    "#c0392b";

                return;

            }


            // Maximum file size: 5 MB

            const maximumSize =
                5 * 1024 * 1024;


            if (
                selectedFile.size >
                maximumSize
            ) {

                formMessage.textContent =
                    "Your CV must be 5 MB or smaller.";

                formMessage.style.color =
                    "#c0392b";

                return;

            }


            // -----------------------------
            // Prevent duplicate submission
            // -----------------------------

            const submitButton =
                employmentForm.querySelector(
                    'button[type="submit"]'
                );


            if (submitButton) {

                submitButton.disabled =
                    true;

                submitButton.textContent =
                    "Submitting...";

            }


            formMessage.textContent =
                "Sending your application...";

            formMessage.style.color =
                "#555";


            // -----------------------------
            // Send application through
            // FormSubmit
            // -----------------------------

            try {

                const formData =
                    new FormData(
                        employmentForm
                    );


                // Add timestamp for FormSubmit
                // spam protection

                formData.set(
                    "_ts",
                    String(Date.now())
                );


                const response =
                    await fetch(
                        employmentForm.action,
                        {
                            method: "POST",
                            body: formData,
                            headers: {
                                "Accept": "application/json"
                            }
                        }
                    );


                const result =
                    await response.json();


                if (
                    !response.ok ||
                    !result.ok
                ) {

                    throw new Error(
                        result.error?.message ||
                        "Unable to submit application."
                    );

                }


                // -----------------------------
                // SUCCESS
                // -----------------------------

                formMessage.textContent =
                    "Thank you, " +
                    fullName +
                    ". Your application and CV have been submitted successfully.";

                formMessage.style.color =
                    "#16804a";


                employmentForm.reset();


                if (cvFileName) {

                    cvFileName.textContent =
                        "No CV selected.";

                }


                if (submitButton) {

                    submitButton.disabled =
                        false;

                    submitButton.textContent =
                        "Submit Enquiry →";

                }

            }


            catch (error) {

                console.error(
                    "FormSubmit submission error:",
                    error
                );


                formMessage.textContent =
                    "We could not submit your application. Please try again.";

                formMessage.style.color =
                    "#c0392b";


                if (submitButton) {

                    submitButton.disabled =
                        false;

                    submitButton.textContent =
                        "Submit Enquiry →";

                }

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
