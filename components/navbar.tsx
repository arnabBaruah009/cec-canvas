"use client";

import React, { useEffect, useState } from "react";
import { Image } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [activePage, setActivePage] = useState<string>("");

  useEffect(() => {
    // Set the active page based on the current route
    const currentPage = pathname === "/" ? "home" : pathname.slice(1);
    setActivePage(currentPage);
    localStorage.setItem("activePage", currentPage);
  }, [pathname]);

  useEffect(() => {
    // Retrieve the active page from local storage on mount
    const storedPage = localStorage.getItem("activePage");
    if (storedPage) {
      setActivePage(storedPage);
    }
  }, []);

  const isActive = (page: string) => activePage === page;

  return (
    <nav className="text-white py-3 px-6 w-full absolute top-0 left-0 z-20 font-inter">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="relative flex items-center space-x-2">
          <Image
            preview={false}
            src="/IITR_logo.png"
            width="38px"
            height="38px"
            className=""
            alt="IITR Logo"
          />
          <div className="text-white">
            <p className="text-sm tracking-wider">Continuing</p>
            <p className="text-sm tracking-wider">Education Center</p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`hover:text-gray-300 ${
              isActive("home") ? "text-[#ffa500]" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/sponsors"
            className={`hover:text-gray-300 ${
              isActive("sponsors") ? "text-[#ffa500]" : "text-white"
            }`}
          >
            Sponsors
          </Link>
          <Link
            href="/certificate"
            className={`hover:text-gray-300 ${
              isActive("certificate") ? "text-[#ffa500]" : "text-white"
            }`}
          >
            Verify Certificate
          </Link>
          <Link
            href="/forms"
            className={`hover:text-gray-300 ${
              isActive("forms") ? "text-[#ffa500]" : "text-white"
            }`}
          >
            Forms
          </Link>
          <Link
            href="/trainee-officer-hostel"
            className={`hover:text-gray-300 ${
              isActive("trainee-officer-hostel")
                ? "text-[#ffa500]"
                : "text-white"
            }`}
          >
            TOH
          </Link>
          <Link
            href="/staff"
            className={`hover:text-gray-300 ${
              isActive("staff") ? "text-[#ffa500]" : "text-white"
            }`}
          >
            People
          </Link>
          <Link
            href="/gallery"
            className={`hover:text-gray-300 ${
              isActive("gallery") ? "text-[#ffa500]" : "text-white"
            }`}
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
};
