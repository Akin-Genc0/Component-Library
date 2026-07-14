"use client";

import { useState } from "react";

interface DocumentationTempProps {
  title: string;
  description: string;
  importCode?: string;
  children?: React.ReactNode;
  demo?: React.ReactNode;
  playground?: React.ReactNode;
}

export default function DocumentationTemp({
  title,
  description,
  importCode,
  children,
  playground,
}: DocumentationTempProps) {
  const [copied, setCopied] = useState(false);
  const [playgroundOpen, setPlaygroundOpen] = useState(false);

  function handleCopy() {
    if (importCode) {
      navigator.clipboard.writeText(importCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <article className="max-w-4xl mx-auto py-12 px-6">
      {/* Title + Description */}
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <p className="text-gray-500 dark:text-gray-400 text-base mb-8">
        {description}
      </p>

      {/* Import code block */}
      {importCode && (
        <div className="neu-pressed-code rounded-2xl overflow-hidden mb-8">
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-300 dark:border-gray-600">
            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-semibold">
              TSX
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
            <code className="text-sm font-mono">{importCode}</code>
          </pre>
        </div>
      )}

      {/* Playground - collapsible */}
      {playground && (
        <div className="mb-8 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setPlaygroundOpen(!playgroundOpen)}
            className="flex items-center gap-2 w-full py-4 text-sm font-semibold uppercase tracking-wider text-indigo-400 hover:text-indigo-300 transition-colors cursor-pointer"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              className={`transition-transform duration-200 ${playgroundOpen ? "rotate-90" : ""}`}
            >
              <path fill="currentColor" d="M4 2l4 4-4 4z" />
            </svg>
            Playground — Edit Props Live
          </button>
          {playgroundOpen && (
            <div className="neu-inset p-6 rounded-2xl mb-4">{playground}</div>
          )}
        </div>
      )}

      {/* Documentation content */}
      {children && (
        <div
          className="neu-inset p-8 rounded-2xl mdx-content prose prose-neutral dark:prose-invert max-w-none
              [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4
              [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3
              [&_p]:mb-4 [&_p]:leading-relaxed
              [&_code]:text-sm [&_code]:font-mono
              [&_:not(pre)>code]:px-2 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:rounded-md [&_:not(pre)>code]:text-sm
              [&_table]:w-full [&_table]:my-4 [&_table]:block [&_table]:overflow-x-auto [&_table]:whitespace-nowrap
              [&_th]:text-left [&_th]:py-2 [&_th]:px-3 [&_th]:font-semibold [&_th]:border-b [&_th]:border-gray-300 [&_th]:dark:border-gray-600
              [&_td]:py-2 [&_td]:px-3 [&_td]:border-b [&_td]:border-gray-200 [&_td]:dark:border-gray-700
              [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul]:space-y-1
              [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol]:space-y-1
              [&_hr]:my-6 [&_hr]:border-gray-200 [&_hr]:dark:border-gray-700
            "
        >
          {children}
        </div>
      )}
    </article>
  );
}
