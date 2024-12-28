"use client";

import { Image } from "antd";

export default function FormsPage() {
  return (
    <div className="w-full">
      <section className="w-full h-screen flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center brightness-50"
          aria-hidden="true"
        ></div>

        {/* Content */}
        <div className="relative flex items-center">
          <Image
            preview={false}
            src="/IITR_logo.png"
            width="164px"
            height="164px"
            className=""
          />
          <div className="border-l pl-2 text-white">
            <span className="text-2xl">IIT ROORKEE</span>
            <p className="text-4xl">CEC</p>
            <p className="text-4xl">Forms</p>
          </div>
        </div>
      </section>
    </div>
  );
}
