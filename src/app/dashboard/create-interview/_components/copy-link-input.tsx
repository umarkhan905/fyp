"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BASE_ADDRESS } from "@/constants";
import { Check, Copy } from "lucide-react";
import React, { useRef, useState } from "react";

interface Props {
  interviewId: string;
}

export default function CopyLinkInput({ interviewId }: Props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isLinkCopied, setIsLinkCopied] = useState<boolean>(false);
  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select();
      navigator.clipboard.writeText(inputRef.current.value);
      setIsLinkCopied(true);

      setTimeout(() => {
        setIsLinkCopied(false);
      }, 2000);
    }
  };
  return (
    <div className="w-full flex items-center border rounded-full p-1">
      <Input
        type="text"
        className="w-full bg-transparent outline-none border-none flex-1"
        disabled
        defaultValue={`${BASE_ADDRESS}/interview/${interviewId}`}
        ref={inputRef}
      />
      <Button
        className={`w-auto sm:min-w-[100px] rounded-full min-h-10 ${
          isLinkCopied ? "bg-emerald-500 hover:bg-emerald-600" : "bg-primary"
        } text-white`}
        onClick={isLinkCopied ? () => {} : handleCopy}
      >
        {isLinkCopied ? (
          <Check className="size-4" />
        ) : (
          <Copy className="size-4" />
        )}
        <span className="hidden sm:inline">
          {isLinkCopied ? "Link Copied" : "Copy Link"}
        </span>
      </Button>
    </div>
  );
}
