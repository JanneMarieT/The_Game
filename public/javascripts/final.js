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
