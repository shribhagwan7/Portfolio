const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.remove('bg-white', 'bg-opacity-50', 'shadow-sm', 'dark:border', 'dark:hover-white/50', 'dark:bg-transparent');
    } else {
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLinks.classList.add('bg-white', 'bg-opacity-50', 'shadow-sm', 'dark:border', 'dark:hover-white/50', 'dark:bg-transparent');
    }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark')
    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}

const roles = ["Software Developer", "MERN Developer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const target = document.getElementById("typewriter");

function typeWriterEffect() {
    const currentRole = roles[roleIndex];
    
    // Update text
    target.textContent = isDeleting
        ? currentRole.substring(0, charIndex--)
        : currentRole.substring(0, charIndex++);

    // Speed config
    let delay = isDeleting ? 100 : 200;

    // Word completed
    if (!isDeleting && charIndex > currentRole.length) {
        isDeleting = true;
        delay = 2000; // pause at full word
    }

    // Word deleted
    if (isDeleting && charIndex < 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0; // reset charIndex
        delay = 1000; // pause before next word
    }

    setTimeout(typeWriterEffect, delay);
}

document.addEventListener("DOMContentLoaded", typeWriterEffect);

