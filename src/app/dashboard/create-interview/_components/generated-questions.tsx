import { IQuestion } from "@/types";
import React from "react";

interface Props {
  questions: IQuestion[];
  assessmentType: string;
}

export default function GeneratedQuestions({
  questions,
  assessmentType,
}: Props) {
  console.log("questions", questions);
  return assessmentType === "MCQ_BASED" ? (
    <section className="grid grid-cols-1 gap-4">
      {questions.length > 0 ? (
        questions.map((question, index) => (
          <div
            className="p-4 border rounded-md flex flex-col gap-1.5"
            key={index}
          >
            {/* question */}
            <div>
              <h2 className="text-lg font-semibold">Question {index + 1}</h2>
              <p className="text-foreground">{question.question}</p>
            </div>

            {/* options */}
            <div>
              <h3 className="font-semibold">Options</h3>
              <div className="grid grid-cols-2 gap-1">
                {question?.options?.map((option, optionIndex) => (
                  <p key={optionIndex}>
                    <span className="font-semibold">{optionIndex + 1})</span>{" "}
                    {option.option}
                  </p>
                ))}
              </div>
            </div>

            {/* Correct Answer */}
            <div className="p-2 bg-primary/20 text-primary rounded-md">
              <p className="font-semibold">Answer</p>
              <p>The correct answer is {question.answer}</p>
            </div>

            {/* Explanation */}
            <div className="p-2 bg-emerald-500/20 text-emerald-500 rounded-md">
              <p className="font-semibold">Explanation</p>{" "}
              <p>{question.explanation}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-muted-foreground text-center text-lg">
          No questions generated yet.
        </p>
      )}
    </section>
  ) : (
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
