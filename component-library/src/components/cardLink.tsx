"use client";
import Link from "next/link";

type cardItem = {
  header: string;
  subHeader: string;
  href?: string;
};

export default function CardLink({ header, subHeader, href }: cardItem) {
  const content = (
    <div className="neu-flat p-6 cursor-pointer transition-all duration-200 hover:neu-inset">
      <h2 className="text-lg font-bold mb-1 dark:text-white">{header}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400">{subHeader}</p>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
