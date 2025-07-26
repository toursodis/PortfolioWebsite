import Icons from "@/components/Icons";
import Link from "next/link";

type props = {
  data: { github: string; linkedin: string ;name:string};
};
const Footer = ({ data }: props) => (
  <footer className="border-t border-gray-700 mt-16 pt-8 pb-8 text-center text-gray-400">
    <div className="flex justify-center items-center space-x-6 mb-6">
      <Link
        href={data.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
      >
        <Icons name="github" className="w-7 h-7" />
      </Link>
      <Link
        href={data.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
      >
        <Icons name="linkedin" className="w-7 h-7" />
      </Link>
    </div>
    <p className="text-sm">
      &copy; {new Date().getFullYear()} {data.name}. All Rights Reserved.
    </p>
  </footer>
);
export default Footer;
