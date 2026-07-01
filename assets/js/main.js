/**
 * Main Dynamic UI Interactions Node - Model Polytechnic College
 */

document.addEventListener('DOMContentLoaded', () => {
    setupNavigationInteraction();
    setupScrollEffects();
});

/**
 * Handle Responsive Drawer Displays for Mobile Clients
 */
function setupNavigationInteraction() {
    const menuToggleBtn = document.getElementById('menu-toggle');
    const mobileMenuDrawer = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (menuToggleBtn && mobileMenuDrawer) {
        menuToggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenuDrawer.classList.toggle('hidden');
            
            // Toggle hamburger icon appearance smoothly
            if (mobileMenuDrawer.classList.contains('hidden')) {
                menuIcon.className = "fa-solid fa-bars text-xl transition-transform";
            } else {
                menuIcon.className = "fa-solid fa-xmark text-xl transition-transform rotate-90";
            }
        });

        // Close menu automatically if viewport expands past breakpoint
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                mobileMenuDrawer.classList.add('hidden');
                menuIcon.className = "fa-solid fa-bars text-xl";
            }
        });
    }
}

/**
 * Adjust header structural styling depending on window scrolling benchmarks
 */
function setupScrollEffects() {
    const activeNavbar = document.getElementById('navbar');
    
    if (activeNavbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                activeNavbar.classList.add('shadow-md', 'bg-white/95');
                activeNavbar.classList.remove('bg-white/80');
            } else {
                activeNavbar.classList.remove('shadow-md', 'bg-white/95');
                activeNavbar.classList.add('bg-white/80');
            }
        });
    }
}

