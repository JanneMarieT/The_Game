//check password for toast
function checkPasswordStrength() {
    let point = localStorage.getItem("passwordStrength");
    let toastpet = document.getElementsByClassName("PetToast")[0];
    let overlay = document.getElementById("overlay");
    let toast_cont = document.querySelector(".toast-container");
    
    if (point === null) {
        point = 0;
    }

    console.log("Password Strength on final_stage:", point);

    if (point < 3) {
        toastpet.classList.add("show");
        imgElement.src = imageSources[point];
        overlay.classList.add("overlay"); 
    }else {
        toastpet.classList.remove("show");
        toast_cont.classList.remove("toast-container"); 
        overlay.classList.remove("overlay"); 
    }
}
checkPasswordStrength();

//img
document.addEventListener("DOMContentLoaded", function () {
    let strength = document.getElementById("Strength");
    let stanima = document.getElementById("Stanima");
    let speed = document.getElementById("Speed");
    let spirit = document.getElementById("Spirit");

    let strengthImage = document.getElementById("strength_img");

    let pass = localStorage.getItem("pass");
    let point = localStorage.getItem("passwordStrength")

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

        
    let imageSources_2 = [
        "../images/EGG_forrest.png" ,   
        "../images/EGG_forrest1.png",   
        "../images/EGG_forrest2.png",   
        "../images/EGG_forrest3.png",   
        "../images/EGG_forrest4.png",   
    ];

    let imageSources_3 = [
        "../images/EGG_water.png" ,   
        "../images/EGG_water1.png",   
        "../images/EGG_water2.png",   
        "../images/EGG_water3.png",   
        "../images/EGG_water4.png",   
    ];

        let lastDragon = localStorage.getItem("LastDragon");
        console.log(lastDragon)

        if (lastDragon.includes("EGG_fire")) {
            imageSources = imageSources_0;
        } else if (lastDragon.includes("EGG_ice")) {
            imageSources = imageSources_1;
        } else if (lastDragon.includes("EGG_forrest")) {
            imageSources = imageSources_2;
        } else if (lastDragon.includes("EGG_water")) {
            imageSources = imageSources_3;
        } else {
            console.error("Error: Could not determine dragon type.");
        }
    
    let widthPower = 
        ["1%", "25%", "50%", "75%", "100%"];
    let colorPower = 
        ["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];
    

        let point_length = Math.min(pass.length - 7, 4);
        console.log("length", point_length)
        let point_speed = Math.min((pass.match(/\d/g) || []).length, 4); 
        let point_stamina = Math.min((pass.match(/[^a-zA-Z0-9]/g) || []).length, 4); 
        let point_strength = Math.min((pass.match(/[A-Z]/g) || []).length, 4);
           

    strength.style.width = widthPower[point_strength];
    strength.style.backgroundColor = colorPower[point_strength];

    stanima.style.width = widthPower[point_stamina];
    stanima.style.backgroundColor = colorPower[point_stamina];

    speed.style.width = widthPower[point_speed];
    speed.style.backgroundColor = colorPower[point_speed];

    spirit.style.width = widthPower[point_length];
    spirit.style.backgroundColor = colorPower[point_length];

    strengthImage.src = imageSources[point];
    localStorage.setItem("Dragon", imageSources[point]);


});

//Toast - grey everything else out
function showToast() {
    document.getElementById("overlay").style.display = "block"; 
    document.body.classList.add("grayscale"); 
    document.getElementById("toast").style.display = "block"; 
}

function hideToast() {
    document.getElementById("overlay").style.display = "none"; 
    document.body.classList.remove("grayscale"); 
    document.getElementById("toast").style.display = "none"; 
}

// score
function calculatePasswordScore(password) {
    let capitalLetters = (password.match(/[A-Z]/g) || []).length;
    let specialChars = (password.match(/[^a-zA-Z0-9]/g) || []).length;
    let numbers = (password.match(/\d/g) || []).length;
    let extraChars = Math.max(password.length - 8, 0); 

   
    let capitalScore = Math.min(capitalLetters, 5) * 5;
    let specialScore = Math.min(specialChars, 5) * 5;
    let numberScore = Math.min(numbers, 5) * 5;
    let extraCharScore = Math.min(extraChars, 5) * 5;

    let totalScore = capitalScore + specialScore + numberScore + extraCharScore;
    return Math.min(totalScore, 100); 
}
let score = document.getElementById("score");
let pass = localStorage.getItem("pass");
score.textContent = calculatePasswordScore(pass)


// life
let countdownElement = document.getElementById("countdown"); 
let scoreElement = document.getElementById("score"); 

let timer; 
let lastScore = null; 

function startCountdownFromScore() {
    let score = parseInt(scoreElement.textContent) || 0; 

    if (score !== lastScore) {
        lastScore = score;

        let months = Math.floor(score / 10); 
        let countdownTime = months * 30 * 24 * 60 * 60; 
        console.log("New Score:", score, "New Countdown Time (seconds):", countdownTime);
        
        startCountdown(countdownTime);
    }
}

function startCountdown(seconds) {
    clearInterval(timer); 

    function updateCountdown() {
        if (seconds <= 0) {
            clearInterval(timer);
            countdownElement.textContent = "Expired!";
            return;
        }

        let days = Math.floor(seconds / (24 * 60 * 60));
        let hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
        let minutes = Math.floor((seconds % (60 * 60)) / 60);
        let secs = seconds % 60;

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${secs}s`;
        seconds--;
    }

    updateCountdown(); 
    timer = setInterval(updateCountdown, 1000); 
}

setInterval(startCountdownFromScore, 1000);



