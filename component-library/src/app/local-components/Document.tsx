"use client";

interface DocumentationTempProps {
  title: string;
  description: string;
  codesnip?: string;
}

export default function DocumentationTemp({
  title,
  description,
  codesnip,
}: DocumentationTempProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <samp>{codesnip}</samp>
    </div>
  );
}
