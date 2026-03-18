import Chat from "@/components/chat";
import CardText from "@/components/cardText";
import Hero from "@/components/hero";
import BarChart from "@/components/barChart";
import Carousel from "@/components/carousel";
import Drawer from "@/components/drawer";
import Accordion from "@/components/accordion";
import { auth } from "@/authConfig";
import NewNav from "@/components/newnav";
import Theme from "@/components/themeSwitch";
export default async function Home() {
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
          {
            type: "link",
            label: "Home",
            href: "/",
          },

          {
            type: "link",
            label: "About",
            href: "/about",
          },

          {
            type: "link",
            label: "Services",
            href: "/service",
          },

          {
            type: "link",
            label: "Contact",
            href: "/contact",
          },
          {
            type: "button",
            label: "Sign up",
            href: "/login",
            slot: "right",
          },
          {
            type: "icon",
            label: "GitHub",
            href: "/userinfo",
            viewBox: "0 0 24 24",
            iconPath:
              "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
            slot: "right",
          },
          {
            type: "icon",
            label: "User profile",
            href: "/login",
            imageSrc: session?.user?.image || "/nouser1.png",
            slot: "right",
          },
        ]}
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
      <Theme
        lightIcon="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V4C12.75 4.41421 12.4142 4.75 12 4.75C11.5858 4.75 11.25 4.41421 11.25 4V2C11.25 1.58579 11.5858 1.25 12 1.25ZM3.66865 3.71609C3.94815 3.41039 4.42255 3.38915 4.72825 3.66865L6.95026 5.70024C7.25596 5.97974 7.2772 6.45413 6.9977 6.75983C6.7182 7.06553 6.2438 7.08677 5.9381 6.80727L3.71609 4.77569C3.41039 4.49619 3.38915 4.02179 3.66865 3.71609ZM20.3314 3.71609C20.6109 4.02179 20.5896 4.49619 20.2839 4.77569L18.0619 6.80727C17.7562 7.08677 17.2818 7.06553 17.0023 6.75983C16.7228 6.45413 16.744 5.97974 17.0497 5.70024L19.2718 3.66865C19.5775 3.38915 20.0518 3.41039 20.3314 3.71609ZM12 7.75C9.65279 7.75 7.75 9.65279 7.75 12C7.75 14.3472 9.65279 16.25 12 16.25C14.3472 16.25 16.25 14.3472 16.25 12C16.25 9.65279 14.3472 7.75 12 7.75ZM6.25 12C6.25 8.82436 8.82436 6.25 12 6.25C15.1756 6.25 17.75 8.82436 17.75 12C17.75 15.1756 15.1756 17.75 12 17.75C8.82436 17.75 6.25 15.1756 6.25 12ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H4C4.41421 11.25 4.75 11.5858 4.75 12C4.75 12.4142 4.41421 12.75 4 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM19.25 12C19.25 11.5858 19.5858 11.25 20 11.25H22C22.4142 11.25 22.75 11.5858 22.75 12C22.75 12.4142 22.4142 12.75 22 12.75H20C19.5858 12.75 19.25 12.4142 19.25 12ZM17.0255 17.0252C17.3184 16.7323 17.7933 16.7323 18.0862 17.0252L20.3082 19.2475C20.6011 19.5404 20.601 20.0153 20.3081 20.3082C20.0152 20.6011 19.5403 20.601 19.2475 20.3081L17.0255 18.0858C16.7326 17.7929 16.7326 17.3181 17.0255 17.0252ZM6.97467 17.0253C7.26756 17.3182 7.26756 17.7931 6.97467 18.086L4.75244 20.3082C4.45955 20.6011 3.98468 20.6011 3.69178 20.3082C3.39889 20.0153 3.39889 19.5404 3.69178 19.2476L5.91401 17.0253C6.2069 16.7324 6.68177 16.7324 6.97467 17.0253ZM12 19.25C12.4142 19.25 12.75 19.5858 12.75 20V22C12.75 22.4142 12.4142 22.75 12 22.75C11.5858 22.75 11.25 22.4142 11.25 22V20C11.25 19.5858 11.5858 19.25 12 19.25Z"
        darkIcon="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"
      />
    </>
  );
}
