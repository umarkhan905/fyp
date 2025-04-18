import { IQuestion } from "@/types";
import React from "react";

interface Props {
  questions: IQuestion[];
}

export default function GeneratedQuestions({ questions }: Props) {
  return (
    <section className="grid grid-cols-1 gap-4">
      {questions.length > 0 ? (
        questions.map((question, index) => (
          <div
            className="p-4 border rounded-md flex flex-col gap-1"
            key={index}
          >
            <h3 className="text-lg font-semibold">Question {index + 1}</h3>
            <p className="text-foreground">{question.question}</p>
          </div>
        ))
      ) : (
        <p className="text-muted-foreground text-center text-lg">
          No questions generated yet.
        </p>
      )}
    </section>
  );
}
