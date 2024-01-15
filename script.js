document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('download-resume').addEventListener('click', function() {
    window.location.href = 'path/to/Hemanth_Bysani_Resume.pdf'; // Replace with the actual path to the PDF file
});
