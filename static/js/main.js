// Dark mode functionality
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const html = document.documentElement;
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true' || 
        (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    }

    // Toggle dark mode
    darkModeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        localStorage.setItem('darkMode', html.classList.contains('dark'));
    });

    // Listen for system color scheme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('darkMode')) {
            html.classList.toggle('dark', e.matches);
        }
    });
}

// Initialize ScrollReveal
ScrollReveal().reveal('.container > div', {
    delay: 200,
    distance: '20px',
    duration: 800,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 100,
    opacity: 0,
    origin: 'bottom',
    scale: 1
});

// Mobile menu functionality
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuLinks = mobileMenu.getElementsByTagName('a');

function toggleMobileMenu() {
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('overflow-hidden');
}

mobileMenuButton.addEventListener('click', toggleMobileMenu);
mobileMenuClose.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking a link
Array.from(mobileMenuLinks).forEach(link => {
    link.addEventListener('click', toggleMobileMenu);
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('active') && 
        !mobileMenu.contains(e.target) && 
        !mobileMenuButton.contains(e.target)) {
        toggleMobileMenu();
    }
});

// Initialize dark mode
document.addEventListener('DOMContentLoaded', initDarkMode); 