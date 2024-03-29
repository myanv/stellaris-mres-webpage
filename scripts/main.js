let centralButton = document.getElementById("stnull");
let outerRing = document.getElementById("outer-rings");
let clicked = true;
let highlightsBar = document.getElementById("highlights-bar");
let loginButtons = document.getElementsByClassName("login-buttons");
let stellarisBanner = document.getElementById("stellaris");

centralButton.addEventListener("click", checkClick);

function checkClick() {
    if (clicked) {
        centralButton.style.fill = "#436c7e";
        outerRing.style.opacity = 0.5;
        clicked = false;

        highlightsBar.style.opacity = 1;
        highlightsBar.style.display = "inline-flex";
        highlightsBar.style.animation = "slide-in 0.5s ease-in-out";
        stellarisBanner.style.display = "none";
    } else {
        centralButton.style.fill = "#82c6e6";
        outerRing.style.opacity = 1;
        clicked = true;
        highlightsBar.style.display = "none";
        stellarisBanner.style.display = "block";
        stellarisBanner.style.animation = "appear 0.5s ease-in";
    }
};