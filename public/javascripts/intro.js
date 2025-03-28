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
