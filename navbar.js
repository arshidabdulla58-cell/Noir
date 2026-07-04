document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!menuBtn || !mobileMenu) {
        console.log("Navbar elements not found");
        return;
    }

    menuBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");
    });

});
const eventsBg = document.getElementById("eventsBg");

window.addEventListener("scroll", () => {
    if (!eventsBg) return;

    const rect = eventsBg.parentElement.getBoundingClientRect();
    const offset = -rect.top * 0.3;

    eventsBg.style.transform = `translateY(${offset}px)`;
});