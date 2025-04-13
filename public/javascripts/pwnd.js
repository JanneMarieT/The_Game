window.onload = function() {
    alert("❌ You've been pwned! Hurry up and change your password!");
};

//audio
        let audio = document.getElementById("backgroundAudio");
        let soundBtn = document.getElementById("soundToggle");
        let volumeSlider = document.getElementById("volumeSlider");
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
 
        volumeSlider.addEventListener("input", function () {
            audio.volume = this.value / 100; 
        
           
            if (audio.paused && audio.volume > 0) {
                audio.play();
                isPlaying = true;
                soundToggle.textContent = "🔊";
            }
        });