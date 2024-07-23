import React from "react";
import Datadiri from "../components/prophile/datadiri/page";
import Profile from "../components/prophile/profil/page";

export default function Home() {
  return (
    <div className="flex h-screen bg-white">
      <div className="w-100  p-10 flex flex-col">
        <Profile />
      </div>
      <div className="w-3/4 p-3 flex flex-col">
        <Datadiri />
      </div>
    </div>
  );
}