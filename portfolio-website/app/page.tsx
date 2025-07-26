import HomePage from '@/components/HomePage'
import React from 'react'
export const metadata = {
  title: "AmirHasan Pezhman | Frontend Developer",
  description:
    "Hi, I'm AmirHasan Pezhman — a frontend developer passionate about building clean, responsive web apps using React.js, Redux, Tailwind CSS, and TypeScript. Check out my portfolio, projects, and more.",
  keywords: [
    "AmirHasan Pezhman",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Tailwind CSS",
    "Redux",
    "TypeScript",
    "Web Developer Iran",
    "Junior Developer Portfolio",
    "Computer Engineering Student"
  ],
  
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: "#0f172a", // You can adjust this to match your branding
  viewport: "width=device-width, initial-scale=1",
  creator:"Amir Hasan Pezhman"
};

const page = () => {
  return (
    <div className='p-6'>
    <HomePage/>
    </div>
  )
}

export default page
