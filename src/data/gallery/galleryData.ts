// Gallery Page Data - Separated from siteConfig for scalability

export interface GalleryImage {
  id: string;
  name: string;
  url: string;
  category: string;
}

export const galleryData: GalleryImage[] = [
  { id: "1", name: "Main Building", url: "/placeholder.svg", category: "Campus" },
  { id: "2", name: "Library", url: "/placeholder.svg", category: "Facilities" },
  { id: "3", name: "Computer Lab", url: "/placeholder.svg", category: "Facilities" },
  { id: "4", name: "Classroom", url: "/placeholder.svg", category: "Academics" },
  { id: "5", name: "Sports Ground", url: "/placeholder.svg", category: "Sports" },
  { id: "6", name: "Annual Day", url: "/placeholder.svg", category: "Events" },
  { id: "7", name: "Seminar Hall", url: "/placeholder.svg", category: "Facilities" },
  { id: "8", name: "Campus Garden", url: "/placeholder.svg", category: "Campus" },
  { id: "9", name: "Cultural Fest", url: "/placeholder.svg", category: "Events" },
];
