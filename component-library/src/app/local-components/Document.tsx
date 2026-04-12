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
    <article>
      <h1>{title}</h1>
      <p>{description}</p>
      {children && <div className="mdx-content">{children}</div>}
    </article>
  );
}
