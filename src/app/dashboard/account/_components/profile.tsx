import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Camera, Save, Trash, User } from "lucide-react";
import React from "react";

export default function Profile() {
  return (
    <Card className="group">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="size-11 bg-primary/20 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/30 transition-all duration-300">
            <User className="size-5" />
          </div>
          <span className="text-lg">Profile Information</span>
        </CardTitle>
        <CardDescription>Update your profile information</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Profile Image*/}
        <div className="size-fit mx-auto relative flex items-center justify-center z-0 group/avatar">
          <Avatar className="size-20 items-center justify-center">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          {/* Avatar overly */}
          <div className="absolute top-0 left-0 size-0 rounded-full bg-black/80 z-10 flex items-center justify-center group-hover/avatar:size-full">
            <Trash className="size-5 text-white/80 cursor-pointer" />
          </div>

          {/* Camera Icon */}
          <div className="absolute -bottom-0 -right-0  rounded-full bg-black p-1 z-20">
            <Camera className="size-4 text-muted-foreground cursor-pointer" />
          </div>
        </div>

        {/* Profile Form */}
        <form className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="space-y-2 w-full md:w-1/2">
              <Label className="text-sm dark:text-muted-foreground font-normal">
                First Name
              </Label>
              <Input
                placeholder="John"
                className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
              />
            </div>
            <div className="space-y-2 w-full md:w-1/2">
              <Label className="text-sm dark:text-muted-foreground font-normal">
                Last Name
              </Label>
              <Input
                placeholder="Doe"
                className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm dark:text-muted-foreground font-normal">
              Username
            </Label>
            <Input
              defaultValue={"john_doe_905"}
              className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
              disabled
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm dark:text-muted-foreground font-normal">
              Email
            </Label>
            <Input
              defaultValue={"cNtPj@example.com"}
              className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
              disabled
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm dark:text-muted-foreground font-normal">
              Phone Number
            </Label>
            <Input
              placeholder="+1 (123) 456-7890"
              className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm dark:text-muted-foreground font-normal">
              Profession
            </Label>
            <Input
              placeholder="Software Engineer"
              className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-sm dark:text-muted-foreground font-normal">
              Experience
            </Label>
            <div className="flex items-center gap-2">
              <Input
                placeholder="1"
                className="placeholder:text-muted-foreground text-sm rounded-full min-h-11"
                type="number"
                min={0}
              />
              <Select>
                <SelectTrigger className="placeholder:text-muted-foreground text-sm rounded-full min-h-11">
                  <SelectValue placeholder="Experience In" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="year">Years</SelectItem>
                  <SelectItem value="month">Months</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label className="text-sm dark:text-muted-foreground font-normal">
              Bio
            </Label>
            <Textarea
              placeholder="My bio"
              className="placeholder:text-muted-foreground text-sm  min-h-24 resize-none"
            />
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="w-full text-white min-h-11 sm:w-auto rounded-full"
            >
              <Save className="size-5" />
              Save Changes
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
