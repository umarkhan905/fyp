import Logo from "@/components/branding/logo";
import { IconBackground } from "@/components/icons/icon-bg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

export default function Expired() {
  return (
    <section className="h-screen flex items-center justify-center">
      <Card className="max-w-md w-full text-center relative group">
        <CardHeader>
          <IconBackground className="mx-auto group-hover:bg-primary/30">
            <Logo className="h-10 w-auto" />
          </IconBackground>
          <CardTitle className="text-2xl">Interview Expired</CardTitle>
          <CardDescription>
            This interview link has expired or is no longer active. Please
            contact your interviewer for a new link.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="text-white min-h-11 rounded-full w-full">
            <Link href="/dashboard">Back to Dashboard</Link>
          </Button>

          <Badge
            variant={"outline"}
            className="px-4 py-1 rounded-full bg-destructive/20 text-destructive absolute top-1 right-1"
          >
            Expired
          </Badge>
        </CardContent>
      </Card>
    </section>
  );
}
