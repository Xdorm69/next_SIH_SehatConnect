"use client";

import Link from "next/link";
import MaxWidthWrapper from "./Wrappers/MaxWidthWrapper";
import Logo from "./Logo";
import { Youtube, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-18">
      <MaxWidthWrapper>
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo Section */}
          <Logo />

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center space-x-6 mb-6 md:mb-0">
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/faq" className="hover:text-gray-300">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-gray-300">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gray-300">
              Terms
            </Link>
            <Link href="/support" className="hover:text-gray-300">
              Support
            </Link>
            <Link href="/careers" className="hover:text-gray-300">
              Careers
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link
              href="https://youtube.com"
              target="_blank"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6 hover:text-gray-300" />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 hover:text-gray-300" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 hover:text-gray-300" />
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
