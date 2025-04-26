import React from "react";
import { Search } from "lucide-react";
import Form from "next/form";
import { Button } from "@/components/ui/button";
import ResetButton from "./reset-button";

interface Props {
  category: string;
  query: string;
}

export default function SearchForm({ category, query }: Props) {
  return (
    <Form
      action={`/dashboard/history/${category}`}
      scroll={false}
      className="max-w-md w-full rounded-full border-2 border-muted-foreground flex p-1"
      id="search-form"
    >
      <input
        type="text"
        className="flex-1 rounded-full outline-none px-1"
        placeholder="Search by position or company..."
        name="search_query"
        defaultValue={query}
        autoComplete="off"
      />
      <div className="flex items-center gap-1">
        {query && <ResetButton category={category} />}

        <Button className="text-white rounded-full size-10" type="submit">
          <Search className="size-5" />
        </Button>
      </div>
    </Form>
  );
}
