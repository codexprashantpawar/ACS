import React from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { PageHeader } from "@/components/common/PageHeader";
import { FaFilePdf, FaFileWord, FaFileExcel } from "react-icons/fa"; // file type icons
import { calendarFiles, calendarLabels } from "@/data/academics/CalenderData";

const CalendarPage = () => {
  const { type } = useParams<{ type: string }>();
  const file = type ? calendarFiles[type] : null;
  const label = type ? calendarLabels[type] : "Calendar";

  // Choose icon based on file type
  const FileIcon = file
    ? file.type === "pdf"
      ? FaFilePdf
      : file.type === "docx"
      ? FaFileWord
      : file.type === "xlsx"
      ? FaFileExcel
      : FaFilePdf
    : null;

  return (
    <Layout>
      <PageHeader
        title={label}
        breadcrumbs={[
          { label: "Academics", href: "/academics" },
          { label: "Calendar" },
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
              {FileIcon && (
                <FileIcon
                  className={`w-12 h-12 ${
                    file.type === "pdf"
                      ? "text-red-600"
                      : file.type === "docx"
                      ? "text-blue-600"
                      : file.type === "xlsx"
                      ? "text-green-600"
                      : "text-gray-600"
                  }`}
                />
              )}
            </a>
          ) : (
            <p className="text-muted-foreground text-lg">
              Select a calendar from the list to view the file.
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default CalendarPage;
