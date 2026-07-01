/* Nav - File 2 */
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

/* Reveal on scroll - File 2 */
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

/* Gallery buttons - File 3 */
(function() {
    const gallery = document.querySelector('#event-gallery .gallery-row');
    const btnLeft = document.querySelector('.gallery-btn-left');
    const btnRight = document.querySelector('.gallery-btn-right');
    if (!gallery || !btnLeft || !btnRight) return;
    btnLeft.addEventListener('click', () => gallery.scrollBy({ left: -436, behavior: 'smooth' }));
    btnRight.addEventListener('click', () => gallery.scrollBy({ left: 436, behavior: 'smooth' }));
})();

/* Team render - File 1 (only edit TEAM_DATA) */
const TEAM_DATA = [
    { name: 'Max Hesse',          role: 'President',                photo: 'img/team/Max.hesse.jpeg',          linkedin: 'https://www.linkedin.com/in/maxlhesse' },
    { name: 'Finley Sieben',      role: 'Vice President',           photo: 'img/team/Finley.sieben.jpeg',      linkedin: 'https://www.linkedin.com/in/finley-sieben-1a1026225/' },
    { name: 'Merle Kleuters',     role: 'Head of Brand & Strategy', photo: 'img/team/Merle.kleuters.jpeg',     linkedin: 'https://www.linkedin.com/in/merle-kleuters-a574573a4/' },
    { name: 'Jonathan Schindera', role: 'Head of External Relations',       photo: 'img/team/Jonathan.schindera.png',  linkedin: 'https://www.linkedin.com/in/jonathan-schindera/' }
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

/* Cycling word - File 1 */
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


// ─── JOIN & CONTACT CARDS ───────────────────────────────────────────────────
    // To show/hide a card, set its 'visible' value to true or false.
    // The layout adjusts automatically based on how many cards are visible.
    const JOIN_CARDS = [
      {
        id: 'community',
        visible: true,
        tag: 'Free',
        heading: 'Community Member',
        body: 'Join our WhatsApp community and stay in the loop - events, opportunities, and updates from MAIN.',
        perks: ['Access to WhatsApp group', 'Event announcements', 'No commitment required'],
        buttons: [
          { label: 'Join WhatsApp', href: 'https://chat.whatsapp.com/K6Es4IONAYrEkVpQLfkUw3', style: 'primary', target: '_blank' }
        ]
      },
      {
        id: 'passive',
        visible: true,
        tag: 'Member',
        heading: 'Passive Member',
        body: 'Officially part of MAIN. Get access to exclusive events and be listed as a registered member.',
        perks: ['Official membership', 'Exclusive event access', 'Direct engagement'],
        buttons: [
          { label: 'Become Passive Member', href: 'https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAXBOZiRUNDA3REZaRTJNM0RRTVBUWUMwN1hBTjlNMS4u&route=shorturl', style: 'primary', target: '_blank' }
        ]
      },
      {
        id: 'company',
        visible: true,
        tag: 'Partner',
        heading: 'Company Projects',
        body: 'Bring a real challenge to our community. Students build creative solutions - sometimes products that actually ship.',
        perks: ['Present a challenge', 'Access to student talent', 'Networking with UM students'],
        buttons: [
          { label: 'Get in Touch', href: 'mailto:info@mainmaastricht.com', style: 'primary', target: '_self' }
        ]
      },
      {
        id: 'active',
        visible: false,
        tag: 'Core Team',
        heading: 'Active Member',
        body: 'Shape the direction of MAIN. Help organise events, build partnerships, and grow the community.',
        perks: ['Core team access', 'Co-organise events', 'Lead initiatives'],
        buttons: [
          { label: 'Apply Now', href: 'https://tally.so/r/68rNAe', style: 'primary', target: '_blank' },
          { label: 'Follow for Updates', href: 'https://www.instagram.com/main.maastricht/', style: 'ghost', target: '_blank' }
        ]
      }
    ];

    function renderJoinCards() {
      const grid = document.getElementById('jcGrid');
      if (!grid) return;
      grid.innerHTML = '';
      JOIN_CARDS.filter(c => c.visible).forEach(card => {
        const perksHtml = card.perks.map(p => `<li>${p}</li>`).join('');
        const btnsHtml = card.buttons.map(b =>
          `<a href="${b.href}" class="jc-btn jc-btn-${b.style}" target="${b.target}" rel="noopener">${b.label}</a>`
        ).join('');
        const el = document.createElement('div');
        el.className = 'jc-card';
        el.innerHTML = `
          <div class="jc-card-head">
            <p class="jc-card-tag">${card.tag}</p>
            <h3 class="jc-card-title">${card.heading}</h3>
          </div>
          <div class="jc-card-body">
            <p>${card.body}</p>
            <ul>${perksHtml}</ul>
          </div>
          <div class="jc-card-footer">${btnsHtml}</div>`;
        grid.appendChild(el);
      });
    }

    renderJoinCards();

    // CONTACT FORM - submit handler
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name    = document.getElementById('cf-name').value.trim();
      const email   = document.getElementById('cf-email').value.trim();
      const message = document.getElementById('cf-message').value.trim();
      if (!name || !email || !message) return;
      // Replace the mailto href below with your backend endpoint or form service (e.g. Formspree)
      window.location.href = `mailto:info@mainmaastricht.com?subject=Website contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
      document.getElementById('cfSuccess').style.display = 'block';
      this.reset();
    });