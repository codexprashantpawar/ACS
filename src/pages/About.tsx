// import { useParams } from "react-router-dom";
// import { Layout } from "@/components/layout/Layout";
// import { PageHeader } from "@/components/common/PageHeader";
// import { aboutData } from "@/data/about/aboutData";
// import { Button } from "@/components/ui/button";
// import { FileDown, ExternalLink } from "lucide-react";

// interface AboutPageData {
//   title: string;
//   description: string;
//   content: string;
//   image?: string;
//   author?: string;
//   position?: string;
//   pdf?: string;
//   committeeList?: {
//     name: string;
//     subCommittees: string[];
//   }[];
//   documents?: {
//     affiliationLetter?: string;
//     permissionLetter?: string;
//   };
// }

// const About = () => {
//   const { page } = useParams<{ page: string }>();
//   const pageAboutData = page ? (aboutData[page as keyof typeof aboutData]) : null;

//   if (!aboutData) {
//     return (
//       <Layout>
//         <PageHeader
//           title="About Us"
//           description="Learn about SNBP Arts, Commerce & Science College"
//           breadcrumbs={[{ label: "About Us" }]}
//         />
//         <section className="py-12">
//           <div className="container">
//             <p className="text-muted-foreground">Page not found.</p>
//           </div>
//         </section>
//       </Layout>
//     );
//   }

//   // Check if this is a message page (has author)
//   const isMessagePage = !!aboutData.author;

//   // Check if this is the committees page
//   const isCommitteesPage = !!aboutData.committeeList;

//   // Check if this is the organogram page
//   const isOrganogramPage = !!aboutData.pdf;

//   return (
//     <Layout>
//       <PageHeader
//         title={aboutData.title}
//         description={aboutData.description}
//         breadcrumbs={[
//           { label: "About Us", href: "/about/se-society" },
//           { label: aboutData.title },
//         ]}
//       />
//       <section className="py-12">
//         <div className="container">
//           <div className="grid lg:grid-cols-3 gap-8">
//             <div className="lg:col-span-2">
//               <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
//                 {/* Message page with author info */}
//                 {isMessagePage && (
//                   <div className="flex flex-col sm:flex-row gap-6 mb-6">
//                     <img
//                       src={aboutData.image}
//                       alt={aboutData.author}
//                       className="w-40 h-48 object-cover rounded-lg flex-shrink-0"
//                     />
//                     <div>
//                       <h2 className="text-xl font-display font-bold text-foreground mb-1">
//                         {aboutData.author}
//                       </h2>
//                       <p className="text-primary font-medium mb-4">{aboutData.position}</p>
//                     </div>
//                   </div>
//                 )}

//                 {/* Organogram page with PDF download */}
//                 {isOrganogramPage && (
//                   <div className="mb-6">
//                     <Button asChild>
//                       <a href={aboutData.pdf} target="_blank" rel="noopener noreferrer">
//                         <FileDown className="w-4 h-4 mr-2" />
//                         Download Organogram PDF
//                       </a>
//                     </Button>
//                   </div>
//                 )}

