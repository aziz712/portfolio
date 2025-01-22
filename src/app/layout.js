import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aziz Slama Portfolio",
  description: "Explore my portfolio as a full-stack developer showcasing my projects and skills.",
  keywords: "Full Stack Developer,Computer Science,Coding Skills,Programming Languages,Software Development,Team Collaboration,Positive Approach,Inclusive,Open-Minded,Adaptive,Seamless UX,Intuitive UI,Reliable Software, Performance Optimization,Technical Skills,Front-End Development,HTML,CSS,JavaScript,TailwindCSS,Bootstrap,jQuery,  ApexCharts,Flowbite,React,Back-End Development,PHP,PYTHON,JAVA,C,SQL,Firebase,RestAPI,Node.js,Git & GitHub,Automation (Selenium), SEO Optimization,Agile/Scrum,VSCode,IntelliJ,Quick Learner,Passion for Technology,Knowledge Acquisition,Latest Technologies, Project Management,Pandemic Visualization,Disease Analysis,News Aggregator,Android App Development,UX/UI Design,Cloud Computing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children} <Analytics /> <SpeedInsights />
      </body>
    </html>
  );
}
