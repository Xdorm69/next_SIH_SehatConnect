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
import { ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavbarAuth from "./NavbarAuth";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserRoles } from "@prisma/client";
import { avatarUrl } from "@/lib/helpers/profileUrl";

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

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex font-sans">
            <NavLinksRender text={text} />
          </div>

          {/* AUTH (Desktop only) */}
          <div className="hidden md:flex gap-4">
            <NavbarAuth />
          </div>

          {/* MOBILE MENU */}
          <div className="md:hidden">
            <MobileNav text={text} />
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
                <Link key={i} href={`/${sub.toLowerCase()}`}>
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

const MobileNav = async ({ text }: { text: "light" | "primary" }) => {
  const session = await getServerSession(authOptions);
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="p-6">
        <div className="flex flex-col gap-6">
          {NavLinks.map((item, id) =>
            item.href ? (
              <Link
                key={id}
                href={item.href}
                className="text-lg font-medium hover:underline"
              >
                {item.title}
              </Link>
            ) : (
              <div key={id}>
                <p className="text-lg font-semibold">{item.title}</p>
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  {item.additionals?.map((sub, i) => (
                    <Link
                      key={i}
                      href={`/${sub.toLowerCase()}`}
                      className="text-base text-muted-foreground hover:underline"
                    >
                      {sub}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}

          {/* AUTH BUTTON (Mobile) */}
          {session ? (
            <Link href={avatarUrl(session.user.role as UserRoles)}>
              <Button className="w-full">Profile</Button>
            </Link>
          ) : (
            <Link href={"/login"}>
              <Button className="w-full">Login</Button>
            </Link>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
