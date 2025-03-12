document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('menu-button');
    const dropdownMenu = document.getElementById('dropdown-menu');
    const menuItems = dropdownMenu.querySelectorAll('li');

    let showTimeout, hideTimeout;

    menuButton.addEventListener('mouseenter', function () {
        clearTimeout(hideTimeout);
        showTimeout = setTimeout(function () {
            dropdownMenu.classList.add('visible');
            // Appliquer les animations séquentielles aux éléments du menu
            menuItems.forEach((item, index) => {
                item.style.animation = 'none';
                item.offsetHeight; // Déclenche un reflow pour réinitialiser l'animation
                item.style.animation = `fadeInUp 0.5s forwards ${index * 0.2}s`;
            });
        }, 200); // Délai avant de montrer le menu
    });

    menuButton.addEventListener('mouseleave', function () {
        clearTimeout(showTimeout);
        hideTimeout = setTimeout(function () {
            if (!dropdownMenu.matches(':hover')) {
                dropdownMenu.classList.remove('visible');
                // Retirer les animations des éléments du menu
                menuItems.forEach(item => {
                    item.style.animation = 'none';
                });
            }
        }, 500); // Délai avant de masquer le menu
    });

    dropdownMenu.addEventListener('mouseenter', function () {
        clearTimeout(hideTimeout);
    });

    dropdownMenu.addEventListener('mouseleave', function () {
        hideTimeout = setTimeout(function () {
            dropdownMenu.classList.remove('visible');
            // Retirer les animations des éléments du menu
            menuItems.forEach(item => {
                item.style.animation = 'none';
            });
        }, 500); // Délai avant de masquer le menu
    });

    // Ajout de la logique pour les éléments de type project
    const projects = document.querySelectorAll('.project');
    projects.forEach((project, index) => {
        project.style.opacity = '0'; // Initialement invisible
        project.style.animation = 'none';
        project.offsetHeight; // Déclenche un reflow pour réinitialiser l'animation
        project.style.animation = `fadeInLeft 0.5s forwards ${index * 0.2}s`;
    });
});