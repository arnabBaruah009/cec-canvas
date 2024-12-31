"use client";

import { Image } from "antd";
import {
  GraduationCap,
  School,
  Utensils,
  ArrowDownUp,
  Wifi,
  Droplet,
  Coffee,
  Tv,
  WashingMachine,
  CupSoda,
  MonitorCog,
  Snowflake,
  Footprints,
  Hotel,
  MailOpen,
  Phone,
} from "lucide-react";

const facilities = [
  { icon: <ArrowDownUp className="mr-2" />, title: "Lift Service" }, // Used Move as a representation for Elevator
  { icon: <Wifi className="mr-2" />, title: "Wi-Fi in hostel" },
  { icon: <CupSoda className="mr-2" />, title: "Refreshments" },
  { icon: <Droplet className="mr-2" />, title: "Aqua guard" },
  { icon: <Coffee className="mr-2" />, title: "In-room beverage" },
  { icon: <Snowflake className="mr-2" />, title: "AC Dining Hall" },
  { icon: <Tv className="mr-2" />, title: "TV with DTH" },
  { icon: <MonitorCog className="mr-2" />, title: "Cyber Cafe" },
  { icon: <WashingMachine className="mr-2" />, title: "Laundry Service" }, // Circular arrows for "refreshing" clothes
  { icon: <Footprints className="mr-2" />, title: "Shoe Shine Machine" }, // Layers as a metaphor for shoe polishing
];

