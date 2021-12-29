import './style.css'
import './styles.css'
import 'normalize.css'

let loader = document.querySelector(".loading");
let mobileMessage = document.querySelector(".mobile-message");
let loaderBar = document.querySelector(".loading--bar"); 
let body = document.querySelector("body");
let screenWidth = window.innerWidth;
// console.log(screenWidth);
// console.log(loader);
// console.log(mobileMessage,loaderBar);


window.addEventListener('load', () => {
    setTimeout(function () {
        loader.style.opacity = "0";
        body.style.overflowY = "scroll";
    },5000)
});

(function vinay()
{
    if (screenWidth < 900)
    {
        loader.style.opacity = 1;
        mobileMessage.style.opacity = 1;
        loaderBar.style.opacity = 0;
    }
} ());