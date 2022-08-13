let clients = [{
        name: `Janie Adams`,
        position: `Client`,
        picture: `./images/janie.png`,
        comment: `Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, perferendis.`
    },
    {
        name: `Kip Guile`,
        position: `CEO`,
        picture: `./images/image-colton.jpg`,
        comment: `Sayanora Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit maxime labore culpa veritatis reiciendis dignissimos saepe esse earum nulla eius.`,
    },
    {
        name: `Yerin Eleanor`,
        position: `CTO`,
        picture: `./images/janie.png`,
        comment: `Holla senorita Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit maxime labore culpa veritatis reiciendis dignissimos saepe esse earum nulla eius.`,
    },
    {
        name: `Rand Al'Thor`,
        position: `GED`,
        picture: `./images/image-irene.jpg`,
        comment: `Arigato Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit maxime labore culpa veritatis reiciendis.`,
    }
]


let comment = document.getElementById("comments");
let picture = document.getElementById("picture");
let names = document.getElementById("name");
let position = document.getElementById("position");


let buttons = document.querySelectorAll(".btn");
let changeAbleNumber = 0;


buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        changeAbleNumber++
        picture.src = `${clients[index].picture}`
        names.innerHTML = `${clients[index].name}`
        position.innerHTML = `${clients[index].position}`
        comment.innerHTML = `${clients[index].comment}`
    })
});


window.onload = function () {
    const effect = document.querySelector(".partnerLogos");

    window.scroll("scroll", scrollEffect());

    function scrollEffect() {
        if (window.screenX >= 0) {
            effect.style.opacity = "1";
            effect.style.transform = "translateX(0px)";
            effect.style.transition = "8s ease-in-out";
        } else {
            effect.style.opacity = "0";
            effect.style.transform = "translateX(-20px)";
        }
    }
    scrollEffect()
}




const toggler = document.querySelectorAll(".faqBtn");

toggler.forEach(toggler => {
    toggler.addEventListener("click", () => {
        toggler.parentNode.classList.toggle("active");
    })
})

const hamburger = document.querySelector(".hamburgerLines")
const navBar = document.querySelector(".navBar")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navBar.classList.toggle("active")
})