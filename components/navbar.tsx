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
        <div className="hidden md:flex items-center space-x-6 relative">
          {[
            {
              label: "Home",
              href: "/",
              submenu: ["About CEC", "CEC Brochure", "Amenities", "IITR Home"],
            },
            {
              label: "Courses",
              href: "",
              submenu: [
                "2023-24",
                "2022-23",
                "2021-22",
                "2020-21",
                "2019-20",
                "2018-19",
                "2017-18",
              ],
            },
            {
              label: "Sponsors",
              href: "/sponsors",
              submenu: ["International Sponsorers", "National Sponsorers"],
            },
            {
              label: "QIP",
              href: "",
              submenu: [
                "About",
                "Selected Candidates (Sponsored)",
                "Selected Candidates (Self-Financed)",
                "NQCC Members",
              ],
            },
            { label: "TOH", href: "/trainee-officer-hostel", submenu: [] },
            { label: "People", href: "/staff", submenu: ["CEC Staff"] },
            {
              label: "Newsletter",
              href: "",
              submenu: ["Volume I", "Volume II", "Volume III"],
            },
            {
              label: "Download",
              href: "/forms",
              submenu: [
                "CEC new forms",
                "CEC old forms",
                "Sample Certificate",
                "Calendar",
              ],
            },
            { label: "Certificate", href: "/certificate", submenu: [] },
            { label: "Gallery", href: "/gallery", submenu: [] },
          ].map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className={`hover:text-gray-300 ${
                  isActive(item.label.toLowerCase())
                    ? "text-[#ffa500]"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
              {item.submenu.length > 0 && (
                <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible">
                  {item.submenu.map((subItem) => (
                    <p
                      key={subItem}
                      className="block px-4 py-2 hover:bg-gray-700 uppercase cursor-pointer text-sm"
                    >
                      {subItem}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
