```javascript
// ===================================
// 1. UPDATE COPYRIGHT YEAR
// ===================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ===================================
// 2. MOBILE NAVIGATION
// ===================================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    // Open or close the mobile menu.
    menuBtn.addEventListener("click", function () {

        const isOpen = navLinks.classList.toggle("open");

        menuBtn.setAttribute("aria-expanded", String(isOpen));

        menuBtn.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

        menuBtn.textContent = isOpen ? "✕" : "☰";
    });


    // Close the menu after clicking a navigation link.
    const navigationLinks = navLinks.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation menu");

            menuBtn.textContent = "☰";
        });

    });


    // Close the menu when clicking outside it.
    document.addEventListener("click", function (event) {

        const clickedInsideMenu = navLinks.contains(event.target);
        const clickedMenuButton = menuBtn.contains(event.target);

        if (!clickedInsideMenu && !clickedMenuButton) {

            navLinks.classList.remove("open");

            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation menu");

            menuBtn.textContent = "☰";
        }

    });


    // Close the mobile menu when switching to desktop width.
    window.addEventListener("resize", function () {

        if (window.innerWidth > 780) {

            navLinks.classList.remove("open");

            menuBtn.setAttribute("aria-expanded", "false");
            menuBtn.setAttribute("aria-label", "Open navigation menu");

            menuBtn.textContent = "☰";
        }

    });

}


// ===================================
// 3. CONTACT FORM CONFIGURATION CHECK
// ===================================

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {

    contactForm.addEventListener("submit", function (event) {

        const formAction = contactForm.getAttribute("action");

        // Do not submit to the example placeholder.
        if (!formAction || formAction.includes("YOUR_FORM_ID")) {

            event.preventDefault();

            formStatus.textContent =
                "The contact form is not configured yet. Please contact me directly by email.";

            return;
        }

        // Allow the browser to submit the form normally
        // to the configured form service.
        formStatus.textContent = "Submitting your message...";

    });

}
```
