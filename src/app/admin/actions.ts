"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ADMIN_COOKIE, passwordMatches, sessionToken } from "@/lib/admin";

export async function login(formData: FormData) {
  const password = formData.get("password");
  if (typeof password !== "string" || !passwordMatches(password)) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // slow down guessing
    redirect("/admin?e=1");
  }
  (await cookies()).set(ADMIN_COOKIE, sessionToken(), { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "strict", path: "/admin", maxAge: 7 * 86400 });
  redirect("/admin");
}

export async function logout() {
  (await cookies()).delete({ name: ADMIN_COOKIE, path: "/admin" });
  redirect("/admin");
}
