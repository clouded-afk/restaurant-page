function renderHome() {
    const container = document.getElementById("content");
    const content = document.createElement("div")
    content.classList.add("home-content")
    
    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = "Delicious Korean cuisine straight from the home to your belly!";
    content.appendChild(headline);

    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = "If you are looking for authentic Korean BBQ, you have come to the right place! We take pride in our family recipes that have been passed down through multiple generations. Just remember, theres nothing quite like a made from scratch, homecooked meal!"
    content.appendChild(description)

    container.appendChild(content)
}

export {
    renderHome
}