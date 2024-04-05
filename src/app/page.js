"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();
  console.log(data);
  return (
    <>
      <Button onClick={() => signIn("google")}>Login</Button>
    </>
  );
}
