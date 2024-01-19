let count = 0;

const value = document.getElementById("value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        let styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        value.textContent = count;
    });
});