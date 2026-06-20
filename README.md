# ForjaCV

**ForjaCV** es un creador de currículums en formato **MIT** (estilo *MIT Career Advising & Professional Development*). Permite editar el contenido en un panel lateral, ver una vista previa en tiempo real y exportar el resultado a **PDF** o **LaTeX**.

El formato MIT prioriza la claridad y el impacto sobre el diseño, y es ampliamente aceptado en el sector tecnológico (Google, Microsoft, Meta, Amazon y startups) por ser fácil de leer para reclutadores y compatible con sistemas ATS (*Applicant Tracking Systems*).

## Características del formato

- Diseño limpio y minimalista, sin columnas, iconos ni gráficos.
- Estructura pensada para una sola página (ideal para estudiantes y profesionales con poca experiencia).
- Énfasis en **logros cuantificables** y resultados de impacto, no solo en tareas.
- Tipografía profesional.
- Compatible con sistemas ATS.

## Secciones soportadas

- **Contacto**: nombre, email, teléfono, LinkedIn, GitHub, ciudad y perfil profesional.
- **Educación**: institución, título, fechas y logros.
- **Experiencia**: empresa, cargo, ubicación, fechas y responsabilidades.
- **Proyectos**: nombre, descripción, tecnologías y enlace.
- **Habilidades**: agrupadas por categoría.
- **Publicaciones**: título, revista/venue y año.

## Exportación

- **PDF**: generado en el servidor mediante un endpoint (`/api/pdf`) con `@react-pdf/renderer` y fuentes Latin Modern Roman.
- **LaTeX**: generado en el cliente a partir de los datos del CV.

## Stack tecnológico

- [Next.js](https://nextjs.org/) 16 (App Router)
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) v4
- [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- [@react-pdf/renderer](https://react-pdf.org/) para la generación de PDF
- [pnpm](https://pnpm.io/) como gestor de paquetes
- [Vercel Analytics](https://vercel.com/analytics)

## Requisitos previos

- [Node.js](https://nodejs.org/) 18 o superior
- [pnpm](https://pnpm.io/) (`npm install -g pnpm`)

## Instalación

Clona el repositorio e instala las dependencias:

```bash
git clone https://github.com/marcelolabsdev/ForjaCV.git
cd ForjaCV
pnpm install
```

## Scripts

| Comando        | Descripción                                  |
| -------------- | -------------------------------------------- |
| `pnpm dev`     | Inicia el servidor de desarrollo             |
| `pnpm build`   | Genera la build de producción                |
| `pnpm start`   | Levanta la aplicación en modo producción     |
| `pnpm lint`    | Ejecuta ESLint                               |

## Estructura del proyecto

```
ForjaCV/
├── app/
│   ├── api/
│   │   └── pdf/
│   │       └── route.ts          # Endpoint de generación de PDF
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                  # Página principal (editor + vista previa)
├── components/
│   ├── ui/                       # Componentes shadcn/ui
│   ├── cv-editor.tsx             # Panel de edición
│   ├── cv-pdf-document.tsx       # Plantilla del PDF (@react-pdf/renderer)
│   ├── cv-preview.tsx            # Vista previa en vivo
│   ├── list-field.tsx
│   └── theme-provider.tsx
├── lib/
│   ├── default-cv-data.ts        # Datos de ejemplo
│   ├── latex-generator.ts        # Exportación a LaTeX
│   ├── pdf-generator.ts          # Cliente del endpoint de PDF
│   └── utils.ts
├── types/
│   └── cv.ts                     # Tipos del modelo de datos del CV
└── public/                       # Logo, fuentes e íconos
```

## Licencia

Distribuido bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.

Copyright (c) 2026 marcelolabsdev
