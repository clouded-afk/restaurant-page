import kimchiIcon from './assets/kimchi.jpg';
import cucKimchiIcon from './assets/cucumber-kimchi.jpeg';
import radKimchiIcon from './assets/raddish-kimchi.jpeg';
import beanSproutIcon from './assets/bean-sprouts.jpeg';
import spinachIcon from './assets/spinach.jpeg';
import fishCakeIcon from './assets/fishcake.jpeg';
import riceCakeIcon from './assets/ricecake.jpeg';

import brisketIcon from './assets/brisket.jpg';
import bulgogiIcon from './assets/bulgogi.jpg';
import galbiIcon from './assets/galbi.jpg';
import porkbellyIcon from './assets/porkbelly.jpeg';
import gochuPorkBellyIcon from './assets/gochujangporkbelly.jpeg';
import chickenIcon from './assets/spicychicken.jpg';
import shrimpIcon from './assets/shrimp.jpg';


function renderMenu() {
    const container = document.getElementById("content");

    const menuContent = document.createElement("div");
    menuContent.classList.add("menu-content");

    function createSideMenu() {
        const sidesMenu = document.createElement("div");
        sidesMenu.classList.add("sides-menu");
        const sideHeader = document.createElement("h2");
        sideHeader.textContent = "Banchan/Sides";
        sidesMenu.appendChild(sideHeader);

        const sides = ["Kimchi", "Cucumber Kimchi", "Raddish Kimchi", "Bean Sprouts", "Spinach", "Fish Cake", "Spicy Ricecake"];

        const sideImages = [kimchiIcon, cucKimchiIcon, radKimchiIcon, beanSproutIcon, spinachIcon, fishCakeIcon, riceCakeIcon];

        const sideInfo = ["Nappa Cabbage", "Cucumber", "Daikon Raddish", "Soy Bean Sprouts", "Spinach", "Fish Cake", "Rice cake"];


        sides.forEach((side, index) => {
            const sideContainer = document.createElement("div");
            sideContainer.classList.add("side-container");
            const sideName = document.createElement("h3");
            sideName.textContent = `${side}`;

            const divLine = document.createElement("div");
            divLine.classList.add("menu-line");

            const sideImage = document.createElement("img");
            sideImage.classList.add("food-image");
            sideImage.src = sideImages[index];

            const foodInfo = document.createElement("div");
            foodInfo.classList.add("info");
            foodInfo.textContent = `Main Ingredient: ${sideInfo[index]}`;

            const otherFoodInfo = document.createElement("div");
            otherFoodInfo.classList.add("info");
            otherFoodInfo.textContent = "Other Ingredients: It's a secret!";

            const foodPrice = document.createElement("div");
            foodPrice.classList.add("info");
            foodPrice.textContent = "Single: 3.99 | Family: 8.99";

            sideContainer.appendChild(sideName);
            sideContainer.appendChild(divLine);
            sideContainer.appendChild(sideImage);
            sideContainer.appendChild(foodInfo);
            sideContainer.appendChild(otherFoodInfo);
            sideContainer.appendChild(foodPrice);

            sidesMenu.appendChild(sideContainer);
        });


        return sidesMenu;
    };

    function createMeatMenu() {
        const meatMenu = document.createElement("div");
        meatMenu.classList.add("meat-menu");
        const meatHeader = document.createElement("h2");
        meatHeader.textContent = "Protein Selection";
        meatMenu.appendChild(meatHeader);

        const meats = ["Brisket", "Bulgogi", "Galbi", "Fresh Pork Belly", "Gochujang Pork Belly", "Spicy Chicken", "Shrimp"];

        const meatImages = [brisketIcon, bulgogiIcon, galbiIcon, porkbellyIcon, gochuPorkBellyIcon, chickenIcon, shrimpIcon];

        const meatMarinades = ["Unmarinated", "Sweet and Savory", "Savory", "Unmarinated", "Gochujang", "Spicy", "Honey Garlic"];

        const meatPrices = ["Single: 7.99 | Family: 12.99", "Single: 7.99 | Family: 12.99", "Single: 9.99 | Family: 17.99", "Single: 6.99 | Family: 12.99",
        "Single: 7.99 | Family: 14.99", "Single: 6.99 | Family: 12.99", "Single: 7.99 | Family: 14.99"];

        meats.forEach((meat, index) => {
            const meatContainer = document.createElement("div");
            meatContainer.classList.add("meat-container");
            const meatName = document.createElement("h3");
            meatName.textContent = `${meat}`;

            const divLine = document.createElement("div");
            divLine.classList.add("menu-line");

            const meatImage = document.createElement("img");
            meatImage.classList.add("food-image");
            meatImage.src = meatImages[index];

            const marinade = document.createElement("div");
            marinade.classList.add("info");
            marinade.textContent = `Marinade: ${meatMarinades[index]}`;

            const marinadeInfo = document.createElement("div");
            marinadeInfo.classList.add("info");
            marinadeInfo.textContent = "Marinade Ingredients: Top Secret!";

            const meatPrice = document.createElement("div");
            meatPrice.classList.add("info");
            meatPrice.textContent = meatPrices[index];

            meatContainer.appendChild(meatName);
            meatContainer.appendChild(divLine);
            meatContainer.appendChild(meatImage);
            meatContainer.appendChild(marinade);
            meatContainer.appendChild(marinadeInfo);
            meatContainer.appendChild(meatPrice);

            meatMenu.appendChild(meatContainer);
        });

        return meatMenu;
    };

    menuContent.appendChild(createSideMenu());
    menuContent.appendChild(createMeatMenu());

    container.appendChild(menuContent);
}

export {
    renderMenu
}