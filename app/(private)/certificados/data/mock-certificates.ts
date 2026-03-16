import type {
  CompletedCertificateType,
  InProgressCertificateType,
} from "../types/certificate-types";

export const mockCompletedCertificates: CompletedCertificateType[] = [
  {
    id: "LUM-2025-8839",
    courseTitle: "Frontend Fundamentals",
    completedAt: "15 de Outubro, 2025",
    pdfUrl: "#",
    courseImageUrl:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  },
  {
    id: "LUM-2025-7721",
    courseTitle: "Agile Project Management",
    completedAt: "22 de Setembro, 2025",
    pdfUrl: "#",
    courseImageUrl:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop",
  },
  {
    id: "LUM-2025-5102",
    courseTitle: "Liderança Empresarial Estratégica",
    completedAt: "10 de Agosto, 2025",
    pdfUrl: "#",
    courseImageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
];

export const mockInProgressCertificates: InProgressCertificateType[] = [
  {
    id: "1",
    courseTitle: "Advanced Full-Stack Development",
    progress: 65,
    courseImageUrl:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
  },
  {
    id: "2",
    courseTitle: "Arquitetura Cloud & DevOps",
    progress: 42,
    courseImageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
  {
    id: "3",
    courseTitle: "Motion Design & Animação",
    progress: 18,
    courseImageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop",
  },
];
