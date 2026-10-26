/* ==========================================================================
   main.js — language switch (EN/FR), expandable panels, reveal-on-scroll.
   No dependencies. Without JavaScript everything is shown expanded, in English.
   ========================================================================== */

(function () {
  'use strict';

  var I18N = {
    en: {
      'meta.title': 'Mouad Tounani — Software Development Student',
      'meta.description': 'Portfolio of Mouad Tounani, second-year BTS SIO student in software development based in Mâcon, France. Looking for an internship from 11 January to 12 February 2027.',

      'a11y.skip': 'Skip to content',
      'a11y.sections': 'Sections',
      'a11y.lang': 'Language',
      'a11y.profiles': 'Profiles',
      'a11y.tech': 'Technologies',

      'nav.projects': 'Projects',
      'nav.experience': 'Experience',
      'nav.skills': 'Skills',

      'hero.statusLabel': 'Open to an internship',
      'hero.statusDates': '11 Jan – 12 Feb 2027',
      'hero.role': 'Software development student — BTS SIO SLAM, 2nd year',
      'hero.lede': 'I build web and desktop applications backed by relational databases, with a focus on clean, secure code.',
      'hero.cv': 'Download CV',
      'hero.cvFile': 'CV_Mouad_TOUNANI_EN.pdf',
      'hero.email': 'Email me',
      'hero.location': 'Mâcon, France',

      'proj.title': 'Projects',
      'proj.done': 'Done',
      'proj.wip': 'In progress',
      'proj.code': 'View code on GitHub',
      'proj.private': 'Private repository — code available on request.',

      'proj.app.title': 'Cinema management app',
      'proj.app.short': 'Desktop back-office for a multiplex cinema',
      'proj.app.d1': 'Add, edit and delete films, genres and rooms (MDI WinForms interface).',
      'proj.app.d2': "Schedule screenings and review a day's programme.",
      'proj.app.d3': 'Export the daily schedule to PDF with iTextSharp.',
      'proj.app.d4': 'Parameterised ODBC queries and centralised connection settings.',

      'proj.web.title': 'Cinema website',
      'proj.web.short': 'Public site with search and seat booking',
      'proj.web.d1': 'Film pages and multi-criteria search (title, director, cast, audience, genre).',
      'proj.web.d2': 'Screening schedule by date and seat booking with a remaining-seats check.',
      'proj.web.d3': 'Admin area protected by HTTP authentication to add or remove screenings.',
      'proj.web.d4': 'PDO prepared statements and escaped output against SQL injection and XSS.',

      'proj.itsm.title': 'ITSM ticketing platform',
      'proj.itsm.short': 'IT support tool built during my internship',
      'proj.itsm.d1': 'Three spaces with their own dashboards: user, technician and administrator.',
      'proj.itsm.d2': 'Ticket life cycle from creation to closure, with messaging between user and technician.',
      'proj.itsm.d3': 'SLA tracking per priority: on time, at risk or overdue.',
      'proj.itsm.d4': 'Hashed passwords, CSRF tokens, role checks on every page and soft-deleted accounts.',

      'proj.hotel.title': 'BritHotel',
      'proj.hotel.short': 'Hotel management, team project in Scrum',
      'proj.hotel.d1': 'Back-office for hotel managers: hotel details, rooms, bookings and customers.',
      'proj.hotel.d2': 'One SQL Server database shared by every hotel of the chain.',
      'proj.hotel.d3': 'Built in a two-person Scrum team, with user stories and versioning on GitHub.',

      'exp.title': 'Experience',
      'exp.ocp.role': 'IT intern — web development',
      'exp.ocp.date': '2026 · 5 weeks',
      'exp.ocp.org': 'OCP Group — IT department, Khouribga (Morocco)',
      'exp.ocp.b1': 'Designed and built an ITSM ticketing web application on my own, in PHP and MySQL.',
      'exp.ocp.b2': 'Modelled the database after studying a real ITSM dataset.',
      'exp.ocp.b3': 'Took part in day-to-day IT support: user assistance, incidents, maintenance.',

      'edu.title': 'Education',
      'edu.bts.title': 'BTS SIO — Software development',
      'edu.bac.title': 'Baccalauréat STMG, with honours',
      'edu.geo.title': 'Technical high school — Surveying',
      'edu.geo.org': 'Italy · 2D/3D design',

      'skills.title': 'Skills',
      'proj.hint': 'Hover a project for details',
      'proj.hintTap': 'Tap a project for details',
      'a11y.filters': 'Skill categories',
      'sk.cat.prog': 'Programming',
      'sk.cat.web': 'Web',
      'sk.cat.db': 'Databases',
      'sk.cat.sec': 'Cybersecurity',
      'sk.cat.tools': 'Tools',
      'sk.cat.ai': 'AI tools',
      'sk.cat.cad': 'CAD & 3D',
      'sk.cat.lang': 'Languages',
      'sk.unit': 'Unit testing',
      'sk.ftp': 'FTP hosting',
      'sk.stored': 'Stored procedures',
      'sk.triggers': 'Triggers',
      'sk.gdpr': 'GDPR',
      'sk.sqli': 'SQL injection',
      'sk.hashing': 'Password hashing',
      'sk.encryption': 'Encryption',
      'sk.virt': 'Virtualisation',
      'sk.print': '3D printing',
      'sk.it': 'Italian',
      'sk.itLvl': 'Fluent (C1)',
      'sk.fr': 'French',
      'sk.frLvl': 'Upper-intermediate (B2)',
      'sk.en': 'English',
      'sk.enLvl': 'Upper-intermediate (B2)',
      'sk.ar': 'Arabic (Moroccan)',
      'sk.arLvl': 'Fluent (spoken)',

      'contact.title': 'Have an internship to offer?',
      'contact.body': 'Available from 11 January to 12 February 2027, in Mâcon and the surrounding area.',
      'contact.cta': 'Get in touch',

      'foot.note': 'Built with HTML, CSS and JavaScript, hosted on GitHub Pages.'
    },

    fr: {
      'meta.title': 'Mouad Tounani — Étudiant en développement informatique',
      'meta.description': 'Portfolio de Mouad Tounani, étudiant en 2ᵉ année de BTS SIO option SLAM à Mâcon. Recherche un stage du 11 janvier au 12 février 2027.',

      'a11y.skip': 'Aller au contenu',
      'a11y.sections': 'Sections',
      'a11y.lang': 'Langue',
      'a11y.profiles': 'Profils',
      'a11y.tech': 'Technologies',

      'nav.projects': 'Projets',
      'nav.experience': 'Expérience',
      'nav.skills': 'Compétences',

      'hero.statusLabel': 'Disponible pour un stage',
      'hero.statusDates': '11 janv. – 12 févr. 2027',
      'hero.role': 'Étudiant en BTS SIO option SLAM — 2ᵉ année',
      'hero.lede': 'Je développe des applications web et de bureau reliées à des bases de données, avec un code propre et sécurisé.',
      'hero.cv': 'Télécharger le CV',
      'hero.cvFile': 'CV_Mouad_TOUNANI_FR.pdf',
      'hero.email': "M'écrire",
      'hero.location': 'Mâcon, France',

      'proj.title': 'Projets',
      'proj.done': 'Terminé',
      'proj.wip': 'En cours',
      'proj.code': 'Voir le code sur GitHub',
      'proj.private': 'Dépôt privé — code disponible sur demande.',

      'proj.app.title': 'Application de gestion de cinéma',
      'proj.app.short': 'Back-office de bureau pour un multiplexe',
      'proj.app.d1': 'Ajout, modification et suppression des films, genres et salles (interface MDI WinForms).',
      'proj.app.d2': "Programmation des séances et consultation du planning d'une journée.",
      'proj.app.d3': 'Export du planning du jour en PDF avec iTextSharp.',
      'proj.app.d4': 'Requêtes ODBC paramétrées et chaîne de connexion centralisée.',

      'proj.web.title': 'Site web du cinéma',
      'proj.web.short': 'Site public avec recherche et réservation',
      'proj.web.d1': 'Fiches films et recherche multicritère (titre, réalisateur, acteurs, public, genre).',
      'proj.web.d2': 'Planning des séances par date et réservation avec contrôle des places restantes.',
      'proj.web.d3': 'Espace admin protégé par authentification HTTP pour ajouter ou supprimer des séances.',
      'proj.web.d4': "Requêtes préparées PDO et échappement de l'affichage contre les injections SQL et le XSS.",

      'proj.itsm.title': 'Plateforme de tickets ITSM',
      'proj.itsm.short': 'Outil de support informatique réalisé en stage',
      'proj.itsm.d1': 'Trois espaces avec leur tableau de bord : utilisateur, technicien et administrateur.',
      'proj.itsm.d2': 'Cycle de vie complet du ticket, de la création à la clôture, avec messagerie utilisateur–technicien.',
      'proj.itsm.d3': 'Suivi des SLA par priorité : respecté, à risque ou dépassé.',
      'proj.itsm.d4': 'Mots de passe hachés, jetons CSRF, contrôle des rôles sur chaque page et suppression logique des comptes.',

      'proj.hotel.title': 'BritHotel',
      'proj.hotel.short': "Gestion hôtelière, projet d'équipe en Scrum",
      'proj.hotel.d1': "Back-office pour les gérants : informations de l'hôtel, chambres, réservations et clients.",
      'proj.hotel.d2': 'Une base SQL Server commune à tous les hôtels de la chaîne.',
      'proj.hotel.d3': 'Réalisé en binôme en Scrum, avec user stories et versioning sur GitHub.',

      'exp.title': 'Expérience',
      'exp.ocp.role': 'Stagiaire informatique — développement web',
      'exp.ocp.date': '2026 · 5 semaines',
      'exp.ocp.org': 'OCP Group — Service informatique, Khouribga (Maroc)',
      'exp.ocp.b1': "Conception et développement en autonomie d'une application web de gestion de tickets ITSM en PHP et MySQL.",
      'exp.ocp.b2': "Modélisation de la base de données à partir de l'étude d'un jeu de données ITSM réel.",
      'exp.ocp.b3': 'Participation au support informatique : assistance aux utilisateurs, incidents, maintenance.',

      'edu.title': 'Formation',
      'edu.bts.title': 'BTS SIO — option SLAM',
      'edu.bac.title': 'Baccalauréat STMG, mention Bien',
      'edu.geo.title': 'Lycée technique — section géomètres',
      'edu.geo.org': 'Italie · conception 2D/3D',

      'skills.title': 'Compétences',
      'proj.hint': 'Survolez un projet pour le détail',
      'proj.hintTap': 'Touchez un projet pour le détail',
      'a11y.filters': 'Catégories de compétences',
      'sk.cat.prog': 'Programmation',
      'sk.cat.web': 'Web',
      'sk.cat.db': 'Bases de données',
      'sk.cat.sec': 'Cybersécurité',
      'sk.cat.tools': 'Outils',
      'sk.cat.ai': 'Outils IA',
      'sk.cat.cad': 'CAO & 3D',
      'sk.cat.lang': 'Langues',
      'sk.unit': 'Tests unitaires',
      'sk.ftp': 'Hébergement FTP',
      'sk.stored': 'Procédures stockées',
      'sk.triggers': 'Déclencheurs',
      'sk.gdpr': 'RGPD',
      'sk.sqli': 'Injections SQL',
      'sk.hashing': 'Hachage des mots de passe',
      'sk.encryption': 'Chiffrement',
      'sk.virt': 'Virtualisation',
      'sk.print': 'Impression 3D',
      'sk.it': 'Italien',
      'sk.itLvl': 'Courant (C1)',
      'sk.fr': 'Français',
      'sk.frLvl': 'Avancé (B2)',
      'sk.en': 'Anglais',
      'sk.enLvl': 'Avancé (B2)',
      'sk.ar': 'Arabe (marocain)',
      'sk.arLvl': "Courant à l'oral",

      'contact.title': 'Vous proposez un stage ?',
      'contact.body': 'Disponible du 11 janvier au 12 février 2027, à Mâcon et dans les environs.',
      'contact.cta': 'Me contacter',

      'foot.note': 'Réalisé en HTML, CSS et JavaScript, hébergé sur GitHub Pages.'
    }
  };

  var root = document.documentElement;
  var current = 'en';

  /* ---- Language ---------------------------------------------------------- */

  function t(key) {
    var table = I18N[current] || I18N.en;
    return table[key] != null ? table[key] : null;
  }

  function translate() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      // Toggle labels swap text when their panel is open.
      var key = el.getAttribute('data-i18n');
      var openKey = el.getAttribute('data-open-label');
      var owner = el.closest('[aria-expanded]');
      if (openKey && owner && owner.getAttribute('aria-expanded') === 'true') key = openKey;
      var value = t(key);
      if (value != null) el.textContent = value;
    });

    // data-i18n-attr="attr:key,attr2:key2"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var i = pair.indexOf(':');
        if (i < 0) return;
        var value = t(pair.slice(i + 1).trim());
        if (value != null) el.setAttribute(pair.slice(0, i).trim(), value);
      });
    });

    document.title = t('meta.title');
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', t('meta.description'));

    document.querySelectorAll('.lang__btn').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === current));
    });
  }

  function setLang(lang, persist) {
    current = lang === 'fr' ? 'fr' : 'en';
    root.setAttribute('lang', current);
    translate();
    if (persist) {
      try { localStorage.setItem('mt-lang', current); } catch (e) { /* private mode */ }
    }
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // The thumb slides to the active button; the text swaps in place.
  function moveLangThumb() {
    var thumb = document.querySelector('.lang__thumb');
    var active = document.querySelector('.lang__btn[aria-pressed="true"]');
    if (!thumb || !active) return;
    thumb.style.width = active.offsetWidth + 'px';
    thumb.style.transform = 'translateX(' + active.offsetLeft + 'px)';
  }

  document.querySelectorAll('.lang__btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var lang = btn.getAttribute('data-lang');
      if (lang === current) return;
      setLang(lang, true);
      moveLangThumb();
      moveTabBar();
    });
  });

  /* ---- Expandable panels ------------------------------------------------- */

  function setOpen(button, open) {
    button.setAttribute('aria-expanded', String(open));
    var panel = document.getElementById(button.getAttribute('aria-controls'));
    if (panel) panel.classList.toggle('is-open', open);
    var card = button.closest('[data-project]');
    if (card) card.classList.toggle('is-open', open);
  }

  // Projects: only one open at a time. A click (or Enter/Space) works
  // everywhere; with a mouse they also open on hover. The page itself is
  // never scrolled by the script. While a project is opening or closing,
  // hover is paused and needs a real mouse movement to resume, so content
  // moving under a still pointer can never open the next project by itself.
  var projectButtons = Array.prototype.slice.call(document.querySelectorAll('.project__toggle'));
  var canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var openTimer = null;
  var closeTimer = null;
  var lockedUntil = 0;
  var ANIM_MS = 800;

  function openOnly(button, open) {
    projectButtons.forEach(function (other) { if (other !== button) setOpen(other, false); });
    setOpen(button, open);
  }

  projectButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      clearTimeout(openTimer);
      openOnly(button, button.getAttribute('aria-expanded') !== 'true');
    });

    var card = button.closest('[data-project]');
    if (canHover && card) {
      var pending = false;
      var arm = function () {
        clearTimeout(closeTimer);
        if (pending || performance.now() < lockedUntil) return;
        if (button.getAttribute('aria-expanded') === 'true') return;
        pending = true;
        openTimer = setTimeout(function () {
          pending = false;
          lockedUntil = performance.now() + ANIM_MS;
          openOnly(button, true);
        }, 220);
      };
      card.addEventListener('mouseenter', arm);
      card.addEventListener('mousemove', arm, { passive: true });
      card.addEventListener('mouseleave', function () { clearTimeout(openTimer); pending = false; });
    }
  });

  var projectList = document.querySelector('.projects');
  if (canHover && projectList) {
    projectList.addEventListener('mouseleave', function () {
      clearTimeout(openTimer);
      closeTimer = setTimeout(function () {
        if (performance.now() < lockedUntil) return;
        projectButtons.forEach(function (b) { setOpen(b, false); });
      }, 450);
    });
  }

  // Skills: buttons that switch category (ARIA tabs, arrow keys supported).
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.filter[role="tab"]'));

  function selectTab(tab, focus) {
    tabs.forEach(function (other) {
      var on = other === tab;
      other.setAttribute('aria-selected', String(on));
      other.tabIndex = on ? 0 : -1;
      var panel = document.getElementById(other.getAttribute('aria-controls'));
      if (panel) panel.hidden = !on;
    });
    if (focus) tab.focus();
    moveTabBar();
  }

  function moveTabBar() {
    var bar = document.querySelector('.filters__bar');
    var active = document.querySelector('.filter[aria-selected="true"]');
    if (!bar || !active) return;
    bar.style.width = (active.offsetWidth - 16) + 'px';
    bar.style.transform = 'translate(' + (active.offsetLeft + 8) + 'px, ' + (active.offsetTop + active.offsetHeight - 2) + 'px)';
  }

  // Each chip gets its index so the CSS can stagger its entrance.
  document.querySelectorAll('.panel .chips li').forEach(function (li) {
    li.style.setProperty('--i', Array.prototype.indexOf.call(li.parentNode.children, li));
  });

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { selectTab(tab, false); });
    tab.addEventListener('keydown', function (event) {
      var next = null;
      if (event.key === 'ArrowRight') next = tabs[(i + 1) % tabs.length];
      if (event.key === 'ArrowLeft') next = tabs[(i - 1 + tabs.length) % tabs.length];
      if (event.key === 'Home') next = tabs[0];
      if (event.key === 'End') next = tabs[tabs.length - 1];
      if (next) { event.preventDefault(); selectTab(next, true); }
    });
  });

  /* ---- Boot -------------------------------------------------------------- */

  // Touch screens cannot hover, so the hint tells them to tap instead.
  var hint = document.querySelector('.card__hint');
  if (hint && !canHover) hint.setAttribute('data-i18n', 'proj.hintTap');

  setLang(root.getAttribute('lang'), false);
  moveLangThumb();
  moveTabBar();
  window.addEventListener('resize', function () { moveLangThumb(); moveTabBar(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { moveLangThumb(); moveTabBar(); });
  // Enable transitions only after the first placement, so nothing slides in on load.
  requestAnimationFrame(function () { requestAnimationFrame(function () { root.classList.add('ready'); }); });
  // Panels start closed only once the script is running.
  root.classList.add('collapsible');

  /* ---- Reveal on scroll -------------------------------------------------- */

  var items = document.querySelectorAll('.reveal');

  if (reduceMotion || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -6% 0px' });
    items.forEach(function (el) { observer.observe(el); });
  }
})();
