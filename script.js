// ---- NAV: add scrolled class ----
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ---- SCROLL REVEAL ----
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ---- SMOOTH NAV SCROLL ----
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
// Typing animation
const tagEl = document.querySelector('.hero-tag');
const tagText = '✦ Welcome to my portfolio';

let i = 0;

function typeEffect() {
    if (i < tagText.length) {
        tagEl.textContent += tagText[i++];
        setTimeout(typeEffect, 55);
    } else {
        setTimeout(() => {
            tagEl.textContent = '';
            i = 0;
            typeEffect(); // restart
        }, 1500); // pause before restart
    }
}

setTimeout(typeEffect, 400);