import Column from "@/components/core/column";
import Row from "@/components/core/row";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import AllCoursesGrid from "./components/all-courses-grid";

export const metadata: Metadata = {
  title: "Todos os Cursos",
};

export default function AllCoursesPage() {
  return (
    <Column className="w-full max-w-6xl gap-8 px-6 py-8">
      <Column className="gap-2">
        <Link
          href="/cursos"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors w-fit"
        >
          <ArrowLeft className="size-4" />
          Voltar
        </Link>
        <h1 className="text-2xl font-bold">Todos os Cursos</h1>
      </Column>

      <AllCoursesGrid />
    </Column>
  );
}
