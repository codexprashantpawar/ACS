import { scienceCourses } from "@/data/academics/ScienceData";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

export default function SciencePage() {
  return (
    <Layout>
      <PageHeader
        title="Department of Science"
        description="Explore Science courses, eligibility, fees, and syllabus at SNBP ACS"
        breadcrumbs={[
          { label: "Academics", href: "/academics/science" },
          { label: "Science" },
        ]}
      />

      <main className="container mx-auto px-4 py-8">
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border p-3">Category</th>
                {scienceCourses.map((course) => (
                  <th key={course.category} className="border p-3">
                    {course.category}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {[
                { label: "Course Intake", key: "intake" },
                { label: "Duration", key: "duration" },
                { label: "Eligibility", key: "eligibility" },
                { label: "Admission Process", key: "admissionProcess" },
                { label: "Fee Structure", key: "fee" },
                { label: "Documents Required", key: "documents" },
                { label: "Syllabus Overview", key: "syllabus" },
              ].map((row) => (
                <tr key={row.key}>
                  <td className="border p-3 font-medium">{row.label}</td>

                  {scienceCourses.map((course) => (
                    <td key={course.category} className="border p-3">
                      {row.key === "syllabus" ? (
                        <a
                          href={course.syllabus}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          View
                        </a>
                      ) : (
                        course[row.key as keyof typeof course]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
}
