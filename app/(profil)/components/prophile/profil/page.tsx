import Image from 'next/image';
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="relative bg-gradient-to-b from-cs-blue to-cs-purple p-6 h-full shadow-lg rounded-lg flex flex-col items-center">
      <div className="relative box-sizing-border">
        <div className='relative'>
          <img
            src="/images/prof.jpeg"
            alt="Profile Picture"
            className="w-60 h-60 rounded-full object-cover "
          />
          <div className="absolute right-0 bottom-3 bg-white p-2 rounded-full shadow-lg w-fit">
            <FaCamera className="text-gray-800 cursor-pointer" size={30} />
          </div>
        </div>
        <h2 className="text-4xl font-semibold text-white text-center mt-5 font-['Poppins'] ">Zulfan</h2>
        <div className="rounded-[20px] bg-[#D6D4D4] absolute left-[50%]  translate-x-[-50%] flex p-[0_28px_0_0] w-[210px] h-[39px]  mt-20">
          <div className="rounded-[20px]  bg-[linear-gradient(90deg,rgba(39,75,116,0.5),rgba(130,51,197,0.5))] w-[282px] h-[39px] ">
          </div>
        </div>
        <span className="absolute left-[30px]  break-words font-['Poppins'] font-bold text-[22px] text-white mt-20">
          Lv 899
        </span>
      </div>
    </div>
  );
};

export default Profile;


