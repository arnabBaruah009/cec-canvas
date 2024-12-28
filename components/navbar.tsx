"use client";

// components/TopNavbar.tsx
import React from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const handleFilter = () => {};
  // Dropdown menu for "More"
  const moreMenu = {
    items: [
      { key: "All", label: "All" },
      {
        key: "gender",
        label: "Gender",
        children: [
          {
            key: "Male",
            label: "Male",
          },
          {
            key: "Female",
            label: "Female",
          },
          {
            key: "Other",
            label: "Other",
          },
        ],
      },
    ],
    onClick: handleFilter,
  };

  return (
    <nav className="text-white py-3 px-6 w-full fixed top-0 left-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <img
            src="/logo.png" // Replace with your logo path
            alt="Continuing Education Center Logo"
            className="h-8 w-8"
          /> */}
          <span className="text-lg font-semibold">
            Continuing Education Center
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/courses" className="hover:text-gray-300">
            Courses
          </Link>
          <Link
            href="/verify-certificate"
            className="text-[#ffa500] hover:text-[#ffb733]"
          >
            Verify Certificate
          </Link>
          <Link href="/qip" className="hover:text-gray-300">
            QIP
          </Link>
          <Link href="/toh" className="hover:text-gray-300">
            TOH
          </Link>
          <Link href="/people" className="hover:text-gray-300">
            People
          </Link>

          {/* Dropdown for "More" */}
          <Dropdown menu={moreMenu} trigger={["click"]}>
            <a
              onClick={(e) => e.preventDefault()}
              className="hover:text-gray-300 flex items-center"
            >
              More <DownOutlined className="ml-1" />
            </a>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};
