import { Link } from "react-router-dom";
import { Bell, ArrowRight, Calendar, Megaphone } from "lucide-react";
import { useEffect, useState } from "react";

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
  {
    id: "5",
    title: "Guest Lecture on Data Science - Register Now",
    date: "Dec 20, 2025",
    type: "event",
  },
  {
    id: "6",
    title: "Library will remain closed on Dec 25",
    date: "Dec 22, 2025",
    type: "notice",
  },
];

const typeColors = {
  notice: "bg-primary/10 text-primary border-primary/20",
  event: "bg-sky-500/10 text-sky-600 border-sky-500/20",
  news: "bg-amber-500/10 text-amber-600 border-amber-500/20",
};

const typeIcons = {
  notice: "📢",
  event: "🎉",
  news: "📰",
};

export const AnnouncementsTicker = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="py-4 bg-gradient-to-r from-primary/5 via-background to-primary/5 border-y border-border/50">
      <div className="container">
        <div className="flex items-center gap-4">
          {/* Label */}
          <div className="flex items-center gap-2 px-4 py-2 bg-primary rounded-full text-primary-foreground font-semibold text-sm whitespace-nowrap shadow-md">
            <Megaphone className="w-4 h-4" />
            <span>Latest Updates</span>
          </div>

          {/* Ticker Container */}
          <div 
            className="flex-1 overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className={`flex gap-6 animate-ticker ${isPaused ? 'pause-animation' : ''}`}
              style={{
                width: 'max-content',
              }}
            >
              {/* Duplicate announcements for seamless loop */}
              {[...announcements, ...announcements].map((announcement, index) => (
                <Link
                  key={`${announcement.id}-${index}`}
                  to={`/information/circulars/${announcement.id}`}
                  className={`flex items-center gap-3 px-4 py-2 rounded-full border ${typeColors[announcement.type]} hover:scale-105 transition-transform whitespace-nowrap`}
                >
                  <span className="text-base">{typeIcons[announcement.type]}</span>
                  <span className="font-medium text-sm">{announcement.title}</span>
                  <span className="text-xs opacity-70 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {announcement.date}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* View All Link */}
          <Link
            to="/information/circulars"
            className="hidden md:flex items-center gap-1 text-sm font-medium text-primary hover:underline whitespace-nowrap"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-ticker {
          animation: ticker 30s linear infinite;
        }
        
        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
