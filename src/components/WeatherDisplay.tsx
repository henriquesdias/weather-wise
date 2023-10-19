import { useEffect, useState } from "react";

import { SearchIcon } from "../styles/Icons";
import PrincipalWeather from "./PrincipalWeather";
import { getWeatherByCityName, getForecastByCityName } from "../api/weatherAPI";
import { WeatherDataApi, LocationData } from "../types";
import SecundaryWeatherWrapper from "./SecundaryWeatherWrapper";
import { selectItems } from "../utils";

type WeatherDisplayProps = {
  search: string;
};

export default function WeatherDisplay({ search }: WeatherDisplayProps) {
  const [cityName, setCityName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherDataApi | null>(null);
  const [forecastData, setForecastData] = useState<LocationData[] | null>(null);
  useEffect(() => {
    if (search.trim() === "") return;
    searchLocation(search);
    searchForecast(search);
    setCityName(search);
  }, [search]);
  async function searchLocation(name: string) {
    if (name.trim() === "") {
      return;
    }
    try {
      const response = await getWeatherByCityName(name);
      if (response.ok) {
        const data = await response.json();
        setWeatherData({ ...data });
        setError(null);
      } else {
        throw new Error("error");
      }
    } catch (error) {
      setError("City Not Found");
    }
  }
  async function searchForecast(name: string) {
    if (name.trim() === "") {
      return;
    }
    try {
      const response = await getForecastByCityName(name);
      if (response.ok) {
        const { list } = await response.json();
        setForecastData(() => [...selectItems(list)]);
      } else {
        throw new Error("error");
      }
    } catch (error) {
      setError("City Not Found");
    }
  }
  return (
    <main className="flex flex-col items-center pt-5 px-5">
      <span className="text-[red]">{error}</span>
      <div className="flex text-[#524E4E] bg-[#D9D9D9] rounded-3xl h-10 gap-4 w-72 mb-4">
        <SearchIcon
          classname="text-3xl flex items-center justify-center pl-1"
          onClick={() => {
            searchLocation(cityName);
            searchForecast(cityName);
          }}
        />
        <input
          type="text"
          name="location"
          placeholder="Search location..."
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          className="outline-none bg-[#D9D9D9] rounded-3xl w-11/12 pl-1"
        />
      </div>
      <PrincipalWeather weatherData={weatherData} isLoading={false} />
      <SecundaryWeatherWrapper forecastData={forecastData} />
    </main>
  );
}
