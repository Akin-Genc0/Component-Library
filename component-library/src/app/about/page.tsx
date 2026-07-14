import { auth } from "@/authConfig";
import NewNav from "@/components/newnav";
import ThemeToggle from "@/components/themeSwitch";

export default async function About() {
  const session = await auth();

  return (
    <>
      <NewNav
        hamburger
        navObj={[
          {
            type: "icon",
            label: "icon",
            href: "/",
            iconPath:
              "M172,68a44,44,0,1,0-44,44A44.04978,44.04978,0,0,0,172,68Zm-44,36a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,128,104Zm60,24a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,188,128Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,188,208ZM68,128a44,44,0,1,0,44,44A44.04978,44.04978,0,0,0,68,128Zm0,80a36,36,0,1,1,36-36A36.04061,36.04061,0,0,1,68,208Z",
            slot: "left",
            viewBox: "0 0 256 256",
          },
          { type: "link", label: "Home", href: "/" },
          { type: "link", label: "About", href: "/about" },
          { type: "link", label: "Docs", href: "/docs" },
          { type: "link", label: "Install", href: "/examples" },
          ...(session
            ? [
                {
                  type: "icon" as const,
                  label: "Settings",
                  href: "/userinfo",
                  iconPath:
                    "M11.2867 0.5C9.88583 0.5 8.6461 1.46745 8.37171 2.85605L8.29264 3.25622C8.10489 4.20638 7.06195 4.83059 6.04511 4.48813L5.64825 4.35447C4.32246 3.90796 2.83873 4.42968 2.11836 5.63933L1.40492 6.83735C0.67773 8.05846 0.954349 9.60487 2.03927 10.5142L2.35714 10.7806C3.12939 11.4279 3.12939 12.5721 2.35714 13.2194L2.03927 13.4858C0.954349 14.3951 0.67773 15.9415 1.40492 17.1626L2.11833 18.3606C2.83872 19.5703 4.3225 20.092 5.64831 19.6455L6.04506 19.5118C7.06191 19.1693 8.1049 19.7935 8.29264 20.7437L8.37172 21.1439C8.6461 22.5325 9.88584 23.5 11.2867 23.5H12.7136C14.1146 23.5 15.3543 22.5325 15.6287 21.1438L15.7077 20.7438C15.8954 19.7936 16.9384 19.1693 17.9553 19.5118L18.3521 19.6455C19.6779 20.092 21.1617 19.5703 21.8821 18.3606L22.5955 17.1627C23.3227 15.9416 23.046 14.3951 21.9611 13.4858L21.6432 13.2194C20.8709 12.5722 20.8709 11.4278 21.6432 10.7806L21.9611 10.5142C23.046 9.60489 23.3227 8.05845 22.5955 6.83732L21.8821 5.63932C21.1617 4.42968 19.678 3.90795 18.3522 4.35444L17.9552 4.48814C16.9384 4.83059 15.8954 4.20634 15.7077 3.25617L15.6287 2.85616C15.3543 1.46751 14.1146 0.5 12.7136 0.5H11.2867ZM10.3338 3.24375C10.4149 2.83334 10.7983 2.5 11.2867 2.5H12.7136C13.2021 2.5 13.5855 2.83336 13.6666 3.24378L13.7456 3.64379C14.1791 5.83811 16.4909 7.09167 18.5935 6.38353L18.9905 6.24984C19.4495 6.09527 19.9394 6.28595 20.1637 6.66264L20.8771 7.86064C21.0946 8.22587 21.0208 8.69271 20.6764 8.98135L20.3586 9.24773C18.6325 10.6943 18.6325 13.3057 20.3586 14.7523L20.6764 15.0186C21.0208 15.3073 21.0946 15.7741 20.8771 16.1394L20.1637 17.3373C19.9394 17.714 19.4495 17.9047 18.9905 17.7501L18.5936 17.6164C16.4909 16.9082 14.1791 18.1618 13.7456 20.3562L13.6666 20.7562C13.5855 21.1666 13.2021 21.5 12.7136 21.5H11.2867C10.7983 21.5 10.4149 21.1667 10.3338 20.7562L10.2547 20.356C9.82113 18.1617 7.50931 16.9082 5.40665 17.6165L5.0099 17.7501C4.55092 17.9047 4.06104 17.714 3.83671 17.3373L3.1233 16.1393C2.9058 15.7741 2.97959 15.3073 3.32398 15.0186L3.64185 14.7522C5.36782 13.3056 5.36781 10.6944 3.64185 9.24779L3.32398 8.98137C2.97959 8.69273 2.9058 8.2259 3.1233 7.86067L3.83674 6.66266C4.06106 6.28596 4.55093 6.09528 5.0099 6.24986L5.40676 6.38352C7.50938 7.09166 9.82112 5.83819 10.2547 3.64392L10.3338 3.24375Z",
                  viewBox: "0 0 24 24",
                  slot: "right" as const,
                },
              ]
            : [
                {
                  type: "button" as const,
                  label: "Sign up",
                  href: "/login",
                  slot: "right" as const,
                },
              ]),
          {
            type: "icon",
            label: "User profile",
            href: "/login",
            imageSrc: session?.user?.image || "/nouser1.png",
            slot: "right",
          },
        ]}
      >
        <ThemeToggle />
      </NewNav>
      <div className="max-w-3xl mx-auto py-12 px-6">
        <div className="neu-inset p-10 mb-8">
          <h1 className="text-3xl font-bold mb-3">About Looply</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            A free neumorphic component library because soft UI shouldn&apos;t
            cost money.
          </p>
        </div>
        <div className="neu-pressed p-8 space-y-4">
          <p className="leading-relaxed dark:text-gray-300">
            Looply is built by a software engineer trying to build something fun
            in his spare time. Most neumorphic component libraries out there are
            paid or locked behind subscriptions. This one is free, open source,
            and always will be.
          </p>
          <p className="leading-relaxed dark:text-gray-300">
            The goal is simple: give people a set of beautiful, soft UI
            components they can actually use in their projects without paying
            for them.
          </p>
        </div>

        <div className="neu-inset p-10 mb-8 mt-8">
          <h2 className="text-2xl font-bold mb-3">Built for the Future</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Infrastructure-first, with versioning and environments in mind.
          </p>
        </div>
        <div className="neu-pressed p-8 space-y-4">
          <p className="leading-relaxed dark:text-gray-300">
            This isn&apos;t just a component library thrown together. It&apos;s
            built with future planning and proper versioning from day one. The
            infrastructure uses Terraform with separate environments (dev, QA,
            and prod) deployed on Google Cloud Platform.
          </p>
          <p className="leading-relaxed dark:text-gray-300">
            Each environment is isolated with its own Cloud Run services, secret
            management, monitoring, and storage so updates can be tested
            properly before they reach users.
          </p>
        </div>

        <div className="neu-inset p-10 mb-8 mt-8">
          <h2 className="text-2xl font-bold mb-3">Tech Stack</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Modern tooling, properly deployed.
          </p>
        </div>
        <div className="neu-pressed p-8 space-y-4">
          <ul className="list-disc list-inside space-y-2 leading-relaxed dark:text-gray-300">
            <li>Next.js, React, TypeScript, and Tailwind CSS</li>
            <li>Terraform for infrastructure as code</li>
            <li>GCP: Cloud Run, Secret Manager, Artifact Registry</li>
            <li>Separate dev, QA, and production environments</li>
            <li>Prisma for database management</li>
            <li>Published on npm as a reusable package</li>
          </ul>
        </div>

        <div className="neu-pressed p-8 mt-8">
          <a
            href="https://github.com/Akin-Genc0/Component-Library"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-700 dark:text-gray-200 hover:underline"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span className="text-lg font-medium">
              View the repository on GitHub
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
