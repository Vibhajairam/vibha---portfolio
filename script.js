// Select all navigation links
const navLinks = document.querySelectorAll(".nav-link");

// Select the mobile navbar
const navbarMenu = document.querySelector(".navbar-collapse");

// Close mobile menu after clicking a link
navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbarMenu.classList.contains("show")) {

            const menu =
                new bootstrap.Collapse(navbarMenu);

            menu.hide();
        }

    });

});