"use client";
import { noProfileLogo } from '@/app/components/loadimages';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaCamera } from "react-icons/fa";

type ProfileProps = {
  username?: string;
  userProf?: string;
  level?: string;
  exp?: number;
}

const account: ProfileProps = {
  username: "Jhon Doe",
  userProf: "/images/prof.jpeg",
  level: "14",
  exp: 50
}

const Profile = () => {
  return (
    <div className="font-poppins relative text-white bg-gradient-to-b from-blue-base to-purple-base p-6 h-full shadow-lg rounded-lg flex flex-col gap-8 items-center">
      <div className='container flex flex-col items-center'>
        <div className='relative w-fit rounded-full outline outline-offset-2 outline-2 outline-red-500'>
          <Image
            src={account.userProf ?? noProfileLogo}
            width={240}
            height={240}
            alt="Profile Picture"
            className="rounded-full h-[240px] w-[240px] max-w-60 object-cover"
          />
          <div className="absolute right-0 bottom-3 bg-white p-2 rounded-full shadow-lg w-fit">
            <FaCamera className="text-gray-800 cursor-pointer" size={30} />
          </div>
        </div>
        <h2 className="text-4xl font-semibold text-center mt-5">{account.username ?? "username"}</h2>
      </div>
      <div className='w-full'>
        <h1 className="text-xl">Level {account.level ?? "999"}</h1>
        <div className="w-full h-10 rounded-full bg-white">
          <div style={{ width: `${account.exp ?? 0 > 10 ? account.exp : 10}%` }} className={`h-10 text-lg font-semibold text-dark flex justify-center items-center text-center p-0.5 rounded-full leading-none bg-gradient-to-r from-green-200 to-purple-400`}>{account.exp ?? 0}%</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;


