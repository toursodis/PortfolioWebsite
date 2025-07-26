"use client";
import Link from "next/link";
import Icons from "./Icons";
import PageTitle from "./PageTitle";
import { portfolioData } from "@/lib/PortfolioInfo";

const ContactPage = () => {
  const data = portfolioData;
  return (
    <div>
      <PageTitle title="Get In Touch" icon="mail" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <p className="text-lg text-gray-300">
            I&apos;m currently seeking new opportunities and am open to freelance
            projects. If you have a project in mind, a question, or just want to
            connect, feel free to reach out. I&apos;m always excited to collaborate
            on new and interesting ideas.
          </p>
          <div className="space-y-4 pt-4">
            <Link
              href={`mailto:${data.email}`}
              className="flex items-center gap-4 text-lg p-4 rounded-md hover:bg-gray-700/50 transition-colors"
            >
              <Icons name="mail" className="w-6 h-6 text-cyan-400" />
              <span>{data.email}</span>
            </Link>
            <div className="flex items-center gap-4 text-lg p-4 rounded-md">
              <Icons name="phone" className="w-6 h-6 text-cyan-400" />
              <span>{data.phone}</span>
            </div>
            <div className="flex items-center gap-4 text-lg p-4 rounded-md">
              <Icons name="mapPin" className="w-6 h-6 text-cyan-400" />
              <span>{data.location}</span>
            </div>
          </div>
        </div>
        <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-white mb-4">Send a Message</h3>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full bg-gray-700 border-gray-600 rounded-md p-2 text-white focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
            <div>
              <label
                htmlFor="email-form"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email-form"
                className="w-full bg-gray-700 border-gray-600 rounded-md p-2 text-white focus:ring-cyan-500 focus:border-cyan-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full bg-gray-700 border-gray-600 rounded-md p-2 text-white focus:ring-cyan-500 focus:border-cyan-500"
              ></textarea>
            </div>
            <button
              type="button"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md transition-colors"
            >
              Submit (UI Only)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
