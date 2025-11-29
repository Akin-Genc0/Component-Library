import Chat from "@/components/chat";
import CardText from "@/components/cardText";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import BarChart from "@/components/barChart";
import Carousel from "@/components/carousel";
import Drawer from "@/components/drawer";

export default function Home() {
  return (
    <>
      <Nav
        link={[
          {
            icon: "/looplogoli.png",
            iconLink: "#",
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
            iconLink: "",
          },
          {
            el: "",
            icon: "/assests/dl-icon.png",
            iconLink: "",
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
            { image: "/card1.png", text: "Card 1" },
            { image: "/card2.png", text: "Card 2" },
            { image: "/card3.png", text: "Card 3" },
          ]}
        />
        <Drawer title="Doodle" size={600} colour="#000000ff" />
      </div>
    </>
  );
}
