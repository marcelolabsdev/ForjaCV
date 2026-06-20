"use client"

import type { CVData } from "@/types/cv"

interface CVPreviewProps {
  data: CVData
}

const SECTION_TITLE: React.CSSProperties = {
  fontSize: "12pt",
  fontWeight: "bold",
  borderBottom: "0.5pt solid #000",
  paddingBottom: "1.5pt",
  marginBottom: "6pt",
  marginTop: "10pt",
}

const ITEM_INDENT: React.CSSProperties = {
  paddingInline: "0.20in",
}

const BULLET_LIST: React.CSSProperties = {
  fontSize: "11pt",
  marginTop: "1pt",
  marginBottom: 0,
  marginLeft: 0,
  paddingLeft: "0.35in",
  listStyleType: "disc",
  listStylePosition: "outside",
}

export function CVPreview({ data }: CVPreviewProps) {
  const contactParts = [
    data.contact.city,
    data.contact.email,
    data.contact.phone,
    data.contact.linkedin,
    data.contact.github,
  ].filter(Boolean)

  return (
    <div
      className="cv-preview w-full max-w-[8.27in] bg-white text-black shadow-lg print:shadow-none print:max-w-none"
      style={{
        fontFamily: "'CM Serif', 'Latin Modern Roman', Georgia, 'Times New Roman', serif",
        fontSize: "11pt",
        lineHeight: "1.3",
        color: "#000",
        padding: "0.4in 0.6in",
        letterSpacing: "normal",
      }}
    >
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "8pt" }}>
        <h1
          style={{
            fontSize: "22pt",
            fontWeight: "normal",
            marginBottom: "3pt",
            lineHeight: "1.1",
          }}
        >
          {data.contact.fullName || "Tu Nombre"}
        </h1>
        {contactParts.length > 0 && (
          <p style={{ fontSize: "10pt", color: "#000" }}>
            {contactParts.join("  \u00B7  ")}
          </p>
        )}
      </header>

      {/* Professional Profile (optional) */}
      {data.contact.professionalProfile && (
        <section style={{ marginBottom: "6pt" }}>
          <h2 className="cv-section-title" style={SECTION_TITLE}>Perfil Profesional</h2>
          <p style={{ fontSize: "11pt", textAlign: "justify" }}>
            {data.contact.professionalProfile}
          </p>
        </section>
      )}

      {/* Experience */}
      {data.experience.length > 0 && (
        <section style={{ marginBottom: "6pt" }}>
          <h2 className="cv-section-title" style={SECTION_TITLE}>Experiencia Profesional</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "6pt" }}>
            {data.experience.map((exp) => (
              <div className="cv-item" key={exp.id} style={ITEM_INDENT}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8pt" }}>
                  <span style={{ fontSize: "11pt", fontWeight: "bold" }}>{exp.company}</span>
                  <span style={{ fontSize: "10pt", whiteSpace: "nowrap" }}>{exp.location}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8pt" }}>
                  <span style={{ fontSize: "11pt", fontStyle: "italic" }}>{exp.position}</span>
                  <span style={{ fontSize: "10pt", whiteSpace: "nowrap" }}>
                    {exp.startDate}{exp.startDate && exp.endDate ? " - " : ""}{exp.endDate}
                  </span>
                </div>
                {exp.responsibilities.length > 0 && (
                  <ul style={BULLET_LIST}>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} style={{ marginBottom: "0.5pt", textAlign: "justify" }}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {data.education.length > 0 && (
        <section style={{ marginBottom: "6pt" }}>
          <h2 className="cv-section-title" style={SECTION_TITLE}>Educación</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "5pt" }}>
            {data.education.map((edu) => (
              <div className="cv-item" key={edu.id} style={ITEM_INDENT}>
                <div style={{ fontSize: "11pt", fontWeight: "bold" }}>{edu.institution}</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: "8pt" }}>
                  <span style={{ fontSize: "11pt" }}>{edu.degree}</span>
                  <span style={{ fontSize: "10pt", whiteSpace: "nowrap" }}>
                    {edu.startDate}{edu.startDate && edu.endDate ? " - " : ""}{edu.endDate}
                  </span>
                </div>
                {edu.achievements.length > 0 && (
                  <ul style={BULLET_LIST}>
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} style={{ marginBottom: "0.5pt", textAlign: "justify" }}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {data.skills.length > 0 && (
        <section style={{ marginBottom: "6pt" }}>
          <h2 className="cv-section-title" style={SECTION_TITLE}>Habilidades Técnicas</h2>
          <div style={{ paddingLeft: "0.20in", display: "flex", flexDirection: "column", gap: "1pt" }}>
            {data.skills.map((skill) => (
              <div
                className="cv-item"
                key={skill.id}
                style={{ display: "grid", gridTemplateColumns: "1.4in 1fr", columnGap: "0.18in", fontSize: "11pt" }}
              >
                <span style={{ fontWeight: "bold" }}>{skill.category}:</span>
                <span>{skill.skills.join(", ")}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {data.projects.length > 0 && (
        <section style={{ marginBottom: "6pt" }}>
          <h2 className="cv-section-title" style={SECTION_TITLE}>Proyectos</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "5pt" }}>
            {data.projects.map((project) => (
              <div className="cv-item" key={project.id} style={ITEM_INDENT}>
                <p>
                  <span style={{ fontSize: "11pt", fontWeight: "bold" }}>{project.name}</span>
                  {project.link && <span style={{ fontSize: "10pt" }}> - {project.link}</span>}
                </p>
                <p style={{ fontSize: "11pt", textAlign: "justify" }}>{project.description}</p>
                {project.technologies.length > 0 && (
                  <p style={{ fontSize: "10pt", fontStyle: "italic" }}>
                    Tecnologías: {project.technologies.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Publications */}
      {data.publications.length > 0 && (
        <section style={{ marginBottom: "6pt" }}>
          <h2 className="cv-section-title" style={SECTION_TITLE}>Publicaciones</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1pt" }}>
            {data.publications.map((pub) => (
              <p className="cv-item" key={pub.id} style={{ fontSize: "11pt", paddingInline: "0.20in" }}>
                {pub.title}. <span style={{ fontStyle: "italic" }}>{pub.venue}</span>, {pub.year}.
              </p>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
