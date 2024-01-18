const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    let randomNumber = getRandomNumber();
    let selectedColor = colors[randomNumber];
    color.textContent = selectedColor;
    color.style.color = selectedColor;
    document.body.style.backgroundColor = selectedColor;

});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}