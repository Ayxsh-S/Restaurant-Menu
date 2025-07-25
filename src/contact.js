export default function loadContact() {

    const container = document.createElement("div");
    container.classList.add("contact");

    const heading = document.createElement("h1");
    heading.textContent = "";
    container.appendChild(heading)

    const contactBox = document.createElement("div");
    contactBox.classList.add("contactBox");
    container.appendChild(contactBox);

    const contactBoxContent = document.createElement("div");
    contactBoxContent.classList.add("contactBoxContent");
    contactBoxContent.textContent = "@Ayxsh-S";
    contactBox.appendChild(contactBoxContent);

    return container;
}