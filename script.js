document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll effect upon clicking navigation links
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            targetElement.scrollIntoView({
                behavior: "smooth"
            });

            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Intersection Observer for fade-in effect
    const sections = document.querySelectorAll('.section');
    const observerOptions = {
        root: null,
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Responsive navigation toggle
    document.querySelector('.logo').addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('visible');
    });
});



