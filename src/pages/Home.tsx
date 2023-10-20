import { useState } from "react";

import Header from "../components/Header";
import WeatherDisplay from "../components/WeatherDisplay";
import useFavoritePlaces from "../hooks/useFavoritePlaces";

export default function Home() {
  const { favoritePlaces, insertFavoritePlace, setFavoritePlaces } =
    useFavoritePlaces();
  const handlePlaces = {
    favoritePlaces,
    insertFavoritePlace,
    setFavoritePlaces,
  };
  const [search, setSearch] = useState<string>("");
  return (
    <div className="bg-principalBackground min-h-screen">
      <Header setSearch={setSearch} handlePlaces={handlePlaces} />
      <WeatherDisplay search={search} handlePlaces={handlePlaces} />
    </div>
  );
}
