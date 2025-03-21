
document.getElementById("checkPasswordBtn").addEventListener("click", async function() {
    let password = localStorage.getItem("pass");

    if (!password) {
        document.getElementById("result").textContent = "⚠️ No password found in localStorage!";
        return;
    }

    let isPwned = await checkPassword(password);
    
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