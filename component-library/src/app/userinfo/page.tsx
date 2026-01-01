import { auth } from "@/authConfig";
import Nav from "@/components/nav";

export default async function UserInfoPage() {
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
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-2xl font-bold mb-4">User Info</h1>
        {session?.user ? (
          <div className="text-center">
            <p className="mb-2">Name: {session.user.name}</p>
            <p className="mb-2">Email: {session.user.email}</p>
            <img
              src={session.user.image || "/nouser1.png"}
              alt="User Avatar"
              className="w-20 h-20 rounded-full mx-auto"
            />
          </div>
        ) : (
          <p>No user info found.</p>
        )}
      </div>
    </>
  );
}
