function checkPasswordStrength() {
    let point = localStorage.getItem("passwordStrength");
    let toastpet = document.getElementsByClassName("PetToast")[0];
    let overlay = document.getElementById("overlay");
    //let toast_cont = document.getElementsByClassName("toast-container");

    //let mainContent = document.getElementById("main-content");
    //toastpet.classList.add("show");
    if (point === null) {
        point = 0;
    }

    console.log("Password Strength on final_stage:", point);

    if (point < 1) {
        toastpet.classList.add("show");
        imgElement.src = imageSources[point];
       // overlay.style.display = "block";
        overlay.classList.add("overlay"); 
    }else {
        toastpet.classList.remove("show");
        //toast_cont.classList.remove("show"); 
        //overlay.style.display = "none"; // Hide overlay
        overlay.classList.remove("overlay"); 
    }
}
checkPasswordStrength();


document.addEventListener("DOMContentLoaded", function () {
    let strength = document.getElementById("Strength");
    let stanima = document.getElementById("Stanima");
    let speed = document.getElementById("Speed");
    let life = document.getElementById("Life");

    let strengthImage = document.getElementById("strength_img");

    let pass = localStorage.getItem("pass");
    let point = localStorage.getItem("passwordStrength")
    //let imageSources = localStorage.getItem("image")
 
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

        let lastDragon = localStorage.getItem("LastDragon");

        if (lastDragon.includes("EGG_fire")) {
            imageSources = imageSources_0;
        } else if (lastDragon.includes("EGG_ice")) {
            imageSources = imageSources_1;
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

    life.style.width = widthPower[point_length];
    life.style.backgroundColor = colorPower[point_length];

    strengthImage.src = imageSources[point];

});

function showToast() {
    document.getElementById("overlay").style.display = "block"; // Show overlay
    document.body.classList.add("grayscale"); // Make page black & white
    document.getElementById("toast").style.display = "block"; // Show toast
}

function hideToast() {
    document.getElementById("overlay").style.display = "none"; // Hide overlay
    document.body.classList.remove("grayscale"); // Restore normal colors
    document.getElementById("toast").style.display = "none"; // Hide toast
}