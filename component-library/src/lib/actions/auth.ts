"use server"
import { signIn } from "@/auth";
import { signOut } from "@/auth";

export const login = async () => {
    await signIn('github', {redirectTo: "/"})
}

export const logout = async () => {
    await signOut({redirectTo: "/"})
}