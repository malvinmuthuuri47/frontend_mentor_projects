const themeButton = document.getElementById('themeButton');
const themeIcon = document.getElementById('themeIcon');

// check and apply the saved theme preference
document.addEventListener('DomContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});

themeButton.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
});

function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.src = './images/icon-sun.svg';
        themeIcon.alt = 'Sun Icon';
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.src = './images/icon-moon.svg';
        themeIcon.alt = 'Moon Icon';
    }

    // save the user's preference
    localStorage.setItem('theme', theme);
}