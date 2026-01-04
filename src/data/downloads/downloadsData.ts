// Downloads Page Data - Separated from siteConfig for scalability

export interface DownloadFile {
  id: string;
  name: string;
  category: string;
  url: string;
}

export const downloadsData: DownloadFile[] = [
  { id: "1", name: "Admission Form 2024-25", category: "Admission", url: "#" },
  { id: "2", name: "Fee Structure 2024-25", category: "Admission", url: "#" },
  { id: "3", name: "Academic Calendar", category: "Academic", url: "#" },
  { id: "4", name: "Examination Schedule", category: "Examination", url: "#" },
  { id: "5", name: "Scholarship Forms", category: "Scholarship", url: "#" },
  { id: "6", name: "Library Rules", category: "Library", url: "#" },
  { id: "7", name: "BBA Syllabus", category: "Syllabus", url: "#" },
  { id: "8", name: "BCA Syllabus", category: "Syllabus", url: "#" },
  { id: "9", name: "B.Com Syllabus", category: "Syllabus", url: "#" },
  { id: "10", name: "Anti-Ragging Declaration", category: "General", url: "#" },
  { id: "11", name: "Code of Conduct", category: "General", url: "#" },
  { id: "12", name: "Prospectus 2024-25", category: "Admission", url: "#" },
];
