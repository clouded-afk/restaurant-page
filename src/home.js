function renderHome() {
    const header = document.querySelector("header");
    const container = document.getElementById("content");
    
    const restInfo = document.createElement("div");
    restInfo.classList.add("restaurant-info");

    const restName = document.createElement("div");
    restName.classList.add("restaurant-name");
    restName.textContent = "Mama C's Korean Kitchen";
    restInfo.appendChild(restName);

    header.appendChild(restInfo);

    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = "Delicious Korean cuisine straight from the home to your belly!";
    container.appendChild(headline);

    const description = document.createElement("div");
    description.classList.add("description");
    description.textContent = "If you are looking for authentic Korean BBQ, you have come to the right place! We take pride in our family recipes that have been passed down through multiple generations. Just remember, theres nothing quite like a made from scratch, homecooked meal!"
    container.appendChild(description)
}

export {
    renderHome
}