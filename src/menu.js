import menuImageSrc1 from "./images/911R.png";
import menuImageSrc2 from "./images/918Spyder.png"
import menuImageSrc3 from "./images/CaymanGT4.jpg"
import menuImageSrc4 from "./images/GT3RS.png"

export default function loadMenu() {
    const container = document.createElement("div");
    container.classList.add("menu");

    const heading = document.createElement("h1");
    heading.textContent = "";
    container.appendChild(heading);

    const menuBox = document.createElement("div");
    menuBox.classList.add("menuBox");
    container.appendChild(menuBox);

    const menuBoxHeader = document.createElement("div");
    menuBoxHeader.classList.add("menuBoxHeader");
    menuBoxHeader.textContent = "This is our menu";
    menuBox.appendChild(menuBoxHeader);

    const menuImageBox = document.createElement("div");
    menuImageBox.classList.add("menuImageBox");
    menuBox.appendChild(menuImageBox);
   
    menuImageBox.appendChild(
        createMenuItem("911 R", menuImageSrc1, "A featherweight reinterpretation of classic flavors. Pure, analog excellence, finished with a 6-speed reduction glaze.")
    );

    menuImageBox.appendChild(
        createMenuItem("918 Spyder", menuImageSrc2, "A harmonious pairing of tradition and tech. Naturally aspirated V8 on an electric bed of torque — eco-luxury with a punch.")
    );

    menuImageBox.appendChild(
        createMenuItem("Cayman GT4", menuImageSrc3, "Mid-engine poise meets Nürburgring seasoning. A refined yet fierce culinary experience with apex-melting traction.")
    );

    menuImageBox.appendChild(
        createMenuItem("911 GT3 RS", menuImageSrc4, "Loud, raw, and unapologetically aggressive. Our spiciest item on the menu — not for the faint of palate.")
    );
   
    
    return container;
}

function createMenuItem(title, imageSrc, caption) {
    const item = document.createElement("div");
    item.classList.add("menuItem");

    const h2 = document.createElement("h2");
    h2.textContent = title;
    
    const img = document.createElement("img");
    img.src = imageSrc;
    img.alt = title;

    const desc = document.createElement("p");
    desc.textContent = caption;

    item.appendChild(h2);
    item.appendChild(img);
    item.appendChild(desc);

    return item;
}

// https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ramp.space%2Fen%2Fartikel-blog%2Fporsche-718-cayman-gt4-rs-ein-rennsport-sauger-am-rande-der-strassenve%2F&psig=AOvVaw17-HB1-s7vraEJeENps3OG&ust=1753542307458000&source=images&cd=vfe&opi=89978449&ved=0CBkQjhxqFwoTCLir76Wk2I4DFQAAAAAdAAAAABBM
// https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elferspot.com%2Fen%2Fcar%2Fporsche-918-spyder-2015-3005698%2F%3Fsrsltid%3DAfmBOopbEjuWukrRiNLl8lOZrjDczIazOuleFOZbPSPZHkf020CrfSzV&psig=AOvVaw3HYEl5GZWLYbblzWpcpJAG&ust=1753542424574000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCNCIzd2k2I4DFQAAAAAdAAAAABAW
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.carmagazine.co.uk%2Fcar-reviews%2Fporsche%2Fporsche-911-r-2016-review%2F&psig=AOvVaw1-pSLRmOtXfoIwZsBTqHbD&ust=1753542508118000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCPj09YOl2I4DFQAAAAAdAAAAABAE
//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.porsche.com%2Fuk%2Fmodels%2F911%2F911-gt3-rs%2F911-gt3-rs%2F&psig=AOvVaw3tbB2D-8qD1mtvsETbWva-&ust=1753542540899000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCKD-9Jil2I4DFQAAAAAdAAAAABAE