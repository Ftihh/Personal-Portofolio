const themeToggle = document.querySelector('.theme-toggle');
const icon = themeToggle.querySelector('i');



const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'light') {
        //Dark
        document.documentElement.setAttribute('data-theme', 'dark');
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        //Light
        document.documentElement.setAttribute('data-theme', 'light');
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});
