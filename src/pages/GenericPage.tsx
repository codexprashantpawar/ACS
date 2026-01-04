import { useParams, useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";

// Helper to convert slug to title
const slugToTitle = (slug: string): string => {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Helper to get section from path
const getSectionFromPath = (path: string): string => {
  const parts = path.split("/").filter(Boolean);
  return parts.length > 0 ? slugToTitle(parts[0]) : "";
};

const GenericPage = () => {
  const { "*": wildcard } = useParams();
  const location = useLocation();
  
  const pathParts = location.pathname.split("/").filter(Boolean);
  const section = pathParts.length > 0 ? slugToTitle(pathParts[0]) : "";
  const pageName = pathParts.length > 1 ? slugToTitle(pathParts[pathParts.length - 1]) : section;
  
  const breadcrumbs = pathParts.map((part, index) => ({
    label: slugToTitle(part),
    href: index < pathParts.length - 1 ? "/" + pathParts.slice(0, index + 1).join("/") : undefined,
  }));

  return (
    <Layout>
      <PageHeader
        title={pageName}
        description={`Information about ${pageName.toLowerCase()}.`}
        breadcrumbs={breadcrumbs}
      />
      
      <section className="py-16">
        <div className="container">
          <div className="bg-card rounded-xl p-8 shadow-soft border border-border">
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📄</span>
              </div>
              <h2 className="text-xl font-semibold text-foreground mb-2">Content Coming Soon</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                This page is under development. Please check back later for more information about {pageName.toLowerCase()}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GenericPage;
