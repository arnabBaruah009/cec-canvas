"use client";

import { Image, Card } from "antd";

// Define the type for the card data
interface CardData {
  image_url: string;
  name: string;
  designation: string;
  phone: string;
  email: string;
}

// Sample data
const cardData: CardData[] = [
  {
    image_url: "/staff.png",
    name: "Prof. Kaushik Ghosh",
    designation: "Coordinator CEC",
    phone: "01332-285227/5545",
    email: "Coordinator.cec.qip@iitr.ac.in",
  },
  {
    image_url: "/staff.png",
    name: "Prof. Kaushik Ghosh",
    designation: "Coordinator CEC",
    phone: "01332-285227/5545",
    email: "Coordinator.cec.qip@iitr.ac.in",
  },
  {
    image_url: "/staff.png",
    name: "Prof. Kaushik Ghosh",
    designation: "Coordinator CEC",
    phone: "01332-285227/5545",
    email: "Coordinator.cec.qip@iitr.ac.in",
  },
  {
    image_url: "/staff.png",
    name: "Prof. Kaushik Ghosh",
    designation: "Coordinator CEC",
    phone: "01332-285227/5545",
    email: "Coordinator.cec.qip@iitr.ac.in",
  },
  {
    image_url: "/staff.png",
    name: "Prof. Kaushik Ghosh",
    designation: "Coordinator CEC",
    phone: "01332-285227/5545",
    email: "Coordinator.cec.qip@iitr.ac.in",
  },
  {
    image_url: "/staff.png",
    name: "Prof. Kaushik Ghosh",
    designation: "Coordinator CEC",
    phone: "01332-285227/5545",
    email: "Coordinator.cec.qip@iitr.ac.in",
  },
];

export default function StaffPage() {
  return (
    <div className="w-full font-inter">
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
            <p className="text-4xl">Staff Members</p>
          </div>
        </div>
      </section>
      <section className="py-6">
        <div className="container mx-auto p-6">
          <h2 className="text-center text-4xl font-semibold mb-12">
            Our Staff Members
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardData.map((item, index) => (
              <div
                key={index}
                className="max-w-xs bg-[#E2F1FF] p-4 space-y-0.5"
              >
                <Image
                  preview={false}
                  alt={item.name}
                  src={item.image_url}
                  className="object-cover aspect-square"
                />
                <p className="text-xl font-medium text-black">{item.name}</p>
                <p className="text-base font-normal text-black">
                  {item.designation}
                </p>
                <p className="text-base font-normal text-black">
                  Phone: {item.phone}
                </p>
                <p className="text-base font-normal text-black">
                  Email: {item.email}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
