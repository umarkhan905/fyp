import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Volume2, VolumeOff } from "lucide-react";
import { MdCallEnd } from "react-icons/md";

interface Props {
  isSpeaking: boolean;
  setIsSpeaking: React.Dispatch<React.SetStateAction<boolean>>;
  onFinishInterview: () => void;
}

export default function InterviewActions({
  isSpeaking,
  setIsSpeaking,
  onFinishInterview,
}: Props) {
  const onMute = () => {
    alert("Muted");
    setIsSpeaking((prev) => !prev);
  };

  return (
    <Card className="shadow-none border-none w-full p-3">
      <CardContent className="flex items-center justify-center gap-4">
        <Button
          variant={"outline"}
          className="rounded-full"
          size={"icon"}
          aria-label="Mute"
          onClick={onMute}
        >
          {isSpeaking ? (
            <VolumeOff className="size-5" />
          ) : (
            <Volume2 className="size-5" />
          )}
        </Button>

        <Button
          variant={"destructive"}
          className="rounded-full"
          size={"icon"}
          aria-label="End Interview"
          onClick={onFinishInterview}
        >
          <MdCallEnd className="size-5" />
        </Button>
      </CardContent>
    </Card>
  );
}
