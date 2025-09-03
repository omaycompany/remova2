import React from "react";

type Props = { tone?: "info" | "success" | "warning" | "error"; children: React.ReactNode };

export default function Callout({ tone = "info", children }: Props) {
  return (
    <div className={`alert alert-${tone}`}>
      <span>{children}</span>
    </div>
  );
}

