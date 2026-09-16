document.addEventListener("DOMContentLoaded", () => {
  const reveal = document.querySelectorAll(".demo-card, .feature-item, .showcase-image, .showcase-copy");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, {threshold:.12});
    reveal.forEach(el => {
      el.classList.add("reveal");
      io.observe(el);
    });
  }
});