export default function CertificatePage() {
  return (
    <div className="w-full font-inter">
      <section className="w-full h-screen flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('/TOH_background.jpeg')] bg-cover bg-center brightness-[0.7]"
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
            <p className="text-4xl">Trainee</p>
            <p className="text-4xl">Officer&apos;s Hostel</p>
          </div>
        </div>
      </section>
      <section className="py-16 space-y-16">
        {/* Header Section */}
        <section className="px-16 py-12">
          <div className="w-full grid grid-cols-2 container mx-auto">
            <div className="items-center place-items-center">
              <div className="bg-[#E2F1FF] p-4 max-w-max -rotate-2 space-y-1">
                <Image
                  preview={false}
                  src="/TOH-1.png"
                  alt="Trainee Officer's Hostel"
                  width="400px"
                  className="object-cover aspect-square"
                />
                <p className="font-semibold text-xl">
                  Trainee Officer’s Hostel
                </p>
                <p className="font-normal text-base">
                  Text for adding specific location
                </p>
              </div>
            </div>
            <div className="ml-0 md:ml-8 mt-4 md:mt-0 text-center md:text-left">
              <p className="mb-4 text-4xl font-semibold tracking-wide">
                Trainee Officer&apos;s Hostel (TOH)
              </p>
              <p className="mb-4 text-gray-600 text-xl text-justify">
                The Continuing Education Centre (CEC) at IITR offers
                well-furnished accommodations through its Trainee Officer&apos;s
                Hostel, which is designed to provide a comfortable stay for
                participants in CEC programs. The hostel features two VIP suites
                and 34 additional rooms, all of which are air-conditioned.
                Additionally, there is a fully air-conditioned conference hall
                available.
              </p>
              <p className="mb-4 text-gray-600 text-xl text-justify">
                Each room is equipped with modern amenities, including satellite
                TV, color LCD/LED TV, Wi-Fi internet, and an electronic phone
                with intercom. The hostel also offers 24/7 pantry service,
                providing tea and coffee at any time.
              </p>
              <p className="text-gray-600 text-xl text-justify">
                Participants of AICTE-sponsored courses enjoy complimentary
                hostel and dining facilities, while nominal charges apply for
                those from self-sponsored agencies or organizations.
              </p>
              <div className="mt-4 flex justify-between gap-8">
                <div className="flex gap-x-3">
                  <GraduationCap className="w-12 h-12" />
                  <div className="flex flex-col items-start">
                    <p className="text-2xl font-semibold">02</p>
                    <p className="text-xl font-normal">VIP Suites</p>
                  </div>
                </div>
                <div className="flex gap-x-3">
                  <School className="w-10 h-10" />
                  <div className="flex flex-col items-start">
                    <p className="text-2xl font-semibold">34</p>
                    <p className="text-xl font-normal">AC Rooms</p>
                  </div>
                </div>
                <div className="flex gap-x-3">
                  <Utensils className="w-10 h-10" />
                  <div className="flex flex-col items-start">
                    <p className="text-2xl font-semibold">24/7</p>
                    <p className="text-xl font-normal">Refreshments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="px-16 py-12">
          <div className="w-full grid grid-cols-2 container mx-auto">
            <div className="ml-0 md:ml-8 mt-4 md:mt-0 text-center md:text-left">
              <p className="mb-4 text-4xl font-semibold tracking-wide">
                Facilities available at Trainee Officer&apos;s Hostel
              </p>
              <div className="bg-[#FFFAF1] mt-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 max-w-max py-12 px-8 rounded-lg">
                <div>
                  <ul className="space-y-6">
                    {facilities.slice(0, 5).map((item, index) => (
                      <li key={index} className="flex text-xl font-light">
                        {item.icon}
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="space-y-6">
                    {facilities.slice(5, 10).map((item, index) => (
                      <li key={index} className="flex text-xl font-light">
                        {item.icon}
                        {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <Image
                preview={false}
                src="/TOH-2.png"
                alt="Trainee Officer's Hostel"
                width="90%"
                height="100%"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="px-16 bg-[#E1F1F4] py-12">
          <p className="mb-12 text-4xl font-semibold text-center tracking-wide">
            Categories
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container mx-auto">
            <div className="shadow-md bg-white p-8 rounded-md">
              <p className=" text-xl font-semibold mb-8">Category - I</p>
              <ul className="space-y-2 list-disc list-outside pl-6">
                <li>
                  Faculty and Staff of all IITs, including their guests (if the
                  faculty/staff covers the expenses).
                </li>
                <li>Spouses and parents of IIT students.</li>
                <li>Retired IIT employees.</li>
                <li>
                  Visitors attending workshops, conferences, short-term courses,
                  and IIT alumni.
                </li>
              </ul>
            </div>
            <div className="shadow-md bg-white p-8 rounded-md">
              <p className="text-xl font-semibold mb-8">Category - II</p>
              <ul className="space-y-2 list-disc list-outside pl-6">
                <li>
                  Faculty and Staff of all IITs, including their guests (if the
                  faculty/staff covers the expenses).
                </li>
                <li>Spouses and parents of IIT students.</li>
                <li>Retired IIT employees.</li>
                <li>
                  Visitors attending workshops, conferences, short-term courses,
                  and IIT alumni.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Charges Section */}
        <section className="px-16 py-12 space-y-36">
          <div className="w-full grid grid-cols-2 container mx-auto">
            <div className="text-center md:text-left">
              <p className="mb-4 text-4xl font-semibold tracking-wide">
                Charges for VIP Suite
              </p>
              <p className="text-xl text-justify leading-8">
                Experience the Ultimate in Luxury Living with Our VIP Suite.
                This Comprehensive Pricing Breakdown Covers Every Detail, from
                the Exclusive Amenities Designed to Pamper You, to the
                Personalized Services Catered to Your Needs. Explore the Costs
                Involved to Make an Informed Decision About Your Stay. <br />{" "}
                Boarding and Lodging Charges for
              </p>
              <ul className="list-disc list-inside pl-2 text-xl leading-8">
                <li>Category I is Rs.- 1200/-</li>
                <li>Category II is Rs.- 1800/-</li>
              </ul>
            </div>
            <div className="flex justify-end">
              <Image
                preview={false}
                src="/TOH-2.png"
                alt="Trainee Officer's Hostel"
                width="90%"
                height="100%"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="w-full grid grid-cols-2 container mx-auto">
            <div className="flex justify-start">
              <Image
                preview={false}
                src="/TOH-2.png"
                alt="Trainee Officer's Hostel"
                width="90%"
                height="100%"
                className="object-cover rounded-lg"
              />
            </div>
            <div className="text-center md:text-left">
              <p className="mb-4 text-4xl font-semibold tracking-wide">
                Charges for AC Room
              </p>
              <p className="text-xl text-justify leading-8">
                Experience the Ultimate in Luxury Living with Our VIP Suite.
                This Comprehensive Pricing Breakdown Covers Every Detail, from
                the Exclusive Amenities Designed to Pamper You, to the
                Personalized Services Catered to Your Needs. Explore the Costs
                Involved to Make an Informed Decision About Your Stay. <br />{" "}
                Boarding and Lodging Charges for
              </p>
              <ul className="list-disc list-inside pl-2 text-xl leading-8">
                <li>Category I is Rs.- 1200/-</li>
                <li>Category II is Rs.- 1800/-</li>
              </ul>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 container mx-auto">
            <div className="text-center md:text-left">
              <p className="mb-4 text-4xl font-semibold tracking-wide">
                Meal Expenses
              </p>
              <p className="text-xl text-justify leading-8">
                Explore the Comprehensive Breakdown of Our Meal Charges,
                Detailing Each Dining Option, Culinary Experience, and Exclusive
                Offerings Available. From Fine Dining to Casual Fare, This Guide
                Provides a Thorough Overview of the Costs Associated with Every
                Aspect of Your Gastronomic Journey. Food charges approx. w.e.f.
                Dec. 2018
              </p>
              <ul className="list-disc list-outside pl-6 text-xl leading-8">
                <li>
                  For Breakfast, Lunch & Dinner Rs. 270/- per day per head+ GST
                  @ 5%
                </li>
              </ul>
            </div>
            <div className="flex justify-end">
              <Image
                preview={false}
                src="/TOH-3.png"
                alt="Trainee Officer's Hostel"
                width="90%"
                height="100%"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="px-16 bg-[#E1F1F4] py-12">
          <p className="mb-12 text-4xl font-semibold text-center tracking-wide">
            Contact for accommodation queries
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 container mx-auto">
            <div className="shadow-md bg-white p-8 rounded-md">
              <Hotel className="w-14 h-14" />
              <ul className="space-y-1 mt-4 text-base font-normal">
                <li>Supervisor</li>
                <li>Trainee Officer&apos;s Hostel</li>
                <li>Continuing Education Centre</li>
                <li>Indian Institute of Technology Roorkee Roorkee – 247667</li>
              </ul>
            </div>
            <div className="shadow-md bg-white p-8 rounded-md">
              <MailOpen className="w-14 h-14" />
              <p className="mt-4 text-base font-normal">Email ids</p>
              <ul className="space-y-1 list-disc pl-6 text-base font-normal">
                <li>gh.contd@iitr.ac.in</li>
                <li>gh.contd@gmail.com</li>
              </ul>
            </div>
            <div className="shadow-md bg-white p-8 rounded-md">
              <Phone className="w-14 h-14" />
              <p className="mt-4 text-base font-normal">Phone Number</p>
              <ul className="space-y-1 list-disc pl-6 text-base font-normal">
                <li>+91-9087654321</li>
                <li>+91-9087654321</li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
