// Fee Structure Data - Separated for scalability

export interface FeeProgram {
  title: string;
  pdfUrl: string;
}

export const feeStructureData: Record<string, FeeProgram> = {
  bba: {
    title: "BBA Fee Structure",
    pdfUrl: "http://snbpacsms.com/WebsitePages/PDF/Fees.PDF",
  },
  bca: {
    title: "BCA Fee Structure",
    pdfUrl: "http://snbpacsms.com/WebsitePages/PDF/Fees.PDF",
  },
};
