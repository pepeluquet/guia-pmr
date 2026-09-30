// Esta es la única fuente de contenido de la página. Editá aquí los textos
// cuando avance la tesis; los componentes solamente se ocupan de mostrarlos.
export type NavigationItem = { id: string; label: string };
export type SsrCode = { code: string; meaning: string };
export type JourneyStage = { number: string; title: string; detail: string };
export type Regulation = {
  region: string;
  title: string;
  body?: string;
  pending?: boolean;
};
export type Source = { citation: string; url: string };

export const guide = {
  metadata: {
    title: 'Guía PMR – Pasajeros con Movilidad Reducida en el transporte aéreo',
    description: 'Una guía académica argentina sobre asistencia a pasajeros con movilidad reducida en el transporte aéreo: solicitud, códigos SSR, recorrido aeroportuario y normativa.',
  },
  brand: { name: 'Guía PMR', descriptor: 'TRANSPORTE AÉREO · ARGENTINA' },
  navigation: [
    { id: 'inicio', label: 'Inicio' },
    { id: 'que-es-pmr', label: '¿Qué es un PMR?' },
    { id: 'asistencia', label: 'Pedir asistencia' },
    { id: 'circuito', label: 'El circuito' },
    { id: 'normativa', label: 'Normativa' },
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
    eyebrow: 'GUÍA ACADÉMICA / EDICIÓN EN DESARROLLO',
    titleStart: 'Viajar empieza',
    titleAccent: 'mucho antes de volar.',
    intro: 'Una guía para comprender qué es un pasajero con movilidad reducida, cómo solicitar asistencia, qué sucede en el aeropuerto y qué establece la normativa.',
    actionPrimary: 'Cómo pedir asistencia',
    actionSecondary: 'Explorar el circuito',
    bottom: 'INFORMACIÓN PARA VIAJAR Y PARA ESTUDIAR',
  },
  definition: {
    index: '01 / CONCEPTOS',
    title: '¿Qué es un PMR?',
    lead: 'Esta sección está reservada para precisar el alcance del término y sus condiciones de aplicación a partir de fuentes oficiales.',
    status: 'En desarrollo',
    cardTitle: 'Preguntas para la investigación',
    questions: [
      '¿Cuál es la diferencia entre movilidad reducida y edad avanzada?',
      '¿Hace falta contar con un Certificado Único de Discapacidad (CUD)?',
    ],
    note: 'Las respuestas se incorporarán después de verificar la documentación correspondiente.',
  },
  assistance: {
    index: '02 / ANTES DE VIAJAR',
    title: 'Cómo pedir asistencia',
    lead: 'La solicitud anticipada permite comunicar las necesidades de asistencia a la aerolínea antes de llegar al aeropuerto.',
    notice: 'Avisá a la aerolínea con anticipación; comúnmente se indica hacerlo al menos 48 horas antes del vuelo.',
    verification: 'Dato a verificar en el texto oficial',
    tableTitle: 'Códigos IATA SSR',
    tableDetail: 'REFERENCIA DE ASISTENCIA',
    columnCode: 'Código',
    columnMeaning: 'Descripción',
    codes: [
      { code: 'WCHR', meaning: 'Puede caminar y subir escaleras pero necesita silla para distancias largas.' },
      { code: 'WCHS', meaning: 'Puede caminar distancias cortas pero no subir escaleras.' },
      { code: 'WCHC', meaning: 'Inmóvil, necesita asistencia completa hasta su asiento.' },
      { code: 'BLND', meaning: 'Pasajero ciego o con disminución visual.' },
      { code: 'DEAF', meaning: 'Pasajero sordo o con disminución auditiva.' },
      { code: 'DPNA', meaning: 'Pasajero con discapacidad intelectual o del desarrollo que necesita asistencia.' },
    ] satisfies SsrCode[],
  },
  journey: {
    index: '03 / PASO A PASO',
    title: 'El circuito en el aeropuerto',
    lead: 'Cinco momentos para visualizar el recorrido, desde la comunicación inicial hasta la llegada.',
    stages: [
      { number: '01', title: 'Aviso previo', detail: 'Se comunica a la aerolínea la necesidad de asistencia.' },
      { number: '02', title: 'Check-in', detail: 'Se realiza el registro, incluido el control de baterías de sillas de ruedas.' },
      { number: '03', title: 'Pre-embarque', detail: 'Los pasajeros que requieren asistencia embarcan primero.' },
      { number: '04', title: 'A bordo', detail: 'No pueden ubicarse en filas de salida de emergencia.' },
      { number: '05', title: 'Desembarque', detail: 'Descienden al final; puede utilizarse un Ambulift.' },
    ] satisfies JourneyStage[],
  },
  regulations: {
    index: '04 / MARCO DE REFERENCIA',
    title: 'Qué dice la normativa',
    lead: 'Normas y referencias para situar la asistencia en el transporte aéreo. Los apartados pendientes se señalan de manera explícita.',
    cards: [
      {
        region: 'ARGENTINA',
        title: 'Decreto 809/2024',
        body: 'Publicado en el Boletín Oficial el 10/09/2024. Aprueba el Reglamento del Contrato Aéreo de Pasajeros y Equipaje y deroga la Resolución 1532/98. Por primera vez incorpora el derecho al transporte de personas con movilidad reducida, exige trato digno y define la figura del «pasajero asistente».',
      },
      {
        region: 'UNIÓN EUROPEA',
        title: 'Reglamento (CE) 1107/2006',
        body: 'El servicio de asistencia está organizado y pagado por el aeropuerto. El reglamento remite al Documento 30 de la CEAC y a su código de conducta para la asistencia en tierra.',
      },
      { region: 'REFERENCIA INTERNACIONAL', title: 'OACI · Anexo 9', pending: true },
      { region: 'REFERENCIA SECTORIAL', title: 'IATA · Resolución 700', pending: true },
    ] satisfies Regulation[],
    pending: 'En desarrollo',
    comparisonLabel: 'UNA DIFERENCIA DE ORGANIZACIÓN',
    comparison: 'UE: paga el aeropuerto. EE. UU. / Latinoamérica: paga la aerolínea.',
  },
  sources: {
    index: '05 / DOCUMENTACIÓN',
    title: 'Fuentes',
    lead: 'Referencias primarias para consultar los textos normativos. Formato de presentación APA 7.',
    primary: 'Fuente primaria',
    open: 'Consultar fuente',
    items: [
      {
        citation: 'Decreto 809/2024. (2024, 10 de septiembre). Boletín Oficial de la República Argentina.',
        url: 'https://www.boletinoficial.gob.ar/detalleAviso/primera/313613/20240910',
      },
      {
        citation: 'Infoleg – Decreto 809/2024',
        url: 'https://servicios.infoleg.gob.ar/infolegInternet/verNorma.do?id=403874',
      },
      {
        citation: 'Reglamento (CE) n.º 1107/2006 del Parlamento Europeo y del Consejo. EUR-Lex.',
        url: 'https://eur-lex.europa.eu/eli/reg/2006/1107/oj/spa',
      },
    ] satisfies Source[],
  },
  footer: {
    index: 'GUÍA PMR / ARGENTINA',
    text: 'Proyecto en construcción – Práctica Supervisada, Tecnicatura Universitaria en Gestión Aeronáutica',
  },
} as const;