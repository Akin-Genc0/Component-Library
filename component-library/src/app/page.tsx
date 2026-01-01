import Chat from "@/components/chat";
import CardText from "@/components/cardText";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import BarChart from "@/components/barChart";
import Carousel from "@/components/carousel";
import Drawer from "@/components/drawer";
import Accordion from "@/components/accordion";
import { auth } from "@/authConfig";
export default async function Home() {
  const session = await auth();

  return (
    <>
      <Nav
        link={[
          {
            icon: "/looplogoli.png",
            iconLink: "/",
            lin: "https://react.dev/learn/rendering-lists",
            navLink: "Home",
          },
          {
            lin: "https://react.dev/learn/rendering-lists",
            navLink: "About",
            icon: "",
            iconLink: "",
          },
          {
            lin: "https://react.dev/learn/rendering-lists",
            navLink: "Services",
            icon: "",
            iconLink: "",
          },
          {
            lin: "https://react.dev/learn/rendering-lists",
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
            icon: "/assests/githublogo.png",
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
    </>
  );
}
