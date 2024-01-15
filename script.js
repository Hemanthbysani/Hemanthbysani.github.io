// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Resume download functionality
document.getElementById('download-resume').addEventListener('click', function() {
    window.location.href = 'path/to/your-resume.pdf'; // Replace with actual path
});

// Initialize AOS animations
AOS.init();
