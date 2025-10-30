// Add smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Handle contact form submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Add some sample projects (you can modify these with your actual projects)
const projects = [
    {
        title: "Space Galactica",
        description: "A React-based space tourism website showcasing destinations and mission details.",
        technologies: ["React", "CSS Modules", "Vite"],
        image: "project1.jpg"
    },
    {
        title: "HYF Bay",
        description: "An e-commerce platform built during the HackYourFuture course.",
        technologies: ["JavaScript", "HTML", "CSS"],
        image: "project2.jpg"
    }
];

// Function to create project cards
function createProjectCards() {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) return;

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="technologies">
                ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
            </div>
        `;
        projectGrid.appendChild(card);
    });
}

// Call the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', createProjectCards);