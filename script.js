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
    window.location.href = 'Hemanth_Bysani_01.pdf'; // Replace with actual path
});

// Initialize AOS animations
AOS.init();

// Preloader greetings animation
window.addEventListener('DOMContentLoaded', function() {
    const greetings = document.querySelectorAll('#preloader-overlay .greeting');
    let idx = 0;
    function showGreeting(i) {
        greetings.forEach((el, j) => {
            el.classList.toggle('active', i === j);
        });
    }
    showGreeting(idx);
    let interval = setInterval(() => {
        idx++;
        if (idx < greetings.length) {
            showGreeting(idx);
        } else {
            clearInterval(interval);
            // Hide overlay after last greeting
            setTimeout(() => {
                document.getElementById('preloader-overlay').classList.add('hide');
                // Show scroll down button after overlay is gone
                setTimeout(() => {
                    const overlay = document.getElementById('preloader-overlay');
                    if (overlay) overlay.remove();
                    // Show scroll down button
                    const scrollBtn = document.getElementById('scroll-down-btn');
                    if (scrollBtn) scrollBtn.style.display = 'flex';
                }, 400);
            }, 400);
        }
    }, 400); // 0.4s per greeting
});

// Scroll Down Button functionality
window.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.getElementById('scroll-down-btn');
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function() {
            // Scroll to the first section after hero
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});
