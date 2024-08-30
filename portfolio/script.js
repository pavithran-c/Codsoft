// JavaScript for Auto-Hiding Navbar
document.addEventListener('DOMContentLoaded', () => {
    const navBar = document.querySelector('.nav-bar');
    let navBarTimeout;

    function showNavBar() {
        clearTimeout(navBarTimeout);
        navBar.style.top = '0'; // Show the nav bar
    }

    function hideNavBar() {
        navBarTimeout = setTimeout(() => {
            navBar.style.top = '-60px'; // Hide the nav bar
        }, 3000); // Time before hiding (3 seconds)
    }

    // Show the nav bar when mouse enters the nav bar
    navBar.addEventListener('mouseover', showNavBar);

    // Hide the nav bar when mouse leaves the nav bar
    navBar.addEventListener('mouseout', hideNavBar);

    // Show the nav bar when the mouse enters the window
    document.addEventListener('mousemove', showNavBar);
});
