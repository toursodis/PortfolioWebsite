import ProjectsPage from '@/components/ProjectsPage'
import React from 'react'
export const metadata = {
  title: "Projects | AmirHasan Pezhman – Frontend Developer",
  description:
    "Explore a collection of web development and software engineering projects by AmirHasan Pezhman. From real-time social platforms to AI-powered search engines, showcasing skills in React, Redux, Tailwind, and Python.",
  keywords: [
    "AmirHasan Pezhman",
    "Frontend Projects",
    "React Developer Portfolio",
    "Web Development Projects",
    "Python Projects",
    "Real-time Web App",
    "Next.js Portfolio",
    "Redux",
    "Tailwind CSS",
    "WebSocket",
    "TF-IDF Search Engine",
    "Image Recognition DFA"
  ],
  
  robots: {
    index: true,
    follow: true,
  },
  creator:"Amir Hasan Pezhman"
};

const page = () => {
  return (
    <div className='p-6'>
    <ProjectsPage/>
    </div>
  )
}

export default page