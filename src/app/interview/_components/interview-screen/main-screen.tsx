"use client";

import React from "react";
import Logo from "@/components/branding/logo";
import { Button } from "@/components/ui/button";
import { Captions, CaptionsOff, Mic, MicOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { MdCallEnd } from "react-icons/md";
import Timer from "../Timer";
import Container from "@/components/ui/container";
import { useInterviewContext } from "@/context/interview-context";
import BrandName from "@/components/branding/brand-name";
import { vapi } from "@/lib/vapi";
import { ITimer, SavedMessage } from "@/types";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

interface MainScreenProps {
  isSpeaking: boolean;
  messages: SavedMessage[];
  lastMessage: string;
  time: ITimer;

  handleEndInterview: () => void;
  setTime: React.Dispatch<React.SetStateAction<ITimer>>;
}

export default function MainScreen({
  isSpeaking,
  lastMessage,
  messages,
  time,
  setTime,
  handleEndInterview,
}: MainScreenProps) {
  const { interview, user, setShowTranscript, showTranscript } =
    useInterviewContext();

  const handleMuteToggle = () => vapi.setMuted(!vapi.isMuted());

  return (
    <Container className="max-w-[80%] min-h-screen flex items-center justify-center flex-col gap-4">
      <div className="w-full">
        <div className="space-y-8 p-4">
          {/* Header Section */}
          <div className="flex items-center justify-between flex-wrap gap-2">
            {/* Interview Name */}
            <div className="flex items-center space-x-2">
              <FcGoogle className="size-5" />
              <span className="font-medium text-foreground">
                {interview?.role} Interview
              </span>
            </div>

            {/* Timer */}
            <Timer time={time} setTime={setTime} />

            {/* Interview Type */}
            <div className="bg-muted text-foreground text-sm px-2 py-1 rounded-full font-medium capitalize">
              {interview?.type?.toLowerCase()} Interview
            </div>
          </div>

          {/* Interview Section */}
          <div className="flex gap-2 sm:flex-row flex-col">
            <div className="flex-1 group">
              <div
                className={`bg-muted text-sm px-2 py-1 rounded-md h-40 flex items-center justify-center flex-col gap-2 border-2 ${isSpeaking ? "border-primary/80" : "border-muted"} min-h-80`}
              >
                <div className="relative">
                  <div className="size-16 flex items-center justify-center rounded-full bg-primary/20 group-hover:bg-primary/30 transition-all duration-300">
                    <Logo className="w-auto h-12" variant="logo-primary" />
                  </div>
                  {isSpeaking && (
                    <div className="absolute bottom-1.5 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <span className="font-bold">
                  <BrandName /> AI
                </span>
              </div>
            </div>
            <div className="flex-1 group">
              <div
                className={`bg-muted text-sm px-2 py-1 rounded-md h-40 flex items-center justify-center flex-col gap-2 border-2 ${!isSpeaking ? "border-primary/80" : "border-muted"} min-h-80`}
              >
                <div className="relative">
                  <Avatar className="size-16 rounded-full">
                    <AvatarImage src={user?.image as string} alt="User Image" />
                    <AvatarFallback className="bg-primary text-white size-full flex items-center justify-center font-semibold">{`${user?.firstName?.charAt(0)}${user?.lastName?.charAt(0)}`}</AvatarFallback>
                  </Avatar>
                  {!isSpeaking && (
                    <div className="absolute bottom-1.5 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  )}
                </div>
                <span className="font-bold">{user?.firstName}</span>
              </div>
            </div>
          </div>

          {/* Transcript Section */}

          {messages.length > 0 && showTranscript && (
            <div className="bg-muted text-sm px-2 py-1 min-h-16 rounded-md flex items-center justify-center border-2 border-muted">
              <p>{lastMessage}</p>
            </div>
          )}

          {/* Footer Section */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="size-3 rounded-full bg-green-500"></div>
              <span className="text-muted-foreground font-semibold">
                Active
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <Button
                variant={"outline"}
                className="rounded-full size-10 text-primary hover:text-primary"
                onClick={handleMuteToggle}
              >
                {vapi.isMuted() ? (
                  <MicOff className="size-5" />
                ) : (
                  <Mic className="size-5" />
                )}
              </Button>
              <Button
                variant={"destructive"}
                className="rounded-full size-10"
                onClick={handleEndInterview}
              >
                <MdCallEnd className="size-5" />
              </Button>
            </div>

            <Button
              variant={"outline"}
              className="rounded-full size-10 text-primary hover:text-primary"
              onClick={() =>
                setShowTranscript((showTranscript) => !showTranscript)
              }
            >
              {showTranscript ? (
                <CaptionsOff className="size-5" />
              ) : (
                <Captions className="size-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
