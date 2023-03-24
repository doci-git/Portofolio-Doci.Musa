//preloader
const preloader = document.querySelector(".preloader");
window.addEventListener("load", function () {
    preloader.classList.add("hidepreloader");
});

// Get all elements with class="nav-link"
let navLinks = document.getElementsByClassName("nav-btn1");

// Loop through the nav-links and add the active class
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active1");
        current[0].className = current[0].className.replace(" active1", "");
        this.className += " active1";
    });
}

//select section
let divs = ["section1", "section2", "section3", "section4"];
let visibleId = null;

function show(id) {
    if (visibleId !== id) {
        visibleId = id;
    }
    hide();
}

function hide() {
    let div, i, id;
    for (i = 0; i < divs.length; i++) {
        id = divs[i];
        div = document.getElementById(id);
        if (visibleId === id) {
            div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}

// image rotate
const imgContainer = document.querySelector(".image-container");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let x = 0;
let times;

prev.addEventListener("click", function () {
    x = x + 45;
    clearTimeout(times);
    updategalery();
});
next.addEventListener("click", function () {
    x = x - 45;
    clearTimeout(times);
    updategalery();
});

function updategalery() {
    imgContainer.style.transform = `perspective(1000px)rotateY(${x}deg)`;
    times = setTimeout(() => {
        x = x - 45;
        updategalery();
    }, 5000);
}
updategalery();
