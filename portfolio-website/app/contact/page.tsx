import ContactPage from '@/components/ContactPage'
import React from 'react'
export const metadata = {
  title: "Contact | AmirHasan Pezhman – Frontend Developer",
  description:
    "Get in touch with AmirHasan Pezhman, a frontend developer experienced in React, Redux, and modern web technologies. Reach out via email, LinkedIn, or GitHub.",
  keywords: [
    "AmirHasan Pezhman Contact",
    "Frontend Developer Contact",
    "Hire React Developer Iran",
    "Contact Web Developer",
    "Portfolio Contact Page",
    "LinkedIn AmirHasan Pezhman",
    "GitHub toursodis",
    "Email amirhasanpezhman@gmail.com"
  ],
 robots: {
    index: true,
    follow: true,
  },
  creator:"Amir Hasan Pezhman"
}
const page = () => {
  return (
    <div className='p-6'>
    <ContactPage/>
    </div>
  )
}

export default page