//                 {/* Committees list */}
//                 {isCommitteesPage && aboutData.committeeList && (
//                   <div className="space-y-4">
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                       {aboutData.committeeList.map((committee, index) => (
//                         <div
//                           key={index}
//                           className="bg-secondary/50 rounded-lg p-4 border border-border"
//                         >
//                           <h3 className="font-semibold text-foreground text-sm mb-2">
//                             {index + 1}. {committee.name}
//                           </h3>
//                           {committee.subCommittees.length > 0 && (
//                             <ul className="space-y-1">
//                               {committee.subCommittees.map((sub, subIndex) => (
//                                 <li
//                                   key={subIndex}
//                                   className="text-xs text-muted-foreground pl-3 border-l-2 border-primary/30"
//                                 >
//                                   {sub}
//                                 </li>
//                               ))}
//                             </ul>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 )}

//                 {/* Regular content */}
//                 {!isCommitteesPage && (
//                   <div className="prose prose-lg max-w-none">
//                     {aboutData.content.split("\n\n").map((paragraph, index) => (
//                       <p key={index} className="text-foreground mb-4 whitespace-pre-line">
//                         {paragraph}
//                       </p>
//                     ))}
//                   </div>
//                 )}

//                 {/* Documents for ACS page */}
//                 {aboutData.documents && (
//                   <div className="mt-6 flex flex-wrap gap-3">
//                     {aboutData.documents.permissionLetter && (
//                       <Button variant="outline" size="sm" asChild>
//                         <a href={aboutData.documents.permissionLetter} target="_blank" rel="noopener noreferrer">
//                           <ExternalLink className="w-4 h-4 mr-2" />
//                           Permission Letter
//                         </a>
//                       </Button>
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div>
//               <div className="bg-card rounded-xl p-6 shadow-soft border border-border sticky top-24">
//                 {!isMessagePage && aboutData.image && (
//                   <img
//                     src={aboutData.image}
//                     alt={aboutData.title}
//                     className="w-full h-48 object-cover rounded-lg mb-4"
//                   />
//                 )}
//                 <h3 className="font-display font-semibold text-lg text-foreground mb-2">
//                   Quick Links
//                 </h3>
//                 <ul className="space-y-2 text-sm">
//                   <li>
//                     <a href="/about/se-society" className="text-primary hover:underline">
//                       S.E. Society
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/about/acs" className="text-primary hover:underline">
//                       About SNBP ACS
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/about/president-message" className="text-primary hover:underline">
//                       President's Message
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/about/chairman-message" className="text-primary hover:underline">
//                       Chairman's Message
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/about/vice-principal-message" className="text-primary hover:underline">
//                       Vice-Principal's Message
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/about/organogram" className="text-primary hover:underline">
//                       Organogram
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/about/committees" className="text-primary hover:underline">
//                       List of Committees
//                     </a>
//                   </li>
//                   <li>
//                     <a href="/about/naac" className="text-primary hover:underline">
//                       NAAC Accreditation
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default About;

import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { aboutData } from "@/data/about/aboutData";
import { Button } from "@/components/ui/button";
import { FileDown, ExternalLink } from "lucide-react";

interface AboutPageData {
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

const About = () => {
  const { page } = useParams<{ page: string }>();

  const pageAboutData: AboutPageData | null =
    page && aboutData[page as keyof typeof aboutData]
      ? aboutData[page as keyof typeof aboutData]
      : null;

  // ✅ FIX: check pageAboutData, NOT aboutData
  if (!pageAboutData) {
    return (
      <Layout>
        <PageHeader
          title="About Us"
          description="Learn about SNBP Arts, Commerce & Science College"
          breadcrumbs={[{ label: "About Us" }]}
        />
        <section className="py-12">
          <div className="container">
            <p className="text-muted-foreground">Page not found.</p>
          </div>
        </section>
      </Layout>
    );
  }

  // ✅ FIX: use pageAboutData
  const isMessagePage = !!pageAboutData.author;
  const isCommitteesPage = !!pageAboutData.committeeList;
  const isOrganogramPage = !!pageAboutData.pdf;

  return (
    <Layout>
      <PageHeader
        title={pageAboutData.title}
        description={pageAboutData.description}
        breadcrumbs={[
          { label: "About Us", href: "/about/se-society" },
          { label: pageAboutData.title },
        ]}
      />

      <section className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl p-6 shadow-soft border border-border">
                {/* Message page */}
                {isMessagePage && (
                  <div className="flex flex-col sm:flex-row gap-6 mb-6">
                    {pageAboutData.image && (
                      <img
                        src={pageAboutData.image}
                        alt={pageAboutData.author ?? pageAboutData.title}
                        className="w-40 h-48 object-cover rounded-lg"
                      />
                    )}
                    <div>
                      <h2 className="text-xl font-bold mb-1">
                        {pageAboutData.author}
                      </h2>
                      <p className="text-primary font-medium">
                        {pageAboutData.position}
                      </p>
                    </div>
                  </div>
                )}

                {/* Organogram */}
                {isOrganogramPage && pageAboutData.pdf && (
                  <div className="mb-6">
                    <Button asChild>
                      <a
                        href={pageAboutData.pdf}
                        target="_blank"
                        rel="noopener noreferrer">
                        <FileDown className="w-4 h-4 mr-2" />
                        Download Organogram PDF
                      </a>
                    </Button>
                  </div>
                )}

                {/* Committees */}
                {isCommitteesPage && pageAboutData.committeeList && (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {pageAboutData.committeeList.map((committee, index) => (
                      <div
                        key={index}
                        className="bg-secondary/50 p-4 rounded-lg">
                        <h3 className="font-semibold text-sm mb-2">
                          {index + 1}. {committee.name}
                        </h3>
                        <ul className="space-y-1">
                          {committee.subCommittees.map((sub, i) => (
                            <li
                              key={i}
                              className="text-xs text-muted-foreground">
                              {sub}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}

                {/* Regular content */}
                {!isCommitteesPage && (
                  <div className="prose max-w-none">
                    {pageAboutData.content.split("\n\n").map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                )}

                {/* Documents */}
                {pageAboutData.documents?.permissionLetter && (
                  <div className="mt-6">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={pageAboutData.documents.permissionLetter}
                        target="_blank"
                        rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Permission Letter
                      </a>
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="bg-card p-6 rounded-xl sticky top-24">
              {!isMessagePage && pageAboutData.image && (
                <img
                  src={pageAboutData.image}
                  alt={pageAboutData.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
