'use client'
import { useState } from 'react';
import Link from 'next/link';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import Image from 'next/image';
import profilePic from '../../../public/images/profilelogo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-cs-blue to-cs-purple p-4 rounded-30 top-0 sticky z-[100]">
      <div className="max-w-9xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <button className="text-white text-2xl mr-4">
            <HiOutlineChevronLeft size={40}/>
          </button>
          <span className="text-white text-xl font-bold">LOGO</span>
        </div>
        <div className="flex items-center space-x-4 relative">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-md text-sm text-black"
          />
          <button onClick={toggleDropdown} className="relative">
            <Image
              src={profilePic}
              alt="Profile"
              className="rounded-full"
              width={32}
              height={32}
            />
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Link href="/">
                    <h3 className="block px-4 py-2 text-gray-700 hover:bg-gray-100">My Profile</h3>
                  </Link>
                  <Link href="/jnchuriki/page.tsx">
                    <h3 className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Jinchuriki</h3>
                  </Link>
                  <Link href="/log out">
                    <h3 className="block px-4 py-2 text-red-700 hover:bg-gray-100">Log Out</h3>
                  </Link>
                </div>
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
