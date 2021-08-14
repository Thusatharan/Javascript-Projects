const colors = [
    '#9cbff7',
    '#9cf7ae',
    '#f79cd1',
    '#ffc8a8',
    '#ffa8af',
];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
    const randomNumber = getRandom();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
}
);

function getRandom() {
    return Math.floor(Math.random() * colors.length);
}