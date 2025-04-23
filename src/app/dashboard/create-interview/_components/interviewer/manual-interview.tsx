import MessageCard from "@/components/message/message-card";
import { Card, CardContent } from "@/components/ui/card";
import { Lock } from "lucide-react";
import React from "react";

export default function ManualInterview() {
  return (
    <Card className="w-full h-full flex items-center justify-center  group">
      <CardContent className="w-full">
        <MessageCard
          title=" This feature is not currently available.."
          description=" Manual Interviews are not available yet. We are working on it and
            will be available soon."
          buttonText="Back to Dashboard"
          icon={Lock}
          varient="default"
          url="/dashboard"
        />
      </CardContent>
    </Card>
  );
}
