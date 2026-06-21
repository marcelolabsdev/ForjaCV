const SITE_URL = 'https://forja-cv.vercel.app'

const webSiteSchema = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: 'ForjaCV',
  description:
    'Creador de currículums en formato MIT. Edita, previsualiza en tiempo real y exporta a PDF o LaTeX.',
  inLanguage: 'es',
  publisher: { '@id': `${SITE_URL}/#webapplication` },
}

const webApplicationSchema = {
  '@type': 'WebApplication',
  '@id': `${SITE_URL}/#webapplication`,
  name: 'ForjaCV',
  alternateName: 'Forja CV',
  url: SITE_URL,
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'ResumeBuilder',
  operatingSystem: 'Any',
  browserRequirements: 'Requires JavaScript',
  inLanguage: 'es',
  description:
    'ForjaCV es un creador de currículums en formato MIT, de código abierto. Permite editar el contenido en un panel lateral, ver una vista previa en tiempo real y exportar el resultado a PDF o LaTeX. Compatible con sistemas ATS, sin registro.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'EUR',
  },
  featureList: [
    'Vista previa en tiempo real mientras editas',
    'Exportación a PDF con fuentes Latin Modern Roman',
    'Exportación a código LaTeX',
    'Compatible con sistemas ATS (Applicant Tracking Systems)',
    'Privacidad por diseño: los datos viven en el navegador',
    'Plantilla en formato MIT recomendada por el MIT',
  ],
  author: {
    '@type': 'Person',
    name: 'marcelolabsdev',
    url: 'https://github.com/marcelolabsdev',
  },
  license: 'https://github.com/marcelolabsdev/ForjaCV/blob/main/LICENSE',
  isAccessibleForFree: true,
}

const faqSchema = {
  '@type': 'FAQPage',
  '@id': `${SITE_URL}/#faqpage`,
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿ForjaCV es gratis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. ForjaCV es de código abierto y se distribuye bajo la licencia MIT. Puedes usarlo y modificarlo libremente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito crear una cuenta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. No hay registro ni servidores que almacenen tu información. Todo el contenido se guarda únicamente en tu navegador mientras lo editas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Mis datos están seguros?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Por completo. La edición y la vista previa ocurren en tu navegador. La generación del PDF se realiza en una única petición al servidor con los datos que decides exportar, y no se almacenan en ningún lugar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es compatible con sistemas ATS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. El formato MIT es minimalista, sin columnas ni gráficos, con texto seleccionable, lo que permite a los Applicant Tracking Systems leer el contenido sin errores.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué es el formato MIT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es el estilo de currículum recomendado por el MIT (Career Advising & Professional Development). Prioriza la claridad, los logros cuantificables y cabe en una sola página.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo editar el LaTeX exportado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Además del PDF, ForjaCV genera el código LaTeX de tu CV para que lo abras y personalices en tu editor favorito (Overleaf, TeX Live, etc.).',
      },
    },
  ],
}

const graph = {
  '@context': 'https://schema.org',
  '@graph': [webSiteSchema, webApplicationSchema, faqSchema],
}

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
