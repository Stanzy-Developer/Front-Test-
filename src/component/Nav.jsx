import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex justify-between items-center py-9">
      <div className="">
        <h1 className="heading text-[25px] md:text-[2rem]">User Analytics</h1>
        <p className="text-[#AEBBDA]/80 text-[9px] md:text-[1rem] font-display">
          Lorem ipsum dolor sit consectetur.
        </p>
      </div>
      <div className="flex justify-center items-center gap-5">
        <Link
          to="/posts"
          className="text-sm md:text-lg text-[#AEBBDA]/80 hover:text-[#AEBBDA]/40 cursor-pointer"
        >
          Posts
        </Link>

        <select
          className="hidden md:block  w-[172px] h-[48px] rounded-[10px] border border-[rgba(174,171,216,0.40)] bg-transparent relative pl-4 text-[#8F9BB7] text-5 font-medium font-display outline-none"
          id="select"
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
    </div>
  );
};

export default Nav;
