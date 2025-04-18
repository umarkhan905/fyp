import { Button } from "@/components/ui/button";
import { formatDate } from "@/utils/format-date";
import { ArrowRight, CalendarDays } from "lucide-react";
import React from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";

interface Interview {
  id: number;
  type: string;
  date: string;
  score: number;
  description: string;
}

export default function InterviewCard({ interview }: { interview: Interview }) {
  return (
    <section
      key={interview.id}
      className="flex flex-col p-4 gap-2 border rounded-lg hover:bg-foreground/10 bg-gradient-to-t from-background/10 via-background/10 to-foreground/10 transition-all duration-300 relative"
    >
      {/* Interview Type */}
      <div className="p-1 px-2 rounded-se-md rounded-es-md absolute top-0 right-0 bg-primary/40 text-xs text-foreground">
        {interview.type}
      </div>

      {/* Interview Image */}
      {/* <div className="size-10 rounded-full bg-primary"></div> */}
      <FcGoogle className="size-10" />

      {/* Interview Name */}
      <h3 className="text-lg font-semibold">{interview.type} Interview</h3>

      {/* Date and Score */}
      <section className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-muted-foreground">
          <CalendarDays className="size-4" />
          <p className="text-sm">{formatDate(new Date(interview.date))}</p>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <FaStar className="size-4" />
          <p className="text-sm">{interview.score}/10</p>
        </div>
      </section>

      {/* Interview Description */}
      <p className="text-sm text-muted-foreground">{interview.description}</p>

      {/* Button */}
      <section className="flex items-center justify-between flex-wrap gap-2">
        {/* Interview Icons */}
        <section className="flex items-center">
          <div className="flex items-center p-2 rounded-full bg-primary/20 text-primary border border-primary/30">
            <RiTailwindCssFill className="size-6" />
          </div>
          <div
            className={`flex items-center p-2 rounded-full bg-primary/20 text-primary -ml-2 border border-primary/30`}
          >
            <RiReactjsLine className="size-6" />
          </div>
        </section>

        <Button className="rounded-full text-white">
          View Interview <ArrowRight />
        </Button>
      </section>
    </section>
  );
}
