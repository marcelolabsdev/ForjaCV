import type { CVData } from "@/types/cv"

export const defaultCVData: CVData = {
  contact: {
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    city: "",
    professionalProfile: "",
  },
  education: [],
  experience: [],
  certifications: [],
  skills: [],
  projects: [],
  publications: [],
}
