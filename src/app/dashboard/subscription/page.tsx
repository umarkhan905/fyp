import PricingCard from "@/components/pricing/pricing-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatDate } from "@/utils/format-date";
import { Award } from "lucide-react";
import React from "react";
import { GrUpgrade } from "react-icons/gr";

export default function Subscription() {
  const subscribedPlan = {
    name: "free",
    price: 0,
    status: "active",
    subscriptionEndDate: new Date(2025, 9, 30),
    features: [
      {
        name: "coins",
        current: 100,
        used: 20,
        total: 100,
      },
      {
        name: "technical interview",
        current: 0,
        used: 1,
        total: 1,
      },
      {
        name: "behavioral interview",
        current: 0,
        used: 1,
        total: 1,
      },
      {
        name: "system design interview",
        current: 0,
        used: 1,
        total: 1,
      },
      {
        name: "mixed interviews",
        current: 0,
        used: 1,
        total: 1,
      },
    ],
  };

  const subscriptions = [
    {
      id: 1,
      title: "Free Plan",
      description: "Perfect for trying out the platform",
      price: 0,
      features: [
        "3 practice interviews per month",
        "Basic AI feedback",
        "Limited question bank access",
        "Community support",
      ],
      isActive: true,
    },
    {
      id: 2,
      title: "Pro Plan",
      description: "Perfect for trying out the platform",
      price: 19,
      features: [
        "Unlimited practice interviews",
        "Advanced AI feedback",
        "Full question bank access",
        "Priority support",
      ],
      isActive: false,
    },
    {
      id: 3,
      title: "Enterprise Plan",
      description: "Perfect for trying out the platform",
      price: 49,
      features: [
        "Unlimited practice interviews",
        "Advanced AI feedback",
        "Full question bank access",
        "Priority support",
      ],
      isActive: false,
    },
  ];
  return (
    <>
      <section>
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-foreground  mb-2">
            Manage Your Subscription
          </h1>
        </div>
        <p className="text-muted-foreground">
          Choose the right plan for your interview preparation needs
        </p>
      </section>

      <Card className="group">
        <CardContent>
          <section className="mb-4 md:mb-0 space-y-2 col-span-2">
            <div className="flex items-center gap-2">
              <div className="size-10 rounded-md bg-primary/20 flex items-center justify-center text-primary p-2 group-hover:bg-primary/30 transition-all duration-300 ">
                <Award className="size-6" />
              </div>
              <h2 className="text-xl font-bold text-foreground">
                You are currently on the{" "}
                <span className="text-primary">Free Plan</span>
              </h2>
            </div>
            <p className="text-muted-foreground">
              Your subscription will automatically renew on the{" "}
              {formatDate(subscribedPlan.subscriptionEndDate)} day of each
              month.
            </p>
          </section>

          <section className="mt-4 space-y-4">
            {subscribedPlan.features.map((feature) => (
              <div
                className="w-full sm:w-2/3 lg:w-1/2 space-y-2"
                key={feature.name}
              >
                <Progress
                  value={Math.round((feature.used / feature.total) * 100)}
                />
                <div className="flex items-center justify-between">
                  <span className="font-semibold capitalize">
                    {feature.name}
                  </span>
                  <span className="text-muted-foreground">{`${feature.used}/${feature.total}`}</span>
                </div>
              </div>
            ))}
          </section>
        </CardContent>
        <CardFooter className="justify-between">
          <Button className="text-white">
            <GrUpgrade />
            Upgrade Now
          </Button>
        </CardFooter>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {subscriptions.map((subscription) => (
          <PricingCard
            key={subscription.id}
            title={subscription.title}
            description={subscription.description}
            price={subscription.price}
            features={subscription.features}
            isActive={subscription.isActive}
            btnText={subscription.isActive ? "Current Plan" : "Upgrade Plan"}
          />
        ))}
      </div>
    </>
  );
}
