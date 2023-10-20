import { useState } from "react";

import { WeatherDataApi } from "../types";
import { getWeatherByCityName } from "../api/weatherAPI";

export default function useSearchLocation() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherDataApi | null>(null);
  const [error, setError] = useState<string>("");
  async function searchLocation(name: string) {
    if (name.trim() === "") {
      return;
    }
    try {
      setError("");
      setIsLoading(true);
      const response = await getWeatherByCityName(name);
      if (response.ok) {
        const data = await response.json();
        setWeatherData({ ...data });
        setIsLoading(false);
      } else {
        throw new Error(`${response.status}`);
      }
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === "404") setError("Location Not Found");
        if (error.message !== "404") setError("Problem with the search");
      }
      setIsLoading(false);
    }
  }
  return { isLoading, weatherData, error, searchLocation, setWeatherData };
}
