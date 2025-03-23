

window.onload = function() {
    let about_txt = document.getElementById("about_txt");
    let about_txt_1 = document.getElementById("about_txt_1");
    let about_txt_2 = document.getElementById("about_txt_2");
    let about_txt_3 = document.getElementById("about_txt_3");
    let about_txt_4 = document.getElementById("about_txt_4");
    let about_txt_5 = document.getElementById("about_txt_5");

fetch('./text/about.json')
    .then(response => response.json())
    .then(data => {
    about_txt.textContent = data[0].text;
    about_txt_1.textContent = data[1].text;
    about_txt_2.textContent = data[2].text;
    about_txt_3.textContent = data[3].text;
    about_txt_4.textContent = data[4].text;
    about_txt_5.textContent = data[5].text;
    });

    let guidance_txt = document.getElementById("guidance_txt");
    let guidance_txt_1 = document.getElementById("guidance_txt_1");
    let guidance_txt_2 = document.getElementById("guidance_txt_2");
    let guidance_txt_3 = document.getElementById("guidance_txt_3");
    let guidance_txt_4 = document.getElementById("guidance_txt_4");
    let guidance_txt_5 = document.getElementById("guidance_txt_5");

    fetch('./text/guidance.json')
    .then(response => response.json())
    .then(data => {
    guidance_txt.textContent = data[0].text;
    guidance_txt_1.textContent = data[1].text;
    guidance_txt_2.textContent = data[2].text;
    guidance_txt_3.textContent = data[3].text;
    guidance_txt_4.textContent = data[4].text;
    guidance_txt_5.textContent = data[5].text;
    });

};
