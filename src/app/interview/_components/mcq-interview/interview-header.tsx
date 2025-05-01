import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Timer from "../Timer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ITimer } from "@/types";

interface InterviewHeaderProps {
  interviewTitle: string;
  interviewType?: string;
  logo?: string;
  time: ITimer;
  setTime: React.Dispatch<React.SetStateAction<ITimer>>;
}

const InterviewHeader: React.FC<InterviewHeaderProps> = ({
  interviewTitle,
  interviewType,
  logo,
  time,
  setTime,
}) => {
  return (
    <section className="space-y-4">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <div className="flex items-center gap-2">
          <Avatar className="size-10 border border-muted">
            <AvatarImage
              src={logo || "/logo-primary.png"}
              alt={"MockByte"}
              className="p-1.5 h-10 w-auto"
            />
            <AvatarFallback>G</AvatarFallback>
          </Avatar>
          <h1 className="text-lg font-medium text-foreground">
            {interviewTitle}
          </h1>
        </div>
        <Timer time={time} setTime={setTime} />

        {interviewType && (
          <Badge className="bg-muted text-foreground text-sm px-2 py-1 rounded-full font-medium capitalize">
            {interviewType} Interview
          </Badge>
        )}
      </div>
      <Separator />
    </section>
  );
};

export default InterviewHeader;
