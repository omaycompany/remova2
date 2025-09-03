import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact / Intake",
  description: "Start Intake + NDA to begin manifest privacy, monitoring, and takedowns.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}