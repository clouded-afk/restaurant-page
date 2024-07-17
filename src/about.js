import picture from './assets/house.jpeg'

function renderAbout() {
    const container = document.getElementById("content");
    const aboutContent = document.createElement("div")
    aboutContent.classList.add("about-content")

    function createAbout() {
        const aboutInfo = document.createElement("div")
        aboutInfo.classList.add("about-info")

        const aboutHeader = document.createElement("div")
        aboutHeader.classList.add("about-header")
        aboutHeader.textContent = "About Us"
        aboutInfo.appendChild(aboutHeader)

        const divLine = document.createElement("div")
        divLine.classList.add("line")
        aboutInfo.appendChild(divLine)

        const aboutText = document.createElement("div")
        aboutText.classList.add("about-text")
        aboutText.textContent = "We are a family owned resturaunt running out of our home. Unfortunatley, due to our small size we are only able to do take-out orders. Due to these circumstances we hope we are able to accomodate your families needs by offering both single plates and family sized meals. Our recipes are our best kept secret since they have been passed down through the family for multiple generations. If you have any concerns about allergies or other dietary restrictions please do not hesitate to call so we can make the neccesary accomodations to be able to serve you!"
        aboutInfo.appendChild(aboutText)

        const contactContent = document.createElement("div")
        contactContent.classList.add("contact-content")

        const contactHeader = document.createElement("div")
        contactHeader.classList.add("contact-header")
        contactHeader.textContent = "Contact Us"
        contactContent.appendChild(contactHeader)

        const secondLine = document.createElement("div")
        secondLine.classList.add("line")
        contactContent.appendChild(secondLine)

        const contactInfo = document.createElement("div")
        contactInfo.classList.add("contact-info")


        const address = document.createElement("div")
        address.classList.add("address")
        address.textContent = "Address: 12345 My Mom's House Dr."
        contactInfo.appendChild(address)

        const phoneNumber = document.createElement("div")
        phoneNumber.classList.add("phone")
        phoneNumber.textContent = "Phone: (999)-999-9999"
        contactInfo.appendChild(phoneNumber)

        const email = document.createElement("div")
        email.classList.add("email")
        email.textContent = "E-Mail: mamackoreankitchen@mail.com"
        contactInfo.appendChild(email)

        const hoursOP = document.createElement("div")
        hoursOP.classList.add("hours")
        hoursOP.textContent = "Hours of Operation: M-F 10:00am - 6:00pm (Excluding Holidays)"
        contactInfo.appendChild(hoursOP)

        contactContent.appendChild(contactInfo)
        aboutInfo.appendChild(contactContent)

        return aboutInfo
    }

    function createImageSection() {
        const imageContent = document.createElement("div")
        imageContent.classList.add("image-content")


        const houseImage = new Image()
        houseImage.src = picture
        houseImage.classList.add("house-image")
        imageContent.appendChild(houseImage)

        return imageContent
    }

    function createFormSection() {
        const formContainer = document.createElement("div")
        formContainer.classList.add("form-container")

        const form = document.createElement("form")

        formContainer.append(form)

        const formHeader = document.createElement("div")
        formHeader.classList.add("form-header")
        formHeader.textContent = "Leave a review!"
        formContainer.appendChild(formHeader)

        const divLine = document.createElement("div")
        divLine.classList.add("line")
        formContainer.appendChild(divLine)

        const inputName = document.createElement("input")
        inputName.type = "text"
        inputName.name = "userName"
        inputName.placeholder = "Enter Name Here...."

        const inputEmail = document.createElement("input")
        inputEmail.type = "email"
        inputEmail.name = "userEmail"
        inputEmail.placeholder = "Enter E-mail Here....  (example@example.com)"

        const inputComment = document.createElement("textarea")
        inputComment.name = "userComment"
        inputComment.placeholder = "Enter Comments here.... (Character Limit: 500)"
        inputComment.maxLength = "500"

        form.appendChild(inputName)
        form.appendChild(inputEmail)
        form.appendChild(inputComment)

        formContainer.appendChild(form)

        return formContainer
    }

    aboutContent.appendChild(createAbout())
    aboutContent.appendChild(createImageSection())
    aboutContent.appendChild(createFormSection())

    container.appendChild(aboutContent)
}

export {
    renderAbout
}