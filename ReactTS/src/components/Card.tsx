import React from "react";

interface CardProps {
  width: string;
  height: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ width, height, children }) => {
  return (
    <div style={{ width, height, border: "3px solid gray" }}>{children}</div>
  );
};
