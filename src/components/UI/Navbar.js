import Link from "next/link";
import React from "react";

const categories = (
  <ul className="p-2">
    <li>
      <Link href={"/category/cpu"}>CPU/Processor</Link>
      <Link href={"/category/ram"}>RAM</Link>
      <Link href={"/category/monitor"}>Monitor</Link>
      <Link href={"/category/motherboard"}>Motherboard</Link>
      <Link href={"/category/power-supply-unit"}>Power Supply</Link>
      <Link href={"/category/storage-device"}>Storage Device</Link>
    </li>
  </ul>
);

const Navbar = () => {
  return (
    <div className="navbar bg-[#EF715A] fixed top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Category</a>
              {categories}
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost normal-case text-xl">
          PC-TANK
        </Link>
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li tabIndex={0}>
              <details>
                <summary>Category</summary>
                {categories}
              </details>
            </li>
          </ul>
        </div>
        <Link href={"/pcBuilder"} className="btn">
          PC Builder
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
