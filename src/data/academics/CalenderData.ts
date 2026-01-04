import { API_BASE } from "@/config/api";

export const calendarFiles: Record<
  string,
  { url: string; type: "pdf" | "docx" | "xlsx" }
> = {
  iqac: { url: `${API_BASE}/PDF/academic/Calendar/iqac.pdf`, type: "pdf" },
  academic: { url: `${API_BASE}/PDF/academic/Calendar/academic.pdf`, type: "pdf" },
  department: { url: `${API_BASE}/PDF/academic/Calendar/department.pdf`, type: "pdf" },
  examination: { url: `${API_BASE}/PDF/academic/Calendar/examination.pdf`, type: "pdf" },
  activity: { url: `${API_BASE}/PDF/academic/Calendar/activity.pdf`, type: "pdf" },
  "training-placement": { url: `${API_BASE}/PDF/academic/Calendar/training-placement.docx`, type: "docx" },
  iic: { url: `${API_BASE}/PDF/academic/Calendar/iic.xlsx`, type: "xlsx" },
};

export const calendarLabels: Record<string, string> = {
  iqac: "IQAC",
  academic: "Academic",
  department: "Department",
  examination: "Examination",
  activity: "Activity",
  "training-placement": "Training & Placement",
  iic: "IIC",
};
