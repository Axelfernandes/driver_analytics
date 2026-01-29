import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Curri | Driver Engagement Dashboard",
  description: "Strategy & Operations Dashboard for Driver Engagement",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex bg-background`}>
        <Sidebar />
        <main className="flex-1 ml-[260px] min-h-screen p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
