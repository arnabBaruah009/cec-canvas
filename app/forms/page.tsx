"use client";

import { Image, Table } from "antd";

interface DataItem {
  title: string;
  date: string;
  download_link: string;
}

const data: DataItem[] = Array.from({ length: 10 }, (_, index) => ({
  title: "Request for course invoice generation for open participation course",
  date: "20/11/2024",
  download_link: "#",
}));

export default function FormsPage() {
  const columns = [
    {
      title: "Sl. No.",
      dataIndex: "index",
      key: "index",
      align: "center" as "center",
      render: (_: any, __: DataItem, index: number) => <span>{index + 1}</span>,
    },
    {
      title: "Description",
      dataIndex: "title",
      key: "title",
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text: string) => <span>{text}</span>,
    },
    {
      title: "Download",
      dataIndex: "download_link",
      key: "download_link",
      render: (link: string) => (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFAE0E] hover:text-[#FFAE0E] hover:underline"
        >
          Download
        </a>
      ),
    },
  ];

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
            <p className="text-4xl">Forms</p>
          </div>
        </div>
      </section>
      <section className="w-full py-6">
        <div className="w-full p-4 bg-white container mx-auto">
          <h1 className="text-4xl font-semibold text-center mb-2">CEC Forms</h1>
          <p className="text-xl font-normal text-gray-500 text-center mb-12">
            For the courses approved on March 08, 2022 onwards
          </p>
          <Table
            dataSource={data.map((item, index) => ({ ...item, key: index }))}
            columns={columns}
            pagination={false}
            bordered
          />
        </div>
      </section>
    </div>
  );
}
