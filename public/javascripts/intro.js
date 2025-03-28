
        let audio = document.getElementById("backgroundAudio");
        let soundToggle = document.getElementById("soundToggle");
        let volumeSlider = document.getElementById("volumeSlider");
        
        let isPlaying = false;
        
        
        soundToggle.addEventListener("click", function () {
            if (isPlaying) {
                audio.pause();
                soundToggle.textContent = "🔇"; 
            } else {
                audio.play().catch(error => console.log("Autoplay blocked:", error));
                soundToggle.textContent = "🔊"; 
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
        

//welcome text
const text = "Ready to embark on a legendary quest to protect your digital kingdom?"
    let i = 0;
 
    function type() {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
           setTimeout(type, 30); 
        }
    }

//welcome text timeout    
setTimeout(type, 1000);

setTimeout(function() {
    document.getElementById("delayedText").classList.add('visible'); 
}, 5000);


document.addEventListener("DOMContentLoaded", function () {
    const int = document.getElementById("intro");
    const continueButton = document.getElementById("continueButton");
   
    
    // Show the "Continue" button after the text is visible
    setTimeout(() => {
        continueButton.classList.add('visible');
    }, 7000);
    
    
    continueButton.addEventListener("click", function () {
        int.classList.add('hide')

        setTimeout(() => {
            localStorage.setItem("introShown", "true"); 
            window.location.href = "/index"; 
        }, 1000); 
    });
});
