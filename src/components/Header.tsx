import { useState, Dispatch, SetStateAction } from "react";

import cloudImage from "../assets/cloud.svg";
import { TrashIcon } from "../styles/Icons";
import { FavoritePlace } from "../types";

type HeaderProps = {
  setSearch: Dispatch<SetStateAction<string>>;
  handlePlaces: {
    favoritePlaces: FavoritePlace[];
    insertFavoritePlace: (cityName: string, cityId: number) => void;
    setFavoritePlaces: Dispatch<SetStateAction<FavoritePlace[]>>;
  };
};

export default function Header({ setSearch, handlePlaces }: HeaderProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  function deleteFavoritePlace(id: number) {
    const favoriteLocations = localStorage.getItem("names");
    if (favoriteLocations) {
      const favoriteLocationsParsed = JSON.parse(favoriteLocations);
      localStorage.setItem(
        "names",
        JSON.stringify(
          favoriteLocationsParsed.filter((location: any) => location.id !== id),
        ),
      );
    }
    handlePlaces.setFavoritePlaces((places) => {
      return places.filter((e) => e.id !== id);
    });
  }
  return (
    <header className="text-white flex items-center justify-between p-5 pt-10 relative">
      <div
        className={`${
          showModal ? "flex" : "hidden"
        } ${"fixed top-0 left-0 bg-[rgba(0,0,0,0.5)] h-screen w-screen z-10 items-center justify-center"}`}
        onClick={() => {
          setShowModal(false);
        }}
      >
        <div
          className="flex flex-col items-center bg-[#D9D9D9] max-h-48 w-64 rounded-lg text-black overflow-y-auto"
          onClick={(event) => event.stopPropagation()}
        >
          <span className="font-bold mt-2">Favorite Places</span>
          {handlePlaces.favoritePlaces.length === 0 && "Empty"}
          {handlePlaces.favoritePlaces.map((info, index) => (
            <span
              className="flex items-center justify-between p-2 gap-2 w-full"
              key={index}
            >
              <span
                className="cursor-pointer hover:opacity-50 text-ellipsis overflow-x-hidden max-w-[20ch] whitespace-nowrap"
                onClick={() => {
                  setSearch(info.name);
                  setShowModal(false);
                }}
              >
                {info.name}
              </span>
              <span
                className="cursor-pointer"
                onClick={() => deleteFavoritePlace(info.id)}
              >
                <TrashIcon />
              </span>
            </span>
          ))}
        </div>
      </div>
      <img src={cloudImage} alt="cloud" className="w-12 fixed top-0 left-0" />
      <div>
        <h1 className="sm:text-5xl text-3xl">Weather Wise</h1>
      </div>
      <ul className="sm:flex sm:flex-row flex-col gap-5">
        <li className="cursor-pointer relative inline-block group">
          <span onClick={() => setShowModal(true)}>My Locations</span>
        </li>
      </ul>
    </header>
  );
}
