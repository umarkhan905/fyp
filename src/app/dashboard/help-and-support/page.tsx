import Faq from "@/components/faq/faq";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import React from "react";

export default function HelpAndSupport() {
  const contactInfo = [
    {
      icon: <Phone className="size-6 text-primary" />,
      text: "Call Us",
      content: "+1 (123) 456-7890",
    },
    {
      icon: <Mail className="size-6 text-primary" />,
      text: "Email Us",
      content: "Hx7dP@example.com",
    },
    {
      icon: <MapPin className="size-6 text-primary" />,
      text: "Head Office",
      content: "123 Main Street, City, Country",
    },
  ];
  return (
    <>
      <section>
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Help & Support
          </h1>
        </div>
        <p className="text-muted-foreground">Find answers and get assistance</p>
      </section>

      {/* Contact Us Form */}
      <Card className="rounded-none p-0">
        <CardContent className="flex flex-col-reverse md:flex-row p-0">
          {/* Contact Form */}

          <section className="p-4 md:w-1/2">
            <div className="space-y-2 mb-3">
              <h2 className="text-2xl font-bold text-primary">
                Send us a Message
              </h2>
              <p className="text-muted-foreground text-sm">
                If you have any questions or need assistance, please don&apos;t
                hesitate to reach out to our support team.
              </p>
            </div>

            <form className="space-y-4">
              <div className="w-full space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="min-h-11"
                />
              </div>

              <div className="w-full space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  placeholder="Type your message here."
                  className="h-40 resize-none"
                  id="message"
                />
              </div>

              <div className="flex items-center justify-end">
                <Button type="submit" className="min-h-11 rounded-full">
                  <Send className="size-5" />
                </Button>
              </div>
            </form>
          </section>

          {/* Contact Information */}
          <section className="h-full p-4 bg-[#0A1535] space-y-7 md:w-1/2">
            <h2 className="text-2xl font-semibold text-white">
              Contact Information
            </h2>

            <section className="space-y-6">
              {contactInfo.map((item, index) => (
                <div className="space-y-2" key={index}>
                  <div className="flex items-center gap-2">
                    <div className="size-11 bg-primary/20 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-lg text-white">
                      {item.text}
                    </h3>
                  </div>
                  <p className="text-gray-300 dark:text-muted-foreground text-sm">
                    {item.content}
                  </p>
                </div>
              ))}
            </section>
          </section>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Faq />
    </>
  );
}
