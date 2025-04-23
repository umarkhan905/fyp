import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManualInterview from "./manual-interview";
import AiBasedInterview from "./ai-based-interview";
import { Lock } from "lucide-react";

export default function InterviewerPage() {
  return (
    <section className="max-w-lg w-full mx-auto h-full">
      <Tabs defaultValue="AI_BASED" className="w-full h-full">
        <TabsList className="w-full min-h-14 rounded-full p-1">
          <TabsTrigger value="AI_BASED" className="min-h-11 rounded-full">
            AI Based Interview
          </TabsTrigger>
          <TabsTrigger value="MANUAL" className="min-h-11 rounded-full">
            Manual Interview <Lock className="size-4" />
          </TabsTrigger>
        </TabsList>
        <TabsContent value="AI_BASED">
          <AiBasedInterview />
        </TabsContent>
        <TabsContent value="MANUAL">
          <ManualInterview />
        </TabsContent>
      </Tabs>
    </section>
  );
}
