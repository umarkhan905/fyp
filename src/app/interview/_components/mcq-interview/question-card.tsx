import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { IQuestion } from "@/types";
import { ArrowRight, AudioLines } from "lucide-react";
import React, { useEffect, useState } from "react";

interface Props {
  currentQuestionIndex: number;
  totalQuestions: number;
  currentQuestion: IQuestion | null;
  isSpeaking: boolean;
  userAnswers: Record<string, string>;
  setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
  setUserAnswers: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  onFinishInterview: () => void;
}

export default function QuestionCard({
  totalQuestions,
  currentQuestionIndex,
  currentQuestion,
  isSpeaking,
  userAnswers,
  setUserAnswers,
  setCurrentQuestionIndex,
  onFinishInterview,
}: Props) {
  const [showExplanation, setShowExplanation] = useState<boolean>(false);
  const [showNextButton, setShowNextButton] = useState<boolean>(true);

  const smartSplitOptions = (optionString: string): string[] => {
    const result = [];
    let current = "";
    let parenCount = 0;

    for (const char of optionString) {
      if (char === "(") parenCount++;
      if (char === ")") parenCount--;

      if (char === "," && parenCount === 0) {
        result.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    if (current) result.push(current.trim());
    return result;
  };

  const onAnswer = (option: string) => {
    if (showExplanation) return;

    setUserAnswers((prev) => ({
      ...prev,
      [currentQuestion?.id as string]: option,
    }));
    setShowExplanation(true);
  };

  const getOptionClasses = (option: string) => {
    const isCorrect = option === currentQuestion?.answer;
    const isSelected = option === selectedAnswer;

    if (!showExplanation) return "border";

    if (isCorrect) return "bg-green-100 border-green-400";
    if (isSelected && !isCorrect) return "bg-red-100 border-red-400";

    return "border";
  };

  const onNext = () => {
    // check if last question
    if (currentQuestionIndex === totalQuestions - 1) return;

    setCurrentQuestionIndex((prev) => prev + 1);
    setShowExplanation(false);
  };

  const options = smartSplitOptions(currentQuestion?.options as string);
  const selectedAnswer = userAnswers[currentQuestion?.id as string];

  useEffect(() => {
    if (currentQuestionIndex === totalQuestions - 1) {
      setShowNextButton(false);
    }
  }, [currentQuestionIndex, totalQuestions]);

  return (
    <Card className="w-full shadow-md">
      <CardContent className="space-y-6">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-medium text-interview-text">
            {currentQuestion?.question}
          </h3>
          <Button
            variant="ghost"
            size="icon"
            className={`shrink-0 ${isSpeaking ? "animate-pulse" : ""}`}
            aria-label="Read question aloud"
          >
            <AudioLines
              className={`size-5 ${isSpeaking ? "text-primary" : "text-muted-foreground"}`}
            />
          </Button>
        </div>

        <div className="space-y-3">
          {options?.map((option, index) => (
            <div
              key={index}
              className={`p-4 rounded-md cursor-pointer transition-colors ${getOptionClasses(option)}`}
              onClick={() => onAnswer(option)}
            >
              {option}
            </div>
          ))}
        </div>

        {showExplanation && currentQuestion?.explanation && (
          <div className="p-4 bg-primary/10 border border-primary/20 rounded-md">
            <h4 className="font-medium text-primary">Explanation:</h4>
            <p className="text-muted-foreground">
              {currentQuestion?.explanation}
            </p>
          </div>
        )}

        <CardFooter className="flex justify-end px-0">
          {showExplanation && showNextButton && (
            <Button onClick={onNext} className="min-h-11 rounded-full">
              Next Question <ArrowRight className="size-4" />
            </Button>
          )}

          {showExplanation && !showNextButton && (
            <Button
              onClick={onFinishInterview}
              className="min-h-11 rounded-full"
            >
              Finish Interview <ArrowRight className="size-4" />
            </Button>
          )}
        </CardFooter>
      </CardContent>
    </Card>
  );
}
