import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "700"], // regular + bold for headings
});

export const metadata: Metadata = {
  title: "SehatConnect - Rural Health & Medical Services",
  description:
    "SehatConnect is a government-run platform prioritizing health in rural areas. Order medicines online and book appointments with nearby doctors easily.",
  keywords: [
    "SehatConnect",
    "Rural Health",
    "Online Doctor Appointment",
    "Medicines Online",
    "Healthcare",
    "Government Health Services",
  ],
  authors: [{ name: "SehatConnect Team", url: "https://yourwebsite.com" }],
  openGraph: {
    title: "SehatConnect - Rural Health & Medical Services",
    description:
      "Access medicines and healthcare services online through SehatConnect. Book appointments with doctors in your area effortlessly.",
    url: "https://yourwebsite.com",
    siteName: "SehatConnect",
    images: [
      {
        url: "https://yourwebsite.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "SehatConnect - Rural Health & Medical Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SehatConnect - Rural Health & Medical Services",
    description:
      "Order medicines online and book doctor appointments with ease through SehatConnect.",
    images: ["https://yourwebsite.com/og-image.png"],
    site: "@SehatConnect",
    creator: "@SehatConnect",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
