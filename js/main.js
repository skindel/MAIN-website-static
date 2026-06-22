/* Nav — File 2 */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});
function closeMenu() {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
}

/* Reveal on scroll — File 2 */
const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
            obs.unobserve(e.target);
        }
    });
}, { threshold: 0.1 });
reveals.forEach(el => obs.observe(el));

/* Team render — File 1 (only edit TEAM_DATA) */
const TEAM_DATA = [
    { name: 'Max Hesse',          role: 'President',                photo: 'img/team/Max.hesse.jpeg',          linkedin: 'https://www.linkedin.com/in/maxlhesse' },
    { name: 'Finley Sieben',      role: 'Vice President',           photo: 'img/team/Finley.sieben.jpeg',      linkedin: 'https://www.linkedin.com/in/finley-sieben-1a1026225/' },
    { name: 'Merle Kleuters',     role: 'Head of Brand & Strategy', photo: 'img/team/Merle.kleuters.jpeg',     linkedin: 'https://www.linkedin.com/in/merle-kleuters-a574573a4/' },
    { name: 'Jonathan Schindera', role: 'Head of Operations',       photo: 'img/team/Jonathan.schindera.png',  linkedin: 'https://www.linkedin.com/in/jonathan-schindera/' }
];
(function() {
    const grid = document.getElementById('team-grid-js');
    if (!grid) return;
    TEAM_DATA.forEach(function(m) {
        const ini = m.name.split(' ').map(w => w[0]).join('');
        const c = document.createElement('div');
        c.className = 'tcard';
        c.innerHTML =
            '<a class="tcard-link" href="' + m.linkedin + '" target="_blank" rel="noopener noreferrer" aria-label="' + m.name + ' on LinkedIn">' +
                '<div class="tavatar">' +
                    '<img src="' + m.photo + '" alt="' + m.name + '" class="team-photo" onerror="this.style.display=\'none\'">' +
                    '<span class="initials">' + ini + '</span>' +
                '</div>' +
                '<p class="tname">' + m.name + '</p>' +
                '<p class="trole">' + m.role + '</p>' +
            '</a>';
        grid.appendChild(c);
    });
})();

/* Cycling word — File 1 */
(function() {
    const el = document.getElementById('cycleWord');
    if (!el) return;
    const words = ['builders.', 'thinkers.', 'makers.', 'all faculties.', 'the curious.'];
    let i = 0;
    setInterval(() => {
        el.classList.add('fading');
        setTimeout(() => {
            i = (i + 1) % words.length;
            el.textContent = words[i];
            el.classList.remove('fading');
        }, 300);
    }, 2200);
})();
