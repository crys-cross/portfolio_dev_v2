"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <div>DEV PORTFOLIO</div>
      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        <li>
          <Link href="#">My Profile</Link>
        </li>
        <li>
          <Link href="#">Featured Projects</Link>
        </li>
        <li>
          <Link href="#">Other Projects</Link>
        </li>
        <li>
          <Link href="#">Contact Me</Link>
        </li>
      </div>
      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <Image
            src={session?.user.image}
            width={37}
            height={37}
            className="rounded-full"
            alt="profile"
            onClick={() => setToggleDropdown((prev) => !prev)}
            // onClick={() => setToggleDropdown(!toggleDropdown)}
          />
          {toggleDropdown && (
            <div className="dropdown">
              <Link
                href="/profile"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                My Profile
              </Link>
              <Link
                href="/create-prompt"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Featured Projects
              </Link>
              <Link
                href="/create-prompt"
                className="dropdown_link"
                onClick={() => setToggleDropdown(false)}
              >
                Other Projects
              </Link>
            </div>
          )}
          <li>
            <Link href="#">Profile</Link>
          </li>
          <li>
            <Link href="#">Featured Projects</Link>
          </li>
          <li>
            <Link href="#">Other Projects</Link>
          </li>
          <li>
            <Link href="#">Contact Me</Link>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
