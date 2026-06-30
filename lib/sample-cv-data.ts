import type { CVData } from "@/types/cv"

export const sampleCVData: CVData = {
  contact: {
    fullName: "Alex Rivera",
    email: "alex.rivera@email.com",
    phone: "+1 (555) 123-4567",
    linkedin: "linkedin.com/in/alexrivera",
    github: "github.com/alexrivera",
    city: "Boston, MA",
    professionalProfile:
      "Ingeniero de software con experiencia construyendo aplicaciones web escalables y sistemas distribuidos. Apasionado por el rendimiento, la fiabilidad y la entrega de productos con impacto medible.",
  },
  experience: [
    {
      id: "exp-1",
      company: "Vercel",
      position: "Ingeniero de Software (Prácticas)",
      location: "Remoto",
      startDate: "Jun 2023",
      endDate: "Ago 2023",
      responsibilities: [
        "Reduje el tiempo de build en un 38% optimizando el pipeline de compilación incremental",
        "Implementé caché distribuida que sirvió 12M de peticiones/día con un p99 de 80ms",
        "Colaboré con un equipo de 6 ingenieros siguiendo prácticas de code review y CI/CD",
      ],
    },
    {
      id: "exp-2",
      company: "Tech Startup",
      position: "Desarrollador Full-Stack",
      location: "Boston, MA",
      startDate: "Ene 2022",
      endDate: "May 2023",
      responsibilities: [
        "Construí una plataforma SaaS con Next.js y PostgreSQL que escaló a 5K usuarios activos",
        "Diseñé una API REST que procesa 2M de eventos diarios con 99.95% de disponibilidad",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      institution: "Massachusetts Institute of Technology",
      degree: "B.S. en Ciencias de la Computación",
      startDate: "Sep 2020",
      endDate: "Jun 2024",
      achievements: [
        "GPA: 3.9/4.0 · Decano de la lista de honor (2022-2024)",
        "Becario del programa de investigación en Sistemas Distribuidos",
      ],
    },
  ],
  certifications: [
    {
      id: "cert-1",
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      startDate: "Ene 2023",
      endDate: "Ene 2026",
    },
    {
      id: "cert-2",
      name: "Deep Learning Specialization",
      issuer: "DeepLearning.AI / Coursera",
      startDate: "Mar 2022",
      endDate: "Jun 2022",
    },
  ],
  skills: [
    {
      id: "skill-1",
      category: "Lenguajes",
      skills: ["TypeScript", "Python", "Go", "SQL"],
    },
    {
      id: "skill-2",
      category: "Frameworks",
      skills: ["React", "Next.js", "Node.js", "FastAPI"],
    },
    {
      id: "skill-3",
      category: "Infraestructura",
      skills: ["AWS", "Docker", "Kubernetes", "PostgreSQL"],
    },
  ],
  projects: [
    {
      id: "proj-1",
      name: "ForjaCV",
      description:
        "Creador de currículums en formato MIT con vista previa en tiempo real y exportación a PDF y LaTeX.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      link: "github.com/marcelolabsdev/ForjaCV",
    },
  ],
  publications: [
    {
      id: "pub-1",
      title: "Caché predictiva para sistemas distribuidos de baja latencia",
      venue: "Proc. of the ACM on Computer Systems",
      year: "2024",
    },
  ],
}
