import React from "react";
import { Button } from "@/components/ui/button";
import { InterviewCategory } from "@/generated/prisma";
import { prisma } from "@/lib/prisma";
import { getUserSession } from "@/lib/session";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import NewInterviewCard from "../../_components/new-interview-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import SearchForm from "./_components/search-form";
import { redirect } from "next/navigation";
import { IInterview } from "@/types";

export default async function Category({
  params,
  searchParams,
}: {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ search_query?: string }>;
}) {
  const category = (await params).category;
  const searchQuery = decodeURIComponent(
    (await searchParams).search_query || ""
  );

  const user = await getUserSession();

  if (!user) redirect("/sign-in");

  let interviews: IInterview[] = [];

  if (category === "job" && user?.role === "INTERVIEWEE") {
    interviews = await prisma.interview.findMany({
      where: {
        category: category.toUpperCase() as InterviewCategory,
        participants: {
          some: {
            intervieweeId: user?.id as string,
          },
        },
        OR: [
          {
            role: {
              contains: searchQuery,
              mode: "insensitive",
            },
          },
          {
            companyName: {
              contains: searchQuery,
              mode: "insensitive",
            },
          },
        ],
      },
      take: 12,
    });
  } else {
    interviews = await prisma.interview.findMany({
      where: {
        category: category.toUpperCase() as InterviewCategory,
        createdById: user?.id as string, // Add this line
        OR: [
          {
            role: {
              contains: searchQuery,
              mode: "insensitive",
            },
          },
          {
            companyName: {
              contains: searchQuery,
              mode: "insensitive",
            },
          },
        ],
      },
      take: 12,
    });
  }

  return (
    <>
      <section>
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            <span className="text-primary">Umar Khan</span>{" "}
            <span className="capitalize">{category}</span> Interviews History
          </h1>
        </div>
        <p className="text-muted-foreground">
          Review and manage your mock interviews.
        </p>
      </section>

      {/* Search and Filters */}
      <section className="w-full flex items-center justify-center  flex-col md:justify-between md:flex-row gap-3">
        {/* Search */}
        <SearchForm category={category} query={searchQuery || ""} />

        {/* Filters */}
        <div className="flex items-center gap-2">
          {/* By Difficulty */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"outline"} className="rounded-full min-h-11">
                Difficulty
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Easy</DropdownMenuItem>
              <DropdownMenuItem>Medium</DropdownMenuItem>
              <DropdownMenuItem>Hard</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* By Status */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"outline"} className="rounded-full min-h-11">
                Status
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Pending</DropdownMenuItem>
              <DropdownMenuItem>Created</DropdownMenuItem>
              <DropdownMenuItem>Expired</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* By Status */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"outline"} className="rounded-full min-h-11">
                Assesment Type
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>MCQs</DropdownMenuItem>
              <DropdownMenuItem>Voice Assesment</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>

      {/* interviews */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-6">
        {interviews.map((interview) => (
          <NewInterviewCard
            userId={user?.id as string}
            interview={interview}
            key={interview.id}
          />
        ))}
      </section>

      {/* pagination */}
      <Pagination className="mt-3">
        <PaginationContent className="gap-3">
          <PaginationItem>
            <PaginationPrevious href="#" className="border" />
          </PaginationItem>
          <PaginationItem>1 / 2</PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="border" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
