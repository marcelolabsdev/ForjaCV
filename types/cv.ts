export interface ContactInfo {
  fullName: string
  email: string
  phone: string
  linkedin: string
  github: string
  city: string
  professionalProfile?: string
}

export interface Education {
  id: string
  institution: string
  degree: string
  startDate: string
  endDate: string
  achievements: string[]
}

export interface Experience {
  id: string
  company: string
  position: string
  location: string
  startDate: string
  endDate: string
  responsibilities: string[]
}

export interface SkillCategory {
  id: string
  category: string
  skills: string[]
}

export interface Project {
  id: string
  name: string
  description: string
  technologies: string[]
  link: string
}

export interface Publication {
  id: string
  title: string
  venue: string
  year: string
}

export interface CVData {
  contact: ContactInfo
  education: Education[]
  experience: Experience[]
  skills: SkillCategory[]
  projects: Project[]
  publications: Publication[]
}
