// Placement Data - Separated from siteConfig for scalability

export interface PlacementActivity {
  srNo: number;
  date: string;
  name: string;
  type: string;
  organiser: string;
  link: string;
}

export interface PlacementRecords {
  title: string;
  description: string;
  stats: {
    studentsPlaced: string;
    avgPackage: string;
    highestPackage: string;
    recruiters: string;
  };
}

export const placementRecords: PlacementRecords = {
  title: "Placement Records",
  description: "Our placement achievements and statistics.",
  stats: {
    studentsPlaced: "85%",
    avgPackage: "₹4.5 LPA",
    highestPackage: "₹12 LPA",
    recruiters: "50+",
  },
};

export const placementActivities: Record<string, PlacementActivity[]> = {
  "2024-25": [
    { srNo: 1, date: "8/13/24", name: "Lecture on Career Path", type: "Pre-Placement Training", organiser: "T & P Cell", link: "https://www.facebook.com/share/p/1YYudwkUb6/" },
    { srNo: 2, date: "8/13/24", name: "Online workshop on Resume Building & Interview Skills", type: "Pre-Placement Training", organiser: "T & P Cell", link: "" },
    { srNo: 3, date: "8/24/24", name: "Industrial Visit to TATA Motors", type: "Exposure Visit", organiser: "T & P Cell", link: "https://www.facebook.com/share/p/15LZ2CnXNc/" },
    { srNo: 4, date: "8/27/24", name: "Guest Lecture on Career in MNC & PMO", type: "Pre-Placement Training", organiser: "T & P Cell", link: "https://www.facebook.com/share/p/17pcEqUVzz/" },
    { srNo: 5, date: "9/12/24", name: "Seminar on Career Insights & Employability Skills", type: "Pre-Placement Training", organiser: "T & P Cell", link: "" },
    { srNo: 6, date: "9/13/24", name: "Seminar on Exploring Opportunities in Emerging Technologies", type: "Pre-Placement Training", organiser: "T & P Cell", link: "https://www.facebook.com/share/p/1Afj76xdah/" },
    { srNo: 7, date: "9/14/24", name: "Industrial Visit to Deloitte", type: "Exposure Visit", organiser: "T & P Cell", link: "" },
    { srNo: 8, date: "9/21/24", name: "Campus Selection for TATA Motors", type: "Campus Placement", organiser: "T & P Cell", link: "" },
    { srNo: 9, date: "10/5/24", name: "Workshop on AI & Future of Work", type: "Pre-Placement Training", organiser: "T & P Cell", link: "" },
    { srNo: 10, date: "10/12/24", name: "Guest Lecture on Digital Marketing Careers", type: "Pre-Placement Training", organiser: "T & P Cell", link: "" },
    { srNo: 11, date: "10/19/24", name: "Industrial Visit to Infosys", type: "Exposure Visit", organiser: "T & P Cell", link: "" },
    { srNo: 12, date: "11/2/24", name: "Campus Selection for TCS", type: "Campus Placement", organiser: "T & P Cell", link: "" },
    { srNo: 13, date: "11/16/24", name: "Workshop on Soft Skills Development", type: "Pre-Placement Training", organiser: "T & P Cell", link: "" },
    { srNo: 14, date: "12/7/24", name: "Campus Selection for Wipro", type: "Campus Placement", organiser: "T & P Cell", link: "" },
  ],
  "2025-26": [
    { srNo: 1, date: "7/10/25", name: "Orientation on Placement Process", type: "Pre-Placement Training", organiser: "T & P Cell", link: "" },
    { srNo: 2, date: "7/20/25", name: "Workshop on Resume Writing", type: "Pre-Placement Training", organiser: "T & P Cell", link: "" },
    { srNo: 3, date: "8/5/25", name: "Industrial Visit to Tech Mahindra", type: "Exposure Visit", organiser: "T & P Cell", link: "" },
    { srNo: 4, date: "8/15/25", name: "Guest Lecture on Industry 4.0", type: "Pre-Placement Training", organiser: "T & P Cell", link: "" },
  ],
};
