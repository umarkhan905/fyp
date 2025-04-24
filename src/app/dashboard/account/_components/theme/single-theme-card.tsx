"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

interface SingleThemeCardProps {
  image: string;
  theme: string;
  isActive?: boolean;
}
export default function SingleThemeCard({
  image,
  theme,
  isActive,
}: SingleThemeCardProps) {
  const { setTheme } = useTheme();
  return (
    <section
      className={`w-full sm:w-1/2 border rounded-lg ${
        isActive && "border-primary/60"
      } cursor-pointer`}
      onClick={() => setTheme(theme.toLowerCase())}
    >
      <div className="w-full p-3">
        <Image
          src={image}
          alt={theme}
          width={500}
          height={500}
          className={"w-full h-auto rounded-t-md"}
        />
      </div>
      <div className="bg-background p-3 border-t rounded-b-lg font-semibold">
        <span>{theme} default</span>
      </div>
    </section>
  );
}
