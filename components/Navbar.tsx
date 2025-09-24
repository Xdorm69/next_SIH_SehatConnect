import React from "react";
import MaxWidthWrapper from "./Wrappers/MaxWidthWrapper";
import Logo from "./Logo";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const NavLinks = [
  { title: "Services", drop: true, additionals: ["Shop", "Appointment"] },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Support", drop: true, additionals: ["FAQ", "Contact"] },
];

const Navbar = ({ text = "primary" }: { text: "light" | "primary" }) => {
  return (
    <nav className="top-0 bg-background/20 left-0 w-full backdrop-blur-2xl fixed z-50 py-4">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          {/* LEFT */}
          <Logo
            className={cn(
              "text-primary",
              text === "light" && "text-background"
            )}
          />

          {/* LINKS */}
          <div className="flex font-sans">
            <NavLinksRender text={text} />
          </div>

          {/* AUTH */}
          <div className="flex gap-4">
            <Link href={"/login"}>
              <Button className={"text-background"}>Login</Button>
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

const NavLinksRender = ({ text }: { text: "light" | "primary" }) => {
  return (
    <>
      {NavLinks.map((item, id) =>
        item.href ? (
          <Link
            key={id}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "text-muted-foreground hover:text-black",
              text === "light" && "text-white/80"
            )}
            href={item.href}
          >
            {item.title}
          </Link>
        ) : item.drop ? (
          <DropdownMenu key={id}>
            <DropdownMenuTrigger
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-muted-foreground hover:text-black",
                text === "light" && "text-white/80"
              )}
            >
              {item.title}
              <ChevronDown
                className={cn(
                  "size-4 text-muted-foreground -ml-1",
                  text === "light" && "text-white/80"
                )}
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {item.additionals?.map((sub, i) => (
                <Link key={i} href={`/${sub.toLocaleLowerCase()}`}>
                  <DropdownMenuItem>{sub}</DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <button key={id} className={buttonVariants({ variant: "ghost" })}>
            {item.title}
          </button>
        )
      )}
    </>
  );
};

export default Navbar;
