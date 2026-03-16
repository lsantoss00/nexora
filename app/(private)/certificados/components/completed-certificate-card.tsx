"use client";

import Column from "@/components/core/column";
import DialogComponents from "@/components/core/dialog";
import Row from "@/components/core/row";
import { Award, Download, Eye, Mail } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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
      <Column className="overflow-hidden rounded-xl">
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
            <div className="absolute inset-0 bg-zinc-900" />
          )}
          <div className="absolute top-0 left-0 z-10 h-6 w-6 rounded-tl-xl border-t-2 border-l-2 border-primary/30" />
          <div className="absolute top-0 right-0 z-10 h-6 w-6 rounded-tr-xl border-t-2 border-r-2 border-primary/30" />
          <Column className="relative z-10 items-center gap-3">
            <div className="flex size-14 items-center justify-center rounded-full bg-amber-500/15">
              <Award className="size-8 text-amber-500" />
            </div>
            <Column className="items-center gap-1">
              <h3 className="text-center font-semibold text-white">
                {certificate.courseTitle}
              </h3>
              <p className="text-sm text-zinc-300">
                Concluído em {certificate.completedAt}
              </p>
            </Column>
          </Column>
        </div>
        <Row className="items-center justify-between bg-zinc-900 px-6 py-4">
          <span className="text-xs text-zinc-400">ID: {certificate.id}</span>
          <Row className="items-center gap-3">
            <button
              onClick={() => setViewOpen(true)}
              className="cursor-pointer text-zinc-400 transition-colors hover:text-primary"
              title="Visualizar"
            >
              <Eye className="size-4" />
            </button>
            <button
              onClick={handleDownload}
              className="cursor-pointer text-zinc-400 transition-colors hover:text-primary"
              title="Download"
            >
              <Download className="size-4" />
            </button>
            <button
              onClick={handleMail}
              className="cursor-pointer text-zinc-400 transition-colors hover:text-primary"
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
