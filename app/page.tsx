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
} from "lucide-react";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

interface Course {
  id: number;
  name: string;
  duration: string;
  mode: string;
  students: string;
  partner: string;
  category: string;
}

type NewsItem = {
  id: number;
  title: string;
  description: string;
  date: string;
  source: string;
  image: string;
};

const courses: Course[] = [
  // Emerging Technologies
  {
    id: 1,
    name: "Artificial Intelligence and Deep Learning",
    duration: "6 Months",
    mode: "Online",
    students: "8000+",
    partner: "AI Lab",
    category: "Emerging Technologies",
  },
  {
    id: 2,
    name: "Data Science and AI",
    duration: "12 Months",
    mode: "Online",
    students: "8000+",
    partner: "CLOUDXLAB",
    category: "Emerging Technologies",
  },
  {
    id: 3,
    name: "Certificate Program in UI/UX",
    duration: "3 Months",
    mode: "Online",
    students: "5000+",
    partner: "CLOUDXLAB",
    category: "Emerging Technologies",
  },
  {
    id: 4,
    name: "Accelerators for Deep Learning",
    duration: "3 Months",
    mode: "Online",
    students: "8000+",
    partner: "CLOUDXLAB",
    category: "Emerging Technologies",
  },
  {
    id: 5,
    name: "ML for Finance",
    duration: "6 Months",
    mode: "Online",
    students: "8000+",
    partner: "Coursera",
    category: "Emerging Technologies",
  },
  {
    id: 6,
    name: "Data Science & Machine Learning",
    duration: "6 Months",
    mode: "Online",
    students: "8000+",
    partner: "AI Lab",
    category: "Emerging Technologies",
  },
  {
    id: 7,
    name: "Applied Data Science & AI",
    duration: "6 Months",
    mode: "Online",
    students: "8000+",
    partner: "AI Lab",
    category: "Emerging Technologies",
  },
  {
    id: 8,
    name: "AI For Managers",
    duration: "6 Months",
    mode: "Online",
    students: "8000+",
    partner: "AI Lab",
    category: "Emerging Technologies",
  },
  {
    id: 9,
    name: "Cybersecurity",
    duration: "6 Months",
    mode: "Online",
    students: "8000+",
    partner: "AI Lab",
    category: "Emerging Technologies",
  },
  {
    id: 10,
    name: "Data Science & Machine Learning",
    duration: "6 Months",
    mode: "Online",
    students: "8000+",
    partner: "AI Lab",
    category: "Emerging Technologies",
  },
  // Hardware & IT
  {
    id: 11,
    name: "VLSI Design",
    duration: "5 Months",
    mode: "Offline",
    students: "3000+",
    partner: "Coursera",
    category: "Hardware & IT",
  },
  {
    id: 12,
    name: "5G Technology and IoT",
    duration: "3 Months",
    mode: "Hybrid",
    students: "4500+",
    partner: "Coursera",
    category: "Hardware & IT",
  },
  // Management
  {
    id: 14,
    name: "HR Management and Analytics",
    duration: "6 Months",
    mode: "Online",
    students: "3000+",
    partner: "Imarticus",
    category: "Management",
  },
  {
    id: 15,
    name: "Applied Finance, Credit and Crime Risk Management",
    duration: "6 Months",
    mode: "Online",
    students: "3000+",
    partner: "Huanho",
    category: "Management",
  },
  {
    id: 16,
    name: "AI For Managers",
    duration: "3 Months",
    mode: "Online",
    students: "3000+",
    partner: "CloudxLab",
    category: "Management",
  },
  {
    id: 17,
    name: "SCM & Analytics",
    duration: "6 Months",
    mode: "Online",
    students: "3000+",
    partner: "Imarticus",
    category: "Management",
  },
  {
    id: 18,
    name: "Business Analytics for Decision Making",
    duration: "6 Months",
    mode: "Online",
    students: "3000+",
    partner: "Huanho",
    category: "Management",
  },
  {
    id: 19,
    name: "HR Analytics",
    duration: "6 Months",
    mode: "Online",
    students: "3000+",
    partner: "Simplilearn",
    category: "Management",
  },
  {
    id: 20,
    name: "Digital Marketing and MarTech",
    duration: "4.5 Months",
    mode: "Online",
    students: "3000+",
    partner: "Imarticus Learning",
    category: "Management",
  },
  {
    id: 21,
    name: "Strategic SCM with AI",
    duration: "6 Months",
    mode: "Online",
    students: "3000+",
    partner: "Coursera",
    category: "Management",
  },
  {
    id: 22,
    name: "Product Management",
    duration: "5 Months",
    mode: "Online",
    students: "3000+",
    partner: "Imarticus Learning",
    category: "Management",
  },
  // Project Management
  {
    id: 23,
    name: "Project Management & Controls",
    duration: "3 Months",
    mode: "Online",
    students: "4000+",
    partner: "Protecon BTG",
    category: "Project Management",
  },
  {
    id: 24,
    name: "Project Management & Controls",
    duration: "2 Months",
    mode: "Online",
    students: "3500+",
    partner: "Protecon BTG",
    category: "Project Management",
  },
  // Miscellaneous
  {
    id: 25,
    name: "Current Topics in Cyber Security",
    duration: "1 Month",
    mode: "Offline",
    students: "2000+",
    partner: "Writers' Guild",
    category: "Miscellaneous",
  },
  {
    id: 26,
    name: "Earthquake Time-History Analysis of Bridges",
    duration: "2 Months",
    mode: "Hybrid",
    students: "2500+",
    partner: "Visual Arts Academy",
    category: "Miscellaneous",
  },
  {
    id: 27,
    name: "Creativity, Innovation and IPR",
    duration: "2 Months",
    mode: "Hybrid",
    students: "2500+",
    partner: "Visual Arts Academy",
    category: "Miscellaneous",
  },
];

