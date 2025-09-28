"use client";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { UserRoles } from "@prisma/client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export const Sidebar = ({
  menuItems,
  role,
}: {
  menuItems: string[];
  role: UserRoles;
}) => {
  const router = useRouter();

  const pushUrl = (role: UserRoles, item: string) => {
    if (role === "USER") router.push(`/profile/${item.toLowerCase()}`);
    else router.push(`/${role.toLowerCase()}/${item.toLowerCase()}`);
  };

  const SidebarContent = () => (
    <div className="p-6 flex flex-col justify-between h-full w-full">
      <div>
        <div className="mb-4">
          <Logo className="text-2xl text-white" />
        </div>
        <nav className="flex flex-col gap-4 text-sm">
          {menuItems.map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="justify-start w-full text-white"
              onClick={() => pushUrl(role, item)}
            >
              {item[0].toUpperCase() + item.slice(1)}
            </Button>
          ))}
          <div className="my-4">
            <Separator />
          </div>
          <Button
            variant={"destructive"}
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            Logout
          </Button>
        </nav>
      </div>
    </div>
  );

  return (
    <div className="">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-primary fixed top-0 left-0 text-white h-full">
        <SidebarContent />
      </aside>

      {/* Mobile Sheet with Hamburger */}
      <div className="md:hidden p-4 absolute right-2 top-8 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="size-6 text-primary " />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-primary text-white w-64 p-0">
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
