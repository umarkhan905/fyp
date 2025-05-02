import React from "react";
import Spinner from "../_components/spinner";

export default function Loading() {
  return (
    <section className="h-screen flex items-center justify-center">
      <Spinner message="Loading Interview" />
    </section>
  );
}
