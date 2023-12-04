let producten = ["ps4", "xbox", "pc"];
let winkelmand = document.getElementById("winkelmand");
let aantalProducten = 0;
for (let i = 0; i < producten.length; i++) {
    aantalProducten++;
    let nieuwProduct = document.createElement("p");
    nieuwProduct.textContent = producten[i];
    winkelmand.appendChild(nieuwProduct);
}
winkelmand.innerHTML = "Er zitten " + aantalProducten + " producten in uw winkelmand ." + winkelmand.innerHTML;
