import React from "react";

interface CardProps {
  width: string;
  height: string;
  children: React.ReactNode;
}

export default function card({ width, height, children }: CardProps) {
  return (
    <div style={{ width, height, border: "3px solid gray" }}>{children}</div>
  );
}
