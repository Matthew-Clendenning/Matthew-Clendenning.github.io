function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.className === "navbar") {
        navbar.className += " responsive";
    } else {
        navbar.className = "navbar";
    }
}

function updateLabel() {
    var selectBox = document.getElementById("contact");
    var selectedValue = selectBox.value;
    var label = document.getElementById("label");

    if (selectedValue === "email") {
        label.textContent = "Email:";
    } else if (selectedValue === "phone") {
        label.textContent = "Phone:";
    } else {
        label.textContent = "Email:"; // Default to email if no valid option is selected
    }
}