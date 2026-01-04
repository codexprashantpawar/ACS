import { API_BASE } from "@/config/api";
export interface AboutPageData {
  title: string;
  description: string;
  content: string;
  image?: string;
  author?: string;
  position?: string;
  pdf?: string;
  committeeList?: {
    name: string;
    subCommittees: string[];
  }[];
  documents?: {
    affiliationLetter?: string;
    permissionLetter?: string;
  };
}

export const aboutData: Record<string, AboutPageData> = {
  "se-society": {
    title: "S.E. Society",
    description: "Learn about the S.E. Society and its vision for education.",
    content: `S.E. Society was formed by Hon'ble Dr. D.K. Bhosale (Founder Secretary) and Dr.(Mrs.) Vrishali Bhosale (President) in the year 1996 with the moto 'Kindle the Light of Knowledge and Love'. At initial stage it was started with Nursery and School in Yerwada with its growing age this tree become more fruitful and established its branches at Morwadi, Rahatani, Moshi, Wakad and Wagholi with various courses. Today it is offering curriculums of CBSE, Maharashtra State Board and courses affiliated to Savitribai Phule Pune University.

S.E. Society runs schools and educational courses at its different branches in Pune.

Yerwada branch runs curriculums from Preprimary, Primary, Secondary, Higher Secondary and Undergraduate level. In SNBP Rahatani and Moshi branches run curriculum from Preprimary to Higher Secondary level. SNBP Wagholi and Wakad branches are recently started with Preprimary Section. SNBP Morwadi branch runs curriculums from Preprimary to Undergraduate level with CBSE & State Board at Secondary & Higher Secondary level. Undergraduate and Post Graduate level courses runs in College of Arts Commerce Science & Management Studies, Morwadi Campus.`,
    image: `${API_BASE}/images/`,
  },
  acs: {
    title: "About SNBP ACS",
    description:
      "S.E. Society's SNBP College of Arts, Commerce, Science & Management Studies",
    content: `S.E. Society's SNBP College of Arts, Commerce, Science & Management Studies, Morwadi - Pimpri, Pune-18

Established in 2008, SNBP College of Arts, Commerce, Science & Management Studies, Morwadi, Pimpri, stands as a beacon of educational excellence under the visionary mission:

"To contribute towards creating a centre of educational excellence in Computer, Commerce, Science, Arts, and Management fields, to serve as a valuable resource for the industry and remain a source of pride for all Indians."

Affiliated with Savitribai Phule Pune University, the college offers a wide array of Undergraduate and Postgraduate programmes, including BA, B.Com, B.Sc., B.Sc. (Computer Science), BBA, BCA, M.Com, MA (Journalism), and MA (Economics). All undergraduate courses are offered as regular 4-year degree programmes in line with the new education policy. In the near future, the college plans to expand its academic portfolio by introducing industry-relevant programmes such as MBA, MCA, MCS, B.Sc. Data Science, and B.Sc. Cyber Security.

Centrally located in the heart of Pimpri-Chinchwad, the college provides an ideal academic environment supported by modern infrastructure. The college library is a rich resource hub, well-stocked with a variety of books, academic journals, magazines, and periodicals. The computer labs are fully equipped with the latest technology to enhance practical learning.

The college places equal emphasis on holistic development. Students are encouraged to participate in diverse curricular and co-curricular activities, including guest lectures, workshops, personality development programmes, academic contests, quizzes, and industrial visits. These initiatives prepare students not just academically but also professionally.

Extra-curricular and social activities are integral to the SNBPACS experience. The college actively organizes medical camps, blood donation drives, voting awareness campaigns, NSS camps, Swachhata Abhiyan, self-defense training under "Nirbhaya Kanya Abhiyan," trekking expeditions, cultural events, painting competitions, and university-level tournaments. The flagship Sporto-Cultural Carnival is a vibrant testament to the college's commitment to nurturing talent beyond the classroom.

SNBPACS also maintains strong industry tie-ups, facilitating internships and placement drives annually. These collaborations bridge the gap between academic learning and real-world application, providing students with crucial career exposure and opportunities.

Recognizing that faculty is the cornerstone of institutional success, the management invests deeply in faculty development programmes, cultural and sports events, and faculty recreation trips, ensuring a dynamic, motivated, and skilled teaching community.

With an unwavering focus on academic excellence, personal growth, social awareness, and professional readiness, SNBPACS continues to empower students to thrive in a competitive world. Through dedicated efforts in fostering knowledge, confidence, and social responsibility, the college remains committed to shaping future leaders and lifelong learners.`,
    image: "/placeholder.svg",
    documents: {
      affiliationLetter: "#",
      permissionLetter: "http://snbpacsms.com/WebsitePages/PDF/Permission.pdf",
    },
  },
  "president-message": {
    title: "President's Message",
    description: "Message from our President Dr. (Mrs.) Vrishali D. Bhosale",
    content: `Knowledge is the key that opens the doors of human development; it is the lamp that illuminates the path of progress and enlightenment. With this deep conviction, S.E. Society was founded in 1996 with a sacred mission — 'Kindle the Light of Knowledge and Love' — aiming to nurture young minds into enlightened citizens who contribute positively to society.

Since our humble beginnings with a nursery and school at Yerwada, we have grown into a thriving educational ecosystem with branches across Morwadi, Rahatani, Moshi, Wakad, and Wagholi. Each branch represents our commitment to spreading quality education from Kindergarten to Postgraduate levels, under the CBSE, State Board, and Savitribai Phule Pune University affiliations.

At the heart of S.E. Society lies our belief that education must go beyond textbooks. It must build character, instill values, and inspire creativity. Through a holistic approach combining academics, co-curricular activities, community engagement, and personal development, we strive to prepare students not just for exams, but for life.

As the President of this esteemed organization, I am immensely proud of the journey we have undertaken and the milestones we have achieved. But our work is far from complete. Our mission continues as we endeavour to empower every student who walks through our doors — to dream, to achieve, and to serve.

I welcome you to SNBP family and invite you to be a part of our shared vision: 'Knowledge, Love, Excellence.'

With warm regards,
Dr. (Mrs.) Vrishali D. Bhosale
President, S.E. Society`,
    image: `${API_BASE}/images/President.png`,
    author: "Dr. (Mrs.) Vrishali D. Bhosale",
    position: "President, S.E. Society",
  },
  "chairman-message": {
    title: "Chairman's Message",
    description: "Message from our Chairman Dr. D.K. Bhosale",
    content: `Education transforms lives; it is the most powerful tool we have to shape the future. Since founding S.E. Society in 1996, this belief has driven every decision and initiative we have undertaken. Together with Dr. (Mrs.) Vrishali Bhosale, we set out with a singular vision: 'Kindle the Light of Knowledge and Love.'

Today, as I look at the vast network of SNBP institutions, I feel a deep sense of gratitude and responsibility. From our first school in Yerwada to our current presence across Morwadi, Rahatani, Moshi, Wakad, and Wagholi, every expansion has been guided by our desire to bring quality education to more students.

SNBP College of Arts, Commerce, Science & Management Studies is a flagship institution that embodies our mission. Affiliated with Savitribai Phule Pune University and accredited with a NAAC B++ Grade, the college offers a wide range of programs designed to meet the demands of the modern world. Our focus on holistic development — through academics, co-curricular activities, sports, and social initiatives — ensures that our students are well-rounded individuals, ready to face any challenge.

Our strength lies in our faculty, our infrastructure, and our unwavering commitment to innovation. We continuously invest in technology, research, and faculty development to ensure that SNBP remains at the forefront of educational excellence.

I invite every student and parent to partner with us in this noble journey. Together, let us build a future where knowledge, love, and excellence light the way.

With best wishes,
Dr. D.K. Bhosale
Chairman, S.E. Society`,
    image: `${API_BASE}/images/Chairman.png`,
    author: "Dr. D.K. Bhosale",
    position: "Chairman, S.E. Society",
  },
  "vice-principal-message": {
    title: "Vice-Principal's Message",
    description: "Message from our Vice-Principal",
    content: `SNBP group of Institutes transfer the knowledge through its various branches where students shaped from KG to PG. SNBP College of Arts, Commerce, Science & Management Studies, Morwadi-Pimpri, Pune is the top college that built the students not only by academic but also activity based teaching. SNBPACS is the activity based co-curriculum with the academic. SNBPACS adopts holistic programme of academic, physical, Sports, Social and Spiritual activity based syllabus which creates confidence and creativity in students.

SNBPACS provides strong undergraduate programs in Commerce (B. Com), Management (BBA), Computer (BBA (CA), BSc (CS)), Science (BSc) and Arts (BA). With the academic every year we conducted 75+ co-curricular activities - Seminar, Conference, FDP, SDP, NSS, Nirbhay Kannya Abhiyan, Technological Expos, Placement, Various Campus, Sporto-Cultural Carnival and so on for students.

I am very happy for the enthusiasm within Students, Faculty and Staff who contributed in the development of this college. Our students have participated and getting success through the various activities inside and outside the campus. It indicates the positive and creative energy in faculty members and students.

It gives me immense pleasure to welcome you to the Digital World of S. E. Society's S. N. B. P. College of Arts, Commerce, Science and Management Studies, Morwadi - Pimpri, Pune-18. The college is established by S. E. Society in 2008 with the mission "To contribute towards creating a centre of educational excellence in Computer, Commerce, Science, Arts, and Management field to serve as a valuable resource for the industry and remain a source of pride for all Indians."

Prof. (Dr.) Sudhir Atwadkar
Vice-Principal`,
    image: `${API_BASE}/images/`,
    author: "Prof. (Dr.) Sudhir Atwadkar",
    position: "Vice-Principal, SNBP ACS",
  },
  "director-message-1": {
    title: "Director's Message",
    description: "Message from Director Ms. Devyani D. Bhosale",
    content: `Welcome to S.E. Society's educational family!

Education is not merely about acquiring knowledge; it is about nurturing the human spirit, building character, and inspiring minds to dream beyond boundaries. At S.E. Society, we believe in creating an environment where students flourish academically, socially, and personally.

Our institutions across Pune are designed to provide world-class education while staying rooted in Indian values and traditions. From preprimary education to postgraduate programs, every stage is carefully curated to foster holistic development.

At SNBP ACS, we take pride in offering industry-relevant programs, state-of-the-art infrastructure, and a dedicated faculty that goes the extra mile to ensure student success. Our focus on co-curricular activities, sports, and community service ensures that our students are not just job-ready but life-ready.

I invite you to explore our campus, meet our faculty, and experience the SNBP difference firsthand. Together, let us kindle the light of knowledge and love!

Ms. Devyani D. Bhosale
Director, S.E. Society`,
    image: `${API_BASE}/images/Director.png`,
    author: "Ms. Devyani D. Bhosale",
    position: "Director, S.E. Society",
  },
  "director-message-2": {
    title: "Director's Message",
    description: "Message from Director Adv (Ms.) Rutuja D. Bhosale",
    content: `Dear Students and Parents,

It gives me immense pleasure to welcome you to S.E. Society's family of institutions. Our vision has always been to create leaders who are not only academically accomplished but also socially responsible and ethically grounded.

At SNBP ACS, we have built an ecosystem that encourages innovation, critical thinking, and collaborative learning. Our programs are designed to meet the evolving needs of the industry while maintaining the highest academic standards.

We believe that every student has unique potential, and our role is to help them discover and nurture that potential. Through mentorship, guidance, and ample opportunities, we aim to transform every student into a confident, capable individual ready to make a mark in the world.

I invite you to be a part of our journey towards excellence!

Adv (Ms.) Rutuja D. Bhosale
Director, S.E. Society`,
    image: `${API_BASE}/images/Director.png`,
    author: "Adv (Ms.) Rutuja D. Bhosale",
    position: "Director, S.E. Society",
  },
  vision: {
    title: "Vision",
    description: "Our vision for the future of education",
    content: `Our Vision

To be a premier institution of higher education that nurtures intellectual curiosity, fosters innovation, and develops ethical leaders who contribute positively to society.

We envision SNBP ACS as:
• A center of academic excellence recognized nationally and internationally
• A hub for research and innovation that addresses real-world challenges
• A community that celebrates diversity and promotes inclusive growth
• An institution that produces industry-ready graduates with strong moral values
• A leader in adopting cutting-edge technology for enhanced learning experiences`,
    image: `${API_BASE}/images/`,
  },
  mission: {
    title: "Mission",
    description: "Our mission to shape future leaders",
    content: `Our Mission

To contribute towards creating a centre of educational excellence in Computer, Commerce, Science, Arts, and Management fields, to serve as a valuable resource for the industry and remain a source of pride for all Indians.

We are committed to:
• Providing quality education that combines theoretical knowledge with practical application
• Nurturing students' intellectual, physical, and emotional development
• Creating an environment that encourages critical thinking and creativity
• Building strong industry-academia partnerships for real-world exposure
• Promoting research and innovation across all disciplines
• Developing socially responsible citizens with strong ethical foundations`,
    image: `${API_BASE}/images/`,
  },
  objectives: {
    title: "Objectives",
    description: "Our key objectives and goals",
    content: `Our Objectives

SNBP ACS is committed to achieving the following objectives:

Academic Excellence:
• Deliver curriculum that meets industry standards and academic rigor
• Employ qualified and experienced faculty committed to student success
• Provide state-of-the-art infrastructure and learning resources

Holistic Development:
• Organize co-curricular and extra-curricular activities for all-round growth
• Foster a culture of research, innovation, and continuous learning
• Create an inclusive learning environment that respects diversity and promotes equal opportunities
• Build strong industry-academia partnerships for practical exposure and placement opportunities
• Inculcate moral values, social responsibility, and ethical practices among students
• Encourage entrepreneurship and develop leadership qualities`,
    image: `${API_BASE}/images/`,
  },
  policy: {
    title: "Institution Policy",
    description: "Our institutional policies and guidelines",
    content: `Institution Policy

SNBP ACS operates under a comprehensive set of policies designed to ensure transparency, fairness, and excellence in all operations:

Academic Policies:
• Attendance requirements and regulations
• Examination and evaluation procedures
• Academic integrity and plagiarism guidelines
• Credit transfer and migration policies

Student Welfare Policies:
• Anti-ragging policy with zero tolerance
• Grievance redressal mechanism
• Equal opportunity and non-discrimination policy
• Scholarship and financial aid guidelines

Administrative Policies:
• Faculty development programs and research encouragement
• Student support services and grievance redressal mechanisms
• Industry collaboration and placement activities
• Extension and outreach programs
• Infrastructure upgradation and maintenance
• Environmental sustainability initiatives`,
    image: `${API_BASE}/images/`,
  },
  organogram: {
    title: "Organogram",
    description: "Organizational structure of SNBP ACS",
    content:
      "View the organizational structure of SNBP College of Arts, Commerce, Science & Management Studies.",
    image: `${API_BASE}/images/`,
    pdf: "http://snbpacsms.com/WebsitePages/PDF/Organogram.pdf",
  },
  committees: {
    title: "List of Committees",
    description: "Various committees at SNBP ACS",
    content: "",
    committeeList: [
      {
        name: "Governing Body",
        subCommittees: [],
      },
      {
        name: "Anti-Ragging Committee",
        subCommittees: ["Anti-Ragging Squad", "Monitoring Cell"],
      },
      {
        name: "Internal Complaints Committee (ICC)",
        subCommittees: ["Women's Cell", "Gender Sensitization Committee"],
      },
      {
        name: "Grievance Redressal Committee",
        subCommittees: ["Student Grievance Cell", "Staff Grievance Cell"],
      },
      {
        name: "IQAC (Internal Quality Assurance Cell)",
        subCommittees: [
          "Academic Audit Committee",
          "Feedback Analysis Committee",
        ],
      },
      {
        name: "Placement Cell 2022-23",
        subCommittees: ["Internship Committee", "Industry Liaison Committee"],
      },
      {
        name: "Training & Development",
        subCommittees: ["Faculty Development Cell", "Student Development Cell"],
      },
      {
        name: "Library Committee",
        subCommittees: [
          "Book Procurement Committee",
          "Digital Resources Committee",
        ],
      },
      {
        name: "Sports Committee",
        subCommittees: ["Indoor Games Committee", "Outdoor Games Committee"],
      },
      {
        name: "Cultural Committee",
        subCommittees: [
          "Annual Day Committee",
          "Festival Celebration Committee",
        ],
      },
      {
        name: "NSS Unit",
        subCommittees: [
          "Community Service Committee",
          "Blood Donation Committee",
        ],
      },
      {
        name: "Examination Committee",
        subCommittees: [
          "Internal Examination Cell",
          "University Examination Cell",
        ],
      },
    ],
  },
  naac: {
    title: "NAAC Accreditation",
    description: "Our NAAC accreditation status and achievements",
    content: `NAAC Accreditation

SNBP College of Arts, Commerce, Science & Management Studies has been accredited by the National Assessment and Accreditation Council (NAAC) with a B++ Grade.

This accreditation is a testament to our commitment to quality education and continuous improvement. The NAAC assessment evaluates institutions on various criteria including:

• Curricular Aspects
• Teaching-Learning and Evaluation
• Research, Innovations and Extension
• Infrastructure and Learning Resources
• Student Support and Progression
• Governance, Leadership and Management
• Institutional Values and Best Practices

Our B++ grade reflects our dedication to maintaining high standards across all these areas. We continue to work towards further improvement and aim for even higher recognition in future assessments.`,
    image: `${API_BASE}/images/`,
  },
};
