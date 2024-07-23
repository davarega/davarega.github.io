import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaStar } from 'react-icons/fa';

const Datadiri = () => {
  const data = {
    name: 'John Doe',
    email: 'john.doe@gmail.com',
    phone: '+1234567890',
    accountLevel: 'Gold',
    rewards: '1500'
  };
  return (

    <div className="flex flex-col bg-white p-10 space-y-10 h-full -ml-10">
      <div className="bg-gradient-to-b from-cs-blue to-cs-purple text-white p-4 rounded-lg flex-1">
        <div className=" flex items-center justify-start">
          <div className=" p-6 rounded-lg shadow-lg max-w-md w-full">
            <form>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <span className="font-normal text-xl text-left pr-4 font-['Poppins']">Name         :</span>
                <div className="text-white">{data.name}</div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <span className="font-medium text-xl text-left pr-4 font-['Poppins']">Email        :</span>
                <div className="text-white">{data.email}</div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <span className="font-medium text-xl text-left pr-4 font-['Poppins']">Phone        :</span>
                <div className="text-white">{data.phone}</div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <span className="font-medium text-xl text-left pr-4 font-['Poppins']">Account Level:</span>
                <div className="text-white">{data.accountLevel}</div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <span className="font-medium text-xl text-left pr-4 font-['Poppins']">Rewards      :</span>
                <div className="text-white ">{data.rewards} Points</div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-cs-blue to-cs-purple text-white p-1 rounded-lg flex-1">
        <h2 className="text-xl font-semibold p-2 font-['Poppins']">History :</h2>

      </div>
    </div>
  );
};

export default Datadiri;