const testimonials = [
  {
    quote:
      "My time at CCE has been a transformative experience. The rigorous coursework challenged me to think critically and grow as a learner. The extracurricular activities and research opportunities helped me develop a well-rounded skill set. I'm grateful for the opportunities I've had here.",
    name: "Abhishek Kumar",
    designation: "Program Manager, Richo India Ltd.",
    image: "https://via.placeholder.com/50", // Replace with actual image URLs
  },
  {
    quote:
      "My time at CCE has been a transformative experience. The rigorous coursework challenged me to think critically and grow as a learner. The extracurricular activities and research opportunities helped me develop a well-rounded skill set. I'm grateful for the opportunities I've had here.",
    name: "Abhishek Kumar",
    designation: "Program Manager, Richo India Ltd.",
    image: "https://via.placeholder.com/50", // Replace with actual image URLs
  },
  {
    quote:
      "My time at CCE has been a transformative experience. The rigorous coursework challenged me to think critically and grow as a learner. The extracurricular activities and research opportunities helped me develop a well-rounded skill set. I'm grateful for the opportunities I've had here.",
    name: "Abhishek Kumar",
    designation: "Program Manager, Richo India Ltd.",
    image: "https://via.placeholder.com/50", // Replace with actual image URLs
  },
];

const newsData: NewsItem[] = [
  {
    id: 1,
    title:
      "IIT-Roorkee joins hands with WileyNXT to curate 'AI in banking' Program",
    description:
      "Our state-of-the-art research labs are equipped with the latest technology, providing students with hands-on experience and opportunities for groundbreaking research.",
    date: "11 July 2024",
    source: "Indian Express",
    image: "https://via.placeholder.com/600x400", // Replace with actual image link
  },
  // Duplicate news data for smaller cards (you can dynamically populate this)
  {
    id: 2,
    title:
      "IIT-Roorkee joins hands with WileyNXT to curate 'AI in banking' Program",
    description:
      "Our state-of-the-art research labs are equipped with the latest technology, providing students with hands-on experience",
    date: "11 July 2024",
    source: "Indian Express",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title:
      "IIT-Roorkee joins hands with WileyNXT to curate 'AI in banking' Program",
    description:
      "Our state-of-the-art research labs are equipped with the latest technology, providing students with hands-on experience",
    date: "11 July 2024",
    source: "Indian Express",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 4,
    title:
      "IIT-Roorkee joins hands with WileyNXT to curate 'AI in banking' Program",
    description:
      "Our state-of-the-art research labs are equipped with the latest technology, providing students with hands-on experience",
    date: "11 July 2024",
    source: "Indian Express",
    image: "https://via.placeholder.com/300x200",
  },
];

const items: string[] = [
  "Notice for B.Tech 2024 Admission Lateral entry batch",
  "Notice for B.Tech 2024 Admission Lateral entry batch",
  "Notice for B.Tech 2024 Admission Lateral entry batch",
];

