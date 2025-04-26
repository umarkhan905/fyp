import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  label: string;
  description: string;
  btnText: string;
}

export default function NoInterviewsFound({
  label,
  description,
  btnText,
}: Props) {
  return (
    <Card className="max-w-lg w-full mx-auto gap-4 group">
      <CardHeader>
        <Avatar className="size-14 mb-2 bg-primary/20 text-primary group-hover:bg-primary/30 transition-all duration-300 flex items-center justify-center mx-auto">
          <AvatarImage
            src={"/logo-primary.png"}
            alt={"MockByte"}
            className="h-10 w-auto"
          />
          <AvatarFallback>MB</AvatarFallback>
        </Avatar>
        <CardTitle className="text-center">{label}</CardTitle>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardHeader>

      <CardContent>
        <Button className="w-full min-h-11 rounded-full" asChild>
          <Link href={"/dashboard/create-interview"}>
            <Plus className="size-5" />
            <span>{btnText}</span>
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
