"use client";

import Logo from "@/components/branding/logo";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useState, useRef } from "react";

export default function TestAudioButton() {
  const [testing, setTesting] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const handleTestAudio = async () => {
    if (testing) {
      // Stop test
      streamRef.current?.getTracks().forEach((track) => track.stop());
      if (audioRef.current) {
        audioRef.current.srcObject = null;
      }
      setTesting(false);
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        streamRef.current = stream;
        if (audioRef.current) {
          audioRef.current.srcObject = stream;
          audioRef.current.play();
        }
        setTesting(true);
      } catch (err) {
        alert("Microphone access denied or not available.");
        console.error(err);
      }
    }
  };

  return (
    <div className="space-y-4">
      <Button
        variant={testing ? "destructive" : "outline"}
        onClick={handleTestAudio}
        className="w-full min-h-11 rounded-full"
      >
        <Settings className="size-4" /> {testing ? "Stop Test" : "Test Audio"}
      </Button>

      {testing && (
        <div
          className={`size-14 rounded-full flex items-center justify-center mx-auto transition-all duration-300 ${
            testing ? "bg-primary/30" : "bg-primary/20"
          } relative z-0`}
        >
          <Logo variant="logo-primary" className="w-auto h-10 z-10" />

          <div className="size-[70px] rounded-full -z-[1] bg-primary/20 absolute animate-pulse"></div>
        </div>
      )}
      {/* Hidden audio element */}
      <audio ref={audioRef} hidden />
    </div>
  );
}
