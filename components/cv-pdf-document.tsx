import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer"
import type { CVData } from "@/types/cv"

const T = { fontFamily: "CM Serif", color: "#000000" }

const FONT = {
  ...T,
  fontSize: 11,
  lineHeight: 1.3,
} as const

const styles = StyleSheet.create({
  page: {
    paddingTop: 29,
    paddingHorizontal: 43,
    paddingBottom: 30,
    ...FONT,
  },
  name: {
    ...T,
    fontSize: 22,
    textAlign: "center",
    marginBottom: 3,
    lineHeight: 1.1,
  },
  contact: {
    ...T,
    fontSize: 10,
    textAlign: "center",
    marginBottom: 8,
  },
  section: {
    marginBottom: 6,
  },
  sectionTitle: {
    ...T,
    fontSize: 12,
    fontWeight: "bold",
    borderBottomWidth: 0.5,
    borderBottomColor: "#000000",
    paddingBottom: 1.5,
    marginBottom: 6,
    marginTop: 10,
  },
  items: {
    flexDirection: "column",
    gap: 6,
  },
  item: {
    paddingHorizontal: 14.4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  company: { ...T, fontSize: 11, fontWeight: "bold" },
  position: { ...T, fontSize: 11, fontStyle: "italic" },
  degree: { ...T, fontSize: 11 },
  institution: { ...T, fontSize: 11, fontWeight: "bold" },
  meta: { ...T, fontSize: 10 },
  bullets: { marginLeft: 10, marginTop: 1 },
  bulletRow: { flexDirection: "row", marginTop: 1 },
  bulletMark: { ...T, fontSize: 11 },
  bulletText: { ...T, fontSize: 11, flex: 1, marginLeft: 4, textAlign: "justify" },
  skills: { marginLeft: 14.4, flexDirection: "column", gap: 1 },
  skillRow: { flexDirection: "row" },
  skillLabel: { ...T, fontSize: 11, fontWeight: "bold", width: 100 },
  skillValue: { ...T, fontSize: 11, flex: 1 },
  projName: { ...T, fontSize: 11, fontWeight: "bold" },
  projLink: { ...T, fontSize: 10 },
  projDesc: { ...T, fontSize: 11, textAlign: "justify", marginTop: 1 },
  projTech: { ...T, fontSize: 10, fontStyle: "italic", marginTop: 1 },
  pub: { ...T, fontSize: 11, paddingHorizontal: 14.4 },
  profile: { ...T, fontSize: 11, textAlign: "justify" },
})

function dates(start: string, end: string) {
  if (start && end) return `${start} - ${end}`
  return start || end
}

export function CVPDFDocument({ data }: { data: CVData }) {
  const contactParts = [
    data.contact.city,
    data.contact.email,
    data.contact.phone,
    data.contact.linkedin,
    data.contact.github,
  ].filter(Boolean)

  return (
    <Document title={data.contact.fullName || "Curriculum"}>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <Text style={styles.name}>{data.contact.fullName || "Tu Nombre"}</Text>
        {contactParts.length > 0 && (
          <Text style={styles.contact}>{contactParts.join("  \u00B7  ")}</Text>
        )}

        {/* Professional profile */}
        {data.contact.professionalProfile ? (
          <View style={styles.section} break={false}>
            <Text style={styles.sectionTitle}>Perfil Profesional</Text>
            <Text style={styles.profile}>
              {data.contact.professionalProfile}
            </Text>
          </View>
        ) : null}

        {/* Experience */}
        {data.experience.length > 0 ? (
          <View style={styles.section} break={false}>
            <Text style={styles.sectionTitle}>Experiencia Profesional</Text>
            <View style={styles.items}>
              {data.experience.map((exp) => (
                <View key={exp.id} style={styles.item} break={false}>
                  <View style={styles.row}>
                    <Text style={styles.company}>{exp.company}</Text>
                    <Text style={styles.meta}>{exp.location}</Text>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.position}>{exp.position}</Text>
                    <Text style={styles.meta}>
                      {dates(exp.startDate, exp.endDate)}
                    </Text>
                  </View>
                  {exp.responsibilities.length > 0 ? (
                    <View style={styles.bullets}>
                      {exp.responsibilities.map((resp, i) => (
                        <View key={i} style={styles.bulletRow} break={false}>
                          <Text style={styles.bulletMark}>{"\u2022"}</Text>
                          <Text style={styles.bulletText}>{resp}</Text>
                        </View>
                      ))}
                    </View>
                  ) : null}
                </View>
              ))}
            </View>
          </View>
        ) : null}

        {/* Education */}
        {data.education.length > 0 ? (
          <View style={styles.section} break={false}>
            <Text style={styles.sectionTitle}>Educación</Text>
            <View style={styles.items}>
              {data.education.map((edu) => (
                <View key={edu.id} style={styles.item} break={false}>
                  <Text style={styles.institution}>{edu.institution}</Text>
                  <View style={styles.row}>
                    <Text style={styles.degree}>{edu.degree}</Text>
                    <Text style={styles.meta}>
                      {dates(edu.startDate, edu.endDate)}
                    </Text>
                  </View>
                  {edu.achievements.length > 0 ? (
                    <View style={styles.bullets}>
                      {edu.achievements.map((a, i) => (
                        <View key={i} style={styles.bulletRow} break={false}>
                          <Text style={styles.bulletMark}>{"\u2022"}</Text>
                          <Text style={styles.bulletText}>{a}</Text>
                        </View>
                      ))}
                    </View>
                  ) : null}
                </View>
              ))}
            </View>
          </View>
        ) : null}

        {/* Certifications */}
        {data.certifications.length > 0 ? (
          <View style={styles.section} break={false}>
            <Text style={styles.sectionTitle}>Certificaciones</Text>
            <View style={styles.items}>
              {data.certifications.map((cert) => (
                <View key={cert.id} style={styles.item} break={false}>
                  <Text style={styles.institution}>{cert.name}</Text>
                  <View style={styles.row}>
                    <Text style={styles.degree}>{cert.issuer}</Text>
                    <Text style={styles.meta}>
                      {dates(cert.startDate, cert.endDate)}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        ) : null}

        {/* Skills */}
        {data.skills.length > 0 ? (
          <View style={styles.section} break={false}>
            <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
            <View style={styles.skills}>
              {data.skills.map((skill) => (
                <View key={skill.id} style={styles.skillRow} break={false}>
                  <Text style={styles.skillLabel}>{skill.category}:</Text>
                  <Text style={styles.skillValue}>
                    {skill.skills.join(", ")}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        ) : null}

        {/* Projects */}
        {data.projects.length > 0 ? (
          <View style={styles.section} break={false}>
            <Text style={styles.sectionTitle}>Proyectos</Text>
            <View style={styles.items}>
              {data.projects.map((project) => (
                <View key={project.id} style={styles.item} break={false}>
                  <View style={styles.row}>
                    <Text style={styles.projName}>{project.name}</Text>
                    <Text style={styles.projLink}>{project.link}</Text>
                  </View>
                  {project.description ? (
                    <Text style={styles.projDesc}>{project.description}</Text>
                  ) : null}
                  {project.technologies.length > 0 ? (
                    <Text style={styles.projTech}>
                      Tecnologías: {project.technologies.join(", ")}
                    </Text>
                  ) : null}
                </View>
              ))}
            </View>
          </View>
        ) : null}

        {/* Publications */}
        {data.publications.length > 0 ? (
          <View style={styles.section} break={false}>
            <Text style={styles.sectionTitle}>Publicaciones</Text>
            <View style={styles.items}>
              {data.publications.map((pub) => (
                <View key={pub.id} style={styles.item} break={false}>
                  <Text style={styles.institution}>{pub.title}</Text>
                  <View style={styles.row}>
                    <Text style={styles.degree}>{pub.venue}</Text>
                    <Text style={styles.meta}>{pub.year}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        ) : null}
      </Page>
    </Document>
  )
}
