import {
  FormCard,
  FormCardContent,
  FormCardFooter,
} from "@/components/form/form-card";
import React from "react";
import CreateInterviewForm from "./create-interview-form";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import BrandName from "@/components/branding/brand-name";

export default function IntervieweePage() {
  return (
    <section className="max-w-lg w-full mx-auto">
      <FormCard
        cardLabel="Create a Mock Interview"
        cardDescription="Enter your details to create a mock interview"
      >
        <FormCardContent>
          <CreateInterviewForm />
        </FormCardContent>

        <div className="flex items-center gap-2 max-w-[80%] w-full mx-auto">
          <div className="w-1/2 h-px bg-muted" />
          <span className="text-muted-foreground">or</span>
          <div className="w-1/2 h-px bg-muted" />
        </div>
        <FormCardFooter className="flex flex-col gap-2">
          <Button className="w-full min-h-11 rounded-full bg-emerald-500 text-white hover:bg-emerald-500/90">
            <Phone />
            <span>
              Call with <BrandName /> Agent
            </span>
          </Button>
          <span className="text-muted-foreground text-sm">
            Call with <BrandName /> Agent to create a mock interview
          </span>
        </FormCardFooter>
      </FormCard>
    </section>
  );
}
