// // Teaching Staff Data - Separated from siteConfig for scalability

// export interface FacultyMember {
//   id: string;
//   name: string;
//   designation: string;
//   email: string;
//   experience: string;
//   image: string;
//   education: {
//     degree: string;
//     specialization: string;
//     university: string;
//     year: string;
//     percentage: string;
//   }[];
//   publications: {
//     category: string;
//     count: number;
//   }[];
//   achievements: {
//     recognition: string;
//     organization: string;
//     year: string;
//   }[];
//   profileLinks: {
//     linkedin?: string;
//     googleScholar?: string;
//     researchGate?: string;
//   };
// }

// export const teachingStaffData: FacultyMember[] = [
//   {
//     id: "dr-dashrath-bhosale",
//     name: "Dr. Dashrath Bhosale",
//     designation: "Principal",
//     email: "principal@snbpacs.edu.in",
//     experience: "38 Years",
//     image: "http://snbpacsms.com/WebsitePages/TeachingPhoto/1.png",
//     education: [
//       {
//         degree: "Ph.D",
//         specialization: "Chemistry",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//       {
//         degree: "M.Phil",
//         specialization: "Chemistry",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//       {
//         degree: "M.Sc",
//         specialization: "Chemistry",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//     ],
//     publications: [],
//     achievements: [],
//     profileLinks: {},
//   },
//   {
//     id: "dr-sudhir-atwadkar",
//     name: "Prof. (Dr.) Sudhir Atwadkar",
//     designation: "Professor",
//     email: "sudhir.atwadkar@snbpacs.edu.in",
//     experience: "27 Years",
//     image: "http://snbpacsms.com/WebsitePages/TeachingPhoto/2_Dr%20Sudhir.jpg",
//     education: [
//       {
//         degree: "Ph.D",
//         specialization: "Management",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//       {
//         degree: "M.Phil",
//         specialization: "Management",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//       {
//         degree: "MBA",
//         specialization: "Marketing & HR",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//       {
//         degree: "MMM",
//         specialization: "Marketing Management",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//       {
//         degree: "LLB",
//         specialization: "Law",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//       {
//         degree: "MA",
//         specialization: "Psychology",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//     ],
//     publications: [{ category: "Total Publications", count: 50 }],
//     achievements: [
//       { recognition: "Awards", organization: "Various", year: "2" },
//     ],
//     profileLinks: {},
//   },
//   {
//     id: "gauri-shirude",
//     name: "Mrs. Gauri S. Shirude",
//     designation: "Assistant Professor",
//     email: "gauri.shirude@gmail.com",
//     experience: "12 Years",
//     image: "http://snbpacsms.com/WebsitePages/TeachingPhoto/3_Gauri.jpg",
//     education: [
//       {
//         degree: "M.Sc",
//         specialization: "Computer Science",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//     ],
//     publications: [{ category: "Total Publications", count: 4 }],
//     achievements: [
//       { recognition: "Awards", organization: "Various", year: "3" },
//     ],
//     profileLinks: {},
//   },
//   {
//     id: "sushma-pingale",
//     name: "Mrs. Sushma M. Pingale",
//     designation: "Assistant Professor",
//     email: "sushma.pingale@snbpacs.edu.in",
//     experience: "12 Years",
//     image: "http://snbpacsms.com/WebsitePages/TeachingPhoto/4_Sushma.jpg",
//     education: [
//       {
//         degree: "M.E.",
//         specialization: "VLSI & Embedded System",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//     ],
//     publications: [{ category: "Total Publications", count: 7 }],
//     achievements: [
//       { recognition: "Awards", organization: "Various", year: "1" },
//     ],
//     profileLinks: {},
//   },
//   {
//     id: "danish-sayyed",
//     name: "Mr. Danish S. Sayyed",
//     designation: "Director of Physical Education",
//     email: "danish.sayyed@snbpacs.edu.in",
//     experience: "6 Years",
//     image: "http://snbpacsms.com/WebsitePages/TeachingPhoto/5_Danish.jpg",
//     education: [
//       {
//         degree: "M.P.Ed",
//         specialization: "Physical Education",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//     ],
//     publications: [],
//     achievements: [
//       { recognition: "Awards", organization: "Various", year: "1" },
//     ],
//     profileLinks: {},
//   },
//   {
//     id: "swati-inamdar",
//     name: "Mrs. Swati P. Inamdar",
//     designation: "Assistant Professor",
//     email: "swati.inamdar@snbpacs.edu.in",
//     experience: "17 Years",
//     image: "http://snbpacsms.com/WebsitePages/TeachingPhoto/6_Swati.jpg",
//     education: [
//       {
//         degree: "MBA",
//         specialization: "HR",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//       {
//         degree: "M.Com",
//         specialization: "Commerce",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//       {
//         degree: "MPM",
//         specialization: "Personnel Management",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//     ],
//     publications: [{ category: "Total Publications", count: 8 }],
//     achievements: [],
//     profileLinks: {},
//   },
//   {
//     id: "atul-jadhav",
//     name: "Mr. Atul S. Jadhav",
//     designation: "Assistant Professor",
//     email: "atul.jadhav@snbpacs.edu.in",
//     experience: "7 Years",
//     image: "http://snbpacsms.com/WebsitePages/TeachingPhoto/7_Atul.jpg",
//     education: [
//       {
//         degree: "MA",
//         specialization: "English Literature",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//     ],
//     publications: [{ category: "Total Publications", count: 6 }],
//     achievements: [
//       { recognition: "Awards", organization: "Various", year: "6" },
//     ],
//     profileLinks: {},
//   },
//   {
//     id: "jaydip-patil",
//     name: "Mr. Jaydip Y. Patil",
//     designation: "Assistant Professor",
//     email: "jaydip.patil@snbpacs.edu.in",
//     experience: "1 Year",
//     image: "http://snbpacsms.com/WebsitePages/TeachingPhoto/8_Jaydip.jpg",
//     education: [
//       {
//         degree: "M.Sc",
//         specialization: "Statistics",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//     ],
//     publications: [{ category: "Total Publications", count: 1 }],
//     achievements: [],
//     profileLinks: {},
//   },
//   {
//     id: "madhavi-chinchwade",
//     name: "Ms. Madhavi N. Chinchwade",
//     designation: "Assistant Professor",
//     email: "madhavi.chinchwade@snbpacs.edu.in",
//     experience: "7 Years",
//     image: "http://snbpacsms.com/WebsitePages/TeachingPhoto/9_Madhavi.jpg",
//     education: [
//       {
//         degree: "MBA",
//         specialization: "HR",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//       {
//         degree: "M.Com",
//         specialization: "Commerce",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//     ],
//     publications: [{ category: "Total Publications", count: 8 }],
//     achievements: [
//       { recognition: "Awards", organization: "Various", year: "8" },
//     ],
//     profileLinks: {},
//   },
//   {
//     id: "devana-rathod",
//     name: "Mr. Devana Nagesh Rathod",
//     designation: "Assistant Professor",
//     email: "devana.rathod@snbpacs.edu.in",
//     experience: "2 Years",
//     image: "http://snbpacsms.com/WebsitePages/TeachingPhoto/10_Devana.jpg",
//     education: [
//       {
//         degree: "MA",
//         specialization: "Economics",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//     ],
//     publications: [{ category: "Total Publications", count: 4 }],
//     achievements: [],
//     profileLinks: {},
//   },
//   {
//     id: "pooja-mhetre",
//     name: "Ms. Pooja R. Mhetre",
//     designation: "Assistant Professor",
//     email: "pooja.mhetre@snbpacs.edu.in",
//     experience: "1 Year",
//     image: "http://snbpacsms.com/WebsitePages/TeachingPhoto/11_Pooja.jpg",
//     education: [
//       {
//         degree: "MCA",
//         specialization: "Computer Application",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//     ],
//     publications: [{ category: "Total Publications", count: 1 }],
//     achievements: [],
//     profileLinks: {},
//   },
//   {
//     id: "pratidnya-dangarne",
//     name: "Ms. Pratidnya G. Dangarne",
//     designation: "Assistant Professor",
//     email: "pratidnya.dangarne@snbpacs.edu.in",
//     experience: "4 Years",
//     image: "http://snbpacsms.com/WebsitePages/TeachingPhoto/12_Pratidnya.jpg",
//     education: [
//       {
//         degree: "M.Sc",
//         specialization: "Mathematics",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//     ],
//     publications: [],
//     achievements: [],
//     profileLinks: {},
//   },
//   {
//     id: "almas-shaikh",
//     name: "Mrs. Almas S. Shaikh",
//     designation: "Assistant Professor",
//     email: "almas.shaikh@snbpacs.edu.in",
//     experience: "5 Years",
//     image: "http://snbpacsms.com/WebsitePages/TeachingPhoto/13_Almas.jpg",
//     education: [
//       {
//         degree: "M.Sc",
//         specialization: "Computer Science",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//     ],
//     publications: [],
//     achievements: [],
//     profileLinks: {},
//   },
//   {
//     id: "priyanka-kasar",
//     name: "Mrs. Priyanka P. Kasar",
//     designation: "Assistant Professor",
//     email: "priyanka.kasar@snbpacs.edu.in",
//     experience: "7 Years",
//     image: "http://snbpacsms.com/WebsitePages/TeachingPhoto/14_Priyanka.jpg",
//     education: [
//       {
//         degree: "M.Com",
//         specialization: "Cost & Management Accounting",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//       {
//         degree: "M.Ed",
//         specialization: "Education",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//       {
//         degree: "MA",
//         specialization: "Arts",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//       {
//         degree: "Ph.D (Pursuing)",
//         specialization: "-",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//     ],
//     publications: [{ category: "Total Publications", count: 3 }],
//     achievements: [
//       { recognition: "Awards", organization: "Various", year: "1" },
//     ],
//     profileLinks: {},
//   },
//   {
//     id: "shalini-alamuri",
//     name: "Mrs. Shalini Alamuri",
//     designation: "Assistant Professor",
//     email: "shalini.alamuri@snbpacs.edu.in",
//     experience: "1 Year",
//     image: "http://snbpacsms.com/WebsitePages/TeachingPhoto/15_Shalini.jpg",
//     education: [
//       {
//         degree: "M.Sc",
//         specialization: "Computer Science",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//     ],
//     publications: [],
//     achievements: [
//       { recognition: "Awards", organization: "Various", year: "1" },
//     ],
//     profileLinks: {},
//   },
//   {
//     id: "aashvini-tamboli",
//     name: "Ms. Aashvini K. Tamboli",
//     designation: "Assistant Professor",
//     email: "aashvini.tamboli@snbpacs.edu.in",
//     experience: "1 Year",
//     image: "http://snbpacsms.com/WebsitePages/TeachingPhoto/16_Aashvini.jpg",
//     education: [
//       {
//         degree: "M.Sc",
//         specialization: "Computer Science",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//     ],
//     publications: [],
//     achievements: [],
//     profileLinks: {},
//   },
//   {
//     id: "kavitharani-bellamkonda",
//     name: "Mrs. Kavitharani Bellamkonda",
//     designation: "Assistant Professor",
//     email: "kavitharani.bellamkonda@snbpacs.edu.in",
//     experience: "3 Years",
//     image: "http://snbpacsms.com/WebsitePages/TeachingPhoto/17_Kavitharani.jpg",
//     education: [
//       {
//         degree: "MBA",
//         specialization: "HR & Marketing",
//         university: "SPPU",
//         year: "-",
//         percentage: "-",
//       },
//     ],
//     publications: [],
//     achievements: [],
//     profileLinks: {},
//   },
// ];



