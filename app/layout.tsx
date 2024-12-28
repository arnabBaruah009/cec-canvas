import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/components/providers";

export const metadata: Metadata = {
  title: "CEC",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <div className="flex h-screen">
          <div className="flex-1 min-w-0 relative">
            <div className="absolute inset-0">
              <Providers>{children}</Providers>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
