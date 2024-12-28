// components/Footer.tsx
import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#102a43] text-white py-8 w-full">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">IIT ROORKEE</h3>
          <p className="text-sm">Continuing Education Center</p>
          <address className="mt-4 not-italic">
            <p>Sector 15 Kothrud, Pune, Maharashtra</p>
            <p>Phone: +91-9087654321</p>
            <p>
              Email:{" "}
              <a
                href="mailto:contactcec@iitr.com"
                className="hover:text-gray-400 underline"
              >
                contactcec@iitr.com
              </a>
            </p>
          </address>
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Administration Section */}
        <div>
          <h4 className="text-md font-semibold mb-3">Administration</h4>
          <ul className="space-y-2">
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
          <h4 className="text-md font-semibold mb-3">Departments</h4>
          <ul className="space-y-2">
            {[
              { name: "DOSW", href: "#" },
              { name: "SRIC", href: "#" },
              { name: "DADAM", href: "#" },
              { name: "ADAA", href: "#" },
              { name: "Telephone Directory", href: "#" },
            ].map((link, index) => (
              <li key={index}>
                <a className="hover:text-gray-400">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Supporting Units Section */}
        <div>
          <h4 className="text-md font-semibold mb-3">Supporting Units</h4>
          <ul className="space-y-2">
            {[
              { name: "NPTEL", href: "#" },
              { name: "GIAN", href: "#" },
              { name: "AICTE", href: "#" },
              { name: "TEQIP", href: "#" },
              { name: "QIP Principal Coordinator", href: "#" },
            ].map((link, index) => (
              <li key={index}>
                <a className="hover:text-gray-400">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="text-center mt-8 border-t border-gray-600 pt-4 text-sm">
        © {new Date().getFullYear()} All Rights Reserved, IIT Roorkee
      </div>
    </footer>
  );
};
