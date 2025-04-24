import Logo from "@/components/branding/logo";
import { Button } from "@/components/ui/button";
import { CircleCheckBig } from "lucide-react";
import React from "react";

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  features: string[];
  isActive?: boolean;
  btnText?: string;
}

export default function PricingCard({
  title,
  description,
  features,
  price,
  isActive = false,
  btnText,
}: PricingCardProps) {
  return (
    <div
      className={`relative shadow-lg border rounded-xl p-4 transition-all duration-300 hover:shadow-xl ${
        isActive ? "border-primary bg-primary" : "border-gray-200 bg-white "
      }`}
    >
      <div
        className={`flex items-center justify-center ${
          isActive ? "bg-white" : "bg-primary/20"
        } rounded-full size-14`}
      >
        <Logo variant="logo-primary" className="w-auto h-10" />
      </div>
      <div
        className={`uppercase text-primary text-xs font-semibold ${
          isActive ? "bg-white" : "bg-primary/20"
        } rounded-full p-1 px-2 w-fit my-2`}
      >
        <span>{title}</span>
      </div>

      {/* pice */}
      <div
        className={`text-5xl font-bold ${
          isActive ? "text-white" : "text-gray-800"
        }`}
      >
        ${price}
        <span
          className={`text-sm font-medium ${
            isActive ? "text-white/80" : "text-gray-500"
          }`}
        >
          / month
        </span>
      </div>

      {/* What you get */}
      <p
        className={`${
          isActive ? "text-white/80" : "text-gray-500"
        } text-sm font-medium my-2`}
      >
        {description}
      </p>
      <ul>
        {features.map((feature) => (
          <li key={feature} className="flex items-center space-x-2 my-2">
            <CircleCheckBig
              className={`size-5 ${isActive ? "text-white" : "text-primary"}`}
            />
            <span
              className={`${
                isActive ? "text-white/80" : "text-gray-500"
              } text-sm font-medium`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Button className="mt-4 w-full" size={"lg"} variant="outline">
        {btnText || "Get Started"}
      </Button>
    </div>
  );
}
