let counterValue = 0;

const value = document.querySelector(".count");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const selectedBtnClasses = e.currentTarget.classList;
        if (selectedBtnClasses.contains("decrease")) {
            counterValue--;
        }
        else if (selectedBtnClasses.contains("increase")) {
            counterValue++;
        }
        else {
            counterValue = 0;
        }

        //add colour
        if (counterValue > 0) {
            value.style.color = "green"
        }
        else if (counterValue < 0) {

            value.style.color = "red"
        }
        else {
            value.style.color = "black"
        }
        value.textContent = counterValue;
    });
});