// src/pages/Administration/CommitteePage.tsx
import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { FaFilePdf } from "react-icons/fa";
import { committeeFiles, committeeLabels } from "@/data/administration/committeeData";

const CommitteePage = () => {
  const { type } = useParams<{ type: string }>();
  const file = type ? committeeFiles[type] : null;
  const label = type ? committeeLabels[type] : "Committee File";

  return (
    <Layout>
      <PageHeader
        title={label}
        breadcrumbs={[
          { label: "Administration", href: "/administration" },
          { label: "Committees", href: "/administration/committees" },
          { label: label },
        ]}
      />

      <section className="py-12">
        <div className="container flex flex-col items-center gap-6">
          {file ? (
            <a
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
              download
              title={`${label} (${file.type.toUpperCase()})`}
              className="flex items-center justify-center w-16 h-16 rounded-lg hover:scale-110 transition-transform"
            >
              <FaFilePdf className="w-12 h-12 text-red-600" />
            </a>
          ) : (
            <p className="text-muted-foreground text-lg">
              Select a committee from the list to view the file.
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CommitteePage;
