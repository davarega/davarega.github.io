"use client";
import { noProfileLogo } from '@/app/components/loadimages';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { FaCamera } from "react-icons/fa";

const Profile = ({ username = "username", userProf = `${noProfileLogo}`, level = "999", exp = 100 }) => {
  let weight = `w-[${exp}%]`;

  return (
    <div className="font-poppins relative text-white bg-gradient-to-b from-blue-base to-purple-base p-6 h-full shadow-lg rounded-lg flex flex-col gap-8 items-center">
      <div className='container flex flex-col items-center'>
        <div className='relative w-fit rounded-full outline outline-offset-2 outline-2 outline-red-500'>
          <Image
            src={userProf}
            width={240}
            height={240}
            alt="Profile Picture"
            className="rounded-full max-w-60 object-cover"
          />
          <div className="absolute right-0 bottom-3 bg-white p-2 rounded-full shadow-lg w-fit">
            <FaCamera className="text-gray-800 cursor-pointer" size={30} />
          </div>
        </div>
        <h2 className="text-4xl font-semibold text-center mt-5">{username}</h2>
      </div>
      <div className='w-full'>
        <h1 className="text-xl">Level {level}</h1>
        <div className="w-full h-10 rounded-full bg-white">
          <div style={{ width: `${exp > 10 ? exp : 10}%` }} className={`h-10 text-lg font-semibold text-dark flex justify-center items-center text-center p-0.5 rounded-full leading-none bg-gradient-to-r from-green-200 to-purple-400`}>{exp}%</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;


