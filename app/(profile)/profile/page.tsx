import React from "react";
import Datadiri from "../prophile/datadiri/page";
import Profile from "../prophile/profil/page";
import { noProfileLogo } from '@/app/components/loadimages';
// "/images/prof.jpeg"

const ProfilPage = async () => {
  return (
    <div className="flex">
      <div className="container mx-auto h-full">
        <div className="flex my-10 gap-10 w-full">
          <div className="w-1/4 flex flex-col">
            <Profile />
          </div>
          <div className="w-3/4 flex flex-col">
            <Datadiri />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilPage