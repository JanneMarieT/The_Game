
//password validation
let password = document.getElementById("password");
let power = document.getElementById("power-point");
let strengthImage = document.getElementById("strength_img");
let help_txt = document.getElementById("help_text");
let lv_icon = document.getElementById("level_icon");


password.oninput = function () {
    let point = 0;
    let value = password.value;
    let widthPower = 
        ["1%", "25%", "50%", "75%", "100%"];
    let colorPower = 
        ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

    // Define image sources for different strength levels
    let imageSources = [
        "../images/EGG_fire.png" ,   // Red - Very Weak
        "../images/EGG_fire1.png",        // Orange - Weak
        "../images/EGG_fire2.png",      // Yellow - Medium
        "../images/EGG_fire3.png",      // Light Green - Strong
        "../images/EGG_fire4.png",  // Dark Green - Very Strong
    ];

    let Icon_level = [
        "bi bi-0-square-fill fs-1",
        "bi bi-1-square-fill fs-1",
        "bi bi-2-square-fill fs-1",
        "bi bi-3-square-fill fs-1",
        "bi bi-4-square-fill fs-1",
    ]

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
    lv_icon.className = Icon_level[point];
    fetch('./text/helptext.json')
    .then(response => response.json())
    .then(data => {
    help_txt.textContent = data[point].text;
    });
};


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






