interface DocumentationTempProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function DocumentationTemp({
  title,
  description,
  children,
}: DocumentationTempProps) {
  return (
    <article className="max-w-3xl mx-auto py-12 px-6">
      <div className="neu-flat p-10 mb-8">
        <h1 className="text-3xl font-bold mb-3">{title}</h1>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          {description}
        </p>
      </div>
      {children && (
        <div
          className="neu-inset p-8 mdx-content prose prose-neutral dark:prose-invert max-w-none
          [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4
          [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3
          [&_p]:mb-4 [&_p]:leading-relaxed
          [&_pre]:neu-flat [&_pre]:p-4 [&_pre]:rounded-[var(--neu-radius)] [&_pre]:overflow-x-auto [&_pre]:my-4 [&_pre]:text-sm
          [&_code]:text-sm [&_code]:font-mono
          [&_:not(pre)>code]:neu-inset [&_:not(pre)>code]:px-2 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:rounded-md [&_:not(pre)>code]:text-sm
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
