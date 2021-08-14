// Review Data
const reviews = [
    {
        id: 1,
        name: "Michael Scofield",
        img: "https://www.hotfootdesign.co.uk/wp-content/uploads/2016/05/d5jA8OZv.jpg",
        description: "photos of customers using your product or service or displaying it in real-life situations demonstrates an extra level of effort that not only proves their loyalty to your business, but it allows other consumers to see your goods in action, which can help them make informed shopping decisions."
    },
    {
        id: 2,
        name: "John Smith",
        img: "https://preview.keenthemes.com/metronic-v4/theme/assets/pages/img/avatars/team1.jpg",
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable"
    },
    {
        id: 3,
        name: "Sanjay Arjun",
        img: "https://pbs.twimg.com/profile_images/974736784906248192/gPZwCbdS.jpg",
        description: "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
];


// getElements
const img = document.getElementById("user-img");
const name = document.getElementById("name");
const job = document.getElementById("job");
const description = document.getElementById("review-desc");

const prevButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

// Load initial Items
window.addEventListener("DOMContentLoaded", function () {
    console.log("Document Loaded");
})
