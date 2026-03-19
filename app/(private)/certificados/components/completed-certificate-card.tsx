"use client";

import Column from "@/components/core/column";
import DialogComponents from "@/components/core/dialog";
import Row from "@/components/core/row";
import { Award, Download, Eye, Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { cn } from "@/utils/cn";
import { toast } from "@/utils/toast";
import type { CompletedCertificateType } from "../types/certificate-types";

const { Dialog, DialogContent, DialogHeader, DialogTitle } = DialogComponents;

type CompletedCertificateCardProps = {
  certificate: CompletedCertificateType;
};

const CompletedCertificateCard = ({
  certificate,
}: CompletedCertificateCardProps) => {
  const [imgError, setImgError] = useState(false);
  const [viewOpen, setViewOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = certificate.pdfUrl;
    link.download = `certificado-${certificate.id}.pdf`;
    link.click();
  };

  const handleMail = () => {
    toast.success(
      "Certificado enviado com sucesso para o seu e-mail de cadastro!",
    );
  };

  const hasImage = certificate.courseImageUrl && !imgError;

  return (
    <>
      <Column className="overflow-hidden rounded-xl border">
        <div className="relative p-6">
          {hasImage ? (
            <>
              <Image
                src={certificate.courseImageUrl}
                alt=""
                fill
                className="object-cover"
                onError={() => setImgError(true)}
              />
              <div className="absolute inset-0 bg-black/70" />
            </>
          ) : (
            <div className="absolute inset-0 bg-card" />
          )}
          <Column className="relative z-10 items-center gap-3">
            <div className="flex size-14 items-center justify-center rounded-full bg-primary/20">
              <Award className="size-8 text-primary" />
            </div>
            <Column className="items-center gap-1">
              <h3 className={cn("text-center font-semibold", hasImage ? "text-white" : "text-foreground")}>
                {certificate.courseTitle}
              </h3>
              <p className={cn("text-sm", hasImage ? "text-white/70" : "text-muted-foreground")}>
                Concluído em {certificate.completedAt}
              </p>
            </Column>
          </Column>
        </div>
        <Row className="items-center justify-between bg-card px-6 py-4">
          <span className="text-xs text-muted-foreground">ID: {certificate.id}</span>
          <Row className="items-center gap-3">
            <button
              onClick={() => setViewOpen(true)}
              className="cursor-pointer text-muted-foreground transition-colors hover:text-primary"
              title="Visualizar"
            >
              <Eye className="size-4" />
            </button>
            <button
              onClick={handleDownload}
              className="cursor-pointer text-muted-foreground transition-colors hover:text-primary"
              title="Download"
            >
              <Download className="size-4" />
            </button>
            <button
              onClick={handleMail}
              className="cursor-pointer text-muted-foreground transition-colors hover:text-primary"
              title="Enviar por e-mail"
            >
              <Mail className="size-4" />
            </button>
          </Row>
        </Row>
      </Column>
      <Dialog open={viewOpen} onOpenChange={setViewOpen}>
        <DialogContent className="h-[85vh] w-full! max-w-4xl! p-0">
          <DialogHeader className="px-6 pt-6">
            <DialogTitle>{certificate.courseTitle}</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CompletedCertificateCard;
