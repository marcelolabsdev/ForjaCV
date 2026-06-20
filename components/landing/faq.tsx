import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/landing/reveal"

const FAQS = [
  {
    question: "¿ForjaCV es gratis?",
    answer:
      "Sí. ForjaCV es de código abierto y se distribuye bajo la licencia MIT. Puedes usarlo y modificarlo libremente.",
  },
  {
    question: "¿Necesito crear una cuenta?",
    answer:
      "No. No hay registro ni servidores que almacenen tu información. Todo el contenido se guarda únicamente en tu navegador mientras lo editas.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "Por completo. La edición y la vista previa ocurren en tu navegador. La generación del PDF se realiza en una única petición al servidor con los datos que decides exportar, y no se almacenan en ningún lugar.",
  },
  {
    question: "¿Es compatible con sistemas ATS?",
    answer:
      "Sí. El formato MIT es minimalista, sin columnas ni gráficos, con texto seleccionable, lo que permite a los Applicant Tracking Systems leer el contenido sin errores.",
  },
  {
    question: "¿Qué es el formato MIT?",
    answer:
      "Es el estilo de currículum recomendado por el MIT (Career Advising & Professional Development). Prioriza la claridad, los logros cuantificables y cabe en una sola página.",
  },
  {
    question: "¿Puedo editar el LaTeX exportado?",
    answer:
      "Sí. Además del PDF, ForjaCV genera el código LaTeX de tu CV para que lo abras y personalices en tu editor favorito (Overleaf, TeX Live, etc.).",
  },
]

export function Faq() {
  return (
    <section id="faq" className="border-b border-border">
      <div className="mx-auto max-w-3xl px-4 py-20 lg:px-6 lg:py-28">
        <Reveal className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-primary">
            Preguntas frecuentes
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Resolvemos tus dudas
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
