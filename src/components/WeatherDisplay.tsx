import { useState } from "react";

import { SearchIcon } from "../styles/Icons";
import PrincipalWeather from "./PrincipalWeather";
import { getWeatherByCityName } from "../api/weatherAPI";
import { WeatherDataApi } from "../types";

export default function WeatherDisplay() {
  const [cityName, setCityName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [weatherData, setWeatherData] = useState<WeatherDataApi | null>(null);
  async function searchLocation() {
    if (cityName.trim() !== "") {
      try {
        const response = await getWeatherByCityName(cityName);
        if (response.ok) {
          const data = await response.json();
          setWeatherData({ ...data });
        } else {
          throw new Error("error");
        }
      } catch (error) {
        setError("City Not Found");
        alert(error);
      }
    }
  }
  return (
    <main className="flex flex-col items-center pt-5 px-5">
      <span className="text-[red]">{error}</span>
      <div className="flex text-[#524E4E] bg-[#D9D9D9] rounded-3xl h-10 gap-4 w-72 mb-4">
        <SearchIcon
          classname="text-3xl flex items-center justify-center pl-1"
          onClick={searchLocation}
        />
        <input
          type="text"
          name="location"
          placeholder="Search location..."
          onChange={(e) => setCityName(e.target.value)}
          className="outline-none bg-[#D9D9D9] rounded-3xl w-11/12 pl-1"
        />
      </div>
      <PrincipalWeather weatherData={weatherData} isLoading={false} />
    </main>
  );
}
