document.addEventListener("DOMContentLoaded", function () {

    let img = document.getElementById("strength_img");
    let lastDragon = localStorage.getItem("Dragon");
    console.log(lastDragon)
    img.src = lastDragon;

});


document.getElementById("checkPasswordBtn").addEventListener("click", async function() {
    let password = localStorage.getItem("pass");

    if (!password) {
        document.getElementById("result").textContent = "⚠️ No password found in localStorage!";
        return;
    }

    let isPwned = await checkPassword(password);
    console.log(isPwned)
    
    if (isPwned) {
        window.location.href = "/pwnd";
    } else {
        window.location.href = "/safe";
    }
});

async function checkPassword(password) {
    let hash = await crypto.subtle.digest("SHA-1", new TextEncoder().encode(password));
    let hashHex = Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
    let prefix = hashHex.slice(0, 5);
    let suffix = hashHex.slice(5);

    let response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
    let data = await response.text();

    return data.includes(suffix);
}
/*
document.querySelectorAll(".custom_button").forEach(button => {
    button.addEventListener("click", async function() {
        let password = localStorage.getItem("pass");

        if (!password) {
            alert("⚠️ No password found in localStorage!");
            return;
        }

        let hash = await crypto.subtle.digest("SHA-1", new TextEncoder().encode(password));
        let hashHex = Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('').toUpperCase();
        let prefix = hashHex.slice(0, 5);
        let suffix = hashHex.slice(5);

        let checkFunction;

        // Check which button was clicked and assign the correct function
        switch (this.id) {
            case "pwnedButton":
                checkFunction = () => checkPwnedPasswords(prefix, suffix);
                break;
            case "ProxyNova":
                checkFunction = () => checkProxyNovaPassword(password);
                break;
            case "checkRockYouBtn":
                checkFunction = () => checkRockyou(password);
                break;
        }

        // Perform only the check for the clicked button
        let result = await checkFunction();

        if (result) {
            alert("❌ Your password has been found in a breach! Change it immediately!");
        } else {
            alert("✅ Your password is safe! No breaches detected.");
        }
    });
});


// 1️⃣ **Check Have I Been Pwned**
async function checkPwnedPasswords(prefix, suffix){

    let response = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
    let data = await response.text();

    return data.includes(suffix);
}

async function checkProxyNovaPassword(password) {
    try {
        // Querying ProxyNova for breached passwords using a query of just the password
        const response = await fetch(`https://api.proxynova.com/comb?query=${encodeURIComponent(password)}&start=0&limit=15`);
        console.log(response);
        const data = await response.json();
        console.log(data);

        // Check if there are any entries in the 'lines' array
        if (!data.lines || data.lines.length === 0) {
            console.log("No breach found for password.");
            return false; // No breach found
        } else {
            console.log("Password found in breach:", data.lines);
            return true; // Password found in breach
        }
    } catch (error) {
        console.error("ProxyNova Error:", error);
        return false; // Error handling, return false
    }
}

async function checkRockyou(password) {
    try {
        console.log("Sending password:", password); 

        let response = await fetch('/final_boss', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ password }) 
        });

        console.log("Raw Response:", response); 

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`);
        }

        let data = await response.json(); 
        console.log('Server Response Data:', data); 

        if (!data.success) {
            throw new Error(data.message || 'Unknown error');
        }

        // Return true if blacklisted, false if not
        return data.isBlacklisted;
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while checking the password.');
        return false; // Assume not blacklisted if there's an error
    }
}*/

