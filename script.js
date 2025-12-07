// Mobile nav toggle
const toggleBtn = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (toggleBtn && navLinks) {
toggleBtn.addEventListener("click", () => {
navLinks.classList.toggle("open");
});

navLinks.addEventListener("click", (e) => {
if (e.target.tagName === "A") {
navLinks.classList.remove("open");
}
});
}

// Dynamic year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
yearSpan.textContent = new Date().getFullYear();
}