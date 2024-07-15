import Icon from './assets/github-mark.png'

function renderFooterIcon() {
    const footer = document.querySelector("footer")
    const githubIcon = new Image();
    githubIcon.classList.add("github-icon")
    githubIcon.src = Icon
    footer.appendChild(githubIcon)
}

export {
    renderFooterIcon
}