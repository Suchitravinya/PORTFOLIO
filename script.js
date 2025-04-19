
  document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("navToggle");
    const toggleIcon = document.getElementById("toggleIcon");
    const navMenu = document.querySelector(".nav-menu");

    navToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");

      // Toggle between hamburger (☰) and close (✖)
      if (toggleIcon.innerHTML === "☰") {
        toggleIcon.innerHTML = "✖";
      } else {
        toggleIcon.innerHTML = "☰";
      }
    });

    // Smooth scroll + close menu on link click
    document.querySelectorAll(".nav-menu a").forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
          navMenu.classList.remove("active");
          toggleIcon.innerHTML = "☰"; // Reset to hamburger when closing
        }
      });
    });
  });

