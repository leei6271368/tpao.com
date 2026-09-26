// =================================
// TPAO CONTACT JAVASCRIPT
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
// when a navigation link is clicked

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
// CONTACT FORM
// =================================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document.getElementById("name").value.trim();

            const email =
                document.getElementById("email").value.trim();

            const subject =
                document.getElementById("subject").value.trim();

            const message =
                document.getElementById("message").value.trim();


            if (
                name === "" ||
                email === "" ||
                subject === "" ||
                message === ""
            ) {

                formMessage.textContent =
                    "Please complete all fields.";

                formMessage.style.color =
                    "#c0392b";

                return;

            }


            /*
                GitHub Pages is a static hosting service,
                so this form does not actually send an email
                by itself.

                For now, we display a confirmation message.
            */

            formMessage.textContent =
                "Thank you, " +
                name +
                ". Your message has been prepared successfully.";

            formMessage.style.color =
                "#16804a";


            contactForm.reset();

        }
    );

}



// =================================
// SCROLL REVEAL
// =================================

const revealElements =
    document.querySelectorAll(
        ".contact-card, " +
        ".office-card, " +
        ".message-info, " +
        ".contact-form-container, " +
        ".contact-cta > div"
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
    "TPAO Contact page loaded successfully."
);
