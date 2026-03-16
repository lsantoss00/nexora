import Column from "@/components/core/column";
import { Metadata } from "next";

import PageHeader from "@/components/page-header";
import AllCoursesGrid from "./components/all-courses-grid";

export const metadata: Metadata = {
  title: "Todos os Cursos",
};

export default function AllCoursesPage() {
  return (
    <Column className="w-full gap-8 px-4 xl:px-8 py-8">
      <PageHeader
        title="Todos os Cursos"
        subtitle="Explore todos os cursos disponíveis e encontre o que melhor se adapta às suas necessidades."
      />

      <AllCoursesGrid />
    </Column>
  );
}
