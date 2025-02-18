const contactMe = document.getElementById("contact-me");
const contactGlow = document.getElementById("contact-glow");

contactMe.addEventListener("mouseover", change);
contactMe.addEventListener("mouseout", changeTwo);

function change() {
  contactGlow.style.backgroundColor = "#057796";
  contactGlow.style.borderRadius = "40%";
}

function changeTwo() {
  contactGlow.style.backgroundColor = "#004b60";
}
