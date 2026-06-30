import type { CVData } from "@/types/cv"

export function generateLaTeX(data: CVData): string {
  const escapeLatex = (text: string) => {
    return text
      .replace(/\\/g, "\\textbackslash{}")
      .replace(/&/g, "\\&")
      .replace(/%/g, "\\%")
      .replace(/\$/g, "\\$")
      .replace(/#/g, "\\#")
      .replace(/_/g, "\\_")
      .replace(/{/g, "\\{")
      .replace(/}/g, "\\}")
      .replace(/~/g, "\\textasciitilde{}")
      .replace(/\^/g, "\\textasciicircum{}")
  }

  let latex = `\\documentclass[11pt,letterpaper]{article}
\\usepackage[utf8]{inputenc}
\\usepackage[spanish]{babel}
\\usepackage[margin=0.75in]{geometry}
\\usepackage{enumitem}
\\usepackage{titlesec}
\\usepackage{hyperref}
\\usepackage{xcolor}

% Configuración de secciones
\\titleformat{\\section}{\\large\\bfseries}{}{0em}{}[\\titlerule]
\\titlespacing{\\section}{0pt}{12pt}{6pt}

% Configuración de enlaces
\\hypersetup{
    colorlinks=true,
    linkcolor=black,
    urlcolor=black
}

\\begin{document}

% Encabezado
\\begin{center}
{\\LARGE\\bfseries ${escapeLatex(data.contact.fullName)}}\\\\[6pt]
${[
    data.contact.city,
    data.contact.email && `\\href{mailto:${data.contact.email}}{${escapeLatex(data.contact.email)}}`,
    data.contact.phone,
    data.contact.linkedin && `\\href{${data.contact.linkedin}}{LinkedIn}`,
    data.contact.github && `\\href{${data.contact.github}}{GitHub}`,
  ]
    .filter(Boolean)
    .join(" $\\cdot$ ")}
\\end{center}

`

  // Professional Profile - Only if content exists
  if (data.contact.professionalProfile) {
    latex += `\\section*{Perfil Profesional}
${escapeLatex(data.contact.professionalProfile)}

`
  }

  // Experience
  if (data.experience.length > 0) {
    latex += `\\section*{Experiencia Profesional}
\\begin{itemize}[leftmargin=0pt, label={}]
`
    for (const exp of data.experience) {
      latex += `\\item \\textbf{${escapeLatex(exp.company)}} \\hfill ${escapeLatex(exp.location)}\\\\
\\textit{${escapeLatex(exp.position)}} \\hfill ${escapeLatex(exp.startDate)} -- ${escapeLatex(exp.endDate)}
`
      if (exp.responsibilities.length > 0) {
        latex += `\\begin{itemize}[leftmargin=1.5em]
`
        for (const resp of exp.responsibilities) {
          latex += `\\item ${escapeLatex(resp)}
`
        }
        latex += `\\end{itemize}
`
      }
    }
    latex += `\\end{itemize}

`
  }

  // Education
  if (data.education.length > 0) {
    latex += `\\section*{Educación}
\\begin{itemize}[leftmargin=0pt, label={}]
`
    for (const edu of data.education) {
      latex += `\\item \\textbf{${escapeLatex(edu.institution)}} \\hfill ${escapeLatex(edu.startDate)} -- ${escapeLatex(edu.endDate)}\\\\
${escapeLatex(edu.degree)}
`
      if (edu.achievements.length > 0) {
        latex += `\\begin{itemize}[leftmargin=1.5em]
`
        for (const achievement of edu.achievements) {
          latex += `\\item ${escapeLatex(achievement)}
`
        }
        latex += `\\end{itemize}
`
      }
    }
    latex += `\\end{itemize}

`
  }

  // Certifications
  if (data.certifications.length > 0) {
    latex += `\\section*{Certificaciones}
\\begin{itemize}[leftmargin=0pt, label={}]
`
    for (const cert of data.certifications) {
      latex += `\\item \\textbf{${escapeLatex(cert.name)}} \\hfill ${escapeLatex(cert.startDate)} -- ${escapeLatex(cert.endDate)}\\\\
${escapeLatex(cert.issuer)}
`
    }
    latex += `\\end{itemize}

`
  }

  // Skills
  if (data.skills.length > 0) {
    latex += `\\section*{Habilidades Técnicas}
\\begin{itemize}[leftmargin=0pt, label={}]
`
    for (const skill of data.skills) {
      latex += `\\item \\textbf{${escapeLatex(skill.category)}:} ${skill.skills.map(escapeLatex).join(", ")}
`
    }
    latex += `\\end{itemize}

`
  }

  // Projects
  if (data.projects.length > 0) {
    latex += `\\section*{Proyectos}
\\begin{itemize}[leftmargin=0pt, label={}]
`
    for (const project of data.projects) {
      latex += `\\item \\textbf{${escapeLatex(project.name)}}${project.link ? ` -- \\href{${project.link}}{Ver proyecto}` : ""}\\\\
${escapeLatex(project.description)}\\\\
\\textit{Tecnologías:} ${project.technologies.map(escapeLatex).join(", ")}
`
    }
    latex += `\\end{itemize}

`
  }

  // Publications
  if (data.publications.length > 0) {
    latex += `\\section*{Publicaciones}
\\begin{itemize}[leftmargin=0pt, label={}]
`
    for (const pub of data.publications) {
      latex += `\\item \\textbf{${escapeLatex(pub.title)}} \\hfill ${escapeLatex(pub.year)}\\\\
${escapeLatex(pub.venue)}
`
    }
    latex += `\\end{itemize}

`
  }

  latex += `\\end{document}`

  return latex
}
