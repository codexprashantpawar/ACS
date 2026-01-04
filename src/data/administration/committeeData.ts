import { API_BASE } from "@/config/api";

export const committeeFiles: Record<string, { url: string; type: "pdf" | "docx" | "xlsx" }> = {
  "statutory-committees": {
    url: `${API_BASE}/PDF/administration/Committes/Satutory.pdf`, // match server exactly
    type: "pdf",
  },
  "non-statutory-committees": {
    url: `${API_BASE}/PDF/administration/Committes/Non-Satutory.pdf`, // match server spelling
    type: "pdf",
  },
};

export const committeeLabels: Record<string, string> = {
  "statutory-committees": "Statutory Committees",
  "non-statutory-committees": "Non-Statutory Committees",
};
