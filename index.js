const rgbspan = document.getElementById("rgbtext");

const rgbc1 = document.getElementById("rgb1");
const rgbc2 = document.getElementById("rgb2");
const rgbc3 = document.getElementById("rgb3");

const body = document.body;

setInterval(() => {
  let rgb1 = Math.floor(Math.random() * 255);
  let rgb2 = Math.floor(Math.random() * 255);
  let rgb3 = Math.floor(Math.random() * 255);

  rgbc1.innerHTML = ` ${rgb1},`;
  rgbc2.innerHTML = ` ${rgb2},`;
  rgbc3.innerHTML = ` ${rgb3}`;

  body.style.background = "rgb(" + rgb1 + "," + rgb2 + "," + rgb3 + ")";

  rgbc1.style.color = "#" + rgb1;
  rgbc2.style.color = "#" + rgb2;
  rgbc3.style.color = "#" + rgb3;
}, 1000);
