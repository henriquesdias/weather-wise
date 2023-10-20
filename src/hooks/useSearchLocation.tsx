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
        throw new Error("City Not Found");
      }
    } catch (error) {
      setError("Location Not Found");
      setIsLoading(false);
    }
  }
  return { isLoading, weatherData, error, searchLocation, setWeatherData };
}
