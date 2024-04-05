"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

const Page = () => {
  return (
    <div className={" w-screen h-screen bg-[#121212]"}>
      <Card
        className={
          "w-1/5 absolute bg-zinc-900 text-neutral-200 border-gray-800   transform left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        }
      >
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            className={" bg-sky-500 hover:bg-sky-600 w-full"}
            onClick={() => signIn("google")}
          >
            Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
