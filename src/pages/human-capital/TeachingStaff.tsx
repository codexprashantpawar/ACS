import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { teachingStaffData, FacultyMember } from "@/data/human-capital/teachingStaffData";
import { FacultyCard } from "@/components/faculty/FacultyCard";
import { FacultyProfileModal } from "@/components/faculty/FacultyProfileModal";

const TeachingStaff = () => {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  return (
    <Layout>
      <PageHeader
        title="Teaching Staff"
        description="Meet our dedicated faculty members committed to academic excellence"
        breadcrumbs={[
          { label: "Human Capital", href: "/human-capital/teaching-staff" },
          { label: "Teaching Staff" },
        ]}
      />
      
      <section className="py-12">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teachingStaffData.map((faculty) => (
              <FacultyCard
                key={faculty.id}
                faculty={faculty}
                onReadMore={() => setSelectedFaculty(faculty)}
              />
            ))}
          </div>
        </div>
      </section>

      <FacultyProfileModal
        faculty={selectedFaculty}
        isOpen={!!selectedFaculty}
        onClose={() => setSelectedFaculty(null)}
      />
    </Layout>
  );
};

export default TeachingStaff;
