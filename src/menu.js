function renderMenu() {
    const container = document.getElementById("content");

    const menuContent = document.createElement("div")
    menuContent.classList.add("menu-content")

    function createSideMenu() {
        const sidesMenu = document.createElement("div")
        sidesMenu.classList.add("sides-menu")
        const sideHeader = document.createElement("h2")
        sideHeader.textContent = "Bon-Chon"
        sidesMenu.appendChild(sideHeader)

        const sides = ["Kimchi", "Cucumber Kimchi", "Raddish Kimchi", "Bean Sprouts", "Spinach", "Water Crest", "Fish Cake", "Spicy Ricecake"]

        sides.forEach((side) => {
            const sideContainer = document.createElement("div")
            sideContainer.classList.add("side-container")
            const sideName = document.createElement("h3")
            sideName.textContent = `${side}`

            const divLine = document.createElement("div")
            divLine.classList.add("line")

            sideContainer.appendChild(sideName)
            sideContainer.appendChild(divLine)
            sidesMenu.append(sideContainer)
        })

        return sidesMenu
    }

    function createMeatMenu() {
        const meatMenu = document.createElement("div")
        meatMenu.classList.add("meat-menu")
        const meatHeader = document.createElement("h2")
        meatHeader.textContent = "Meat Selection"
        meatMenu.appendChild(meatHeader)

        const meats = ["Brisket", "Bulgogi", "Galbi", "Marinated Sirloin", "Fresh Pork Belly", "Gochjang Pork Belly", "Marinated Spicy Chicken", "Shrimp"]

        meats.forEach((meat) => {
            const meatContainer = document.createElement("div")
            meatContainer.classList.add("meat-container")
            const meatName = document.createElement("h3")
            meatName.textContent = `${meat}`

            const divLine = document.createElement("div")
            divLine.classList.add("line")

            meatContainer.appendChild(meatName)
            meatContainer.appendChild(divLine)
            meatMenu.appendChild(meatContainer)
        })

        return meatMenu
    }

    menuContent.appendChild(createSideMenu())
    menuContent.appendChild(createMeatMenu())

    container.appendChild(menuContent)
}

export {
    renderMenu
}