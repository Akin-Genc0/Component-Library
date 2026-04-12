import DocumentationTemp from "../local-components/Document";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

const COMPONENT_DATA_DIR = path.join(
  process.cwd(),
  "src",
  "app",
  "component-data"
);

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const filePath = path.join(COMPONENT_DATA_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  return (
    <DocumentationTemp title={data.title} description={data.description}>
      <MDXRemote source={content} />
    </DocumentationTemp>
  );
}

export function generateStaticParams() {
  const files = fs.readdirSync(COMPONENT_DATA_DIR);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}
