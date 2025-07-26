import EducationPage from '@/components/EducationPage'
import React from 'react'
export const metadata = {
  title: "Education | AmirHasan Pezhman – Computer Engineering Student",
  description:
    "Learn about AmirHasan Pezhman's academic background in Computer Engineering at Iran University of Science and Technology (IUST), including coursework and technical foundation.",
  keywords: [
    "AmirHasan Pezhman Education",
    "Computer Engineering Student",
    "Iran University of Science and Technology",
    "Frontend Developer Education",
    "Computer Science Courses",
    "IUST Tehran",
    "Web Development Background",
    "CS Student Iran",
    "BSc in Computer Engineering",
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
    <EducationPage/>
    </div>
  )
}

export default page