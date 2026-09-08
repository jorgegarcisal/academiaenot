(function () {
  'use strict';

  var STORAGE_KEY = 'academiaenot-lang';
  var DEFAULT_LANG = 'gl';

  var translations = {
    gl: {
      'meta.title': 'Academia Enot | Clases de Apoio e Particulares en Pontevedra',
      'meta.description': 'Academia Enot en Pontevedra: clases de apoio e particulares de Primaria, ESO, Bacharelato, PAU, ciclos e universidade. Grupos reducidos en Rúa dos Ferreiros.',
      'nav.home': 'Inicio',
      'nav.services': 'Servizos',
      'nav.levels': 'Niveis',
      'nav.contact': 'Contacto',
      'hero.title': 'O teu éxito comeza aquí',
      'hero.subtitle': 'Levamos anos axudando os estudantes a acadar os seus obxectivos académicos',
      'hero.cta': 'Contáctanos',
      'hero.scroll': 'Desliza para saber máis',
      'about.title': 'Quen somos',
      'about.p1': 'Somos un equipo que leva anos dedicándose a axudar os estudantes que necesitan apoio, xa sexa porque teñen dificultades, porque precisan algo de ánimo e constancia, ou porque desexan mellorar as súas notas.',
      'about.p2': 'Damos clase a grupos pequenos ou ás veces clases particulares, e intentamos adaptarnos ás necesidades de cada alumno.',
      'about.cta': 'Consúltanos',
      'levels.title': 'Ofrecémosvos Clases de',
      'levels.subtitle': 'Adaptamos cada clase ás necesidades específicas de cada alumno',
      'levels.primary.title': 'Primaria',
      'levels.primary.desc': 'Apoio en todas as materias de educación primaria para consolidar as bases da aprendizaxe.',
      'levels.eso.title': 'ESO',
      'levels.eso.desc': 'Clases de apoio para superar con éxito todas as materias da educación secundaria obrigatoria.',
      'levels.bach.title': 'Bacharelato',
      'levels.bach.desc': 'Preparación específica para superar o bacharelato e prepararte para a universidade.',
      'levels.uni.title': 'Facultades',
      'levels.uni.desc': 'Apoio universitario en diferentes materias para estudantes de grao e máster.',
      'levels.pau.title': 'PAU',
      'levels.pau.desc': 'Preparación intensiva para as probas de acceso á universidade (Selectividade).',
      'levels.access.title': 'Accesos a Ciclos',
      'levels.access.desc': 'Preparación para probas de acceso a ciclos formativos, UNED e universidade.',
      'levels.cycles.title': 'Ciclos Formativos',
      'levels.cycles.desc': 'Apoio nas materias de ciclos formativos de grao medio e superior.',
      'levels.galician.title': 'Lingua Galega',
      'levels.galician.desc': 'Preparación específica para os exames de Lingua Galega e certificacións.',
      'why.title': 'Por que elixirnos',
      'why.subtitle': 'Comprometidos co éxito dos nosos alumnos dende hai anos',
      'why.cta': 'Solicita Información',
      'why.years': 'Anos de Experiencia',
      'why.students': 'Alumnos Aprobados',
      'why.levels': 'Niveis Educativos',
      'why.dedication': '% Dedicación',
      'commitment.title': 'O noso Compromiso',
      'commitment.subtitle': 'Consúltanos e entre todos buscamos unha solución para ti',
      'commitment.groups.title': 'Grupos Reducidos',
      'commitment.groups.desc': 'Traballamos con grupos pequenos para garantir unha atención personalizada a cada alumno.',
      'commitment.private.title': 'Clases Particulares',
      'commitment.private.desc': 'Tamén ofrecemos clases individuais para unha atención totalmente personalizada.',
      'commitment.motivation.title': 'Ánimo e Constancia',
      'commitment.motivation.desc': 'Non só ensinamos, tamén motivamos e acompañamos no proceso de aprendizaxe.',
      'contact.title': 'Contacta con Nós',
      'contact.subtitle': 'Estamos aquí para axudarche. Consúltanos sen compromiso.',
      'contact.phone': 'Teléfono',
      'contact.whatsapp': 'WhatsApp',
      'contact.email': 'Email',
      'contact.address': 'Enderezo',
      'footer.about1': 'Levamos anos dedicándonos a axudar os estudantes que necesitan apoio.',
      'footer.about2': 'Clases en grupos pequenos e particulares adaptadas ás túas necesidades.',
      'footer.contact': 'Contacto',
      'footer.levels': 'Niveis',
      'footer.primary': 'Primaria',
      'footer.eso': 'ESO',
      'footer.bach': 'Bacharelato',
      'footer.uni': 'Facultades',
      'footer.pau': 'PAU / Ciclos',
      'footer.galician': 'Lingua Galega',
      'footer.rights': 'Todos os dereitos reservados',
      'lang.gl': 'Galego',
      'lang.es': 'Castelán'
    },
    es: {
      'meta.title': 'Academia Enot | Clases de Apoyo y Particulares en Pontevedra',
      'meta.description': 'Academia Enot en Pontevedra: clases de apoyo y particulares de Primaria, ESO, Bachillerato, PAU, ciclos y universidad. Grupos reducidos en Rúa dos Ferreiros.',
      'nav.home': 'Inicio',
      'nav.services': 'Servicios',
      'nav.levels': 'Niveles',
      'nav.contact': 'Contacto',
      'hero.title': 'Tu éxito empieza aquí',
      'hero.subtitle': 'Llevamos años ayudando a estudiantes a alcanzar sus objetivos académicos',
      'hero.cta': 'Contáctanos',
      'hero.scroll': 'Desliza para saber más',
      'about.title': 'Quiénes somos',
      'about.p1': 'Somos un equipo que lleva años dedicándose a ayudar a los estudiantes que necesitan apoyo, ya sea porque tienen dificultades, porque precisan algo de ánimo y constancia, o porque desean mejorar sus notas.',
      'about.p2': 'Damos clase a grupos pequeños o a veces clases particulares, e intentamos adaptarnos a las necesidades de cada alumno.',
      'about.cta': 'Consúltanos',
      'levels.title': 'Ofrecemos Clases de',
      'levels.subtitle': 'Adaptamos cada clase a las necesidades específicas de cada alumno',
      'levels.primary.title': 'Primaria',
      'levels.primary.desc': 'Apoyo en todas las materias de educación primaria para consolidar las bases del aprendizaje.',
      'levels.eso.title': 'ESO',
      'levels.eso.desc': 'Clases de apoyo para superar con éxito todas las materias de la educación secundaria obligatoria.',
      'levels.bach.title': 'Bachillerato',
      'levels.bach.desc': 'Preparación específica para superar el bachillerato y prepararte para la universidad.',
      'levels.uni.title': 'Facultades',
      'levels.uni.desc': 'Apoyo universitario en diferentes materias para estudiantes de grado y máster.',
      'levels.pau.title': 'PAU',
      'levels.pau.desc': 'Preparación intensiva para las pruebas de acceso a la universidad (Selectividad).',
      'levels.access.title': 'Accesos a Ciclos',
      'levels.access.desc': 'Preparación para pruebas de acceso a ciclos formativos, UNED y universidad.',
      'levels.cycles.title': 'Ciclos Formativos',
      'levels.cycles.desc': 'Apoyo en las materias de ciclos formativos de grado medio y superior.',
      'levels.galician.title': 'Lengua Gallega',
      'levels.galician.desc': 'Preparación específica para los exámenes de Lengua Gallega y certificaciones.',
      'why.title': 'Por qué elegirnos',
      'why.subtitle': 'Comprometidos con el éxito de nuestros alumnos desde hace años',
      'why.cta': 'Solicita Información',
      'why.years': 'Años de Experiencia',
      'why.students': 'Alumnos Aprobados',
      'why.levels': 'Niveles Educativos',
      'why.dedication': '% Dedicación',
      'commitment.title': 'Nuestro Compromiso',
      'commitment.subtitle': 'Consúltanos y entre todos buscamos una solución para ti',
      'commitment.groups.title': 'Grupos Reducidos',
      'commitment.groups.desc': 'Trabajamos con grupos pequeños para garantizar una atención personalizada a cada alumno.',
      'commitment.private.title': 'Clases Particulares',
      'commitment.private.desc': 'También ofrecemos clases individuales para una atención totalmente personalizada.',
      'commitment.motivation.title': 'Ánimo y Constancia',
      'commitment.motivation.desc': 'No solo enseñamos, también motivamos y acompañamos en el proceso de aprendizaje.',
      'contact.title': 'Contacta con Nosotros',
      'contact.subtitle': 'Estamos aquí para ayudarte. Consúltanos sin compromiso.',
      'contact.phone': 'Teléfono',
      'contact.whatsapp': 'WhatsApp',
      'contact.email': 'Email',
      'contact.address': 'Dirección',
      'footer.about1': 'Llevamos años dedicándonos a ayudar a los estudiantes que necesitan apoyo.',
      'footer.about2': 'Clases en grupos pequeños y particulares adaptadas a tus necesidades.',
      'footer.contact': 'Contacto',
      'footer.levels': 'Niveles',
      'footer.primary': 'Primaria',
      'footer.eso': 'ESO',
      'footer.bach': 'Bachillerato',
      'footer.uni': 'Facultades',
      'footer.pau': 'PAU / Ciclos',
      'footer.galician': 'Lengua Gallega',
      'footer.rights': 'Todos los derechos reservados',
      'lang.gl': 'Gallego',
      'lang.es': 'Castellano'
    }
  };

  function getSavedLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) {
        return saved;
      }
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function applyTranslations(lang) {
    var dict = translations[lang];
    if (!dict) {
      return;
    }

    document.documentElement.lang = lang;

    document.title = dict['meta.title'];

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', dict['meta.description']);
    }

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', dict['meta.title']);
    }

    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', dict['meta.description']);
    }

    var twTitle = document.querySelector('meta[property="twitter:title"]');
    if (twTitle) {
      twTitle.setAttribute('content', dict['meta.title']);
    }

    var twDesc = document.querySelector('meta[property="twitter:description"]');
    if (twDesc) {
      twDesc.setAttribute('content', dict['meta.description']);
    }

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (dict[key]) {
        nodes[i].textContent = dict[key];
      }
    }

    var ariaNodes = document.querySelectorAll('[data-i18n-aria]');
    for (var j = 0; j < ariaNodes.length; j++) {
      var ariaKey = ariaNodes[j].getAttribute('data-i18n-aria');
      if (dict[ariaKey]) {
        ariaNodes[j].setAttribute('aria-label', dict[ariaKey]);
      }
    }

    var buttons = document.querySelectorAll('.lang-btn');
    for (var k = 0; k < buttons.length; k++) {
      var isActive = buttons[k].getAttribute('data-lang') === lang;
      buttons[k].classList.toggle('active', isActive);
      buttons[k].setAttribute('aria-pressed', isActive ? 'true' : 'false');
    }
  }

  function setLanguage(lang) {
    if (!translations[lang]) {
      lang = DEFAULT_LANG;
    }
    saveLang(lang);
    applyTranslations(lang);
    document.documentElement.classList.remove('i18n-pending');
  }

  function init() {
    setLanguage(getSavedLang());

    document.addEventListener('click', function (e) {
      var btn = e.target.closest ? e.target.closest('.lang-btn') : null;
      if (!btn) {
        return;
      }
      var lang = btn.getAttribute('data-lang');
      if (lang) {
        setLanguage(lang);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
