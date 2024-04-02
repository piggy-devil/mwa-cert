"use client";

import LoginButton from "@/components/auth/login-button";
import { UserButton } from "@/components/auth/user-button";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
// import { useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  // const { data: session } = useSession();
  // console.log({ session });
  const user = useCurrentUser();
  console.log("user-page: ", user);

  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <LoginButton mode="modal">Sign-in</LoginButton>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get started</Link>
          </Button>
          {user && <UserButton />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
