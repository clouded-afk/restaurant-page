function renderMenu() {
    const container = document.getElementById("content");

    const content = document.createElement("div")
    content.classList.add("menu-content")

    const sidesMenu = document.createElement("div")
    sidesMenu.classList.add("sides-menu")
    const sideHeader = document.createElement("h2")
    sideHeader.textContent = "Bon-Chon"
    sidesMenu.appendChild(sideHeader)

    const meatMenu = document.createElement("div")
    meatMenu.classList.add("meat-menu")
    const meatHeader = document.createElement("h2")
    meatHeader.textContent = "Meat Selection"
    meatMenu.appendChild(meatHeader)

    content.appendChild(sidesMenu)
    content.appendChild(meatMenu)

    container.appendChild(content)
}

export {
    renderMenu
}