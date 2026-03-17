"use client";

import Column from "@/components/core/column";
import Progress from "@/components/core/progress";
import Row from "@/components/core/row";
import { Award } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import type { InProgressCertificateType } from "../types/certificate-types";

type InProgressCertificateCardProps = {
  certificate: InProgressCertificateType;
};

const InProgressCertificateCard = ({
  certificate,
}: InProgressCertificateCardProps) => {
  const [imgError, setImgError] = useState(false);
  const remaining = 100 - certificate.progress;
  const hasImage = certificate.courseImageUrl && !imgError;

  return (
    <Column className="relative overflow-hidden border rounded-xl p-6">
      {hasImage ? (
        <>
          <Image
            src={certificate.courseImageUrl}
            alt=""
            fill
            className="object-cover grayscale"
            onError={() => setImgError(true)}
          />
          <div className="absolute inset-0 bg-black/80" />
        </>
      ) : (
        <div className="absolute inset-0 bg-card" />
      )}
      <Column className="relative z-10 items-center gap-3">
        <div className="flex size-14 items-center justify-center rounded-full bg-blue-500/20">
          <Award className="size-8 text-blue-500/50" />
        </div>
        <Column className="items-center gap-1">
          <h3 className="text-center font-semibold text-zinc-300">
            {certificate.courseTitle}
          </h3>
          <p className="text-center text-sm text-zinc-500">
            Complete mais{" "}
            <span className="text-lg font-bold text-primary">{remaining}%</span>{" "}
            para desbloquear este certificado.
          </p>
        </Column>
        <Row className="w-full items-center gap-2 mt-2">
          <Progress value={certificate.progress} className="h-2 flex-1" />
          <span className="text-sm font-bold text-primary">
            {certificate.progress}%
          </span>
        </Row>
      </Column>
    </Column>
  );
};

export default InProgressCertificateCard;
