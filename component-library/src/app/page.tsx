import Chat from "@/components/chat";
import CardText from "@/components/cardText";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import BarChart from "@/components/barChart";
import Carousel from "@/components/carousel";
import Drawer from "@/components/drawer";
import Accordion from "@/components/accordion";
import { auth } from "@/authConfig";
import NewNav from "@/components/newnav";
export default async function Home() {
  const session = await auth();

  return (
    <>
      <Nav
        link={[
          {
            icon: "/looplogoli.png",
            iconLink: "/",
            lin: "/",
            navLink: "Home",
          },
          {
            lin: "/about",
            navLink: "About",
            icon: "",
            iconLink: "",
          },
          {
            lin: "/services",
            navLink: "Services",
            icon: "",
            iconLink: "",
          },
          {
            lin: "/contact",
            navLink: "Contact",
            icon: "",
            iconLink: "",
          },
        ]}
        rlink={[
          {
            el: "Search Docs",
            icon: "",
            iconLink: "",
          },
          {
            el: "",
            icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E",
            iconLink: "/userinfo",
          },
          {
            el: "",
            icon: session?.user?.image || "/nouser1.png",
            iconLink: "/login",
          },
        ]}
        hamburgerIcon="/looplogoli.png"
      />
      <Hero
        headerBtn="Now available by running npm commands"
        header="Build the Core of Your UI Library"
        subHeader="A collection of thoughtfully crafted 
        components ready to adapt, expand, and evolve with 
        your needs. Begin here and shape it into your own. Free. 
        Flexible. Open Source."
        btn1Text="Get Started"
        btn2Text="View Components"
      />

      <div className="flex flex-wrap gap-[50px] justify-center">
        <CardText
          header="Welcome to LoopUI"
          subHeader="A modern UI card component for your next project."
          mainText="This card showcases a clean design, flexible layout, and interactive buttons. Easily customize it to fit your needs and enhance your application's user experience."
          buttonText1="Learn More"
          buttonText2="Get Started"
        />

        <BarChart
          content={[
            {
              lable: "Akin",
              size: 180,
            },
            {
              lable: "chris",
              size: 69,
            },
            {
              lable: "Akin",
              size: 66,
            },
            {
              lable: "chris",
              size: 88,
            },
            {
              lable: "Akin",
              size: 90,
            },
            {
              lable: "chris",
              size: 57,
            },
            {
              lable: "Akin",
              size: 200,
            },
            {
              lable: "chris",
              size: 69,
            },
          ]}
        />
        <Chat title="kol bot" img="/looplogoli.png" propt="kol" />
        <Carousel
          card={[
            {
              image:
                "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
              text: "Streamline your development workflow with modern tools and frameworks that boost productivity. Create scalable applications with ease.",
            },
            {
              image:
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
              text: "Build beautiful, responsive interfaces that users love. Our component library provides everything you need for professional UI design.",
            },
            {
              image:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
              text: "Write clean, maintainable code with best practices. TypeScript and modern JavaScript make your codebase robust and reliable.",
            },
            {
              image:
                "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
              text: "Create stunning user experiences with smooth animations and intuitive interactions. Delight your users with every click.",
            },
            {
              image:
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",
              text: "Powerful components designed for modern applications. Accessible, customizable, and ready to use in your next project.",
            },
          ]}
        />
        <Drawer title="Doodle" size={600} colour="#000000ff" />

        <Accordion
          items={[
            {
              title: "What is LoopUI?",
              text: "LoopUI is a modern component library built with React and Tailwind CSS, designed to help you build beautiful interfaces quickly.",
            },
            {
              title: "How do I get started?",
              text: "Simply install the components using npm and import them into your project. Full documentation is available in our guides.",
            },
            {
              title: "Is it free to use?",
              text: "Yes! LoopUI is completely free and open source. You can use it in personal and commercial projects.",
            },
            {
              title: "Does it support dark mode?",
              text: "Absolutely! All components are built with dark mode support using Tailwind's dark mode utilities.",
            },
          ]}
        />
      </div>
      <NewNav
        split={5}
        navObj={[
          {
            type: "link",
            label: "link",
            href: "/contact",
          },
          {
            type: "button",
            label: "button",
            href: "/about",
          },
          {
            type: "icon",
            label: "icon",
            href: "/about",
            iconPath: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59...",
            slot: "right",
          },
        ]}
      />
    </>
  );
}
