import DocumentationTemp from "../local-components/Document";
import matter from "gray-matter";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { auth } from "@/authConfig";
import NewNav from "@/components/newnav";
import ThemeToggle from "@/components/themeSwitch";
import Card from "@/components/card";
import BarChart from "@/components/barChart";
import Calendar from "@/components/calendar";
import Buttons from "@/components/buttons";
import Chat from "@/components/chat";
import Accordion from "@/components/accordion";
import Carousel from "@/components/carousel";
import Drawer from "@/components/drawer";
import Hero from "@/components/hero";
import DropDown from "@/components/dropDown";
import CalloutCard from "@/components/calloutCard";

const mdxComponents = {
  Card,
  DropDown,
  BarChart,
  Calendar,
  Buttons,
  Chat,
  Accordion,
  Carousel,
  Drawer,
  Hero,
  CalloutCard,
  CarouselDemo: () => (
    <Carousel
      card={[
        {
          image:
            "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
          text: "Soft, tactile interfaces inspired by real-world surfaces.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
          text: "Subtle gradients and shadows create a seamless experience.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=800&q=80",
          text: "Minimalist aesthetics meet functional design.",
        },
      ]}
    />
  ),
  AccordionDemo: () => (
    <Accordion
      items={[
        {
          title: "What is LoopUI?",
          text: "LoopUI is a modern component library built with React and Tailwind CSS.",
        },
        {
          title: "How do I install it?",
          text: "Install via npm and import components directly into your project.",
        },
        {
          title: "Is it free?",
          text: "Yes! LoopUI is completely free and open source.",
        },
      ]}
    />
  ),
  BarChartDemo: () => (
    <BarChart
      content={[
        { lable: "Jan", size: 120 },
        { lable: "Feb", size: 80 },
        { lable: "Mar", size: 200 },
        { lable: "Apr", size: 150 },
        { lable: "May", size: 90 },
        { lable: "Jun", size: 170 },
      ]}
    />
  ),
  ButtonsDemo: () => (
    <Buttons
      buttonObj={[
        { buttonText: "Flat", buttonType: "neu-flat" },
        { buttonText: "Raised", buttonType: "neu-raised" },
        { buttonText: "Pressed", buttonType: "neu-inset" },
      ]}
    />
  ),
  CardDemo: () => (
    <Card
      cards={[
        {
          cardStyle: "neu-soft-edge",
          headerText: "Soft Edge",
          subHeaderText: "Flat raised surface.",
          descriptionText:
            "A subtle outward shadow that gently lifts the card off the background.",
          buttons: [{ label: "Learn More" }, { label: "Get Started" }],
        },
        {
          cardStyle: "neu-pressed",
          headerText: "Pressed",
          subHeaderText: "Sunken inward surface.",
          descriptionText:
            "A pressed-in look, like the card is carved into the background.",
          buttons: [{ label: "Learn More" }, { label: "Get Started" }],
        },
        {
          cardStyle: "neu-floating",
          headerText: "Floating",
          subHeaderText: "Elevated 3D surface.",
          descriptionText:
            "A strong outward shadow giving the card a hovering, floating appearance.",
          buttons: [{ label: "Learn More" }, { label: "Get Started" }],
        },
      ]}
    />
  ),
  ChatDemo: () => <Chat title="Demo Bot" img="/looplogoli.png" propt="Hello" />,
  DrawerDemo: () => <Drawer title="Doodle" size={400} colour="#000000ff" />,
  DropDownDemo: () => (
    <DropDown
      dropDowns={[
        {
          dropDownType: "neu-flat",
          dropDownMenuLabel: "Menu",
          dropDownItem: [
            { dropDownLable: "Profile", dropDownURL: "/userinfo" },
            { dropDownLable: "Settings", dropDownURL: "/userinfo" },
            { dropDownLable: "Docs", dropDownURL: "/docs" },
            { dropDownLable: "Logout" },
          ],
        },
        {
          dropDownType: "neu-raised",
          dropDownMenuLabel: "Options",
          dropDownItem: [
            { dropDownLable: "Profile", dropDownURL: "/userinfo" },
            { dropDownLable: "Settings", dropDownURL: "/userinfo" },
            { dropDownLable: "Docs", dropDownURL: "/docs" },
            { dropDownLable: "Logout" },
          ],
        },
        {
          dropDownType: "neu-inset",
          dropDownMenuLabel: "Account",
          dropDownItem: [
            { dropDownLable: "Profile", dropDownURL: "/userinfo" },
            { dropDownLable: "Settings", dropDownURL: "/userinfo" },
            { dropDownLable: "Docs", dropDownURL: "/docs" },
            { dropDownLable: "Logout" },
          ],
        },
      ]}
    />
  ),
  HeroDemo: () => (
    <Hero
      headerBtn="New release"
      header="Build Something Beautiful"
      subHeader="A neumorphic hero section for your landing page."
      btn1Text="Get Started"
      btn2Text="Learn More"
    />
  ),
  CalloutCardDemo: () => (
    <CalloutCard
      callOut={[
        {
          header: "Start Building Today",
          subHeader:
            "Install Looply with a single command and start creating beautiful neumorphic interfaces.",
          styleType: "neu-soft-edge",
          radiusType: "soft-edge",
          buttons: [
            { label: "Get Started", href: "/docs" },
            { label: "View Examples", href: "/examples" },
          ],
        },
        {
          header: "Open Source & Free",
          subHeader:
            "Looply is completely free and open source. Use it in personal or commercial projects.",
          styleType: "neu-floating",
          radiusType: "pill",
          buttons: [{ label: "Browse Components", href: "/examples" }],
          imageUrl:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
        },
      ]}
    />
  ),
};

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
  const session = await auth();

  const filePath = path.join(COMPONENT_DATA_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

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
          { type: "link", label: "Examples", href: "/examples" },
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
      <DocumentationTemp title={data.title} description={data.description}>
        <MDXRemote
          source={content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          components={mdxComponents}
        />
      </DocumentationTemp>
    </>
  );
}

export function generateStaticParams() {
  const files = fs.readdirSync(COMPONENT_DATA_DIR);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({ slug: file.replace(/\.mdx$/, "") }));
}
