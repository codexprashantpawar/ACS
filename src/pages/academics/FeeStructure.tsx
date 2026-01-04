import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { FileText } from "lucide-react";
import { feeStructureData } from "@/data/academics/feeStructureData";

const FeeStructure = () => {
  const { program } = useParams<{ program: string }>();
  const data = program ? feeStructureData[program] : null;

  if (!data) {
    return (
      <Layout>
        <PageHeader
          title="Page Not Found"
          description="The requested fee structure page could not be found."
          breadcrumbs={[
            { label: "Academics" },
            { label: "Fee Structure" },
            { label: "Not Found" },
          ]}
        />
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader
        title={data.title}
        description="View fee structure details for the selected program"
        breadcrumbs={[
          { label: "Academics", href: "/academics/arts" },
          { label: "Fee Structure" },
          { label: program?.toUpperCase() || "" },
        ]}
      />

      <section className="py-12">
        <div className="container">
          <div className="bg-card rounded-xl border border-border overflow-hidden shadow-soft">
            <div className="p-4 bg-primary/5 border-b border-border flex items-center gap-3">
              <FileText className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{data.title}</span>
            </div>

            <div className="w-full h-[80vh]">
              <iframe
                src={`${data.pdfUrl}#toolbar=1&navpanes=0`}
                className="w-full h-full border-0"
                title={data.title}
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FeeStructure;
