import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";
import InterviewCard from "../_components/interview-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function InterviewsHistory() {
  const pastInterviews = [
    {
      id: 1,
      type: "Technical",
      date: "2025-04-01",
      score: 8.2,
      description:
        "This is a sample description for the recent interview. It should provide some context for the user.",
    },
    {
      id: 2,
      type: "Product",
      date: "2025-03-25",
      score: 7.5,
      description:
        "This is a sample description for the recent interview. It should provide some context for the user.",
    },
    {
      id: 3,
      type: "Sales",
      date: "2025-03-15",
      score: 9.8,
      description:
        "This is a sample description for the recent interview. It should provide some context for the user.",
    },
    {
      id: 4,
      type: "Marketing",
      date: "2025-02-10",
      score: 6.3,
      description:
        "This is a sample description for the recent interview. It should provide some context for the user.",
    },
    {
      id: 5,
      type: "Design",
      date: "2025-01-05",
      score: 8.9,
      description:
        "This is a sample description for the recent interview. It should provide some context for the user.",
    },
    {
      id: 6,
      type: "Business",
      date: "2024-12-30",
      score: 7.1,
      description:
        "This is a sample description for the recent interview. It should provide some context for the user.",
    },
  ];

  return (
    <>
      <section>
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-foreground  mb-2">
            Your Past Interviews
          </h1>
        </div>
        <p className="text-muted-foreground">
          Review your past interview sessions and performance
        </p>
      </section>

      {/* Search and Filter */}
      <section className="mb-3">
        {/* Search */}
        <div className="max-w-lg w-full flex items-center rounded-full border p-1">
          <input
            type="text"
            placeholder="Search interviews..."
            className="border-none outline-none flex-1 h-11 rounded-full px-1"
          />
          <Button className="size-11 rounded-full">
            <Search />
          </Button>
        </div>
      </section>

      {/* Past Interviews */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pastInterviews.map((interview) => (
          <InterviewCard key={interview.id} interview={interview} />
        ))}
      </section>

      {/* Pagination */}
      <section className="flex justify-center mt-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </section>
    </>
  );
}
