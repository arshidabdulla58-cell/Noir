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