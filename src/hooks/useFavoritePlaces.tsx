import { useState } from "react";

type FavoritePlace = {
  name: string;
  id: number;
};

export default function useFavoritePlaces() {
  const [favoritePlaces, setFavoritePlaces] = useState<FavoritePlace[]>(() => {
    const places = localStorage.getItem("names");
    if (places) {
      return JSON.parse(places);
    }
    return [];
  });
  function insertFavoritePlace(cityName: string, cityId: number) {
    if (!cityName || !cityId) {
      return;
    }
    const cityNameAndId = localStorage.getItem("names") || "[]";
    const cityNameAndIdParsed = JSON.parse(cityNameAndId);
    if (cityNameAndIdParsed.find((e: any) => e.name === cityName)) return;
    cityNameAndIdParsed.push({ name: cityName, id: cityId });
    localStorage.setItem("names", JSON.stringify(cityNameAndIdParsed));
    setFavoritePlaces((values) => [...values, { name: cityName, id: cityId }]);
  }
  return { favoritePlaces, setFavoritePlaces, insertFavoritePlace };
}
