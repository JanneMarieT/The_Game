



//password validation
let password = document.getElementById("password");
let power = document.getElementById("power-point");
let strengthImage = document.getElementById("strength_img");
let help_txt = document.getElementById("help_text");
let lv_icon = document.getElementById("level_icon");
let hashtx = document.getElementById("hashtx");


    // Define image sources for different strength levels
    let imageSources_0 = [
        "../images/EGG_fire.png" ,   
        "../images/EGG_fire1.png",   
        "../images/EGG_fire2.png",   
        "../images/EGG_fire3.png",   
        "../images/EGG_fire4.png",   
    ];

    let imageSources_1 = [
        "../images/EGG_ice.png" ,   
        "../images/EGG_ice1.png",   
        "../images/EGG_ice2.png",   
        "../images/EGG_ice3.png",   
        "../images/EGG_ice4.png",   
    ];

let imageSources = Math.random() < 0.5 ? imageSources_0 : imageSources_1;
localStorage.setItem("Pet", imageSources);


password.oninput = function () {
    let point = 0;
    let value = password.value;
    
    let widthPower = 
        ["1%", "25%", "50%", "75%", "100%"];
    let colorPower = 
        ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];


    let Icon_level = [
        "bi bi-1-square-fill fs-1",
        "bi bi-2-square-fill fs-1",
        "bi bi-3-square-fill fs-1",
        "bi bi-4-square-fill fs-1",
        "bi bi-5-square-fill fs-1",
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
    
    localStorage.setItem("LastDragon", strengthImage.src);
    localStorage.setItem("passwordStrength", point);
    localStorage.setItem("pass", password.value);

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

async function hashPasswordFrontend(password) {
    const response = await fetch("/hash-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password })
    });

    const data = await response.json();
    document.getElementById("hashtx").textContent = data.hashedPassword;
}

password.addEventListener("input", () => {
    hashPasswordFrontend(password.value);
});


//Check boxes!!
document.getElementById("password").addEventListener("input", function() {
    const password = this.value;
    
    if (/[A-Z]/.test(password)) {
        document.getElementById("uppercase").checked = true;
    } else {
        document.getElementById("uppercase").checked = false;
    }

    if (/[a-z]/.test(password)) {
        document.getElementById("lowercase").checked = true;
    } else {
        document.getElementById("lowercase").checked = false;
    }

    if (/\d/.test(password)) {
        document.getElementById("numbers").checked = true;
    } else {
        document.getElementById("numbers").checked = false;
    }

    if (/[^A-Za-z0-9]/.test(password)) {
        document.getElementById("special").checked = true;
    } else {
        document.getElementById("special").checked = false;
    }
});


//creates a session - so when refreshing it will not fade in unless you are redirected from intro page
    document.addEventListener("DOMContentLoaded", function () {
        const overlay = document.getElementById("fade-overlay");

        if (localStorage.getItem("introShown")) {
            // Fade out overlay if coming from the intro
            setTimeout(() => {
                overlay.classList.add("hide");
                setTimeout(() => {
                    overlay.style.display = "none"; 
                }, 3000);
            }, 2000); 

            localStorage.removeItem("introShown"); 
        } else {
            
            overlay.style.display = "none";
        }
       
        });


        document.getElementById("togglePassword").addEventListener("click", function () {
            let passwordInput = document.getElementById("password");
        
            if (passwordInput.type === "password") {
                passwordInput.type = "text";
                this.classList.remove("bi-eye");
                this.classList.add("bi-eye-slash"); 
            } else {
                passwordInput.type = "password";
                this.classList.remove("bi-eye-slash");
                this.classList.add("bi-eye"); 
            }
        });
    
       
 

