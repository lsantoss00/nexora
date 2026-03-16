export type CompletedCertificateType = {
  id: string;
  courseTitle: string;
  completedAt: string;
  pdfUrl: string;
  courseImageUrl: string;
};

export type InProgressCertificateType = {
  id: string;
  courseTitle: string;
  progress: number;
  courseImageUrl: string;
};
