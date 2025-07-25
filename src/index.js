import "./style.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact.js";

const content = document.getElementById("content")

function clearPage() {
    content.innerHTML = "";
}

function setTab(tab) {
    clearPage();
    let page;
    switch (tab) {
        case "home":
            page = loadHome();
            break;
        case "menu":
            page = loadMenu();
            break;
        case "contact":
            page = loadContact();
            break;
    }
    if (page) content.appendChild(page);
}

setTab("home");
document.querySelectorAll(".tabs button").forEach(button => {
    button.addEventListener("click", () => {
        const tab = button.getAttribute("data-tab");
        setTab(tab);
    });
});
