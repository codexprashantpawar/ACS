import { useQuery } from "@tanstack/react-query";
import { API_CONFIG, getAssetUrl } from "@/config/api";

interface FileItem {
  id: string;
  name: string;
  url: string;
  type: "pdf" | "image";
  size?: number;
  createdAt?: string;
}

interface FetchFilesParams {
  endpoint: string;
  enabled?: boolean;
}

// Simulated data for development - replace with actual API calls
const mockPdfFiles: FileItem[] = [
  { id: "1", name: "Academic Calendar 2025-26.pdf", url: "/documents/academic-calendar.pdf", type: "pdf" },
  { id: "2", name: "Fee Structure.pdf", url: "/documents/fee-structure.pdf", type: "pdf" },
  { id: "3", name: "Admission Guidelines.pdf", url: "/documents/admission-guidelines.pdf", type: "pdf" },
];

const mockImageFiles: FileItem[] = [
  { id: "1", name: "Campus View", url: "/images/campus-1.jpg", type: "image" },
  { id: "2", name: "Library", url: "/images/library.jpg", type: "image" },
  { id: "3", name: "Sports Ground", url: "/images/sports.jpg", type: "image" },
];

const fetchFiles = async (endpoint: string): Promise<FileItem[]> => {
  // In production, this would be an actual API call:
  // const response = await fetch(`${API_CONFIG.baseUrl}${endpoint}`);
  // if (!response.ok) throw new Error("Failed to fetch files");
  // return response.json();

  // For development, return mock data
  await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate network delay
  
  if (endpoint.includes("pdf")) {
    return mockPdfFiles;
  }
  return mockImageFiles;
};

export const useFileZilla = ({ endpoint, enabled = true }: FetchFilesParams) => {
  return useQuery({
    queryKey: ["filezilla", endpoint],
    queryFn: () => fetchFiles(endpoint),
    staleTime: API_CONFIG.cache.staleTime,
    gcTime: API_CONFIG.cache.cacheTime,
    enabled,
  });
};

export const usePdfFiles = (enabled = true) => {
  return useFileZilla({ endpoint: API_CONFIG.paths.pdfs, enabled });
};

export const useImageFiles = (enabled = true) => {
  return useFileZilla({ endpoint: API_CONFIG.paths.images, enabled });
};

export const useGalleryImages = (enabled = true) => {
  return useFileZilla({ endpoint: API_CONFIG.paths.gallery, enabled });
};

export { getAssetUrl };