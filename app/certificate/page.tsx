"use client";

import { Form, Input, Button, Image, ConfigProvider } from "antd";

export default function CertificatePage() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form Values:", values);
  };
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
            <p className="text-4xl">Certificate</p>
          </div>
        </div>
      </section>
      <section className="bg-[#FFFAF1] py-6">
        <div className="p-6 max-w-md mx-auto container">
          <h2 className="text-4xl font-medium mb-4 text-left tracking-wide">
            Download Certificate
          </h2>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            className="space-y-4"
          >
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number!" },
              ]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label="Enrollment Number"
              name="enrollment"
              rules={[
                {
                  required: true,
                  message: "Please enter your enrollment number!",
                },
              ]}
            >
              <Input placeholder="Enter your enrollment number" />
            </Form.Item>

            <Form.Item>
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
            </Form.Item>
          </Form>
        </div>
      </section>
    </div>
  );
}