import { API_BASE } from "@/config/api";

export interface FacultyMember {
  srNo: number;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  specialisation: string;
  experience: number; // years
  publications: number;
  awards: number;
  photo: string;
}

export const teachingStaffData: FacultyMember[] = [
  {
    srNo: 1,
    name: "Dr. Dashrath Bhosale",
    designation: "Principal",
    department: "Science",
    qualification: "PhD in Chemistry, MPhil, M.Sc",
    specialisation: "Chemistry",
    experience: 38,
    publications: 0,
    awards: 0,
    photo: `${API_BASE}/images/faculty/dashrath.png`,
  },
  {
    srNo: 2,
    name: "Prof. (Dr.) Sudhir Atwadkar",
    designation: "Professor",
    department: "Management",
    qualification: "PhD, MPhil, MBA, MMM, LLB, MA (Psychology)",
    specialisation: "Marketing & HR",
    experience: 27,
    publications: 50,
    awards: 2,
    photo: `${API_BASE}/images/faculty/sudhir.png`,
  },
  {
    srNo: 3,
    name: "Mrs. Gauri S. Shirude",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "M.Sc",
    specialisation: "Computer Science",
    experience: 12,
    publications: 4,
    awards: 3,
    photo: `${API_BASE}/images/faculty/gauri.png`,
  },
  {
    srNo: 4,
    name: "Mrs. Sushma M. Pingale",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "M.E.",
    specialisation: "VLSI & Embedded System",
    experience: 12,
    publications: 7,
    awards: 1,
    photo: `${API_BASE}/images/faculty/sushma.png`,
  },
  {
    srNo: 5,
    name: "Mr. Danish S. Sayyed",
    designation: "Director of Physical Education",
    department: "Physical Director",
    qualification: "M.P.Ed",
    specialisation: "Physical Education",
    experience: 6,
    publications: 0,
    awards: 1,
    photo: `${API_BASE}/images/faculty/danish.png`,
  },
  {
    srNo: 6,
    name: "Mrs. Swati P. Inamdar",
    designation: "Assistant Professor",
    department: "Commerce & Management",
    qualification: "MBA, M.Com, MPM",
    specialisation: "HR",
    experience: 17,
    publications: 8,
    awards: 0,
    photo: `${API_BASE}/images/faculty/swati.png`,
  },
  {
    srNo: 7,
    name: "Mr. Atul S. Jadhav",
    designation: "Assistant Professor",
    department: "Arts",
    qualification: "MA",
    specialisation: "English Literature",
    experience: 7,
    publications: 6,
    awards: 6,
    photo: `${API_BASE}/images/faculty/atul.png`,
  },
  {
    srNo: 8,
    name: "Mr. Jaydip Y. Patil",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "M.Sc",
    specialisation: "Statistics",
    experience: 1,
    publications: 1,
    awards: 0,
    photo: `${API_BASE}/images/faculty/jaydip.png`,
  },
  {
    srNo: 9,
    name: "Ms. Madhavi N. Chinchwade",
    designation: "Assistant Professor",
    department: "Commerce & Management",
    qualification: "MBA, M.Com",
    specialisation: "HR",
    experience: 7,
    publications: 8,
    awards: 8,
    photo: `${API_BASE}/images/faculty/madhavi.png`,
  },
  {
    srNo: 10,
    name: "Mr. Devana Nagesh Rathod",
    designation: "Assistant Professor",
    department: "Commerce & Management",
    qualification: "MA",
    specialisation: "Economics",
    experience: 2,
    publications: 4,
    awards: 0,
    photo: `${API_BASE}/images/faculty/devana.png`,
  },
  {
    srNo: 11,
    name: "Ms. Pooja R. Mhetre",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "MCA",
    specialisation: "Computer Application",
    experience: 1,
    publications: 1,
    awards: 0,
    photo: `${API_BASE}/images/faculty/pooja.png`,
  },
  {
    srNo: 12,
    name: "Ms. Pratidnya G. Dangarne",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "M.Sc",
    specialisation: "Mathematics",
    experience: 4,
    publications: 0,
    awards: 0,
    photo: `${API_BASE}/images/faculty/pratidnya.png`,
  },
  {
    srNo: 13,
    name: "Mrs. Almas S. Shaikh",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "M.Sc",
    specialisation: "Computer Science",
    experience: 5,
    publications: 0,
    awards: 0,
    photo: `${API_BASE}/images/faculty/almas.png`,
  },
  {
    srNo: 14,
    name: "Mrs. Priyanka P. Kasar",
    designation: "Assistant Professor",
    department: "Commerce & Management",
    qualification: "M.Com, M.Ed, M.A (PhD Pursuing)",
    specialisation: "Cost & Management Accounting",
    experience: 7,
    publications: 3,
    awards: 1,
    photo: `${API_BASE}/images/faculty/priyanka.png`,
  },
  {
    srNo: 15,
    name: "Mrs. Shalini Alamuri",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "M.Sc",
    specialisation: "Computer Science",
    experience: 1,
    publications: 0,
    awards: 1,
    photo: `${API_BASE}/images/faculty/shalini.png`,
  },
  {
    srNo: 16,
    name: "Ms. Aashvini K. Tamboli",
    designation: "Assistant Professor",
    department: "Computer",
    qualification: "M.Sc",
    specialisation: "Computer Science",
    experience: 1,
    publications: 0,
    awards: 0,
    photo: `${API_BASE}/images/faculty/aashvini.png`,
  },
  {
    srNo: 17,
    name: "Mrs. Kavitharani Bellamkonda",
    designation: "Assistant Professor",
    department: "Commerce & Management",
    qualification: "MBA",
    specialisation: "HR & Marketing",
    experience: 3,
    publications: 0,
    awards: 0,
    photo: `${API_BASE}/images/faculty/kavitharani.png`,
  },
];

