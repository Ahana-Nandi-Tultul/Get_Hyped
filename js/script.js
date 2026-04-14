const sections = document.querySelectorAll(".cards");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    const el = entry.target;

    if (entry.isIntersecting) {
      // when section enters viewport
      el.classList.add("show");
      el.classList.remove("fall");
    } 
    else {
      // when section leaves viewport (important for scroll up)
      el.classList.remove("show");

      // add fall effect only if scrolling down
      if (entry.boundingClientRect.top < 0) {
        el.classList.add("fall");
      }
    }
  });
}, {
  threshold: 0.5
});

sections.forEach(section => observer.observe(section));