let text = document.querySelector(".num");
let load = document.querySelector(".load");

let numToText = 1;

let time = setInterval(function () {
  numToText += 1;
  text.textContent = numToText + "%";

  if (numToText === 100) {
    clearInterval(time);
    load.style.fillOpacity = 1;
    text.style.fill = "#fff";
    text.style.fontSize = "30px";
    text.textContent = "Uploaded";
    text.textLength = "105";
  }
}, 30);
