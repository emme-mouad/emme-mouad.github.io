/* ==========================================================================
   main.js — language switch (EN/FR) and reveal-on-scroll.
   No dependencies. Without JavaScript the page stays readable in English.
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

      'nav.experience': 'Experience',
      'nav.projects': 'Projects',
      'nav.skills': 'Skills',
      'nav.education': 'Education',

      'hero.status': 'Looking for an internship · 11 Jan – 12 Feb 2027',
      'hero.role': 'Software development student — BTS SIO SLAM, 2nd year',
      'hero.lede': 'I build web and desktop applications backed by relational databases, with a focus on clean, secure code.',
      'hero.cv': 'Download CV',
      'hero.cvFile': 'CV_Mouad_TOUNANI_EN.pdf',
      'hero.email': 'Email me',
      'hero.location': 'Mâcon, France',

      'exp.title': 'Experience',
      'exp.ocp.role': 'IT intern — web development',
      'exp.ocp.date': '2026 · 5 weeks',
      'exp.ocp.org': 'OCP Group — IT department, Khouribga (Morocco)',
      'exp.ocp.b1': 'Designed and built an ITSM ticketing web application on my own, in PHP and MySQL.',
      'exp.ocp.b2': 'Modelled the database (users, tickets, statuses, priorities, categories, messages) after studying a real ITSM dataset.',
      'exp.ocp.b3': 'Took part in day-to-day IT support: user assistance, incident follow-up, equipment maintenance.',

      'proj.title': 'Projects',
      'proj.done': 'Done',
      'proj.wip': 'In progress',
      'proj.internship': 'Internship',
      'proj.code': 'View code on GitHub',
      'proj.private': 'Private repository — code available on request.',
      'proj.app.title': 'Cinema management app',
      'proj.app.desc': 'Desktop back-office for a multiplex: films, genres, rooms and screenings, with a daily schedule exported to PDF.',
      'proj.web.title': 'Cinema website',
      'proj.web.desc': 'Public site sharing the same database: film pages, multi-criteria search, screening schedule, seat booking and a protected admin area.',
      'proj.itsm.title': 'ITSM ticketing platform',
      'proj.itsm.desc': 'Support-ticket platform with three roles (user, technician, admin), messaging, SLA tracking, CSRF protection and hashed passwords.',
      'proj.hotel.title': 'BritHotel — hotel management',
      'proj.hotel.desc': 'Team project run with Scrum: a back-office for hotel managers (rooms, bookings, customers) on a database shared by every hotel.',

      'skills.title': 'Skills',
      'sk.db': 'Databases',
      'sk.web': 'Web development',
      'sk.ai': 'AI for development',
      'sk.dbVal': 'SQL, MySQL (phpMyAdmin, Workbench), SQL Server, Transact-SQL (stored procedures, triggers)',
      'sk.oop': 'Object-oriented programming',
      'sk.oopVal': 'C# (class libraries), Python, LINQ, Entity Framework, unit testing, UML (use case and class diagrams)',
      'sk.event': 'Event-driven programming',
      'sk.eventVal': 'Visual Studio .NET, C# (WinForms), GUI classes, collections, data access',
      'sk.security': 'Cybersecurity',
      'sk.securityVal': 'GDPR, protection against SQL injection, XSS and CSRF, hashing, encryption',
      'sk.tools': 'Tools',
      'sk.toolsVal': 'Git / GitHub, WordPress, PrestaShop, web hosting (FTP), Windows, Linux, virtualisation, Word, Excel',
      'sk.cad': 'CAD',
      'sk.cadVal': 'AutoCAD, Fusion 360, Bambu Studio (3D printing)',
      'sk.langs': 'Languages',
      'sk.fr': 'French',
      'sk.frLvl': 'Upper-intermediate (B2)',
      'sk.it': 'Italian',
      'sk.itLvl': 'Fluent (C1)',
      'sk.en': 'English',
      'sk.enLvl': 'Upper-intermediate (B2)',
      'sk.ar': 'Arabic (Moroccan)',
      'sk.arLvl': 'Fluent (spoken)',

      'edu.title': 'Education',
      'edu.bts.title': 'BTS SIO — Software development (SLAM)',
      'edu.bts.org': 'Lycée Lamartine, Mâcon · two-year higher national diploma in IT',
      'edu.bac.title': 'Baccalauréat STMG — Information systems, with honours',
      'edu.geo.title': 'Technical high school — Surveying',
      'edu.geo.org': 'Italy · technical drawing and 2D/3D design',

      'contact.title': 'Have an internship to offer?',
      'contact.body': "I'm available from 11 January to 12 February 2027, in Mâcon and the surrounding area. I'd be glad to talk about your team and projects.",

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

      'nav.experience': 'Expérience',
      'nav.projects': 'Projets',
      'nav.skills': 'Compétences',
      'nav.education': 'Formation',

      'hero.status': 'Recherche un stage · 11 janv. – 12 févr. 2027',
      'hero.role': 'Étudiant en BTS SIO option SLAM — 2ᵉ année',
      'hero.lede': "Je développe des applications web et de bureau reliées à des bases de données, avec un code propre et sécurisé.",
      'hero.cv': 'Télécharger le CV',
      'hero.cvFile': 'CV_Mouad_TOUNANI_FR.pdf',
      'hero.email': "M'écrire",
      'hero.location': 'Mâcon, France',

      'exp.title': 'Expérience',
      'exp.ocp.role': 'Stagiaire informatique — développement web',
      'exp.ocp.date': '2026 · 5 semaines',
      'exp.ocp.org': 'OCP Group — Service informatique, Khouribga (Maroc)',
      'exp.ocp.b1': "Conception et développement en autonomie d'une application web de gestion de tickets ITSM en PHP et MySQL.",
      'exp.ocp.b2': "Modélisation de la base de données (utilisateurs, tickets, statuts, priorités, catégories, messages) à partir de l'étude d'un jeu de données ITSM réel.",
      'exp.ocp.b3': 'Participation au support informatique : assistance aux utilisateurs, suivi des incidents, maintenance du matériel.',

      'proj.title': 'Projets',
      'proj.done': 'Terminé',
      'proj.wip': 'En cours',
      'proj.internship': 'Stage',
      'proj.code': 'Voir le code sur GitHub',
      'proj.private': 'Dépôt privé — code disponible sur demande.',
      'proj.app.title': 'Application de gestion de cinéma',
      'proj.app.desc': "Back-office de bureau pour un multiplexe : films, genres, salles et séances, avec export PDF du planning du jour.",
      'proj.web.title': 'Site web du cinéma',
      'proj.web.desc': 'Site public relié à la même base : fiches films, recherche multicritère, planning des séances, réservation de places et espace admin protégé.',
      'proj.itsm.title': 'Plateforme de tickets ITSM',
      'proj.itsm.desc': 'Gestion de tickets de support avec trois rôles (utilisateur, technicien, admin), messagerie, suivi des SLA, protection CSRF et mots de passe hachés.',
      'proj.hotel.title': 'BritHotel — gestion hôtelière',
      'proj.hotel.desc': "Projet d'équipe en Scrum : back-office pour les gérants d'hôtel (chambres, réservations, clients) sur une base commune à tous les hôtels.",

      'skills.title': 'Compétences',
      'sk.db': 'Bases de données',
      'sk.web': 'Développement web',
      'sk.ai': 'IA pour le développement',
      'sk.dbVal': 'SQL, MySQL (phpMyAdmin, Workbench), SQL Server, Transact-SQL (procédures stockées, déclencheurs)',
      'sk.oop': 'Programmation orientée objet',
      'sk.oopVal': "C# (bibliothèques de classes), Python, LINQ, Entity Framework, tests unitaires, UML (cas d'utilisation, diagrammes de classes)",
      'sk.event': 'Programmation événementielle',
      'sk.eventVal': 'Visual Studio .NET, C# (WinForms), classes graphiques, collections, accès aux données',
      'sk.security': 'Cybersécurité',
      'sk.securityVal': 'RGPD, protection contre les injections SQL, XSS et CSRF, hachage, chiffrement',
      'sk.tools': 'Outils',
      'sk.toolsVal': 'Git / GitHub, WordPress, PrestaShop, hébergement web (FTP), Windows, Linux, virtualisation, Word, Excel',
      'sk.cad': 'CAO',
      'sk.cadVal': 'AutoCAD, Fusion 360, Bambu Studio (impression 3D)',
      'sk.langs': 'Langues',
      'sk.fr': 'Français',
      'sk.frLvl': 'Avancé (B2)',
      'sk.it': 'Italien',
      'sk.itLvl': 'Courant (C1)',
      'sk.en': 'Anglais',
      'sk.enLvl': 'Avancé (B2)',
      'sk.ar': 'Arabe (marocain)',
      'sk.arLvl': "Courant à l'oral",

      'edu.title': 'Formation',
      'edu.bts.title': 'BTS SIO — option SLAM (développement)',
      'edu.bts.org': 'Lycée Lamartine, Mâcon',
      'edu.bac.title': 'Baccalauréat STMG — option SIG, mention Bien',
      'edu.geo.title': 'Lycée technique — section géomètres',
      'edu.geo.org': 'Italie · dessin technique et conception 2D/3D',

      'contact.title': 'Vous proposez un stage ?',
      'contact.body': "Je suis disponible du 11 janvier au 12 février 2027, à Mâcon et dans les environs. Je serais ravi d'échanger avec vous sur votre équipe et vos projets.",

      'foot.note': 'Réalisé en HTML, CSS et JavaScript, hébergé sur GitHub Pages.'
    }
  };

  var root = document.documentElement;

  /* ---- Language ---------------------------------------------------------- */

  function translate(lang) {
    var table = I18N[lang] || I18N.en;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = table[el.getAttribute('data-i18n')];
      if (value != null) el.textContent = value;
    });

    // data-i18n-attr="attr:key,attr2:key2"
    document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(',').forEach(function (pair) {
        var i = pair.indexOf(':');
        if (i < 0) return;
        var value = table[pair.slice(i + 1).trim()];
        if (value != null) el.setAttribute(pair.slice(0, i).trim(), value);
      });
    });

    document.title = table['meta.title'];
    var desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', table['meta.description']);

    document.querySelectorAll('.lang__btn').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.getAttribute('data-lang') === lang));
    });
  }

  function setLang(lang, persist) {
    root.setAttribute('lang', lang);
    translate(lang);
    if (persist) {
      try { localStorage.setItem('mt-lang', lang); } catch (e) { /* private mode */ }
    }
  }

  document.querySelectorAll('.lang__btn').forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang'), true); });
  });

  setLang(root.getAttribute('lang') === 'fr' ? 'fr' : 'en', false);

  /* ---- Reveal on scroll -------------------------------------------------- */

  var items = document.querySelectorAll('.reveal');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { observer.observe(el); });
  }
})();
