function Clearpicture() {
    var img = document.getElementById("clearImage");
    if (img) {
        if (img.style.display === "block") {
            img.style.display = "none";
        } else {
            img.style.display = "block";
        }
    } else {
        alert("Not found");
    }
}