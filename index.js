const rgbspan = document.getElementById("rgbtext");

const body = document.body;
const color1 = document.getElementById("rgb1")


setInterval(() => {
    let rgb1 = Math.floor(Math.random() * 255);
    let rgb2 = Math.floor(Math.random() * 255);
    let rgb3 = Math.floor(Math.random() * 255);
    

    
  body.style.background = "rgb(" + rgb1 + "," + rgb2 + "," + rgb3 + ")";

  rgbspan.innerHTML = `<h3>RGB: ${rgb1}, ${rgb2}, ${rgb3} </h3>`;
}, 1000);


