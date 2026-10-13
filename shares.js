// =====================================
// TPAO SHARES PAGE
// =====================================


// =====================================
// MOBILE NAVIGATION
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function () {

        const isOpen = navMenu.classList.toggle("show");

        menuToggle.setAttribute("aria-expanded", isOpen);

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

    navMenu.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("show");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute("aria-label", "Open navigation");

            menuToggle.textContent = "☰";

        });

    });

}


// =====================================
// CURRENCY FORMATTING
// =====================================

function formatUSD(amount) {

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(amount);

}


// =====================================
// INVESTMENT CALCULATOR
// =====================================

const investmentInput = document.getElementById("investment");
const buyPriceInput = document.getElementById("buyPrice");
const futurePriceInput = document.getElementById("futurePrice");

const calculateButton = document.getElementById("calculateButton");

const sharesOwnedOutput = document.getElementById("sharesOwned");
const amountInvestedOutput = document.getElementById("amountInvested");
const futureValueOutput = document.getElementById("futureValue");

const profitLossOutput = document.getElementById("profitLoss");
const profitPercentageOutput = document.getElementById("profitPercentage");


function calculateInvestment() {

    const investment = Number(investmentInput.value);
    const buyPrice = Number(buyPriceInput.value);
    const futurePrice = Number(futurePriceInput.value);

    if (
        !Number.isFinite(investment) ||
        !Number.isFinite(buyPrice) ||
        !Number.isFinite(futurePrice) ||
        investment < 0 ||
        buyPrice <= 0 ||
        futurePrice < 0 ||
        investment > 1000000000000 ||
        buyPrice > 1000000000000 ||
        futurePrice > 1000000000000
    ) {

        alert(
            "Please enter valid amounts. Investment cannot be negative, " +
            "the purchase price must be greater than zero, and the " +
            "future price cannot be negative."
        );

        return;

    }

    // Only whole shares are purchased.
    const shares = Math.floor(investment / buyPrice);

    const actualInvestment = shares * buyPrice;

    const futureValue = shares * futurePrice;

    const profitLoss = futureValue - actualInvestment;

    const percentage = actualInvestment > 0
        ? (profitLoss / actualInvestment) * 100
        : 0;


    sharesOwnedOutput.textContent =
        shares.toLocaleString("en-US");

    amountInvestedOutput.textContent =
        formatUSD(actualInvestment);

    futureValueOutput.textContent =
        formatUSD(futureValue);

    profitLossOutput.textContent =
        (profitLoss > 0 ? "+" : "") + formatUSD(profitLoss);

    profitPercentageOutput.textContent =
        (percentage > 0 ? "+" : "") +
        percentage.toFixed(2) + "%";


    // Display profit in green and loss in red.

    const profitBox = document.querySelector(".result-box.highlight");

    if (profitBox) {

        profitBox.style.background =
            profitLoss >= 0 ? "#e8f7ed" : "#fff0f0";

        profitBox.style.borderColor =
            profitLoss >= 0 ? "#b5e2c2" : "#f2b8b8";

        profitLossOutput.style.color =
            profitLoss >= 0 ? "#16834a" : "#c62828";

        profitPercentageOutput.style.color =
            profitLoss >= 0 ? "#16834a" : "#c62828";

    }

}


if (calculateButton) {

    calculateButton.addEventListener(
        "click",
        calculateInvestment
    );

}

[
    investmentInput,
    buyPriceInput,
    futurePriceInput
].forEach(function (input) {

    if (input) {

        input.addEventListener("input", calculateInvestment);

    }

});


// =====================================
// ILLUSTRATIVE SHARE PRICE GROWTH CHART
// =====================================

const chartCanvas = document.getElementById("growthChart");

if (chartCanvas && typeof Chart !== "undefined") {

    new Chart(chartCanvas, {

        type: "line",

        data: {

            labels: [
                "Starting Price",
                "Period 1",
                "Period 2",
                "Period 3",
                "Period 4",
                "Period 5"
            ],

            datasets: [{

                label: "Illustrative Price (USD)",

                data: [
                    1.00,
                    1.30,
                    1.80,
                    2.60,
                    3.20,
                    4.00
                ],

                borderColor: "#16834a",

                backgroundColor: "rgba(22, 131, 74, 0.12)",

                borderWidth: 3,

                fill: true,

                tension: 0.35,

                pointRadius: 5,

                pointHoverRadius: 7

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            interaction: {
                intersect: false,
                mode: "index"
            },

            plugins: {

                legend: {
                    display: true,
                    position: "top"
                },

                tooltip: {

                    callbacks: {

                        label: function (context) {

                            return "Example price: " +
                                formatUSD(context.parsed.y);

                        }

                    }

                }

            },

            scales: {

                y: {

                    beginAtZero: true,

                    title: {
                        display: true,
                        text: "Illustrative Share Price (USD)"
                    },

                    ticks: {

                        callback: function (value) {

                            return "$" + Number(value).toFixed(2);

                        }

                    }

                },

                x: {

                    title: {
                        display: true,
                        text: "Illustrative Period"
                    }

                }

            }

        }

    });

}


// =====================================
// CURRENT YEAR
// =====================================

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


// =====================================
// INITIAL CALCULATION
// =====================================

calculateInvestment();
