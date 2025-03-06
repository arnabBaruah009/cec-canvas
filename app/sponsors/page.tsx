"use client";

import { Card, Image } from "antd";

interface Sponsor {
  category: string;
  items: {
    name: string;
    imageUrl: string;
  }[];
}

const sponsors: Sponsor[] = [
  {
    category: "Founding Benefactor",
    items: [
      { name: "Ministry of External Affairs", imageUrl: "/MEA.png" },
      { name: "Vienna International Center", imageUrl: "/VIO.png" },
      {
        name: "Islamic Republic of Afghanistan",
        imageUrl: "/IRA.png",
      },
      { name: "Ministry of External Affairs", imageUrl: "/MEA.png" },
      { name: "Vienna International Center", imageUrl: "/VIO.png" },
      {
        name: "Islamic Republic of Afghanistan",
        imageUrl: "/IRA.png",
      },
    ],
  },
  {
    category: "Scholarship Partner",
    items: [
      { name: "Ministry of External Affairs", imageUrl: "/MEA.png" },
      { name: "Vienna International Center", imageUrl: "/VIO.png" },
      {
        name: "Islamic Republic of Afghanistan",
        imageUrl: "/IRA.png",
      },
      { name: "Ministry of External Affairs", imageUrl: "/MEA.png" },
      { name: "Vienna International Center", imageUrl: "/VIO.png" },
      {
        name: "Islamic Republic of Afghanistan",
        imageUrl: "/IRA.png",
      },
    ],
  },
  {
    category: "Campus Contributor",
    items: [
      { name: "Ministry of External Affairs", imageUrl: "/MEA.png" },
      { name: "Vienna International Center", imageUrl: "/VIO.png" },
      {
        name: "Islamic Republic of Afghanistan",
        imageUrl: "/IRA.png",
      },
      { name: "Ministry of External Affairs", imageUrl: "/MEA.png" },
      { name: "Vienna International Center", imageUrl: "/VIO.png" },
      {
        name: "Islamic Republic of Afghanistan",
        imageUrl: "/IRA.png",
      },
    ],
  },
];

export default function SponsorsPage() {
  return (
    <div className="w-full">
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('/sponsors_background.jpeg')] bg-cover bg-center brightness-[0.7]"
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>

        {/* Content */}
        <div className="relative flex items-center z-20">
          <Image
            preview={false}
            src="/IITR_logo.png"
            width="164px"
            height="164px"
            className=""
            alt="IITR Logo"
          />
          <div className="border-l pl-2 text-white">
            <span className="text-2xl">IIT ROORKEE</span>
            <p className="text-4xl">CEC</p>
            <p className="text-4xl">Sponsors</p>
          </div>
        </div>
      </section>
      <section className="py-6">
        <div className="container mx-auto p-6">
          <h2 className="text-center text-4xl font-semibold mb-12">
            Our Sponsors
          </h2>
          {sponsors.map((sponsorCategory) => (
            <div key={sponsorCategory.category} className="mb-12">
              <h3 className="text-3xl text-center font-light mb-4">
                {sponsorCategory.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sponsorCategory.items.map((item, index) => (
                  <Card key={index} className="shadow-lg">
                    <div className="w-full h-full flex items-center md:items-start">
                      <Image
                        preview={false}
                        src={item.imageUrl}
                        alt={item.name}
                        width="101px"
                        height="80px"
                        className=""
                      />
                      <p className="text-xl font-medium ml-4 tracking-wide">
                        {item.name}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
