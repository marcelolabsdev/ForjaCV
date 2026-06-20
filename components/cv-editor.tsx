"use client"

import { useState } from "react"
import type { CVData, Education, Experience, SkillCategory, Project, Publication } from "@/types/cv"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ListField } from "@/components/list-field"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plus, Trash2 } from "lucide-react"

interface CVEditorProps {
  data: CVData
  onChange: (data: CVData) => void
}

function generateId() {
  return Math.random().toString(36).substring(2, 9)
}

export function CVEditor({ data, onChange }: CVEditorProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(["contact"])

  const updateContact = (field: keyof CVData["contact"], value: string) => {
    onChange({
      ...data,
      contact: { ...data.contact, [field]: value },
    })
  }

  // Education handlers
  const addEducation = () => {
    const newEducation: Education = {
      id: generateId(),
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
      achievements: [],
    }
    onChange({ ...data, education: [...data.education, newEducation] })
  }

  const updateEducation = (id: string, field: keyof Education, value: string | string[]) => {
    onChange({
      ...data,
      education: data.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    })
  }

  const removeEducation = (id: string) => {
    onChange({ ...data, education: data.education.filter((edu) => edu.id !== id) })
  }

  // Experience handlers
  const addExperience = () => {
    const newExperience: Experience = {
      id: generateId(),
      company: "",
      position: "",
      location: "",
      startDate: "",
      endDate: "",
      responsibilities: [],
    }
    onChange({ ...data, experience: [...data.experience, newExperience] })
  }

  const updateExperience = (id: string, field: keyof Experience, value: string | string[]) => {
    onChange({
      ...data,
      experience: data.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    })
  }

  const removeExperience = (id: string) => {
    onChange({ ...data, experience: data.experience.filter((exp) => exp.id !== id) })
  }

  // Skills handlers
  const addSkillCategory = () => {
    const newSkill: SkillCategory = {
      id: generateId(),
      category: "",
      skills: [],
    }
    onChange({ ...data, skills: [...data.skills, newSkill] })
  }

  const updateSkillCategory = (id: string, field: keyof SkillCategory, value: string | string[]) => {
    onChange({
      ...data,
      skills: data.skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      ),
    })
  }

  const removeSkillCategory = (id: string) => {
    onChange({ ...data, skills: data.skills.filter((skill) => skill.id !== id) })
  }

  // Project handlers
  const addProject = () => {
    const newProject: Project = {
      id: generateId(),
      name: "",
      description: "",
      technologies: [],
      link: "",
    }
    onChange({ ...data, projects: [...data.projects, newProject] })
  }

  const updateProject = (id: string, field: keyof Project, value: string | string[]) => {
    onChange({
      ...data,
      projects: data.projects.map((proj) =>
        proj.id === id ? { ...proj, [field]: value } : proj
      ),
    })
  }

  const removeProject = (id: string) => {
    onChange({ ...data, projects: data.projects.filter((proj) => proj.id !== id) })
  }

  // Publication handlers
  const addPublication = () => {
    const newPublication: Publication = {
      id: generateId(),
      title: "",
      venue: "",
      year: "",
    }
    onChange({ ...data, publications: [...data.publications, newPublication] })
  }

  const updatePublication = (id: string, field: keyof Publication, value: string) => {
    onChange({
      ...data,
      publications: data.publications.map((pub) =>
        pub.id === id ? { ...pub, [field]: value } : pub
      ),
    })
  }

  const removePublication = (id: string) => {
    onChange({ ...data, publications: data.publications.filter((pub) => pub.id !== id) })
  }

  return (
    <div className="space-y-3">
      <Accordion 
        type="multiple" 
        value={expandedSections} 
        onValueChange={setExpandedSections}
        className="space-y-2"
      >
        {/* Contact Section */}
        <AccordionItem value="contact" className="border border-border rounded-md bg-background">
          <AccordionTrigger className="hover:no-underline px-3 py-2.5 text-sm">
            <span className="font-medium">Informacion de Contacto</span>
          </AccordionTrigger>
          <AccordionContent className="px-3 pb-3">
            <div className="grid gap-3 pt-1">
              <div className="grid gap-1.5">
                <Label htmlFor="fullName" className="text-xs text-muted-foreground">Nombre Completo</Label>
                <Input
                  id="fullName"
                  value={data.contact.fullName}
                  onChange={(e) => updateContact("fullName", e.target.value)}
                  placeholder="Juan Perez"
                  className="h-8 text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="grid gap-1.5">
                  <Label htmlFor="email" className="text-xs text-muted-foreground">Correo</Label>
                  <Input
                    id="email"
                    type="email"
                    value={data.contact.email}
                    onChange={(e) => updateContact("email", e.target.value)}
                    placeholder="correo@ejemplo.com"
                    className="h-8 text-sm"
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="phone" className="text-xs text-muted-foreground">Telefono</Label>
                  <Input
                    id="phone"
                    value={data.contact.phone}
                    onChange={(e) => updateContact("phone", e.target.value)}
                    placeholder="+56 9 12345678"
                    className="h-8 text-sm"
                  />
                </div>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="city" className="text-xs text-muted-foreground">Ciudad</Label>
                <Input
                  id="city"
                  value={data.contact.city}
                  onChange={(e) => updateContact("city", e.target.value)}
                  placeholder="Santiago, Chile"
                  className="h-8 text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="grid gap-1.5">
                  <Label htmlFor="linkedin" className="text-xs text-muted-foreground">LinkedIn</Label>
                  <Input
                    id="linkedin"
                    value={data.contact.linkedin}
                    onChange={(e) => updateContact("linkedin", e.target.value)}
                    placeholder="linkedin.com/in/usuario"
                    className="h-8 text-sm"
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="github" className="text-xs text-muted-foreground">GitHub</Label>
                  <Input
                    id="github"
                    value={data.contact.github}
                    onChange={(e) => updateContact("github", e.target.value)}
                    placeholder="github.com/usuario"
                    className="h-8 text-sm"
                  />
                </div>
              </div>
              <div className="grid gap-1.5 pt-2 border-t border-border">
                <Label htmlFor="professionalProfile" className="text-xs text-muted-foreground">Perfil Profesional</Label>
                <Textarea
                  id="professionalProfile"
                  value={data.contact.professionalProfile || ""}
                  onChange={(e) => updateContact("professionalProfile", e.target.value)}
                  placeholder="Profesional con X anios de experiencia..."
                  rows={3}
                  className="text-sm resize-none"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Education Section */}
        <AccordionItem value="education" className="border border-border rounded-md bg-background">
          <AccordionTrigger className="hover:no-underline px-3 py-2.5 text-sm">
            <span className="font-medium">Educacion</span>
          </AccordionTrigger>
          <AccordionContent className="px-3 pb-3">
            <div className="space-y-3 pt-1">
              {data.education.map((edu, index) => (
                <Card key={edu.id} className="border-border bg-muted/30 py-0 gap-0">
                  <CardContent className="p-3 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground">#{index + 1}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeEducation(edu.id)}
                        className="h-6 w-6 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                    <div className="grid gap-1.5">
                      <Label className="text-xs text-muted-foreground">Institucion</Label>
                      <Input
                        value={edu.institution}
                        onChange={(e) => updateEducation(edu.id, "institution", e.target.value)}
                        placeholder="Universidad de Chile"
                        className="h-8 text-sm"
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <Label className="text-xs text-muted-foreground">Titulo</Label>
                      <Input
                        value={edu.degree}
                        onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                        placeholder="Ingenieria en Computacion"
                        className="h-8 text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="grid gap-1.5">
                        <Label className="text-xs text-muted-foreground">Inicio</Label>
                        <Input
                          value={edu.startDate}
                          onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                          placeholder="Mar 2018"
                          className="h-8 text-sm"
                        />
                      </div>
                      <div className="grid gap-1.5">
                        <Label className="text-xs text-muted-foreground">Fin</Label>
                        <Input
                          value={edu.endDate}
                          onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                          placeholder="Dic 2022"
                          className="h-8 text-sm"
                        />
                      </div>
                    </div>
                    <div className="grid gap-1.5">
                      <Label className="text-xs text-muted-foreground">Logros (uno por linea)</Label>
                      <ListField
                        multiline
                        value={edu.achievements}
                        onChange={(v) => updateEducation(edu.id, "achievements", v)}
                        placeholder="Mejor promedio&#10;Beca de excelencia"
                        rows={2}
                        className="text-sm resize-none"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" onClick={addEducation} size="sm" className="w-full h-8 text-xs">
                <Plus className="w-3.5 h-3.5 mr-1.5" />
                Agregar
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Experience Section */}
        <AccordionItem value="experience" className="border border-border rounded-md bg-background">
          <AccordionTrigger className="hover:no-underline px-3 py-2.5 text-sm">
            <span className="font-medium">Experiencia</span>
          </AccordionTrigger>
          <AccordionContent className="px-3 pb-3">
            <div className="space-y-3 pt-1">
              {data.experience.map((exp, index) => (
                <Card key={exp.id} className="border-border bg-muted/30 py-0 gap-0">
                  <CardContent className="p-3 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground">#{index + 1}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeExperience(exp.id)}
                        className="h-6 w-6 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                    <div className="grid gap-1.5">
                      <Label className="text-xs text-muted-foreground">Empresa</Label>
                      <Input
                        value={exp.company}
                        onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                        placeholder="Empresa S.A."
                        className="h-8 text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="grid gap-1.5">
                        <Label className="text-xs text-muted-foreground">Cargo</Label>
                        <Input
                          value={exp.position}
                          onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                          placeholder="Desarrollador"
                          className="h-8 text-sm"
                        />
                      </div>
                      <div className="grid gap-1.5">
                        <Label className="text-xs text-muted-foreground">Ubicacion</Label>
                        <Input
                          value={exp.location}
                          onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                          placeholder="Santiago"
                          className="h-8 text-sm"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="grid gap-1.5">
                        <Label className="text-xs text-muted-foreground">Inicio</Label>
                        <Input
                          value={exp.startDate}
                          onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                          placeholder="Ene 2020"
                          className="h-8 text-sm"
                        />
                      </div>
                      <div className="grid gap-1.5">
                        <Label className="text-xs text-muted-foreground">Fin</Label>
                        <Input
                          value={exp.endDate}
                          onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                          placeholder="Actual"
                          className="h-8 text-sm"
                        />
                      </div>
                    </div>
                    <div className="grid gap-1.5">
                      <Label className="text-xs text-muted-foreground">Responsabilidades (una por linea)</Label>
                      <ListField
                        multiline
                        value={exp.responsibilities}
                        onChange={(v) => updateExperience(exp.id, "responsibilities", v)}
                        placeholder="Desarrolle aplicaciones web&#10;Lidere equipo de 5 personas"
                        rows={3}
                        className="text-sm resize-none"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" onClick={addExperience} size="sm" className="w-full h-8 text-xs">
                <Plus className="w-3.5 h-3.5 mr-1.5" />
                Agregar
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Skills Section */}
        <AccordionItem value="skills" className="border border-border rounded-md bg-background">
          <AccordionTrigger className="hover:no-underline px-3 py-2.5 text-sm">
            <span className="font-medium">Habilidades</span>
          </AccordionTrigger>
          <AccordionContent className="px-3 pb-3">
            <div className="space-y-3 pt-1">
              {data.skills.map((skill, index) => (
                <Card key={skill.id} className="border-border bg-muted/30 py-0 gap-0">
                  <CardContent className="p-3 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground">#{index + 1}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeSkillCategory(skill.id)}
                        className="h-6 w-6 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                    <div className="grid gap-1.5">
                      <Label className="text-xs text-muted-foreground">Categoria</Label>
                      <Input
                        value={skill.category}
                        onChange={(e) => updateSkillCategory(skill.id, "category", e.target.value)}
                        placeholder="Lenguajes"
                        className="h-8 text-sm"
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <Label className="text-xs text-muted-foreground">Habilidades (separadas por coma)</Label>
                      <ListField
                        value={skill.skills}
                        onChange={(v) => updateSkillCategory(skill.id, "skills", v)}
                        placeholder="Python, JavaScript, TypeScript"
                        className="h-8 text-sm"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" onClick={addSkillCategory} size="sm" className="w-full h-8 text-xs">
                <Plus className="w-3.5 h-3.5 mr-1.5" />
                Agregar
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Projects Section */}
        <AccordionItem value="projects" className="border border-border rounded-md bg-background">
          <AccordionTrigger className="hover:no-underline px-3 py-2.5 text-sm">
            <span className="font-medium">Proyectos</span>
          </AccordionTrigger>
          <AccordionContent className="px-3 pb-3">
            <div className="space-y-3 pt-1">
              {data.projects.map((project, index) => (
                <Card key={project.id} className="border-border bg-muted/30 py-0 gap-0">
                  <CardContent className="p-3 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground">#{index + 1}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeProject(project.id)}
                        className="h-6 w-6 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                    <div className="grid gap-1.5">
                      <Label className="text-xs text-muted-foreground">Nombre</Label>
                      <Input
                        value={project.name}
                        onChange={(e) => updateProject(project.id, "name", e.target.value)}
                        placeholder="Sistema de Gestion"
                        className="h-8 text-sm"
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <Label className="text-xs text-muted-foreground">Descripcion</Label>
                      <Textarea
                        value={project.description}
                        onChange={(e) => updateProject(project.id, "description", e.target.value)}
                        placeholder="Aplicacion web para gestionar..."
                        rows={2}
                        className="text-sm resize-none"
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <Label className="text-xs text-muted-foreground">Tecnologias (separadas por coma)</Label>
                      <ListField
                        value={project.technologies}
                        onChange={(v) => updateProject(project.id, "technologies", v)}
                        placeholder="React, Node.js, PostgreSQL"
                        className="h-8 text-sm"
                      />
                    </div>
                    <div className="grid gap-1.5">
                      <Label className="text-xs text-muted-foreground">Enlace</Label>
                      <Input
                        value={project.link}
                        onChange={(e) => updateProject(project.id, "link", e.target.value)}
                        placeholder="github.com/usuario/proyecto"
                        className="h-8 text-sm"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" onClick={addProject} size="sm" className="w-full h-8 text-xs">
                <Plus className="w-3.5 h-3.5 mr-1.5" />
                Agregar
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Publications Section */}
        <AccordionItem value="publications" className="border border-border rounded-md bg-background">
          <AccordionTrigger className="hover:no-underline px-3 py-2.5 text-sm">
            <span className="font-medium">Publicaciones</span>
          </AccordionTrigger>
          <AccordionContent className="px-3 pb-3">
            <div className="space-y-3 pt-1">
              {data.publications.map((pub, index) => (
                <Card key={pub.id} className="border-border bg-muted/30 py-0 gap-0">
                  <CardContent className="p-3 space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground">#{index + 1}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removePublication(pub.id)}
                        className="h-6 w-6 text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                    <div className="grid gap-1.5">
                      <Label className="text-xs text-muted-foreground">Titulo</Label>
                      <Input
                        value={pub.title}
                        onChange={(e) => updatePublication(pub.id, "title", e.target.value)}
                        placeholder="Analisis de algoritmos de ML"
                        className="h-8 text-sm"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="grid gap-1.5">
                        <Label className="text-xs text-muted-foreground">Revista/Conferencia</Label>
                        <Input
                          value={pub.venue}
                          onChange={(e) => updatePublication(pub.id, "venue", e.target.value)}
                          placeholder="IEEE Conference"
                          className="h-8 text-sm"
                        />
                      </div>
                      <div className="grid gap-1.5">
                        <Label className="text-xs text-muted-foreground">Anio</Label>
                        <Input
                          value={pub.year}
                          onChange={(e) => updatePublication(pub.id, "year", e.target.value)}
                          placeholder="2023"
                          className="h-8 text-sm"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button variant="outline" onClick={addPublication} size="sm" className="w-full h-8 text-xs">
                <Plus className="w-3.5 h-3.5 mr-1.5" />
                Agregar
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
