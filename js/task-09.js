function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgrounColorStyle = document.querySelector("body");
const backgrounColorText = document.querySelector(".color");

backgrounColorStyle.addEventListener('click', onBackgroundColor);

function onBackgroundColor() {
    backgrounColorStyle.style.backgroundColor = getRandomHexColor();
    backgrounColorText.textContent = getRandomHexColor();
};