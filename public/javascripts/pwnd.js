window.onload = function() {
    alert("❌ You've been pwned! Hurry up and change your password!");
};

//audio
let audio = document.getElementById("backgroundAudio");
        let soundBtn = document.getElementById("soundToggle");
        let isPlaying = false;
    
        soundBtn.addEventListener("click", function () {
            if (!isPlaying) {
                audio.play().catch(error => console.log("Autoplay blocked:", error));
                soundBtn.textContent = "🔊"; 
            } else {
                audio.pause();
                soundBtn.textContent = "🔇"; 
            }
            isPlaying = !isPlaying;
        });