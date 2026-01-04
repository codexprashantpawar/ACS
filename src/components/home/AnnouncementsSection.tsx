import { Link } from "react-router-dom";
import { Bell, ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Announcement {
  id: string;
  title: string;
  date: string;
  type: "notice" | "event" | "news";
}

const announcements: Announcement[] = [
  {
    id: "1",
    title: "Admission Open for Academic Year 2025-26",
    date: "Dec 5, 2025",
    type: "notice",
  },
  {
    id: "2",
    title: "Annual Sports Day Celebration",
    date: "Dec 15, 2025",
    type: "event",
  },
  {
    id: "3",
    title: "NAAC Peer Team Visit Scheduled",
    date: "Jan 10, 2026",
    type: "news",
  },
  {
    id: "4",
    title: "Semester End Examination Schedule Released",
    date: "Dec 1, 2025",
    type: "notice",
  },
];

const typeColors = {
  notice: "bg-primary-light text-primary",
  event: "bg-sky-light text-sky",
  news: "bg-accent text-accent-foreground",
};

export const AnnouncementsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary-light flex items-center justify-center">
              <Bell className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
              Latest Announcements
            </h2>
          </div>
          <Button asChild variant="ghost" className="hidden sm:flex">
            <Link to="/information/circulars">
              View All
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {announcements.map((announcement) => (
            <Link
              key={announcement.id}
              to={`/information/circulars/${announcement.id}`}
              className="group flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-soft transition-all"
            >
              <div className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[announcement.type]}`}>
                {announcement.type.charAt(0).toUpperCase() + announcement.type.slice(1)}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-foreground group-hover:text-primary transition-colors truncate">
                  {announcement.title}
                </h3>
                <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  {announcement.date}
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Button asChild variant="outline" className="w-full">
            <Link to="/information/circulars">
              View All Announcements
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
