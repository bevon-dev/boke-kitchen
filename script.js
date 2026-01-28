
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelector(".nav__links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("is-open");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("is-open");
    }
  });
}

const chips = document.querySelectorAll(".chip");
const items = document.querySelectorAll(".gallery-item");

chips.forEach(chip => {
  chip.addEventListener("click", () => {
    const filter = chip.dataset.filter || "all";

    chips.forEach(c => c.classList.remove("chip--active"));
    chip.classList.add("chip--active");

    items.forEach(item => {
      const category = item.dataset.category;

      if (filter === "all" || category === filter) {
        item.classList.remove("is-hidden");
      } else {
        item.classList.add("is-hidden");
      }
    });
  });
});

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
