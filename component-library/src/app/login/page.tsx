import Form from "@/components/form";
import { auth } from "@/authConfig";
import Nav from "@/components/nav";
export default async function Login() {
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
            iconLink: "",
          },
          {
            el: "",
            icon: session?.user?.image || "/nouser1.png",
            iconLink: "/login",
          },
        ]}
        hamburgerIcon="/looplogoli.png"
      />
      <Form session={session} />
    </>
  );
}
