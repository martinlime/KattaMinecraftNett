function Clearpicture(img) {
    var center = document.getElementById("clearImageText");
    if (center && img) {
        if (img.style.opacity === "0.3") {
            img.style.opacity = 1;
            document.getElementById("showText").remove();
        } else {
            img.style.opacity = 0.3;
            var P = document.createElement("P");
            P.innerHTML = "TEst";
            P.id = "showText";
            P.style = "margin-top: -225px";
            center.appendChild(P);
        }
    }
}