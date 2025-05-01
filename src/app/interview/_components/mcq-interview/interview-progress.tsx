import React from "react";
import { Progress } from "@/components/ui/progress";

interface InterviewProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

const InterviewProgress: React.FC<InterviewProgressProps> = ({
  currentQuestion,
  totalQuestions,
}) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full space-y-2">
      <div className="flex justify-between text-sm text-interview-text/80">
        <div>
          Question {currentQuestion} of {totalQuestions}
        </div>
      </div>
      <Progress value={progress} className="h-2" />
    </div>
  );
};

export default InterviewProgress;
