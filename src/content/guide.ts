// Esta es la única fuente de contenido de la página. Editá aquí los textos
// cuando avance el trabajo; los componentes solamente se ocupan de mostrarlos.
// Regla del proyecto: no inventar links ni datos (ver CLAUDE.md).
export type NavigationItem = { id: string; label: string };
export type SsrCode = { code: string; meaning: string };
export type JourneyStage = { number: string; title: string; detail: string };
export type Regulation = {
  region: string;
  title: string;
  body?: string;
  pending?: boolean;
};
export type Definition = { source: string; text: string; note: string };
// La URL es opcional: si todavía no tenemos el link oficial, la cita se muestra sin botón para abrirla.
// "alternate" es un segundo link al mismo documento (por ejemplo, el texto en Infoleg).
export type Source = { citation: string; url?: string; alternate?: { label: string; url: string } };
export type ComplaintStep = { title: string; body: string };

export const guide = {
  brand: { name: 'Guía PMR', descriptor: 'TRANSPORTE AÉREO · ARGENTINA' },
  // El orden del menú sigue los capítulos del trabajo escrito.
  navigation: [
    { id: 'inicio', label: 'Inicio' },
    { id: 'marco-conceptual', label: 'Marco conceptual' },
    { id: 'marco-normativo', label: 'Marco normativo' },
    { id: 'circuito', label: 'Circuito de asistencia' },
    { id: 'fuentes', label: 'Fuentes' },
  ] satisfies NavigationItem[],
  accessibility: {
    skip: 'Saltar al contenido',
    mainNav: 'Navegación principal',
    mobileNav: 'Navegación para pantallas pequeñas',
    openMenu: 'Abrir menú de navegación',
    closeMenu: 'Cerrar menú de navegación',
    menu: 'Menú',
  },
  hero: {
    eyebrow: 'UTN · TECNICATURA UNIVERSITARIA EN GESTIÓN AERONÁUTICA · GRUPO 1',
    // Título del trabajo en dos renglones: el segundo va resaltado en color.
    titleStart: 'Asistencia a Pasajeros con Movilidad Reducida (PMR)',
    titleAccent: 'en el Ámbito Aeroportuario.',
    intro: 'Página de apoyo al trabajo de Práctica Profesional Supervisada. Presenta en forma resumida y visual los contenidos del trabajo.',
    actionPrimary: { label: 'Marco conceptual', target: 'marco-conceptual' },
    actionSecondary: { label: 'Circuito de asistencia', target: 'circuito' },
    bottom: 'PRÁCTICA PROFESIONAL SUPERVISADA',
  },
  // Página hermana: la guía para pasajeros es la aplicación práctica del trabajo.
  // Se enlaza en Inicio (visible) y en el pie; allá hay un enlace de vuelta, más discreto.
  companion: {
    label: 'APLICACIÓN PRÁCTICA',
    text: 'Como aplicación práctica del trabajo se desarrolló una guía para pasajeros, redactada en lenguaje sencillo.',
    linkLabel: 'Ver la guía para pasajeros',
    footerLinkLabel: 'Guía para pasajeros',
    url: 'https://pmr-pasajero.web.app',
  },
  // Marco conceptual: definiciones de PMR y códigos SSR de IATA.
  definition: {
    index: '01 / MARCO CONCEPTUAL',
    title: 'Marco conceptual',
    lead: 'No existe una única definición. Estas tres se usan en el transporte aéreo y coinciden en lo esencial: la movilidad se ve reducida por una discapacidad, la edad u otra causa, y el servicio debe adaptarse a la persona.',
    status: 'En desarrollo',
    definitionsTitle: 'Tres definiciones de referencia',
    definitions: [
      {
        source: 'ONU · Convención sobre los Derechos de las Personas con Discapacidad, art. 1',
        text: 'Las personas con discapacidad incluyen a aquellas que tengan deficiencias físicas, mentales, intelectuales o sensoriales a largo plazo que, al interactuar con diversas barreras, puedan impedir su participación plena y efectiva en la sociedad, en igualdad de condiciones con las demás.',
        note: 'Texto verificado en una edición de CEAPAT-IMSERSO (2010).',
      },
      {
        source: 'OACI · Anexo 9 (Facilitación)',
        text: 'Toda persona cuya movilidad se ve reducida por una incapacidad física (sensorial o de locomoción), una deficiencia mental, la edad, una enfermedad o cualquier otra causa de discapacidad al utilizar el transporte, y cuya situación necesita atención especial y la adaptación a sus necesidades de los servicios puestos a disposición de todos los pasajeros.',
        note: 'Traducción propia a partir de presentaciones de la OACI. Falta citar el texto del Anexo 9 vigente.',
      },
      {
        source: 'Unión Europea · Reglamento (CE) 1107/2006, art. 2 a)',
        text: 'Cualquier persona cuya movilidad para participar en el transporte se ve reducida por una discapacidad física (sensorial o locomotriz, permanente o temporal), una discapacidad o deficiencia intelectual, cualquier otra causa de discapacidad o la edad, y cuya situación requiere una atención adecuada y la adaptación a sus necesidades particulares del servicio puesto a disposición de todos los pasajeros.',
        note: 'Traducción propia del texto en inglés. Copiar la versión oficial en español de EUR-Lex antes de citar.',
      },
    ] satisfies Definition[],
    cardTitle: 'Preguntas para la investigación',
    questions: [
      '¿Cuál es la diferencia entre movilidad reducida y edad avanzada?',
      '¿Hace falta contar con un Certificado Único de Discapacidad (CUD)?',
    ],
    note: 'El Decreto 809/2024 (Anexo I, art. 31) incluye las condiciones etarias entre los motivos de asistencia especial. Falta confirmar si se exige certificado.',
    tableTitle: 'Códigos IATA SSR',
    tableDetail: 'DEFINICIONES DE IATA',
    columnCode: 'Código',
    columnMeaning: 'Descripción',
    codes: [
      { code: 'WCHR', meaning: 'Puede caminar y subir escaleras pero necesita silla para distancias largas.' },
      { code: 'WCHS', meaning: 'No puede subir ni bajar escaleras, pero puede llegar a su asiento. Necesita silla para las distancias y que lo carguen en las escaleras.' },
      { code: 'WCHC', meaning: 'Completamente inmóvil. Necesita silla y que lo carguen en las escaleras y hasta su asiento.' },
      { code: 'BLND', meaning: 'Pasajero ciego o con disminución visual.' },
      { code: 'DEAF', meaning: 'Pasajero sordo o con disminución auditiva.' },
      { code: 'DPNA', meaning: 'Pasajero con discapacidad cognitiva, intelectual o del desarrollo.' },
      { code: 'MEDA', meaning: 'Puede requerirse autorización médica de la aerolínea.' },
      { code: 'WCMP', meaning: 'Silla de ruedas o scooter de propulsión manual.' },
      { code: 'WCBD', meaning: 'Silla o scooter con batería seca, de hidruro metálico de níquel o no derramable.' },
      { code: 'WCBW', meaning: 'Silla o scooter con batería húmeda.' },
      { code: 'WCLB', meaning: 'Silla o scooter con batería de iones de litio.' },
      { code: 'WCOB', meaning: 'El pasajero necesita una silla de a bordo provista por la aerolínea.' },
    ] satisfies SsrCode[],
  },
  regulations: {
    index: '02 / MARCO NORMATIVO',
    title: 'Marco normativo',
    lead: 'Normas y referencias para situar la asistencia en el transporte aéreo. Los apartados pendientes se señalan de manera explícita.',
    cards: [
      {
        region: 'ARGENTINA',
        title: 'Decreto 809/2024',
        body: 'Publicado en el Boletín Oficial el 10/09/2024. Aprueba el Reglamento del Contrato Aéreo de Pasajeros y Equipaje y deroga la Resolución 1532/98. Su Anexo I define al «pasajero asistente» (art. 1) y regula los derechos de quienes requieren asistencia especial (art. 31): aviso con 48 horas de anticipación, check-in prioritario y gratuito, y accesibilidad, salvo causa probada de seguridad operacional. También trata las condiciones médicas particulares (art. 32) y los animales de servicio en cabina (art. 66). Además, el AIC A 04/2026 de ANAC lista el traslado de PMR en ambulift y en silla de ruedas entre los servicios de rampa con tarifa.',
      },
      {
        region: 'UNIÓN EUROPEA',
        title: 'Reglamento (CE) 1107/2006',
        body: 'El servicio de asistencia está organizado y pagado por el aeropuerto. El reglamento remite al Documento 30 de la CEAC y a su código de conducta para la asistencia en tierra. La Comisión Europea publicó guías interpretativas el 4 de octubre de 2024.',
      },
      {
        region: 'REFERENCIA INTERNACIONAL',
        title: 'OACI · Anexo 9',
        body: 'El Capítulo 8 trata el transporte de personas con discapacidad. Entre sus principios figuran la asistencia respetuosa, el acceso equivalente a los servicios aéreos y el transporte sin cargo de las ayudas por discapacidad. En 2026 se propusieron nuevos estándares sobre comunicación y señalización accesibles, que todavía no fueron adoptados.',
        pending: true,
      },
      {
        region: 'REFERENCIA SECTORIAL',
        title: 'IATA · Resolución 700',
        body: 'Fija las normas de la industria para aceptar y transportar pasajeros que requieren asistencia, y la lista de códigos SSR. Las resoluciones de IATA son obligatorias para las aerolíneas miembro.',
        pending: true,
      },
    ] satisfies Regulation[],
    pending: 'En desarrollo',
    comparisonLabel: 'UNA DIFERENCIA DE ORGANIZACIÓN',
    comparison: 'UE: paga el aeropuerto. EE. UU. / Latinoamérica: paga la aerolínea.',
  },
  journey: {
    index: '03 / CIRCUITO DE ASISTENCIA',
    title: 'Circuito de asistencia',
    lead: 'Seis etapas que describen el recorrido del pasajero, desde la comunicación inicial hasta la salida del aeropuerto.',
    stages: [
      { number: '01', title: 'Aviso previo', detail: 'Se comunica a la aerolínea la necesidad de asistencia.' },
      { number: '02', title: 'Check-in', detail: 'Se realiza el registro, incluido el control de baterías de sillas de ruedas.' },
      { number: '03', title: 'Pre-embarque', detail: 'Los pasajeros que requieren asistencia embarcan primero.' },
      { number: '04', title: 'A bordo', detail: 'No pueden ubicarse en filas de salida de emergencia.' },
      { number: '05', title: 'Desembarque', detail: 'El orden de desembarque depende de los procedimientos de cada aerolínea y de las condiciones de seguridad. Puede usarse manga, ambulift o silla de pasillo, y el personal de tierra recibe al pasajero para acompañarlo hasta equipajes o la salida.' },
      { number: '06', title: 'Salida y satisfacción del usuario', detail: 'Finalizado el recorrido, el pasajero puede reclamar si la asistencia no fue la correspondiente. Las instancias se detallan a continuación.' },
    ] satisfies JourneyStage[],
  },
  // Última etapa del circuito: instancias de reclamo, en tono descriptivo.
  complaints: {
    label: 'ETAPA 06',
    title: 'Salida y satisfacción del usuario',
    lead: 'Si la asistencia no fue la que correspondía, el pasajero puede reclamar en dos instancias.',
    stepLabel: 'Instancia',
    steps: [
      {
        title: 'Reclamo ante la aerolínea',
        body: 'Según la Resolución ANAC 774/2025, cada aerolínea debe contar con al menos un canal gratuito y accesible para reclamos (físico, electrónico o telefónico), asignar un número de reclamo único y responder dentro de los 30 días hábiles administrativos. Además, debe asistir a los pasajeros que tengan dificultades para utilizar esos canales.',
      },
      {
        title: 'Conciliación ante la ANAC',
        body: 'Si el reclamo no se resuelve, el pasajero puede recurrir al Servicio de Conciliación para Pasajeros de Transporte Aéreo de la ANAC, creado por el Decreto 809/2024 y reglamentado por la Resolución ANAC 188/2026. Es voluntario y gratuito, se inicia desde el sitio web de la ANAC, y la instancia de conciliación dura como máximo 30 días hábiles administrativos.',
      },
    ] satisfies ComplaintStep[],
    tipLabel: 'Recomendación',
    tip: 'Conservar el número de reclamo y toda la documentación del viaje.',
  },
  // Lista de referencias en APA 7: orden alfabético por el primer elemento de cada cita.
  // Las que no tienen link oficial verificado se muestran con "Link oficial pendiente".
  sources: {
    index: '04 / DOCUMENTACIÓN',
    title: 'Fuentes',
    lead: 'Referencias citadas en la página, en formato APA 7 y en orden alfabético. Las que todavía no tienen link oficial verificado se señalan como pendientes.',
    primary: 'Fuente primaria',
    open: 'Consultar fuente',
    noLink: 'Link oficial pendiente',
    copy: 'Copiar cita',
    items: [
      {
        citation: 'Administración Nacional de Aviación Civil. (2026, 3 de febrero). AIC A 04/2026: Tasas por servicios aeroportuarios.',
        url: 'https://ais.anac.gob.ar/descarga/aic-6982971483fdc',
      },
      {
        citation: 'Centro de Referencia Estatal de Autonomía Personal y Ayudas Técnicas. (2010). Convención sobre los derechos de las personas con discapacidad. CEAPAT-IMSERSO.',
        url: 'https://static.arasaac.org/materials/1508/Convencion_de_los_derechos_de_las_personas_con_discapacidad_CEAPAT_ARASAAC.pdf',
      },
      {
        // TODO: reemplazar la descripción entre corchetes por el título oficial y agregar el link.
        citation: 'Comisión Europea. (2024, 4 de octubre). [Guías interpretativas del Reglamento (CE) n.º 1107/2006].',
      },
      {
        // TODO: completar año, título oficial y link.
        citation: 'Conferencia Europea de Aviación Civil. (s. f.). Documento 30 de la CEAC.',
      },
      {
        citation: 'Decreto 809/2024. (2024, 10 de septiembre). Reglamento del contrato aéreo de pasajeros, equipaje y protección de los derechos del pasajero usuario del transporte aéreo. Boletín Oficial de la República Argentina.',
        url: 'https://www.boletinoficial.gob.ar/detalleAviso/primera/313613/20240910',
        alternate: { label: 'Texto en Infoleg', url: 'https://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=403874' },
      },
      {
        citation: 'International Air Transport Association. (s. f.-a). Best practices on the application of SSR codes and assistance service.',
        url: 'https://www.iata.org/contentassets/7b3762815ac44a10b83ccf5560c1b308/best-practices-on-the-application-of-ssr-codes-and-assistance-service.pdf',
      },
      {
        // TODO: completar año, título oficial y link.
        citation: 'International Air Transport Association. (s. f.-b). Resolución 700.',
      },
      {
        citation: 'International Air Transport Association. (2023). IATA guidance on the transport of mobility aids (1.ª ed.).',
        url: 'https://www.iata.org/contentassets/7b3762815ac44a10b83ccf5560c1b308/iata-guidance-on-the-transport-of-mobility-aids-final-feb2023.pdf',
      },
      {
        // TODO: completar edición vigente y link.
        citation: 'Organización de Aviación Civil Internacional. (s. f.). Anexo 9 al Convenio sobre Aviación Civil Internacional: Facilitación.',
      },
      {
        // TODO: completar fecha y título oficial (no se pudo verificar en EUR-Lex).
        citation: 'Reglamento (CE) n.º 1107/2006 del Parlamento Europeo y del Consejo. (2006). EUR-Lex.',
        url: 'https://eur-lex.europa.eu/eli/reg/2006/1107/oj/spa',
      },
      {
        // TODO: agregar link oficial del Boletín Oficial
        // TODO: completar día y mes de publicación en la cita.
        citation: 'Resolución 188/2026. (2026). Administración Nacional de Aviación Civil. Boletín Oficial de la República Argentina.',
      },
      {
        // TODO: agregar link oficial del Boletín Oficial
        // TODO: completar día y mes de publicación en la cita.
        citation: 'Resolución 774/2025. (2025). Administración Nacional de Aviación Civil. Boletín Oficial de la República Argentina.',
      },
    ] satisfies Source[],
  },
  footer: {
    index: 'GUÍA PMR / UTN · GRUPO 1',
    text: 'Página de apoyo al trabajo de Práctica Profesional Supervisada – Tecnicatura Universitaria en Gestión Aeronáutica',
  },
} as const;