export default function HomePage() {
  const [filteredCourses, setFilteredCourses] = useState<Course[]>(courses);
  const [activeCategory, setActiveCategory] = useState<string>(
    "Emerging Technologies"
  );

  useEffect(() => {
    setFilteredCourses(
      courses.filter((course) => course.category === activeCategory)
    );
  }, [activeCategory]);

  return (
    <div className="w-full font-inter">
      <section className="w-full h-screen flex items-center justify-center border-2">
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
            <span className="text-2xl">IIT ROORKEE</span>
            <p className="text-4xl">Continuing</p>
            <p className="text-4xl">Education Center</p>
          </div>
        </div>
      </section>

      {/* Notice section */}
      <section className="bg-[#F5F5F5]">
        <div className="w-full overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap py-2.5">
            <ul className="flex list-disc">
              {items.map((item, index) => (
                <li key={index} className="mx-6 text-xl font-normal list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/*  */}
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
                  Continuing Education Center
                </p>
                <p className="font-normal text-base">
                  Mon to Fri - 8.45 am to 5.30 pm
                </p>
              </div>
            </div>
            <div className="ml-0 md:ml-8 mt-4 md:mt-0 text-center md:text-left">
              <p className="mb-4 text-4xl font-semibold tracking-wide">
                Dream Big, Achieve More at CEC
              </p>
              <p className="mb-4 text-gray-600 text-xl text-justify">
                The Continuing Education Center (CEC) of IIT Roorkee,
                established in 1955, is dedicated to advancing knowledge through
                specialized courses for in-service professionals from
                government, public and private sectors, research institutions,
                and industries. Each year, the center conducts 60-70 short-term
                courses in management, engineering, science, and technology,
                attracting participants from across India and neighboring
                countries. These innovative and accessible programs address the
                current needs of professionals and are supported by IIT
                Roorkee’s technical expertise, with additional insights from
                industry and R&D experts.
              </p>
              <div className="mt-4 flex justify-between gap-8">
                <div className="flex gap-x-3">
                  <GraduationCap className="w-12 h-12" />
                  <div className="flex flex-col items-start">
                    <p className="text-2xl font-semibold">250+</p>
                    <p className="text-xl font-normal">Courses</p>
                  </div>
                </div>
                <div className="flex gap-x-3">
                  <Users className="w-10 h-10" />
                  <div className="flex flex-col items-start">
                    <p className="text-2xl font-semibold">10000+</p>
                    <p className="text-xl font-normal">Participants</p>
                  </div>
                </div>
                <div className="flex gap-x-3">
                  <Handshake className="w-10 h-10" />
                  <div className="flex flex-col items-start">
                    <p className="text-2xl font-semibold">140+</p>
                    <p className="text-xl font-normal">Sponsors</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex gap-x-12 mt-6">
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        defaultBg: "#FFAE0E",
                        defaultHoverBg: "#E5893C",
                        defaultHoverColor: "#2C2C2C",
                      },
                    },
                  }}
                >
                  <Button
                    type="default"
                    htmlType="submit"
                    className="border-none w-full py-2.5 px-6 text-black text-lg font-normal tracking-wide"
                  >
                    Download Brochure
                  </Button>
                </ConfigProvider>
                <ConfigProvider
                  theme={{
                    components: {
                      Button: {
                        defaultColor: "#FFAE0E",
                        defaultBorderColor: "#FFAE0E",
                        defaultHoverBg: "#FFFFFF",
                        defaultHoverColor: "#FFAE0E",
                        defaultHoverBorderColor: "#FFAE0E",
                      },
                    },
                  }}
                >
                  <Button
                    color="default"
                    variant="outlined"
                    htmlType="submit"
                    className="w-full py-2.5 px-6 text-lg font-normal tracking-wide"
                  >
                    Know More
                  </Button>
                </ConfigProvider>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="px-16 py-12">
          <div className="flex justify-between items-end mb-8 container mx-auto">
            <div>
              <h1 className="text-4xl font-semibold mb-2">
                Explore Our Courses
              </h1>
              <p className="text-xl font-normal text-gray-500">
                Find the right course to advance your education and career
                goals.
              </p>
            </div>
            {/* Search Bar */}
            <Input
              placeholder="Search Courses"
              prefix={<SearchOutlined />}
              className="w-1/4"
            />
          </div>

          {/* Search and Categories */}
          <div className="flex items-center justify-between mb-6 container mx-auto">
            <div
              className={`${
                activeCategory === "Emerging Technologies"
                  ? "bg-[#E2F1FF] font-medium"
                  : "font-normal border-2"
              } py-2.5 px-4 text-xl cursor-pointer`}
              onClick={() => setActiveCategory("Emerging Technologies")}
            >
              Emerging Technologies
            </div>
            <div
              className={`${
                activeCategory === "Hardware & IT"
                  ? "bg-[#E2F1FF] font-medium"
                  : "font-normal border-2"
              } py-2.5 px-4 text-xl cursor-pointer`}
              onClick={() => setActiveCategory("Hardware & IT")}
            >
              Hardware & IT
            </div>
            <div
              className={`${
                activeCategory === "Management"
                  ? "bg-[#E2F1FF] font-medium"
                  : "font-normal border-2"
              } py-2.5 px-4 text-xl cursor-pointer`}
              onClick={() => setActiveCategory("Management")}
            >
              Management
            </div>
            <div
              className={`${
                activeCategory === "Project Management"
                  ? "bg-[#E2F1FF] font-medium"
                  : "font-normal border-2"
              } py-2.5 px-4 text-xl cursor-pointer`}
              onClick={() => setActiveCategory("Project Management")}
            >
              Project Management
            </div>
            <div
              className={`${
                activeCategory === "Miscellaneous"
                  ? "bg-[#E2F1FF] font-medium"
                  : "font-normal border-2"
              } py-2.5 px-4 text-xl cursor-pointer`}
              onClick={() => setActiveCategory("Miscellaneous")}
            >
              Miscellaneous
            </div>
          </div>

          {/* Courses List */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto">
            {filteredCourses.map((course) => (
              <Card
                key={course.id}
                hoverable
                className="border rounded-md shadow-md"
              >
                <Image
                  preview={false}
                  src="/course.jpeg" // Replace with actual image URL
                  alt={course.name}
                  className="h-40 object-cover rounded-md"
                />

                <h3 className="font-semibold text-xl mt-2">{course.name}</h3>

                <div className="w-full flex justify-between items-center mb-2 text-base font-normal">
                  <p className="flex items-center gap-1">
                    <Clock className="w-[16px] h-[16px]" />
                    {course.duration}
                  </p>
                  <p className="flex items-center gap-1">
                    <Wifi className="w-[16px] h-[16px]" />
                    {course.mode}
                  </p>
                  <p className="flex items-center gap-1">
                    <GraduationCap className="w-[16px] h-[16px]" />
                    {course.students}
                  </p>
                </div>

                <hr />

                <div className="w-full flex justify-between items-center mt-2">
                  <div>
                    <p className="text-base font-medium">{course.partner}</p>
                    <p className="font-light text-base">Program Partner</p>
                  </div>
                  <a
                    href="#"
                    className="text-[#FFAE0E] mt-2 inline-block text-base font-medium"
                  >
                    Know More
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {/* Sponsors Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-4 text-center border-b-4 max-w-max mx-auto pb-2 border-b-[#FFC758] tracking-wide">
              Our Sponsors
            </h2>
            <div className="flex justify-between flex-wrap py-6 container mx-auto">
              <Image
                src="/sponsor-1.png"
                height="60px"
                className="object-cover"
                alt="Sponsor"
              />
              <Image
                src="/sponsor-2.png"
                height="60px"
                className="object-cover"
                alt="Sponsor"
              />
              <Image
                src="/sponsor-3.png"
                height="60px"
                className="object-cover"
                alt="Sponsor"
              />
              <Image
                src="/sponsor-1.png"
                height="60px"
                className="object-cover"
                alt="Sponsor"
              />
              <Image
                src="/sponsor-2.png"
                height="60px"
                className="object-cover"
                alt="Sponsor"
              />
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="bg-[#E1F1F4] px-16 py-12">
          <div className="container mx-auto">
            <Row gutter={[50, 16]} className="mb-12">
              <Col span={8}>
                <div className="space-y-2">
                  <div className="p-4 bg-white rounded-full max-w-max">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <p className="text-xl font-medium max-w-max border-b-2 border-b-[#666666] pb-2 pr-8 tracking-wide">
                    Why Choose us ?
                  </p>
                  <p className="text-sm font-light pt-3">
                    A leading center of excellence in science, engineering,
                    technology, and management, we are dedicated to developing
                    top-tier professionals equipped to meet the evolving demands
                    of their fields.
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
                    To establish a center dedicated to delivering high-quality
                    technical education through cutting-edge technological
                    interventions, fostering economic growth and development
                    across the nation.
                  </p>
                </div>
              </Col>
              <Col span={8}>
                <div className="space-y-2">
                  <div className="p-4 bg-white rounded-full max-w-max">
                    <Sun className="w-8 h-8" />
                  </div>
                  <p className="text-xl font-medium max-w-max border-b-2 border-b-[#666666] pb-2 pr-8 tracking-wide">
                    Our Vision
                  </p>
                  <p className="text-sm font-light pt-3">
                    To create comprehensive avenues for acquiring in-depth
                    knowledge and hands-on experience in specialized fields,
                    empowering individuals to excel and lead in their chosen
                    careers.
                  </p>
                </div>
              </Col>
            </Row>

            {/* Student Testimonials */}
            <div className="text-center text-4xl font-semibold mb-8">
              <p>Hear from Our Students</p>
            </div>
            <Row gutter={[50, 16]} className="">
              {testimonials.map((testimonial, index) => (
                <Col key={index} span={8}>
                  <Card className="shadow-lg rounded-lg" bordered={false}>
                    <p className="text-sm font-light text-justify">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <div className="flex items-center mt-4 gap-x-3">
                      <Image
                        preview={false}
                        src="/student.jpeg"
                        alt={testimonial.name}
                        width="56px"
                        height="56px"
                        className="rounded-full mr-4 object-cover"
                      />
                      <div>
                        <p className="text-xl font-medium tracking-wide">
                          {testimonial.name}
                        </p>
                        <p className="text-sm font-light text-[#2C2C2C]">
                          {testimonial.designation}
                        </p>
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* Events Section */}
        <section className="bg-[#FFFAF1] px-16 py-12">
          <div className="container mx-auto">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h1 className="text-4xl font-semibold mb-2">Upcoming Events</h1>
                <p className="text-xl font-normal text-gray-500">
                  Mark your calendar for exciting happenings
                </p>
              </div>
              {/* Search Bar */}
              <Input
                placeholder="Search Events"
                prefix={<SearchOutlined />}
                className="w-1/4"
              />
            </div>

            <Row gutter={[50, 16]} className="">
              {Array.from({ length: 3 }, (_, i) => (
                <Col key={i} span={8}>
                  <Card className="shadow-md">
                    <div className="w-full flex justify-between items-center">
                      <p className="flex items-center gap-1">
                        <Clock className="w-[16px] h-[16px]" />
                        3rd Mar-7th Mar
                      </p>
                      <p className="flex items-center gap-1">
                        <MapPin className="w-[16px] h-[16px]" />
                        New Gate Ground, HST
                      </p>
                    </div>
                    <p className="text-xl font-semibold my-3">
                      Cultural Night Celebration
                    </p>
                    <p className="text-sm text-[#2c2c2c] font-light">
                      Discover the richness of cultural heritage through
                      performances that highlight the unique traditions and
                      customs of our global community.
                    </p>
                    <p className="underline underline-offset-2 decoration-[#FFAE0E] text-[#FFAE0E] text-base font-medium mt-2">
                      Know More
                    </p>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* News Section */}
        <section className="px-16 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container mx-auto">
            {/* Left Section: Featured News */}
            <div className="">
              <div className="">
                <Image
                  preview={false}
                  alt={newsData[0].title}
                  src="/IITR_building.jpeg"
                  className="h-64 object-cover rounded-lg"
                />
                <div className="max-w-max gap-x-4 flex justify-between items-center my-3">
                  <p className="flex items-center gap-1">
                    <CalendarMinus2 className="w-[16px] h-[16px]" />
                    {newsData[0].date}
                  </p>
                  <p className="flex items-center gap-1">
                    <Pen className="w-[16px] h-[16px]" />
                    {newsData[0].source}
                  </p>
                </div>
                <h3 className="text-xl font-semibold text-black text-justify">
                  {newsData[0].title}
                </h3>
                <p className="text-base font-light mt-3 text-justify">
                  {newsData[0].description}
                </p>
              </div>
            </div>

            {/* Right Section: Smaller News */}
            <div className="flex flex-col gap-y-6">
              {newsData.slice(1).map((news) => (
                <div key={news.id} className="flex gap-x-6">
                  <Image
                    preview={false}
                    alt={news.title}
                    src="/IITR_building.jpeg"
                    width="180px"
                    className="object-cover rounded-lg aspect-square"
                  />
                  <div className="flex-1">
                    <div className="max-w-max gap-x-4 flex justify-between items-center mb-3">
                      <p className="flex items-center gap-1">
                        <CalendarMinus2 className="w-[16px] h-[16px]" />
                        {news.date}
                      </p>
                      <p className="flex items-center gap-1">
                        <Pen className="w-[16px] h-[16px]" />
                        {news.source}
                      </p>
                    </div>
                    <h3 className="text-xl font-semibold text-black text-justify">
                      {news.title}
                    </h3>
                    <p className="text-base font-light mt-3 text-justify">
                      {news.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
