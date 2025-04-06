document.addEventListener('DOMContentLoaded', () => {

    console.log("Codex Vitae JS Initialized");

    // --- Navigation Active State (Basic Example) ---
    // This could be more sophisticated, checking the actual path
    const currentPage = window.location.pathname.split("/").pop() || 'index.html';
    const navLinks = document.querySelectorAll('header nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });


    // --- Narrative Page Scroll Reveal & Background Change ---
    const narrativeStages = document.querySelectorAll('.narrative-stage');

    if (narrativeStages.length > 0) {
        const observerOptions = {
            root: null, // Use the viewport
            rootMargin: '0px',
            threshold: 0.4 // Trigger when 40% of the element is visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add 'visible' class for fade-in effect
                    entry.target.classList.add('visible');

                    // Optional: Change body background based on the visible section's ID
                    // Find the computed background color of the stage and apply it to the body
                    // let stageBgColor = getComputedStyle(entry.target).backgroundColor;
                    // document.body.style.backgroundColor = stageBgColor;
                    // Note: Direct body background change can be jarring.
                    // Consider animating transitions or using section backgrounds only.

                } else {
                     // Optional: Remove class if you want elements to fade out when scrolled away
                     // entry.target.classList.remove('visible');
                }
            });
        }, observerOptions);

        narrativeStages.forEach(stage => {
            observer.observe(stage);
        });
    }

    // --- Add other general effects here ---
    // e.g., Smooth scrolling for anchor links if needed

}); // End DOMContentLoaded