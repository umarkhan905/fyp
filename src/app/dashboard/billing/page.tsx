import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function BillingInfo() {
  const paymentsHistory = [
    {
      id: "INV001",
      status: "Paid",
      method: "Credit Card",
      amount: "$250.00",
    },
    {
      id: "INV002",
      status: "Pending",
      method: "PayPal",
      amount: "$150.00",
    },
    {
      id: "INV003",
      status: "Failed",
      method: "Bank Transfer",
      amount: "$500.00",
    },
    {
      id: "INV004",
      status: "Paid",
      method: "Credit Card",
      amount: "$300.00",
    },
  ];

  return (
    <>
      <section>
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Billing & Payments Information
          </h1>
        </div>
        <p className="text-muted-foreground">
          Your past subscribed plans and purchases history
        </p>
      </section>

      {/* Subscription History Table */}
      <Table className="border">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Payment ID</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paymentsHistory.map((payment) => (
            <TableRow key={payment.id} className="even:bg-muted">
              <TableCell className="font-medium">{payment.id}</TableCell>
              <TableCell>{payment.status}</TableCell>
              <TableCell>{payment.method}</TableCell>
              <TableCell className="text-right">{payment.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
