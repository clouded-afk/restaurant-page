import './style.css';
import Icon from './assets/github-mark.png'
import { renderHome } from './home';
import { renderAbout } from './about';
import { renderMenu } from './menu';

function renderHeader() {
    const header = document.querySelector("header");

    const restInfo = document.createElement("div");
    restInfo.classList.add("restaurant-info");

    const restName = document.createElement("div");
    restName.classList.add("restaurant-name");
    restName.textContent = "Mama C's Korean Kitchen";
    restInfo.appendChild(restName);

    header.appendChild(restInfo);

    return header;
}

function renderFooterIcon() {
    const footer = document.querySelector("footer")
    const githubIcon = new Image();
    githubIcon.classList.add("github-icon")
    githubIcon.src = Icon
    footer.appendChild(githubIcon)

    return footer;
}

function clearContent() {
    const content = document.getElementById("content")
    content.innerHTML = ""

    return content;
}

renderHeader();
renderHome();
renderFooterIcon();

const homeBtn = document.querySelector(".home")
const menuBtn = document.querySelector(".menu")
const aboutBtn = document.querySelector(".about")

homeBtn.addEventListener("click", () => {
    clearContent();
    renderHome();
    homeBtn.classList.add("active")
    menuBtn.removeAttribute("class", "active")
    aboutBtn.removeAttribute("class", "active")
})

menuBtn.addEventListener("click", () => {
    clearContent()
    renderMenu()
    menuBtn.classList.add("active")
    aboutBtn.removeAttribute("class", "active")
    homeBtn.removeAttribute("class", "active")
})

aboutBtn.addEventListener("click", () => {
    renderAbout()
    aboutBtn.classList.add("active")
    homeBtn.removeAttribute("class", "active")
    menuBtn.removeAttribute("class", "active")
})
