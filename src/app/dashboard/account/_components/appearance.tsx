"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, ChevronsUpDown, Moon, Paintbrush2, Sun } from "lucide-react";
import BrandName from "@/components/branding/brand-name";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SystemThemeCard from "./theme/system-theme-card";
import SingleThemeCard from "./theme/single-theme-card";

export default function Appearance() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>(
    theme === "system" ? "system-sync" : "single-theme"
  );

  useEffect(() => {
    setCurrentTheme(theme === "system" ? "system-sync" : "single-theme");
  }, [theme]);

  const systemThemeCards = [
    {
      icon: Sun,
      description:
        "This theme will be active when your system is set to “light mode”",
      theme: "Light",
      image: "/light-mode.svg",
      label: "Day theme",
    },
    {
      icon: Moon,
      description:
        "This theme will be active when your system is set to “dark mode”",
      theme: "Dark",
      image: "/dark-mode.svg",
      label: "Night theme",
    },
  ];

  const singleThemeCards = [
    {
      image: "/light-mode.svg",
      theme: "Light",
    },
    {
      image: "/dark-mode.svg",
      theme: "Dark",
    },
  ];
  return (
    <Card className="group">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="size-11 bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/30 transition-all duration-300">
            <Paintbrush2 className="size-5" />
          </div>
          <span className="text-lg">Theme Preferences</span>
        </CardTitle>
        <CardDescription>
          Choose how <BrandName /> looks to you. Select a single theme, or sync
          with your system and automatically switch between day and night
          themes. Selections are applied immediately and saved automatically.
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Theme Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger className="border rounded-md min-w-34 text-sm flex items-center justify-center gap-3 min-h-10 px-4">
            {currentTheme === "system-sync"
              ? "Sync with System"
              : "Single Theme"}
            <ChevronsUpDown className="size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              onClick={() => {
                setCurrentTheme("system-sync");
                setTheme("system");
              }}
              className={`flex items-center gap-2`}
            >
              Sync with System
              {theme === "system" && (
                <span className="text-primary bg-primary/20 py-0.5 text-xs px-3 rounded-full">
                  Active
                </span>
              )}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setCurrentTheme("single-theme")}
              className={`flex items-center gap-1`}
            >
              Single Theme
              {theme !== "system" && (
                <span className="text-primary bg-primary/20 py-0.5 text-xs px-3 rounded-full">
                  Active
                </span>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* ${
                theme === "system" &&
                "bg-primary/20 text-primary hover:bg-primary/30 hover:text-primary"
              } */}

        {/* Showcase based on selected theme */}
        {currentTheme === "system-sync" ? (
          <div className="flex items-center gap-3 flex-col sm:flex-row">
            {systemThemeCards.map((card) => (
              <SystemThemeCard
                key={card.label}
                icon={card.icon}
                description={card.description}
                theme={card.theme}
                image={card.image}
                label={card.label}
                isActive={
                  theme === "system" && systemTheme === card.theme.toLowerCase()
                }
              />
            ))}
          </div>
        ) : (
          <div className="flex items-center gap-3 flex-col sm:flex-row">
            {singleThemeCards.map((card) => (
              <SingleThemeCard
                key={card.theme}
                image={card.image}
                theme={card.theme}
                isActive={theme === card.theme.toLowerCase()}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
