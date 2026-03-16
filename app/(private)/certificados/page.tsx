import Column from "@/components/core/column";
import { Metadata } from "next";

import CourseSection from "@/app/(private)/cursos/components/course-section";
import PageHeader from "@/components/page-header";
import CompletedCertificateCard from "./components/completed-certificate-card";
import InProgressCertificateCard from "./components/in-progress-certificate-card";
import {
  mockCompletedCertificates,
  mockInProgressCertificates,
} from "./data/mock-certificates";

export const metadata: Metadata = {
  title: "Certificados",
};

export default function CertificadosPage() {
  return (
    <Column className="w-full gap-10 px-4 py-8 xl:px-8">
      <PageHeader
        title="Certificados"
        subtitle="Visualize seus certificados de cursos concluídos e acompanhe os que estão em andamento."
      />

      <CourseSection title="Certificados Adquiridos">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockCompletedCertificates.map((cert) => (
            <CompletedCertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </CourseSection>

      <CourseSection title="Em Progresso">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mockInProgressCertificates.map((cert) => (
            <InProgressCertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </CourseSection>
    </Column>
  );
}
