import { Sidebar } from "@/components/Sidebar";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { UserRoles } from "@prisma/client";
import { redirect } from "next/navigation";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  if(!session) return redirect('/unauthorized');

  const adminMenuItems = [
    "blogs",
    "users",
    "doctors",
    "vendors",
    "products",
    "transactions",
  ];

  const vendorMenuItems = ["products"];

  const patientMenuItems = [
    "Schedule",
    "Employees",
    "Patients",
    "Scheduled Visits",
    "Statistics",
    "Reports",
    "Price",
    "Cabinets",
  ];

  const menuItems: { [key in UserRoles]: string[] } = {
    ADMIN: adminMenuItems,
    VENDOR: vendorMenuItems,
    USER: patientMenuItems,
    DOCTOR: patientMenuItems,
  };

  
  return (
    <div className="md:ml-64 py-12 px-6 md:px-12 bg-zinc-200 min-h-screen">
      <Sidebar role={session?.user.role as UserRoles} menuItems={menuItems[session?.user.role as UserRoles]} />
      {children}
    </div>
  );
};

export default layout;
