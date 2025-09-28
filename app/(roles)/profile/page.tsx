import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavbarAuth from "@/components/NavbarAuth";
import { Sidebar } from "@/components/Sidebar";
import ProfileCard from "./_components/ProfileCard";
import InfoCard from "./_components/InfoCard";
import AnamnesisCard from "./_components/AnamesisCard";
import ListCard from "./_components/ListCard";
import VisitTabs from "./_components/VisitTabs";

export type tabDataType = {
  date: Date;
  service: string;
  doctor: string;
  status: "scheduled" | "completed" | "planned";
};

// ---------------- Data (keep as you had) ----------------
const futureData: tabDataType[] = [
  {
    date: new Date("2025-10-10"),
    service: "Treatment and cleaning of canals",
    doctor: "Dr. Oksana M.",
    status: "scheduled",
  },
  {
    date: new Date("2025-11-02"),
    service: "Teeth whitening",
    doctor: "Dr. Max O.",
    status: "scheduled",
  },
  {
    date: new Date("2025-11-15"),
    service: "Dental implant consultation",
    doctor: "Dr. Sarah Lee",
    status: "scheduled",
  },
];
const pastVisitData: tabDataType[] = [
  {
    date: new Date("2025-08-20"),
    service: "Routine cleaning",
    doctor: "Dr. N. Adams",
    status: "completed",
  },
  {
    date: new Date("2025-07-05"),
    service: "Cavity filling",
    doctor: "Dr. Michael B.",
    status: "completed",
  },
  {
    date: new Date("2025-06-15"),
    service: "Wisdom tooth extraction",
    doctor: "Dr. Emily K.",
    status: "completed",
  },
];
const plannedTreatmentData: tabDataType[] = [
  {
    date: new Date("2025-12-01"),
    service: "Braces installation",
    doctor: "Dr. Alex G.",
    status: "planned",
  },
  {
    date: new Date("2026-01-12"),
    service: "Dental crown fitting",
    doctor: "Dr. Oksana M.",
    status: "planned",
  },
];


const PatientProfile = () => {
  return (
    <div className="flex min-h-screen md:w-[calc(100vw-256px)] md:absolute md:right-0 md:top-0">
      {/* Main Content */}
      <main className="flex-1 md:p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="heading text-2xl md:text-3xl">Patient Profile</h1>
          <div className="hidden md:block">
            <NavbarAuth />
          </div>
        </div>

        <Separator className="mb-6" />

        <div className="flex gap-2 mb-6 justify-end">
          <Button variant="outline">Print</Button>
          <Button>Edit</Button>
        </div>

        {/* Grid Layout (responsive) */}
        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto gap-4">
          {/* Profile + Info side by side */}

          <div className="col-span-2 row-span-2 h-full">
            <ProfileCard />
          </div>
          <div className="col-span-1 row-span-2 h-full">
            <InfoCard />
          </div>

          {/* Right column (Anamnesis, Files, Notes) */}
          <div className="col-span-3 md:col-span-1 row-span-4 flex flex-col gap-4">
            <AnamnesisCard />
            <ListCard title="Files" />
            <ListCard title="Notes" />
          </div>

          {/* Visits Tabs full col-2 width with fixed-row-2 below */}
          <div className="col-span-3 md:col-span-2 row-span-2">
            <VisitTabs
              futureData={futureData}
              pastVisitData={pastVisitData}
              plannedTreatmentData={plannedTreatmentData}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientProfile;
