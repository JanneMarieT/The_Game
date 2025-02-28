
//password validation
let password = document.getElementById("password");
let power = document.getElementById("power-point");
let strengthImage = document.getElementById("strength_img");
password.oninput = function () {
    let point = 0;
    let value = password.value;
    let widthPower = 
        ["1%", "25%", "50%", "75%", "100%"];
    let colorPower = 
        ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

    // Define image sources for different strength levels
let imageSources = [
    "../images/egg1.png" ,   // Red - Very Weak
    "../images/dragon1.png",        // Orange - Weak
    "../images/dragon7.png",      // Yellow - Medium
    "../images/dragon6.png",      // Light Green - Strong
    "../images/dragon3.png",  // Dark Green - Very Strong
];

    if (value.length >= 6) {
        let arrayTest = 
            [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
        arrayTest.forEach((item) => {
            if (item.test(value)) {
                point += 1;
            }
        });
    }
    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];
    strengthImage.src = imageSources[point];
    //strengthImage.style.display = "block"; // Show image when input starts
};
/*
let passwd = document.getElementById("password");
let strengthImage = document.getElementById("strength_img");

// Define image sources for different strength levels
let imageSources = [
    "../public/images/egg1.png" ,   // Red - Very Weak
    "../images/dragon1.png",        // Orange - Weak
    "../images/dragon7.png",      // Yellow - Medium
    "../images/dragon6.png",      // Light Green - Strong
    "../images/dragon3.png",  // Dark Green - Very Strong
];

passwd.on_input = function () {
    let point = 0;
    let value = passwd.value;

    if (value.length >= 6) {
        let arrayTest = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
        arrayTest.forEach((item) => {
            if (item.test(value)) {
                point += 1;
            }
        });
    }

    // Change image based on password strength
    strengthImage.src = imageSources[point];
    strengthImage.style.display = "block"; // Show image when input starts
};*/

//creates a session - so when refreshing it will not fade in unless you are redirected from intro page
    document.addEventListener("DOMContentLoaded", function () {
        const overlay = document.getElementById("fade-overlay");

        if (localStorage.getItem("introShown")) {
            // Fade out overlay if coming from the intro
            setTimeout(() => {
                overlay.classList.add("hide");
                setTimeout(() => {
                    overlay.style.display = "none"; // Fully remove after fading
                }, 3000);
            }, 2000); 

            localStorage.removeItem("introShown"); // Remove flag after first visit
        } else {
            // If the user directly loads index.ejs, remove the overlay immediately
            overlay.style.display = "none";
        }
    });






