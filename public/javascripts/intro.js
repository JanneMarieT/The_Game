let audio = document.getElementById("backgroundAudio");
        let soundBtn = document.getElementById("soundToggle");
        let isPlaying = false;
    
        soundBtn.addEventListener("click", function () {
            if (!isPlaying) {
                audio.play().catch(error => console.log("Autoplay blocked:", error));
                soundBtn.textContent = "🔊"; // Sound on icon
            } else {
                audio.pause();
                soundBtn.textContent = "🔇"; // Mute icon
            }
            isPlaying = !isPlaying;
        });
        
//redirect to main page - creates a session, so intro does not open again if refreshed
setTimeout(() => {
    localStorage.setItem("introShown", "true"); // Store in localStorage
    window.location.href = "/index"; // Redirect to the main page
}, 13000);

//welcome text typed
const text = "Ready to embark on a legendary quest to protect your digital kingdom?"
    let i = 0;
 
    function type() {
        if (i < text.length) {
            document.getElementById("typewriter").innerHTML += text.charAt(i);
            i++;
           setTimeout(type, 50); 
        }
    }
    
//welcome text timeout    
setTimeout(type, 1000);

setTimeout(function() {
    document.getElementById("delayedText").classList.add('visible'); // Add class to reveal <p>
}, 5000);
setTimeout(function() {
    document.getElementById("delayedText").classList.remove('visible'); // Add class to reveal <p>
}, 11800);

window.onload = () => {

    const transition_el = document.querySelector('.transition');
    const text_elements = document.querySelectorAll('.welcome')
   

    setTimeout(() => {
        text_elements.forEach(el => el.classList.remove('is-active'));
    }, 12000);

    setTimeout(() => {
        transition_el.classList.remove('is-active');
    }, 14000);
}

