document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("navToggle");
  const menu = document.querySelector(".nav-menu");

  toggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });

  // Smooth scrolling + close menu on link click (mobile)
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        menu.classList.remove("active"); // close on click
      }
    });
  });
});
