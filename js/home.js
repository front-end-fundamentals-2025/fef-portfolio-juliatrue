const contactMe = document.getElementById("contact-me");
const contactGlow = document.getElementById("contact-glow");

contactMe.addEventListener("mouseover", change);
contactMe.addEventListener("mouseout", changeTwo);

function change() {
  contactGlow.style.textShadow = "2px 0px 8px #FFFFFF";
}

function changeTwo() {
  contactGlow.style.textShadow = "none";
}
