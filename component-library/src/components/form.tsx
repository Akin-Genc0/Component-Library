"use client";
import { login, logout } from "@/lib/actions/auth";
import { Session } from "next-auth";

interface FormProps {
  session: Session | null;
}

export default function Form({ session }: FormProps) {
  if (session?.user) {
    return (
      <div className="">
        <p>Welcome, {session.user.name}</p>
        <button onClick={() => logout()}>Log Out</button>
      </div>
    );
  }

  return (
    <div className="">
      <p>You are signed out</p>
      <button onClick={() => login()}>Sign in with GitHub</button>
    </div>
  );
}
