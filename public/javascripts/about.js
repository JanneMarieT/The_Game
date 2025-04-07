

window.onload = function() {
    let about_txt = document.getElementById("about_txt");
    let about_txt_1 = document.getElementById("about_txt_1");
    let about_txt_2 = document.getElementById("about_txt_2");
    let about_txt_3 = document.getElementById("about_txt_3");
    let about_txt_4 = document.getElementById("about_txt_4");
    let about_txt_5 = document.getElementById("about_txt_5");
    let about_txt_6 = document.getElementById("about_txt_6");
    let about_txt_7 = document.getElementById("about_txt_7");
    let about_txt_8 = document.getElementById("about_txt_8");
    let about_txt_9 = document.getElementById("about_txt_9");
    let about_txt_10 = document.getElementById("about_txt_10");
    

fetch('./text/about.json')
    .then(response => response.json())
    .then(data => {
    about_txt.textContent = data[0].text;
    about_txt_1.textContent = data[1].text;
    about_txt_2.textContent = data[2].text;
    about_txt_3.textContent = data[3].text;
    about_txt_4.textContent = data[4].text;
    about_txt_5.textContent = data[5].text;
    about_txt_6.textContent = data[6].text;
    about_txt_7.textContent = data[7].text;
    about_txt_8.textContent = data[8].text;
    about_txt_9.textContent = data[9].text;
    about_txt_10.textContent = data[10].text;
    });

    let guidance_txt = document.getElementById("guidance_txt");
    let guidance_txt_1 = document.getElementById("guidance_txt_1");
    let guidance_txt_2 = document.getElementById("guidance_txt_2");
    let guidance_txt_3 = document.getElementById("guidance_txt_3");
    let guidance_txt_4 = document.getElementById("guidance_txt_4");
    let guidance_txt_5 = document.getElementById("guidance_txt_5");
    let guidance_txt_6 = document.getElementById("guidance_txt_6");
    let guidance_txt_7 = document.getElementById("guidance_txt_7");
    let guidance_txt_8 = document.getElementById("guidance_txt_8");
    let guidance_txt_9 = document.getElementById("guidance_txt_9");
    let guidance_txt_10 = document.getElementById("guidance_txt_10");
    let guidance_txt_11 = document.getElementById("guidance_txt_11");
    let guidance_txt_12 = document.getElementById("guidance_txt_12");
    let guidance_txt_13= document.getElementById("guidance_txt_13");
    let guidance_txt_14 = document.getElementById("guidance_txt_14");
    let guidance_txt_15 = document.getElementById("guidance_txt_15");
    let guidance_txt_16 = document.getElementById("guidance_txt_16");
    let guidance_txt_17 = document.getElementById("guidance_txt_17");

    fetch('./text/guidance.json')
.then(response => response.json())
.then(data => {
guidance_txt.textContent = data[0].text;
guidance_txt_1.textContent = data[1].text;
guidance_txt_2.textContent = data[2].text;
guidance_txt_3.textContent = data[3].text;
guidance_txt_4.textContent = data[4].text;
guidance_txt_5.textContent = data[5].text;
guidance_txt_6.textContent = data[6].text;
guidance_txt_7.textContent = data[7].text;
guidance_txt_8.textContent = data[8].text;
guidance_txt_9.textContent = data[9].text;
guidance_txt_10.textContent = data[10].text;
guidance_txt_11.textContent = data[11].text;
guidance_txt_12.textContent = data[12].text;
guidance_txt_13.textContent = data[13].text;
guidance_txt_14.textContent = data[14].text;
guidance_txt_15.textContent = data[15].text;
guidance_txt_16.textContent = data[16].text;
guidance_txt_17.textContent = data[17].text;

});


};

