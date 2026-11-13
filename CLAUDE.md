# Guía PMR (página académica)

## Propósito
Página de apoyo académico al trabajo de Práctica Profesional Supervisada **"Asistencia a Pasajeros con Movilidad Reducida (PMR) en el Ámbito Aeroportuario"** (UTN, Tecnicatura Universitaria en Gestión Aeronáutica, Grupo 1). Presenta en forma resumida y visual los contenidos del trabajo escrito.

La guía práctica para pasajeros es otro proyecto: `pmr-pasajero` (carpeta vecina). Lo que esté dirigido al pasajero (cuestionarios, consejos en segunda persona) va allá, no acá.

## Público
Docentes (tutora y evaluadores) y compañeros de la tecnicatura.

## Secciones (siguen los capítulos del trabajo)
Inicio · Marco conceptual · Marco normativo · Circuito de asistencia · Fuentes. Una sección nueva que todavía no tenga contenido se muestra con el aviso "En preparación".

## Reglas
- **Tono formal** y descriptivo, en tercera persona.
- **Resumir con tablas, esquemas y textos breves.** No copiar párrafos completos del trabajo escrito.
- **Citas en APA 7.** La lista de Fuentes va en orden alfabético e incluye todas las referencias citadas en la página.
- **No inventar links ni datos.** Si falta un dato o un link oficial, se deja marcado como pendiente ("Link oficial pendiente", `TODO` en el código) hasta verificarlo.
- **Accesibilidad:** navegación completa con teclado, contraste alto, letra legible, etiquetas HTML correctas (`button`, `nav`, `table`, `th scope`) y `aria-*` donde corresponda. Respetar `prefers-reduced-motion`.
- **Responsive:** tiene que verse bien en celular y en PC.
- **Todo el contenido en el archivo de datos** `src/content/guide.ts`. Los componentes solo muestran ese contenido.
- **Comentarios en castellano** que expliquen el porqué.

## Estructura
- `src/content/guide.ts`: todos los textos, en el orden de las secciones.
- `src/components/GuideSections.tsx`: una función por sección.
- `src/components/SiteHeader.tsx`: encabezado y menú (se arma con `guide.navigation`).
- `src/index.css`: estilos.

## Comandos
- `npm install` · `npm run dev` · `npm run build` · `npm run typecheck`
- `npm run deploy`: compila y publica en Firebase Hosting (proyecto `guia-pmr`, https://guia-pmr.web.app).
