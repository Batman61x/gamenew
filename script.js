// Animate skill bars on scroll
document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.querySelector(".skills");
  const bars = document.querySelectorAll(".bar");

  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      bars.forEach(bar => bar.style.width = bar.classList.contains('html-bar') ? '90%' :
                                      bar.classList.contains('css-bar') ? '80%' :
                                      bar.classList.contains('js-bar') ? '70%' : '0');
    }
  }, {
    threshold: 0.5
  });

  observer.observe(skillsSection);
});
