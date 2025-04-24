import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Container from "@/components/ui/container";

export default function Faq() {
  return (
    <section className="w-full py-4 md:py-8">
      <Container className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <img
            src="/faq.jpg"
            alt="FAQ Image"
            className="w-3/4 h-auto object-cover mx-auto"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-500">
            Here are some frequently asked questions about our platform.
          </p>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is AI-Powered Interview Practice?
              </AccordionTrigger>
              <AccordionContent>
                AI-Powered Interview Practice is a platform that uses advanced
                AI algorithms to simulate realistic interview scenarios, provide
                instant feedback, and help you improve your interview skills.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How can I sign up for AI-Powered Interview Practice?
              </AccordionTrigger>
              <AccordionContent>
                You can sign up for AI-Powered Interview Practice by clicking on
                the "Get Started For Free" button on the home page.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What types of interviews can I practice?
              </AccordionTrigger>
              <AccordionContent>
                You can practice a wide range of interviews, including
                technical, behavioral, and situational interviews across various
                industries.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Is there a free trial available?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer a free trial that allows you to experience the
                platform and its features before committing to a subscription.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How does the AI feedback work?
              </AccordionTrigger>
              <AccordionContent>
                The AI analyzes your responses during practice interviews and
                provides instant feedback on your performance, including areas
                for improvement and tips for better answers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>
                Can I customize my interview practice sessions?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can customize your interview practice sessions by
                selecting specific topics, industries, and question types to
                focus on.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Container>
    </section>
  );
}
