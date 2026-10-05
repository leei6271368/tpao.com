// =================================
// TPAO APPLICATION THANK YOU PAGE
// =================================


// Page loaded message

console.log(
    "TPAO Application Thank You page loaded successfully."
);


// =================================
// PREVENT ACCIDENTAL FORM RESUBMISSION
// =================================

// If the visitor arrived here after submitting
// an application, the browser should not
// automatically resubmit the application
// when the page is refreshed.

if (window.history.replaceState) {

    window.history.replaceState(
        null,
        null,
        window.location.href
    );

}


// =================================
// SUCCESS ICON ANIMATION
// =================================

const successIcon =
    document.querySelector(".success-icon");


if (successIcon) {

    successIcon.style.opacity = "0";

    successIcon.style.transform =
        "scale(0.7)";


    setTimeout(function () {

        successIcon.style.transition =
            "opacity 0.5s ease, transform 0.5s ease";

        successIcon.style.opacity = "1";

        successIcon.style.transform =
            "scale(1)";

    }, 150);

}
