document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const dropdown = document.querySelector('.dropdown');

    // Toggle dropdown visibility when "Menu" is clicked
    menuToggle.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link action
        dropdown.classList.toggle('show-dropdown'); // Toggle dropdown visibility
    });

    // Hide the dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.classList.remove('show-dropdown'); // Hide dropdown if clicked outside
        }
    });
});
