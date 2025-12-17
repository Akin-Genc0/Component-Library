"use server"
import { signIn } from "@/authConfig";
import { signOut } from "@/authConfig";

export const login = async () => {
    await signIn('github', {redirectTo: "/"})
}

export const logout = async () => {
    await signOut({redirectTo: "/"})
}