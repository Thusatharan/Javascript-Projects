// Review Data
const reviews = [
    {
        id: 1,
        name: "Michael Scofield",
        job: "Software Engineer",
        img: "https://www.hotfootdesign.co.uk/wp-content/uploads/2016/05/d5jA8OZv.jpg",
        description: "photos of customers using your product or service or displaying it in real-life situations demonstrates an extra level of effort that not only proves their loyalty to your business, but it allows other consumers to see your goods in action, which can help them make informed shopping decisions."
    },
    {
        id: 2,
        name: "John Smith",
        job: "Arrchitect",
        img: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/img/avatars/team1.jpg",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, I also appreciate the effort to improve the company income  by injected humour, or randomised words which don't look even slightly believable"
    },
    {
        id: 3,
        name: "Sanjay Arjun",
        job: "Content Witter",
        img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
        description: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
];


// getElements
const img = document.getElementById("user-img");
const userName = document.getElementById("name");
const job = document.getElementById("job");
const description = document.getElementById("review-desc");

const prevButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

// Starting item
let currentitem = 0;

// Load initial Items
window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentitem);

});


function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    userName.textContent = item.name;
    job.textContent = item.job;
    description.textContent = item.description;
};



nextButton.addEventListener("click", function () {
    currentitem++;
    if (currentitem > reviews.length - 1) {
        currentitem = 0;
    }
    showPerson(currentitem);
});

prevButton.addEventListener("click", function () {
    currentitem--;
    if (currentitem < 0) {
        currentitem = reviews.length - 1;
    }
    showPerson(currentitem);
});