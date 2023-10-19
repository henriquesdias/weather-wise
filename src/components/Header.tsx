import { useState } from "react";

import cloudImage from "../assets/cloud.svg";

type Headerprops = {
  setSearch: (newSearch: any) => void;
};

export default function Header({ setSearch }: Headerprops) {
  const [favoritesLocations, setFavoritesLocations] = useState<string[]>(
    JSON.parse(localStorage.getItem("names") || "[]"),
  );
  return (
    <header className="text-white flex items-center justify-between p-5 pt-10 relative">
      <img src={cloudImage} alt="cloud" className="w-12 fixed top-0 left-0" />
      <div>
        <h1 className="sm:text-5xl text-3xl">Weather Wise</h1>
      </div>
      <ul className="sm:flex sm:flex-row flex-col gap-5">
        <li className="cursor-pointer">Today</li>
        <li className="cursor-pointer relative inline-block group">
          <span>My Locations</span>
          <div className="hidden absolute group-hover:flex flex-col">
            {favoritesLocations.map((name, index) => (
              <span
                key={index}
                className="bg-[#A560BD] p-1 text-center mb-1 hover:text-black"
                onClick={() => setSearch(name)}
              >
                {name}
              </span>
            ))}
          </div>
        </li>
      </ul>
    </header>
  );
}
