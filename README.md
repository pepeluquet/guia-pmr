# Guía PMR

Página de apoyo académico al trabajo de Práctica Profesional Supervisada "Asistencia a Pasajeros con Movilidad Reducida (PMR) en el Ámbito Aeroportuario" (UTN, Tecnicatura Universitaria en Gestión Aeronáutica, Grupo 1). Hecha con React, Vite, TypeScript y Tailwind CSS.

La guía práctica para pasajeros está en otro proyecto: [pmr-pasajero](https://github.com/pepeluquet/pmr-pasajero). Las reglas de este proyecto están en `CLAUDE.md`.

## Cómo correrla

Requiere [Node.js](https://nodejs.org/) 20 o superior.

```bash
npm install      # instala las dependencias (solo la primera vez o si cambia package.json)
npm run dev      # abre la página en http://localhost:5173
```

Otros comandos:

- `npm run build` genera la versión final en `dist/`.
- `npm run preview` sirve la versión de `dist/` para revisarla.
- `npm run typecheck` revisa errores de TypeScript.

## Dónde está cada cosa

- `src/content/guide.ts` tiene **todos los textos** de la página. Para actualizar el contenido, se edita este archivo.
- `src/App.tsx` define el orden de las secciones.
- `src/components/SiteHeader.tsx` es el encabezado y el menú.
- `src/components/GuideSections.tsx` tiene las secciones de la guía.
- `src/index.css` contiene los estilos, los colores y las tipografías.
- `src/components/ui/` son componentes genéricos (shadcn/ui).
