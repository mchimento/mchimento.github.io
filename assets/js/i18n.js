(function () {
  'use strict';

  var t = {
    en: {
      'profile-tagline': 'PhD &middot; Software Developer',

      'nav-about': 'About',
      'nav-skills': 'Skills',
      'nav-experience': 'Experience',
      'nav-education': 'Education',
      'nav-publications': 'Publications',
      'nav-contact': 'Contact',

      'about-title': 'About Me',
      'about-subtitle': 'PhD in Computer Science &amp; Software Developer',
      'about-p1': 'I\'m a software developer based in Gothenburg, Sweden. I work at <a href="https://www.jeppesenforeflight.com/" target="_blank" rel="noopener noreferrer">Jeppesen ForeFlight</a> on their Crew Tracking system — a product that helps airlines stay operationally efficient during disruptions by giving operations teams tools to detect, resolve, and follow up on changes to crew plans when schedules don\'t go as planned.',
      'about-p2': 'Before moving into industry, I was a postdoctoral researcher at KTH in Stockholm, contributing to a project on <a href="https://people.kth.se/~dbro/projects.html" target="_blank" rel="noopener noreferrer">full-stack verification of programs synthesized from timed automata</a>. My PhD — from Chalmers University of Technology — focused on combining static and runtime verification of object-oriented software. That background in Formal Methods still shapes how I think about correctness and software design today.',

      'skills-title': 'Skills',
      'skills-desc': 'A summary of my technical skills and areas of expertise.',
      'skills-cat-languages': 'Programming Languages',
      'skills-cat-testing': 'Testing &amp; Verification',
      'skills-cat-practices': 'Development Practices',
      'skills-cat-tools': 'Tools &amp; Other',

      'experience-title': 'Experience',
      'experience-professional': 'Professional Experience',
      'experience-teaching': 'Teaching Experience',
      'teaching-intro': 'I have worked as a teacher both in academia and the software industry. Below you can find a list of the different courses I have taught.',

      'job-foreflight-current': 'Currently I am working as a software application developer on the Jeppesen Crew Tracking system.',
      'job-foreflight-prev': 'Worked developing software used in the aviation industry, e.g. Jeppesen Crew Tracking system.',
      'job-kth-1': 'Research project regarding full-stack verification of programs synthesized from timed automata.',
      'job-kth-2': 'My key achievements were the implementation of a model checker for timed automata, and formally verifying that the model checker is sound.',
      'job-kth-3': 'All this work was developed using the COQ proof assistant.',
      'job-chalmers-1': 'Research project regarding the combination of static and runtime verification techniques.',
      'job-chalmers-2': 'I developed in Haskell a tool, called <a href="https://github.com/starvoors/StaRVOOrS-tool">StaRVOOrS</a>, which combines the use of the runtime verifier LARVA with the (static) deductive verifier KeY. Both verifiers target Java programs.',
      'job-chalmers-3': 'I extended the APIs of the verifiers mentioned above in order to support their use within StarVOOrS, and added specific functionalities for the combined verification process. Both APIs are implemented in Java.',
      'job-virtualcert-1': 'Research project regarding the formalisation and verification of an idealised model of a virtualisation platform.',
      'job-virtualcert-2': 'My key achievement in this project was specifying and verifying the correctness of the memory management of an idealized model of a virtualization platform, in the presence of actions executed by the underlying system.',
      'job-virtualcert-3': 'All this work was developed using the COQ proof assistant.',
      'job-inria-1': 'During this internship I checked the effectiveness of using the language Pluscal 2.0 for specifying distributed algorithms, tested its compiler, and fixed several bugs spotted during the testing phase.',
      'job-inria-2': 'This compiler is implemented in Java.',
      'teach-atrium': 'Atrium GUI configuration',

      'education-title': 'Education',
      'edu-phd-degree': 'PhD degree in Computer Science',
      'edu-thesis-label': 'Thesis title:',
      'edu-supervised-label': 'Supervised by:',
      'edu-lic-arg-desc': '5-years computer science degree + final Thesis, equivalent to a Master degree in the EU system',
      'edu-lic-arg-available': '(available only in Spanish)',

      'publications-title': 'Publications',
      'publications-desc': 'Throughout my academic life I have published, in collaboration with some colleagues, the following papers:',

      'contact-title': 'Contact',
      'contact-location-label': 'Location',
      'contact-email-label': 'Email',
      'contact-phone-label': 'Phone'
    },

    es: {
      'profile-tagline': 'Doctor &middot; Desarrollador de Software',

      'nav-about': 'Sobre Mí',
      'nav-skills': 'Habilidades',
      'nav-experience': 'Experiencia',
      'nav-education': 'Educación',
      'nav-publications': 'Publicaciones',
      'nav-contact': 'Contacto',

      'about-title': 'Sobre Mí',
      'about-subtitle': 'Doctor en Ciencias de la Computación &amp; Desarrollador de Software',
      'about-p1': 'Soy desarrollador de software radicado en Gotemburgo, Suecia. Trabajo en <a href="https://www.jeppesenforeflight.com/" target="_blank" rel="noopener noreferrer">Jeppesen ForeFlight</a> en su sistema Crew Tracking — un producto que ayuda a las aerolíneas a mantener la eficiencia operativa durante interrupciones, proporcionando a los equipos de operaciones herramientas para detectar, resolver y hacer seguimiento de los cambios en los planes de tripulación cuando los horarios no se cumplen.',
      'about-p2': 'Antes de incorporarme a la industria, fui investigador postdoctoral en el KTH de Estocolmo, contribuyendo a un proyecto sobre <a href="https://people.kth.se/~dbro/projects.html" target="_blank" rel="noopener noreferrer">verificación completa de programas sintetizados a partir de autómatas temporizados</a>. Mi doctorado — por la Universidad Tecnológica de Chalmers — se centró en la combinación de técnicas de verificación estática y runtime verification de software orientado a objetos. Esa base en Métodos Formales sigue influyendo en cómo pienso sobre la corrección y el diseño del software hoy en día.',

      'skills-title': 'Habilidades',
      'skills-desc': 'Un resumen de mis habilidades técnicas y áreas de experiencia.',
      'skills-cat-languages': 'Lenguajes de Programación',
      'skills-cat-testing': 'Testing y Verificación',
      'skills-cat-practices': 'Prácticas de Desarrollo',
      'skills-cat-tools': 'Herramientas y Otros',

      'experience-title': 'Experiencia',
      'experience-professional': 'Experiencia Profesional',
      'experience-teaching': 'Experiencia Docente',
      'teaching-intro': 'He trabajado como docente tanto en la academia como en la industria del software. A continuación encontrarás una lista de los distintos cursos que he impartido.',

      'job-foreflight-current': 'Actualmente trabajo como desarrollador de aplicaciones de software en el sistema Jeppesen Crew Tracking.',
      'job-foreflight-prev': 'Trabajé desarrollando software para la industria de la aviación, como el sistema Jeppesen Crew Tracking.',
      'job-kth-1': 'Proyecto de investigación sobre verificación completa de programas sintetizados a partir de autómatas temporizados.',
      'job-kth-2': 'Mis logros principales fueron la implementación de un verificador de modelos para autómatas temporizados y la verificación formal de la corrección de dicho verificador.',
      'job-kth-3': 'Todo este trabajo fue desarrollado utilizando el asistente de pruebas COQ.',
      'job-chalmers-1': 'Proyecto de investigación sobre la combinación de técnicas de verificación estática y en tiempo de ejecución.',
      'job-chalmers-2': 'Desarrollé en Haskell una herramienta llamada <a href="https://github.com/starvoors/StaRVOOrS-tool">StaRVOOrS</a>, que combina el verificador en tiempo de ejecución LARVA con el verificador deductivo (estático) KeY. Ambos verificadores trabajan con programas Java.',
      'job-chalmers-3': 'Amplíé las APIs de los verificadores mencionados para facilitar su uso dentro de StarVOOrS, añadiendo funcionalidades específicas para el proceso de verificación combinado. Ambas APIs están implementadas en Java.',
      'job-virtualcert-1': 'Proyecto de investigación sobre la formalización y verificación de un modelo idealizado de una plataforma de virtualización.',
      'job-virtualcert-2': 'Mi logro principal en este proyecto fue especificar y verificar la corrección de la gestión de memoria de un modelo idealizado de una plataforma de virtualización, en presencia de acciones ejecutadas por el sistema subyacente.',
      'job-virtualcert-3': 'Todo este trabajo fue desarrollado utilizando el asistente de pruebas COQ.',
      'job-inria-1': 'Durante esta pasantía evalué la efectividad del lenguaje Pluscal 2.0 para especificar algoritmos distribuidos, probé su compilador y corregí varios errores detectados durante la fase de pruebas.',
      'job-inria-2': 'Este compilador está implementado en Java.',
      'teach-atrium': 'Configuración de la interfaz gráfica Atrium',

      'education-title': 'Educación',
      'edu-phd-degree': 'Doctorado en Ciencias de la Computación',
      'edu-thesis-label': 'Título de la tesis:',
      'edu-supervised-label': 'Dirigido por:',
      'edu-lic-arg-desc': 'Licenciatura de 5 años en informática con tesis final, equivalente a un máster en el sistema europeo',
      'edu-lic-arg-available': '(disponible solo en español)',

      'publications-title': 'Publicaciones',
      'publications-desc': 'A lo largo de mi vida académica he publicado, en colaboración con algunos colegas, los siguientes artículos:',

      'contact-title': 'Contacto',
      'contact-location-label': 'Ubicación',
      'contact-email-label': 'Correo Electrónico',
      'contact-phone-label': 'Teléfono'
    }
  };

  function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[lang] && t[lang][key] !== undefined) {
        el.innerHTML = t[lang][key];
      }
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  document.addEventListener('DOMContentLoaded', function () {
    var saved;
    try { saved = localStorage.getItem('lang'); } catch (e) {}
    applyLanguage(saved || 'en');
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { applyLanguage(btn.dataset.lang); });
    });
  });

}());
