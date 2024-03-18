"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";

const Header = () => {
  const session = useSession();
  return (
    <div>
      {session.data ? (
        <Button onClick={() => signOut()}>Sign Out</Button>
      ) : (
        <Button onClick={() => signIn("goggle")}>Sign In</Button>
      )}
      <ModeToggle />
    </div>
  );
};

export default Header;
