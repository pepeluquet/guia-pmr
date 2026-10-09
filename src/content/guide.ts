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
export type Definition = { source: string; text: string; note: string };
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
  },
  assistance: {
    index: '02 / ANTES DE VIAJAR',
    title: 'Cómo pedir asistencia',
    lead: 'La solicitud anticipada permite comunicar las necesidades de asistencia a la aerolínea antes de llegar al aeropuerto. Según el Decreto 809/2024, el transportador debe ofrecer check-in prioritario y gratuito y la asistencia requerida, salvo causa probada que ponga en riesgo la seguridad operacional.',
    notice: 'Avisá a la aerolínea con al menos 48 horas de anticipación. El plazo figura en el artículo 31 del Anexo I del Decreto 809/2024, y IATA también lo recomienda.',
    verification: 'Fuente: Decreto 809/2024, Anexo I, art. 31 · IATA, mejores prácticas de códigos SSR',
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
  sources: {
    index: '05 / DOCUMENTACIÓN',
    title: 'Fuentes',
    lead: 'Referencias primarias para consultar los textos normativos. Formato de presentación APA 7.',
    primary: 'Fuente primaria',
    open: 'Consultar fuente',
    copy: 'Copiar cita',
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
        citation: 'Decreto 809/2024. Reglamento del contrato aéreo de pasajeros, equipaje y protección de los derechos del pasajero usuario del transporte aéreo (Anexo I). Argentina.gob.ar.',
        url: 'https://www.argentina.gob.ar/normativa/nacional/decreto-809-2024-403874/texto',
      },
      {
        citation: 'Reglamento (CE) n.º 1107/2006 del Parlamento Europeo y del Consejo. EUR-Lex.',
        url: 'https://eur-lex.europa.eu/eli/reg/2006/1107/oj/spa',
      },
      {
        citation: 'Administración Nacional de Aviación Civil. (2026, 3 de febrero). AIC A 04/2026: Tasas por servicios aeroportuarios.',
        url: 'https://ais.anac.gob.ar/descarga/aic-6982971483fdc',
      },
      {
        citation: 'International Air Transport Association. (s. f.). Best practices on the application of SSR codes and assistance service.',
        url: 'https://www.iata.org/contentassets/7b3762815ac44a10b83ccf5560c1b308/best-practices-on-the-application-of-ssr-codes-and-assistance-service.pdf',
      },
      {
        citation: 'International Air Transport Association. (2023). IATA guidance on the transport of mobility aids (1.ª ed.).',
        url: 'https://www.iata.org/contentassets/7b3762815ac44a10b83ccf5560c1b308/iata-guidance-on-the-transport-of-mobility-aids-final-feb2023.pdf',
      },
      {
        citation: 'Centro de Referencia Estatal de Autonomía Personal y Ayudas Técnicas. (2010). Convención sobre los derechos de las personas con discapacidad. CEAPAT-IMSERSO.',
        url: 'https://static.arasaac.org/materials/1508/Convencion_de_los_derechos_de_las_personas_con_discapacidad_CEAPAT_ARASAAC.pdf',
      },
    ] satisfies Source[],
  },
  footer: {
    index: 'GUÍA PMR / ARGENTINA',
    text: 'Proyecto en construcción – Práctica Supervisada, Tecnicatura Universitaria en Gestión Aeronáutica',
  },
} as const;