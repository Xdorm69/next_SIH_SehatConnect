import { FaqSection } from "@/components/sections/FaqSection";
import { Button, buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/Wrappers/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import { BriefcaseMedical, Clock, Repeat } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import JoinBtn from "./_components/JoinBtn";

const page = () => {
  return (
    <main>
      <HeroSection />
      <TrustedSection />
      <EssentialSection />
      <TipsSection />
      <WellnessSection />
      <FaqSection />
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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
    <section className="mt-8 md:mt-14 py-18">
      <MaxWidthWrapper>
        <div>
          <h1 className="heading text-center sm:text-left sm:text-5xl md:text-6xl sm:leading-16">
            Bringing Health
            <br />
            Closer To You
          </h1>
          <p className="desc mt-4 text-center sm:text-left text-md sm:text-xl md:text-2xl sm:w-1/2">
            Access quality healthcare and products with ease. We&apos;re here to
            support rural families every step of the way.
          </p>

          {/* SHADOW POINTS   */}
          <div className="flex flex-wrap gap-8 mt-4 items-center font-sans">
            <div className={cn("flex gap-2 mx-auto sm:mx-0")}>
              <BriefcaseMedical />
              Vital Medicines
            </div>
            <div className={cn("flex gap-2 mx-auto sm:mx-0")}>
              <Repeat />
              Local Clinics
            </div>
            <div className={cn("flex gap-2 mx-auto sm:mx-0")}>
              <Clock />
              24/7 Available
            </div>
          </div>

          {/* CTA BUTTONS  */}
          <div className="flex gap-4 mt-12 flex-wrap items-center justify-center sm:justify-start">
            <JoinBtn />
            <Button variant={"outline"}>Discover More</Button>
          </div>

          {/* IMAGE  */}
          <div className="bg-zinc-300 border shadow rounded-xl overflow-hidden w-full h-[400px] mt-12">
            <Image
              src={"/home/hero.jpg"}
              alt="hero-home"
              width={800}
              height={600}
              priority
              className="w-full h-full object-cover"
            />
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
    <section className="py-18 w-full bg-zinc-200 flex items-center">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* LEFT  */}
          <div>
            <h1 className="heading">Trusted HealthCare Partners</h1>
            <p className="desc text-md md:text-lg">
              We collaborate with leading organizations to bring dependable
              medical products and services to rural areas. Our partners enable
              us to offer quality care, accessible solutions, and continuous
              support for families.
            </p>
          </div>

          {/* RIGHT IMAGE  */}

          <div className="w-full h-[40vh] bg-zinc-300 rounded-xl overflow-hidden">
            <Image
              src={"/home/partner.jpg"}
              alt="partner-home"
              width={800}
              height={600}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

const EssentialSection = () => {
  const CardData = [
    {
      img: "/home/essentials/1.jpg",
      slug: "Medicines",
      title: "Daily Health Essentials",
      description:
        "Find safe and effective medicines for common health needs. Suitable for everyone.",
    },
    {
      img: "/home/essentials/2.jpg",
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
            Essential HealthCare,
            <br />
            Within Reach
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
                <div className="bg-zinc-300 rounded-xl h-[50vh] w-[400px] shadow-lg overflow-hidden">
                  <Image
                    src={item.img}
                    alt="partner-home"
                    width={500}
                    height={300}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
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
      img: "/home/tips/1.jpg",
      text: "light",
      title: "Daily Wellness Habits",
      description:
        "Adopt simple routines like drinking water, eating balanced meals, and moving daily. Small steps support lasting health.",
    },

    {
      img: "/home/tips/2.jpg",
      text: "light",
      title: "Quick Care Access",
      description:
        "Find local clinics and doctors fast. Get directions and contact info for prompt medical support.",
    },

    {
      img: "/home/tips/3.jpg",
      text: "light",

      title: "Emergency Guidance",
      description:
        "Be prepared for urgent situations. Access emergency numbers and basic first aid instructions.",
    },

    {
      img: "/home/tips/4.jpg",
      text: "dark",
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
            <h1 className="heading">Essential Health For Every Family</h1>
            <p className="w-2/3 mx-auto desc">
              Practical health tips and quick access to trusted care. Stay
              informed with easy resources for your well-being.
            </p>
          </div>

          {/* BENTO GRID  */}
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4 mt-12">
            {/* Row 1 */}
            {data.map((item, id) => {
              return (
                <div
                  key={id}
                  className={cn(
                    "rounded relative shadow bg-zinc-300 row-span-1 p-4 flex items-end",
                    (id == 0 || id == data.length - 1) && "md:col-span-2"
                  )}
                >
                  <div className="absolute top-0 left-0 w-full h-full rounded overflow-hidden z-20">
                    <Image
                      src={item.img}
                      width={400}
                      height={300}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className={cn("relative z-20")}>
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
    <section className="py-18 h-[120vh] max-w-screen overflow-hidden md:min-h-screen relative">
      <MaxWidthWrapper>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative z-20">
            {/* TEXT  */}
            <div className="text-center relative z-40 backdrop-blur-sm rounded p-2 md:backdrop-blur-none">
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
            <div className="absolute overflow-hidden -top-30 md:-top-34 -right-30 md:-right-60 w-full md:w-1/2 h-1/2 md:h-2/3 rounded-xl shadow bg-zinc-300 z-0">
              <Image
                src={"/home/wellness/2.jpg"}
                width={300}
                height={200}
                alt="well-1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute overflow-hidden -bottom-30 md:-bottom-34 -left-30 md:-left-60 w-full md:w-1/2 h-1/2 md:h-2/3 rounded-xl shadow bg-zinc-300 z-0">
              <Image
                src={"/home/wellness/1.jpg"}
                width={300}
                height={200}
                alt="well-2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default page;
