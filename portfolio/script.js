// Add smooth scrolling for navigation links with header offset
document.querySelectorAll('nav a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;
    e.preventDefault();
    // compute header height to offset the scroll so the section isn't hidden under fixed header
    const header = document.querySelector("header");
    const headerHeight = header
      ? Math.ceil(header.getBoundingClientRect().height)
      : 0;
    const offset = 8; // small gap below header
    const top =
      window.pageYOffset +
      target.getBoundingClientRect().top -
      headerHeight -
      offset;
    window.scrollTo({ top, behavior: "smooth" });
  });
});

// Handle contact form submission with inline feedback and validation
const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    // Simple validation
    if (name.length < 2) {
      feedback.textContent = "Please enter your name (at least 2 characters).";
      feedback.className = "form-feedback error";
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      feedback.textContent = "Please enter a valid email address.";
      feedback.className = "form-feedback error";
      return;
    }
    if (message.length < 10) {
      feedback.textContent = "Message should be at least 10 characters.";
      feedback.className = "form-feedback error";
      return;
    }
    feedback.textContent = "Thank you for your message! I will get back to you soon.";
    feedback.className = "form-feedback success";
    contactForm.reset();
  });
}

// Add some sample projects (you can modify these with your actual projects)
const projects = [
  {
    title: "Space Galactica",
    description:
      "A React-based space tourism website showcasing destinations and mission details.",
    technologies: ["React", "CSS Modules", "Vite"],
    image: "https://source.unsplash.com/400x200/?space,galaxy",
  },
  {
    title: "HYF Bay",
    description:
      "An e-commerce platform built during the HackYourFuture course.",
    technologies: ["JavaScript", "HTML", "CSS"],
    image: "https://source.unsplash.com/400x200/?ecommerce,shop",
  },
];

// Function to create project cards
function createProjectCards() {
  const projectGrid = document.querySelector(".project-grid");
  if (!projectGrid) return;

  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title} project image" style="width:100%;height:auto;border-radius:8px;margin-bottom:1rem;object-fit:cover;max-height:180px;" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="technologies">
        ${project.technologies.map((tech) => `<span>${tech}</span>`).join("")}
      </div>
    `;
    projectGrid.appendChild(card);
  });
}

// Call the function when the DOM is loaded
document.addEventListener("DOMContentLoaded", createProjectCards);

// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navOverlay = document.getElementById("nav-overlay");
const navClose = document.getElementById("nav-close");
const mobileNavLinks = document.querySelectorAll(".mobile-nav a");

function openNav() {
  if (!navOverlay) return;
  navOverlay.style.display = "flex";
  navOverlay.setAttribute("aria-hidden", "false");
  navToggle.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
  const firstLink = document.querySelector(".mobile-nav a");
  if (firstLink) firstLink.focus();
}
function closeNav() {
  if (!navOverlay) return;
  navOverlay.style.display = "none";
  navOverlay.setAttribute("aria-hidden", "true");
  navToggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
  if (navToggle) navToggle.focus();
}

navToggle?.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  if (expanded) closeNav();
  else openNav();
});
navClose?.addEventListener("click", closeNav);

// close when clicking on overlay outside panel
navOverlay?.addEventListener("click", (e) => {
  if (e.target === navOverlay) closeNav();
});

// close on Escape
document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    navOverlay &&
    navOverlay.getAttribute("aria-hidden") === "false"
  ) {
    closeNav();
  }
});

// close when a mobile nav link is clicked
mobileNavLinks.forEach((a) => {
  a.addEventListener("click", () => {
    setTimeout(closeNav, 50);
  });
});
