import './style.css'
import './styles.css'
import 'normalize.css'

let loader = document.querySelector(".loading");
let body = document.querySelector("body");
let reviews = document.querySelector(".reviews");
let reviewsModal = document.querySelector(".review--hero");
let reviewsClose = document.querySelector(".fa-window-close");
let screenwidth = window.innerWidth;
console.log(screenwidth);

reviews.addEventListener('click', function () {
    reviewsModal.style.opacity = "1";
    reviewsModal.style.pointerEvents = "all";
})

reviewsClose.addEventListener("click", () => {
    reviewsModal.style.opacity = "0";
    reviewsModal.style.pointerEvents = "none";
})



window.addEventListener('load', () => {
    setTimeout(function () {
        loader.style.opacity = "0";
        // body.classList.add = "overflow--scroll";


        if (screenwidth < 800) {
            body.style.overflowY = "hidden";
        }
        else
            body.style.overflowY = "scroll";
    }, 5000)
});

