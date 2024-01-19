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

        if (count < 0) {
            value.style.color = "red";
        } else if (count > 0) {
            value.style.color = "green";
        } else {
            value.style.color = "black"
        }

        value.textContent = count;
    });
});