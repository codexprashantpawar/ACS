export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavSubCategory {
  title: string;
  items: NavSubItem[];
}

export interface NavItem {
  label: string;
  href?: string;
  subCategories?: NavSubCategory[];
}
export const navigationConfig: NavItem[] = [
  {
    label: "About Us",
    subCategories: [
      {
        title: "S.E.Society",
        items: [
          { label: "About S.E.Society", href: "/about/se-society" },
          { label: "President Message", href: "/about/president-message" },
          { label: "Chairman Message", href: "/about/chairman-message" },
          { label: "Directors Message", href: "/about/directors-message" },
        ],
      },
      {
        title: "SNBP ACS & MS",
        items: [
          { label: "About SNBP", href: "/about/snbp" },
          { label: "Vision", href: "/about/vision" },
          { label: "Mission", href: "/about/mission" },
          { label: "Objectives", href: "/about/objectives" },
        ],
      },
      {
        title: "Principal Desk",
        items: [{ label: "Principal Desk", href: "/about/principal-desk" }],
      },
      {
        title: "Institute Development Plan",
        items: [
          { label: "Institution Policy", href: "/about/institution-policy" },
          { label: "Strategic Plan", href: "/about/strategic-plan" },
        ],
      },
      {
        title: "Permission & Approvals",
        items: [
          { label: "Maharashtra Govt.", href: "/about/maharashtra-govt" },
          { label: "AICTE", href: "/about/aicte" },
          { label: "UGC", href: "/about/ugc" },
          { label: "SPPU", href: "/about/sppu" },
          { label: "12B", href: "/about/12b" },
          { label: "2F", href: "/about/2f" },
        ],
      },
      {
        title: "Accreditation & Ranking",
        items: [
          { label: "NAAC", href: "/about/naac" },
          { label: "IIC", href: "/about/iic" },
        ],
      },
    ],
  },
  {
    label: "Administration",
    subCategories: [
      {
        title: "Governance",
        items: [
          {
            label: "Board of Management",
            href: "/administration/board-of-management",
          },
          { label: "Organogram", href: "/administration/organogram" },
        ],
      },
      {
  title: "Committees",
  items: [
    {
      label: "Statutory Committees",
      href: "/administration/committees/statutory-committees",
    },
    {
      label: "Non-Statutory Committees",
      href: "/administration/committees/non-statutory-committees",
    },
  ],
}
,
      {
        title: "Code of Conduct",
        items: [
          { label: "Code of Conduct", href: "/administration/code-of-conduct" },
        ],
      },
     {
  title: "Academic Leadership",
  items: [
    {
      label: "Academic Leadership",
      href: "http://snbpacsms.com/assets/PDF/administration/Committes/Academic Leadership.pdf",
    },
  ],
}

    ],
  },
  {
    label: "Human Capital",
    subCategories: [
      {
        title: "Staff",
        items: [
          { label: "Teaching Staff", href: "/human-capital/teaching-staff" },
          {
            label: "Non-Teaching Staff",
            href: "/human-capital/non-teaching-staff",
          },
          { label: "Guest Faculty", href: "/human-capital/guest-faculty" },
        ],
      },
      {
        title: "Development",
        items: [
          {
            label: "Faculty Development Program (FDP)",
            href: "/human-capital/fdp",
          },
        ],
      },
    ],
  },
  {
    label: "Academics",
    subCategories: [
      {
        title: "Academics Programs & Syllabus",
        items: [
          { label: "Arts", href: "/academics/arts" },
          { label: "Commerce", href: "/academics/commerce" },
          { label: "Science", href: "/academics/science" },
          {
            label: "Online / Offline Certification",
            href: "/academics/certification",
          },
        ],
      },
      {
        title: "Calendar",
        items: [
          { label: "IQAC", href: "/academics/calendar/iqac" },
          { label: "Academic", href: "/academics/calendar/academic" },
          { label: "Department", href: "/academics/calendar/department" },
          { label: "Examination", href: "/academics/calendar/examination" },
          { label: "Activity", href: "/academics/calendar/activity" },
          {
            label: "Training & Placement",
            href: "/academics/calendar/training-placement",
          },
          { label: "IIC", href: "/academics/calendar/iic" },
        ],
      },
      {
        title: "Fee Structure",
        items: [
          { label: "Fees Policies", href: "/academics/fees-policies" },
          { label: "Fees Chart", href: "/academics/fees-chart" },
          {
            label: "Admission Process & Guidelines",
            href: "/academics/admission-process",
          },
          { label: "Prospectus", href: "/academics/prospectus" },
        ],
      },
      {
        title: "MOUs & Linkage",
        items: [
          { label: "MoUs", href: "/academics/mous" },
          { label: "Linkages", href: "/academics/linkages" },
        ],
      },
    ],
  },
  {
    label: "Student Corner",
    subCategories: [
      {
        title: "Student Cell",
        items: [
          {
            label: "Student Grievance Redressal Cell",
            href: "/student-corner/grievance-cell",
          },
          {
            label: "Internal Complaint Cell",
            href: "/student-corner/complaint-cell",
          },
          {
            label: "Anti-Ragging Committee",
            href: "/student-corner/anti-ragging",
          },
          {
            label: "Equal Opportunity Cell",
            href: "/student-corner/equal-opportunity",
          },
        ],
      },
      {
        title: "Extra-Curricular",
        items: [
          { label: "Sports", href: "/student-corner/sports" },
          { label: "NSS", href: "/student-corner/nss" },
        ],
      },
      {
        title: "Divyang Facilities",
        items: [
          {
            label: "Health Facilities",
            href: "/student-corner/health-facilities",
          },
          {
            label: "Facilities for differently abled student",
            href: "/student-corner/differently-abled",
          },
        ],
      },
    ],
  },
  // {
  //   label: "Information Corner",
  //   subCategories: [
  //     {
  //       title: "Information Corner",
  //       items: [
  //         { label: "Circulars & Notices", href: "/information/circulars" },
  //         { label: "Announcements", href: "/information/announcements" },
  //         { label: "News / Letters", href: "/information/news" },
  //       ],
  //     },
  //   ],
  // },
  {
    label: "Information Corner",
    subCategories: [
      {
        title: "Circulars & Notices",
        items: [
          { label: "College", href: "/information/circulars/college" },
          { label: "University", href: "/information/circulars/university" },
        ],
      },
      {
        title: "Information",
        items: [
          { label: "Announcements", href: "/information/announcements" },
          { label: "News / Letters", href: "/information/news" },
        ],
      },
    ],
  },

  {
    label: "Research & Development",
    subCategories: [
      {
        title: "Innovation Center",
        items: [
          { label: "IIC", href: "/research/iic" },
          {
            label: "Startup & Innovation",
            href: "/research/startup-innovation",
          },
        ],
      },
      {
        title: "Research & Publication",
        items: [
          { label: "Research & Publication", href: "/research/publications" },
        ],
      },
    ],
  },
  {
    label: "Placement & Career",
    subCategories: [
      {
        title: "Training & Placement",
        items: [
          {
            label: "Training Activities",
            href: "/placement/training-activities",
          },
          {
            label: "Pre-Placement Activities",
            href: "/placement/pre-placement",
          },
        ],
      },
      {
        title: "Internship",
        items: [{ label: "Internship", href: "/placement/internship" }],
      },
      {
        title: "Placement",
        items: [
          { label: "Campus Drive", href: "/placement/campus-drive" },
          { label: "Placement Records", href: "/placement/records" },
        ],
      },
    ],
  },
  {
    label: "IQAC",
    subCategories: [
      {
        title: "IQAC",
        items: [
          { label: "Meeting", href: "/iqac/meeting" },
          { label: "Calendar", href: "/iqac/calendar" },
          { label: "IQAC Initiative", href: "/iqac/initiative" },
        ],
      },
      {
        title: "Accreditation",
        items: [
          { label: "IIQA", href: "/iqac/iiqa" },
          { label: "SSR", href: "/iqac/ssr" },
          { label: "AQAR", href: "/iqac/aqar" },
          { label: "Best Practices", href: "/iqac/best-practices" },
        ],
      },
    ],
  },
  {
    label: "Library & Publications",
    subCategories: [
      {
        title: "Library",
        items: [
          { label: "About Library", href: "/library/about" },
          { label: "Teaching Notes", href: "/library/teaching-notes" },
        ],
      },
      {
        title: "Publications",
        items: [
          { label: "College Magazine", href: "/library/magazine" },
          { label: "Prospectus", href: "/library/prospectus" },
          { label: "Placement Brochure", href: "/library/placement-brochure" },
          { label: "College Journals", href: "/library/journals" },
        ],
      },
    ],
  },
  {
    label: "Reports & Downloads",
    subCategories: [
      {
        title: "Annual Reports",
        items: [
          { label: "Academic", href: "/reports/academic" },
          { label: "Activity", href: "/reports/activity" },
          { label: "Placement", href: "/reports/placement" },
          { label: "IIC", href: "/reports/iic" },
        ],
      },
      {
        title: "Downloads",
        items: [{ label: "Downloads", href: "/downloads" }],
      },
    ],
  },
  {
    label: "Feedback",
    subCategories: [
      {
        title: "Feedback",
        items: [
          { label: "Feedback Form", href: "/feedback/form" },
          { label: "Feedback Report", href: "/feedback/report" },
          { label: "Feedback Analysis", href: "/feedback/analysis" },
          { label: "Action Taken Report", href: "/feedback/action-taken" },
        ],
      },
    ],
  },
  { label: "Photo Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

