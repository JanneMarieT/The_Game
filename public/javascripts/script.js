
//password validation
let password = document.getElementById("password");
let power = document.getElementById("power-point");
password.oninput = function () {
    let point = 0;
    let value = password.value;
    let widthPower = 
        ["1%", "25%", "50%", "75%", "100%"];
    let colorPower = 
        ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];

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






