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
            width="60px"
            height="60px"
            className=""
            alt="IITR Logo"
          />
          <div className="text-white space-y-1">
            <p className="text-base tracking-wider leading-tight">
              Quality Improvement
            </p>
            <p className="text-base tracking-wider leading-tight">
              &amp; Continuing Education Center
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 relative">
          {[
            {
              label: "Home",
              href: "/",
              submenu: [
                { title: "About CEC", href: "/about-us" },
                { title: "CEC Brochure", href: "/" },
                { title: "Amenities", href: "/" },
                { title: "IITR Home", href: "/" },
              ],
            },
            {
              label: "Courses",
              href: "",
              submenu: [
                { title: "2023-24", href: "/" },
                { title: "2022-23", href: "/" },
                { title: "2021-22", href: "/" },
                { title: "2020-21", href: "/" },
                { title: "2019-20", href: "/" },
                { title: "2018-19", href: "/" },
                { title: "2017-18", href: "/" },
              ],
            },
            {
              label: "Sponsors",
              href: "/sponsors",
              submenu: [
                {
                  title: "International Sponsors",
                  href: "/",
                },
                { title: "National Sponsors", href: "/" },
              ],
            },
            {
              label: "QIP",
              href: "",
              submenu: [
                { title: "About", href: "/" },
                {
                  title: "Selected Candidates (Sponsored)",
                  href: "/",
                },
                {
                  title: "Selected Candidates (Self-Financed)",
                  href: "/",
                },
                { title: "NQCC Members", href: "/" },
              ],
            },
            { label: "TOH", href: "/trainee-officer-hostel", submenu: [] },
            {
              label: "People",
              href: "/staff",
              submenu: [{ title: "CEC Staff", href: "/" }],
            },
            {
              label: "Newsletter",
              href: "",
              submenu: [
                { title: "Volume I", href: "/" },
                { title: "Volume II", href: "/" },
                { title: "Volume III", href: "/" },
              ],
            },
            {
              label: "Download",
              href: "/forms",
              submenu: [
                { title: "CEC new forms", href: "/" },
                { title: "CEC old forms", href: "/" },
                {
                  title: "Sample Certificate",
                  href: "/",
                },
                { title: "Calendar", href: "/" },
              ],
            },
            { label: "Certificate", href: "/certificate", submenu: [] },
            { label: "Gallery", href: "/gallery", submenu: [] },
          ].map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className={`hover:text-gray-300 py-2 ${
                  isActive(item.label.toLowerCase())
                    ? "text-[#ffa500]"
                    : "text-white"
                }`}
              >
                {item.label}
              </Link>
              {item.submenu.length > 0 && (
                <div className="absolute left-0 top-full w-48 bg-gray-800 text-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 invisible group-hover:visible">
                  <div className="absolute h-2 w-full -top-2 bg-transparent"></div>
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.title}
                      href={subItem.href}
                      className="block px-4 py-2 hover:bg-gray-700 uppercase cursor-pointer text-sm"
                    >
                      {subItem.title}
                    </Link>
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
