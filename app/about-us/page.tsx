"use client";

import { Image, Button, ConfigProvider, Input, Card, Row, Col } from "antd";
import {
  GraduationCap,
  Users,
  Handshake,
  Clock,
  Wifi,
  Star,
  Sun,
  MapPin,
  Pen,
  CalendarMinus2,
  LocateFixed,
} from "lucide-react";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

export default function AboutUsPage() {
  return (
    <div className="w-full font-inter">
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('/home_background.png')] bg-cover bg-center brightness-[0.7]"
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>

        {/* Content */}
        <div className="relative flex items-center z-20">
          <Image
            preview={false}
            src="/IITR_logo.png"
            alt="IITR Logo"
            width="164px"
            height="164px"
            className=""
          />
          <div className="border-l pl-2 text-white">
            <span className="text-2xl">QIP-CEC</span>
            <p className="text-4xl">About Us</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        {/* Header Section */}
        <section className="px-16 py-12">
          <div className="w-full grid grid-cols-2 gap-x-8 container mx-auto">
            <div className="ml-0 md:ml-8 mt-4 md:mt-0 text-center md:text-left">
              <p className="mb-4 text-4xl font-semibold tracking-wide">
                Continuing Education Centre
              </p>
              <p className="mb-4 text-gray-600 text-lg text-justify">
                Continuing education center of IIT Roorkee was established in
                1955 for the promotion of knowledge upgradation activity in our
                country by organizing refresher/specialist courses for
                in-service technical and professional person from various
                Govt./Semi Govt. organisations, public and private undertakings,
                research institutions and industries. The center conducts about
                60 to 70 short terms courses (sponsored by different
                agencies/organisation) in continuing education every year in
                various disciplines of management, engineering, science and
                technology in which the professionals are trained from all parts
                of the country as well as from the neighbour countries. Courses
                organized by this Centre are innovative, accessible and
                stimulating and address to the current needs of the
                professionals. Courses are being organised through the technical
                expertise available in the departments and centres of the
                Institute. Experts from industries and R&D organisations are
                also invited to deliver lectures wherever necessary.
              </p>
              <p className="mb-4 text-gray-600 text-lg text-justify">
                Centre organizes the courses in the beautiful campus of the
                Institute and also outside the Institute in consultancy as well
                as in sponsored mode that respond to client's continuing
                professional development needs. The Centre is fully equipped
                with the facility of conference hall, accommodation, dining and
                recreation.
              </p>
            </div>
            <div className="items-center place-items-center">
              <div className="bg-[#E2F1FF] p-4 w-full space-y-1">
                <div className="flex justify-start w-full">
                  <Image
                    preview={false}
                    src="/about-us-1.png"
                    alt="Trainee Officer's Hostel"
                    width="300px"
                    className="object-cover aspect-square rounded-xl shadow-xl"
                  />
                </div>
                <div className="flex justify-end w-full">
                  <Image
                    preview={false}
                    src="/about-us-2.png"
                    alt="Trainee Officer's Hostel"
                    width="300px"
                    className="object-cover aspect-square rounded-xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#E1F1F4] px-16 py-12">
          <div className="container mx-auto">
            <Row gutter={[50, 16]} className="mb-12">
              <Col span={8}>
                <div className="space-y-2">
                  <div className="p-4 bg-white rounded-full max-w-max">
                    <Sun className="w-8 h-8" />
                  </div>
                  <p className="text-xl font-medium max-w-max border-b-2 border-b-[#666666] pb-2 pr-8 tracking-wide">
                    Our Vision
                  </p>
                  <p className="text-sm font-light pt-3">
                    A front line centre in science, engineering, technology and
                    management making significant contributions to human
                    resource development envisaging dynamic needs of the
                    professionals.
                  </p>
                </div>
              </Col>
              <Col span={8}>
                <div className="space-y-2">
                  <div className="p-4 bg-white rounded-full max-w-max">
                    <Star className="w-8 h-8" />
                  </div>
                  <p className="text-xl font-medium max-w-max border-b-2 border-b-[#666666] pb-2 pr-8 tracking-wide">
                    Our Mission
                  </p>
                  <p className="text-sm font-light pt-3">
                    To establish a center for imparting technical education
                    through technological interventions for the economic
                    development of the country.
                  </p>
                </div>
              </Col>
              <Col span={8}>
                <div className="space-y-2">
                  <div className="p-4 bg-white rounded-full max-w-max">
                    <LocateFixed className="w-8 h-8" />
                  </div>
                  <p className="text-xl font-medium max-w-max border-b-2 border-b-[#666666] pb-2 pr-8 tracking-wide">
                    Objective
                  </p>
                  <ul className="text-sm font-light pt-3 list-disc pl-5">
                    <li>
                      To create opportunity for gaining experience and more
                      knowledge in a particular field.
                    </li>
                    <li>
                      To create awareness in the technical community regarding
                      the advances in their area of interest and expertise of
                      IITR.
                    </li>
                    <li>
                      To provide a platform for interaction of Faculty,
                      Consultants, Industries and users.
                    </li>
                    <li>
                      To provide an opportunity to study at IIT Roorkee for a
                      short period of time.
                    </li>
                    <li>To provide requisite inputs for improvements.</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="bg-[#0B2447] text-white py-16">
          <div className="container mx-auto grid grid-cols-4 gap-8 text-center">
            <div>
              <h2 className="text-5xl font-bold text-[#FFA500] mb-4">10000+</h2>
              <p className="text-sm">
                Participants Trained
                <br />
                (In Past 5 Years)
              </p>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-[#FFA500] mb-4">250+</h2>
              <p className="text-sm">
                Courses
                <br />
                (In Past 5 Years)
              </p>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-[#FFA500] mb-4">40+</h2>
              <p className="text-sm">International Sponsors</p>
            </div>
            <div>
              <h2 className="text-5xl font-bold text-[#FFA500] mb-4">100+</h2>
              <p className="text-sm">National Sponsors</p>
            </div>
          </div>
        </section>

        {/* Information Sections */}
        <section className="bg-[#FFFAF1] px-16 py-16">
          <div className="container mx-auto space-y-16">
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Who comes to attend the courses
              </h2>
              <p className="text-gray-700 mb-4">
                Participants who enroll in our courses are interested in
                lifelong learning. Many participants attend courses to develop
                professional skills, many because they love learning and many
                for both of these reasons.
              </p>
              <p className="text-gray-700">
                The participant of the courses are in-service technical persons
                from various Govt./Semi Govt. organisations, public and private
                undertakings, research institutions and industries.
              </p>
            </div>

            <hr className="border-[#FFAE0E] border-dotted" />

            <div>
              <h2 className="text-3xl font-semibold mb-4">Fee Structure</h2>
              <p className="text-gray-700">
                The fee of each course may vary according to the duration of
                course, subject area and number of participants etc.
              </p>
            </div>

            <hr className="border-[#FFAE0E] border-dotted" />

            <div>
              <h2 className="text-3xl font-semibold mb-4">Venue</h2>
              <p className="text-gray-700">
                CEC is organizing courses at three campuses of IIT Roorkee i.e.
                Roorkee, Saharanpur and GNEC campus. Also, courses are organised
                at sponsorers' location/industry as well as via online mode
                using various e-learning platforms.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
