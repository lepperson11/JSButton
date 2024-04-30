const clickCount = document.querySelector("#clicks");
const red = document.querySelector("#red");
const rangeRed = document.querySelector("#rangeRed");
const green = document.querySelector("#green");
const rangeGreen = document.querySelector("#rangeGreen");
const blue = document.querySelector("#blue");
const rangeBlue = document.querySelector("#rangeBlue");

let counter = 0;

rangeRed.addEventListener("mouseup", function () {
  red.innerHTML = "";
  red.innerHTML = "red: ";
  red.appendChild(document.createTextNode(`${rangeRed.value}`));
  document.body.style.backgroundColor =
    "rgb(" +
    rangeRed.value +
    "," +
    rangeGreen.value +
    "," +
    rangeBlue.value +
    ")";
});

rangeGreen.addEventListener("mouseup", function () {
  green.innerHTML = "";
  green.innerHTML = "green: ";
  green.appendChild(document.createTextNode(`${rangeGreen.value}`));
  document.body.style.backgroundColor =
    "rgb(" +
    rangeRed.value +
    "," +
    rangeGreen.value +
    "," +
    rangeBlue.value +
    ")";
});

rangeBlue.addEventListener("mouseup", function () {
  blue.innerHTML = "";
  blue.innerHTML = "blue: ";
  blue.appendChild(document.createTextNode(`${rangeBlue.value}`));
  document.body.style.backgroundColor =
    "rgb(" +
    rangeRed.value +
    "," +
    rangeGreen.value +
    "," +
    rangeBlue.value +
    ")";
});

function btnPressed() {
  clickCount.innerHTML = "";
  counter += 1;
  clickCount.appendChild(document.createTextNode(`${counter}`));
}
