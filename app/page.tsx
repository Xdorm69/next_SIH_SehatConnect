import { FaqSection } from "@/components/sections/FaqSection";
import { Button, buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/Wrappers/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { BriefcaseMedical, Clock, Repeat } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <main>
      <HeroSection />
      <TrustedSection />
      <EssentialSection />
      <TipsSection />
      <WellnessSection/>
      <FaqSection/>
    </main>
  );
};

const HeroValues = () => {
  const data = [
    {
      number: 50,
      title: "👨‍👩‍👧‍👦 Families Served",
      description: "Empowering rural homes",
    },
    {
      number: 120,
      title: "🏥 Clinic Partners",
      description: "Convinient access",
    },
    {
      number: 100,
      title: "📦 Items Shipped",
      description: "Empowering rural homes",
    },
    {
      number: 96,
      title: "😊 Happy Users",
      description: "Great community review",
    },
  ];

  return (
    <div className="flex justify-between gap-4">
      {data.map((item, id) => (
        <div key={id}>
          <p className="font-sans font-semibold text-2xl">{item.number}K</p>
          <h4 className="font-sans text-lg">{item.title}</h4>
          <p className="font-serif text-muted-foreground text-md">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="mt-14 py-18">
      <MaxWidthWrapper>
        <div>
          <h1 className="heading text-6xl leading-16">
            Bringing Health <br /> Closer To You
          </h1>
          <p className="desc mt-4 text-2xl w-1/2">
            Access quality healthcare and products with ease. We're here to
            support rural families every step of the way.
          </p>

          {/* SHADOW POINTS   */}
          <div className="flex gap-8 mt-4 items-center font-sans">
            <div className={cn("flex gap-2")}>
              <BriefcaseMedical />
              Vital Medicines
            </div>
            <div className={cn("flex gap-2")}>
              <Repeat />
              Local Clinics
            </div>
            <div className={cn("flex gap-2")}>
              <Clock />
              24/7 Available
            </div>
          </div>

          {/* CTA BUTTONS  */}
          <div className="flex gap-4 mt-12">
            <Button>Join Us</Button>
            <Button variant={"outline"}>Discover More</Button>
          </div>

          {/* IMAGE  */}
          <div className="bg-zinc-300 border shadow rounded-xl p-8 w-full h-[400px] mt-12">
            <p className="font-sans text-7xl text-zinc-400 font-semibold">
              Here comes unnecessary image which will be heighlight of our
              page..
            </p>
          </div>
        </div>

        <div className="mt-12">
          <HeroValues />
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const TrustedSection = () => {
  return (
    <section className="py-18 h-[60vh] w-full bg-zinc-200 flex items-center">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center gap-8">
          {/* LEFT  */}
          <div>
            <h1 className="heading">
              Trusted HealthCare Partners
            </h1>
            <p className="desc">
              We collaborate with leading organizations to bring dependable
              medical products and services to rural areas. Our partners enable
              us to offer quality care, accessible solutions, and continuous
              support for families.
            </p>
          </div>

          {/* RIGHT IMAGE  */}
          <div>
            <div className="w-[35vw] h-[40vh] bg-zinc-300 rounded-xl p-8">
              <p className="font-sans text-8xl font-semibold text-zinc-400">
                LOGOS..
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const EssentialSection = () => {
  const CardData = [
    {
      img: "",
      slug: "Medicines",
      title: "Daily Health Essentials",
      description:
        "Find safe and effective medicines for common health needs. Suitable for everyone.",
    },
    {
      img: "",
      slug: "Health Kits",
      title: "Home Care Must-Haves",
      description:
        "Get ready-to-use first aid and health kits. Convenient and easy for home use.",
    },
  ];
  return (
    <section className="w-full py-18">
      <MaxWidthWrapper>
        <div>
          <h1 className="heading">
            Essential HealthCare,<br />Within Reach
          </h1>
          <p className="desc w-1/2">
            Explore trusted health products for everyday care. Simple, reliable
            solutions for your family.
          </p>
        </div>

        <div className="w-full overflow-hidden">
          {/* SCROLLABLE CONTENT  */}
          <div className="overflow-x-auto scrollbar-hidden flex gap-8 mt-12">
            {[...CardData, ...CardData].map((item, id) => (
              <div key={id}>
                <div className="bg-zinc-300 rounded-xl h-[50vh] w-[29vw] shadow-lg p-8">
                  <p className="text-6xl font-sans font-semibold text-zinc-400">
                    {" "}
                    IMAGES {id + 1}
                  </p>
                </div>

                <p
                  className={cn("mt-4", buttonVariants({ variant: "outline" }))}
                >
                  {item.slug}
                </p>

                <div className="mt-4">
                  <h1 className="font-sans text-2xl font-semibold">
                    {item.title}
                  </h1>
                  <p className="mt-2 text-muted-foreground font-serif">
                    {item.description}
                  </p>
                </div>

                <Button className="mt-4">Learn More</Button>
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const TipsSection = () => {
  const data = [
    {
      title: "Daily Wellness Habits",
      description:
        "Adopt simple routines like drinking water, eating balanced meals, and moving daily. Small steps support lasting health.",
    },

    {
      title: "Quick Care Access",
      description:
        "Find local clinics and doctors fast. Get directions and contact info for prompt medical support.",
    },

    {
      title: "Emergency Guidance",
      description:
        "Be prepared for urgent situations. Access emergency numbers and basic first aid instructions.",
    },

    {
      title: "Local Health Programs",
      description:
        "Join free checkups, vaccination events, and support groups in your area. Connect with your community.",
    },
  ];
  return (
    <section className="py-18 bg-zinc-200">
      <MaxWidthWrapper>
        <div className="my-10">
          <div className="text-center">
            <h1 className="heading">
              Essential Health For Every Family
            </h1>
            <p className="w-2/3 mx-auto desc">
              Practical health tips and quick access to trusted care. Stay
              informed with easy resources for your well-being.
            </p>
          </div>

          {/* BENTO GRID  */}
          <div className="grid grid-cols-3 auto-rows-[250px] gap-4 mt-12">
            {/* Row 1 */}
            {data.map((item, id) => {
              return (
                <div
                key={id}
                  className={cn(
                    "rounded-xl shadow bg-zinc-300 row-span-1 p-4 flex items-end",
                    (id == 0 || id == data.length - 1) && "col-span-2"
                  )}
                >
                  <div>
                    <h1 className="font-sans text-2xl font-semibold">
                      {item.title}
                    </h1>
                    <p className="mt-2 text-muted-foreground font-serif">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const WellnessSection = () => {
  return (
    <section className="py-18 h-screen w-full relative">
      <MaxWidthWrapper>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative z-20">
            {/* TEXT  */}
            <div className="text-center relative z-40">
              <h1 className="heading text-6xl">
                Begin Your Path <br />
                To Wellness{" "}
              </h1>
              <p className="desc text-xl mt-4">
                Connect with healthcare professionals, locate nearby clinics,
                and access vital health resources effortlessly. Designed for
                ease and accessibility, especially for rural areas. Start your
                journey to improved health today.
              </p>
              <Button className="mt-8 px-8 mx-auto">Join Now</Button>
            </div>

            {/* ABSOLUTE IMAGES  */}
            <div className="absolute -top-34 -right-60 w-1/2 h-2/3 rounded-xl shadow bg-zinc-300 z-0"></div>
            <div className="absolute -bottom-34 -left-60 w-1/2 h-2/3 rounded-xl shadow bg-zinc-300 z-0"></div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}

export default page;
