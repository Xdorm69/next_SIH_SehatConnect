import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MaxWidthWrapper from "../Wrappers/MaxWidthWrapper";

export function FaqSection() {
  return (
    <section className="relative bg-zinc-200 py-18">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Panel */}
          <div className="flex flex-col space-y-4 pt-10">
            <h1 className="heading text-5xl">
              Get quick answers to your health queries
            </h1>
            <p className="desc">
              Explore common questions about our services, appointments,
              privacy, and emergency support. Find straightforward answers to
              help you access care confidently.
            </p>
            <Button
              className="w-fit text-white"
              size="lg"
            >
              View FAQs
            </Button>
          </div>

          {/* Right Panel - Information Cards */}
          <div className="flex flex-col space-y-6">
            <Card className="border-none shadow-none bg-transparent p-0">
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-semibold text-gray-800">
                  How can I schedule a visit?
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Book a doctor visit online or by phone. Our team will help you
                  choose the right provider and confirm your appointment
                  quickly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-none bg-transparent p-0">
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-semibold text-gray-800">
                  What healthcare services do you offer?
                </CardTitle>
                <CardDescription className="text-gray-600">
                  We provide medical consultations, prescription refills, health
                  advice, and access to essential medicines. Visit our services
                  page for full details.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-none bg-transparent p-0">
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-semibold text-gray-800">
                  What should I do in an emergency?
                </CardTitle>
                <CardDescription className="text-gray-600">
                  For urgent care, use our emergency contact or call your local
                  clinic. We&apos;ll connect you to immediate medical support.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-none bg-transparent p-0">
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-semibold text-gray-800">
                  Is my health information secure?
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Yes. Your personal and medical details are kept private and
                  shared only with your consent, following strict privacy
                  guidelines.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
}
