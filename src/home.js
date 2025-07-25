export default function loadHome() {
    const container = document.createElement("div");
    container.classList.add("home");

    const heading = document.createElement("h1");
    heading.textContent = "";
    container.appendChild(heading)

    const homeBox = document.createElement("div");
    homeBox.classList.add("homeBox");
    container.appendChild(homeBox);

    const homeBoxHeader = document.createElement("div");
    homeBoxHeader.classList.add("homeBoxHeader");
    homeBoxHeader.textContent = "Welcome";
    homeBox.appendChild(homeBoxHeader);

    const homeBoxContent = document.createElement("p");
    homeBoxContent.classList.add("homeBoxContent");
    homeBoxContent.textContent = "Inspired by the soul of Porsche, our kitchen blends speed with sophistication. Each dish is engineered for balance, every flavor tuned for the perfect drive. Taste. Traction. Torque.";
    homeBox.appendChild(homeBoxContent);

    return container;

}