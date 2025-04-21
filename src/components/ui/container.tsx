import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  varient?: "div" | "section" | "main" | "header" | "footer";
}

export default function Container({
  children,
  className,
  varient = "section",
}: ContainerProps &
  React.ComponentProps<"section" | "div" | "main" | "header" | "footer">) {
  const Component = varient === "section" ? "section" : "div";
  return (
    <Component className={`max-w-[95%] w-full mx-auto ${className}`}>
      {children}
    </Component>
  );
}
