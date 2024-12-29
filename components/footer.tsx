// components/Footer.tsx
import React from "react";
import Link from "next/link";
import { Image } from "antd";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#102a43] text-white py-8 w-full font-inter">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div>
          <div className="relative flex items-center">
            <Image
              preview={false}
              src="/IITR_logo.png"
              width="96px"
              height="96px"
              className=""
            />
            <div className="border-l pl-2 text-white tracking-wide">
              <span className="text-xl">IIT ROORKEE</span>
              <p className="text-2xl font-medium">Continuing Education</p>
              <p className="text-2xl font-medium">Center</p>
            </div>
          </div>
          <address className="mt-4 not-italic font-medium text-base space-y-2">
            <p>
              Address:{" "}
              <span className="font-normal">
                Sector 15 Kothrud, Pune, Maharashtra
              </span>
            </p>
            <p>
              Phone: <span>+91-9087654321</span>
            </p>
            <p>
              Email:{" "}
              <Link
                href="mailto:contactcec@iitr.com"
                className="hover:text-gray-400 hover:underline font-normal"
              >
                contactcec@iitr.com
              </Link>
            </p>
          </address>
          <div className="flex space-x-4 mt-4">
            <Link
              href="#"
              aria-label="Twitter"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                preview={false}
                src="/twitter.png"
                className="bg-white rounded-md"
                width="20px"
                height="20px"
              />
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                preview={false}
                src="/facebook.png"
                className="bg-white rounded-md"
                width="20px"
                height="20px"
              />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                preview={false}
                src="/linkedin.png"
                className="bg-white rounded-md"
                width="20px"
                height="20px"
              />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 tracking-wider font-medium">
          {/* Administration Section */}
          <div>
            <h4 className="text-xl mb-3">Administration</h4>
            <ul className="text-base space-y-2 tracking-wide">
              {[
                { name: "IITR Home", href: "#" },
                { name: "E Learning Center", href: "#" },
                { name: "PG Admission", href: "#" },
                { name: "PhD Admissions", href: "#" },
                { name: "Webmail", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments Section */}
          <div>
            <h4 className="text-xl mb-3">Departments</h4>
            <ul className="text-base space-y-2 tracking-tight">
              {[
                { name: "DOSW", href: "#" },
                { name: "SRIC", href: "#" },
                { name: "DADAM", href: "#" },
                { name: "ADAA", href: "#" },
                { name: "Telephone Directory", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Supporting Units Section */}
          <div>
            <h4 className="text-xl mb-3">Supporting Units</h4>
            <ul className="text-base space-y-2 tracking-tight">
              {[
                { name: "NPTEL", href: "#" },
                { name: "GIAN", href: "#" },
                { name: "AICTE", href: "#" },
                { name: "TEQIP", href: "#" },
                { name: "QIP Principal Coordinator", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="text-center mt-8 border-t border-gray-600 pt-4 text-sm">
        © {new Date().getFullYear()} All Rights Reserved, IIT Roorkee
      </div>
    </footer>
  );
};
