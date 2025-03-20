function checkPasswordStrength() {
    let point = localStorage.getItem("passwordStrength");
    let toastpet = document.getElementsByClassName("PetToast")[0];
    //toastpet.classList.add("show");
    if (point === null) {
        point = 0;
    }

    console.log("Password Strength on final_stage:", point);

    if (point < 1) {
        toastpet.classList.add("show");
        imgElement.src = imageSources[point];
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
    let imageSources = [
        "../images/EGG_fire.png" ,   // Red - Very Weak
        "../images/EGG_fire1.png",   // Orange - Weak
        "../images/EGG_fire2.png",   // Yellow - Medium
        "../images/EGG_fire3.png",   // Light Green - Strong
        "../images/EGG_fire4.png",   // Dark Green - Very Strong
    ];
    
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
