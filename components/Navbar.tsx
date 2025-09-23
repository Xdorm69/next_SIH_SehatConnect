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
  { title: "Services", drop: true, additionals: ["All", "Specialties"] },
  { title: "About", href: "/about" },
  { title: "Blog", href: "/blog" },
  { title: "Support", drop: true, additionals: ["FAQ", "Contact"] },
];

const Navbar = () => {
  return (
    <nav className="top-0 bg-background/20 left-0 w-full backdrop-blur-2xl fixed z-50 py-4">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between">
          {/* LEFT */}
          <Logo className="text-primary" />

          {/* LINKS */}
          <div className="flex font-sans">
            <NavLinksRender />
          </div>

          {/* AUTH */}
          <div className="flex gap-4">
            <Button className={cn("text-background")}>Login</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

const NavLinksRender = () => {
  return (
    <>
      {NavLinks.map((item, id) =>
        item.href ? (
          <Link
            key={id}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "text-muted-foreground hover:text-black"
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
                "text-muted-foreground hover:text-black"
              )}
            >
              {item.title}
              <ChevronDown className="size-4 text-muted-foreground -ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {item.additionals?.map((sub, i) => (
                <DropdownMenuItem key={i}>{sub}</DropdownMenuItem>
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
