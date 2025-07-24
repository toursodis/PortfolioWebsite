import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-blue-900">
      <nav className=" px-6 py-3 mx-auto flex flex-col-reverse justify-center md:justify-between md:flex-row-reverse items-center ">
        <div className="flex ">
          <Link href="#interests">HomePage</Link>
        </div>
        <div>
          <h1 className="opacity-90 font-bold">Amir Hasan Pezhman</h1>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
