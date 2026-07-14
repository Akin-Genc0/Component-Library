"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  label?: string;
}

export default function CodeBlock({ code, label = "SHELL" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="neu-pressed-code rounded-2xl overflow-hidden mb-4">
      <div className="flex items-center justify-between px-5 py-3 border-b border-gray-300 dark:border-gray-600">
        <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">
          {label}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors cursor-pointer"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre className="px-5 py-5 overflow-x-auto">
        <code className="text-sm font-mono">{code}</code>
      </pre>
    </div>
  );
}
