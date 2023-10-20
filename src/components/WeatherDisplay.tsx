import { useEffect, useState, Dispatch, SetStateAction } from "react";

import { SearchIcon } from "../styles/Icons";
import PrincipalWeather from "./PrincipalWeather";
import SecundaryWeatherWrapper from "./SecundaryWeatherWrapper";
import useSearchLocation from "../hooks/useSearchLocation";
import useSearchForecast from "../hooks/useSearchForecast";
import { FavoritePlace } from "../types";
import { removeEmptySpaces } from "../utils";

type WeatherDisplayProps = {
  search: string;
  handlePlaces: {
    favoritePlaces: FavoritePlace[];
    insertFavoritePlace: (cityName: string, cityId: number) => void;
    setFavoritePlaces: Dispatch<SetStateAction<FavoritePlace[]>>;
  };
};

export default function WeatherDisplay({
  search,
  handlePlaces,
}: WeatherDisplayProps) {
  const { error, isLoading, searchLocation, weatherData } = useSearchLocation();
  const {
    isLoading: isLoadingForecast,
    searchForecast,
    forecastData,
  } = useSearchForecast();
  const [cityName, setCityName] = useState<string>("");
  useEffect(() => {
    if (search.trim() === "") return;
    searchLocation(search);
    searchForecast(search);
    setCityName(search.trim());
  }, [search]);
  return (
    <main className="flex flex-col items-center px-5">
      <span className="text-[red] w-44 h-6 text-center">{error}</span>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchLocation(removeEmptySpaces(cityName));
          searchForecast(removeEmptySpaces(cityName));
          setCityName(removeEmptySpaces(cityName));
        }}
        className="flex text-[#524E4E] bg-[#D9D9D9] rounded-3xl h-10 gap-4 w-72 mb-4"
      >
        <SearchIcon
          classname="text-3xl flex items-center justify-center pl-1"
          onClick={() => {
            searchLocation(removeEmptySpaces(cityName));
            searchForecast(removeEmptySpaces(cityName));
          }}
        />
        <input
          type="text"
          name="location"
          placeholder="Search location..."
          value={cityName}
          disabled={isLoading && isLoadingForecast}
          autoComplete="off"
          onChange={(e) => setCityName(e.target.value)}
          className="outline-none bg-[#D9D9D9] rounded-3xl w-11/12 pl-1 focus:bg-[#D9D9D9] disabled:opacity-50"
        />
      </form>
      <PrincipalWeather
        weatherData={weatherData}
        isLoading={isLoading}
        handlePlaces={handlePlaces}
      />
      <SecundaryWeatherWrapper
        forecastData={forecastData}
        isLoading={isLoadingForecast}
      />
    </main>
  );
}
