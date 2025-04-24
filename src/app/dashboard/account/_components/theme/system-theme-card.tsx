import { LucideIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface SystemThemeCardProps {
  icon: LucideIcon;
  label: string;
  description: string;
  image: string;
  theme: string;
  isActive?: boolean;
}

export default function SystemThemeCard({
  icon: Icon,
  description,
  theme,
  image,
  label,
  isActive,
}: SystemThemeCardProps) {
  return (
    <section
      className={`w-full sm:w-1/2 border rounded-lg ${
        isActive && "border-primary/60"
      }`}
    >
      <div
        className={`flex items-center gap-1 border-b p-3  ${
          isActive && "border-primary/60"
        } relative`}
      >
        <Icon className="size-5" />
        {label}

        {isActive && (
          <div className="bg-primary/20 text-primary absolute right-2 top-1/2 -translate-y-1/2 p-0.5 px-2 rounded-full text-sm">
            <span>Active</span>
          </div>
        )}
      </div>

      <div className="w-full p-3 space-y-3">
        <p className="text-muted-foreground text-sm">{description}</p>

        <Image
          src={image}
          alt={label}
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
