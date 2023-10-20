import { useState } from "react";

import { LocationData } from "../types";
import { getForecastByCityName } from "../api/weatherAPI";
import { selectItems } from "../utils";

export default function useSearchForecast() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [forecastData, setForecastData] = useState<LocationData[] | null>(null);
  const [error, setError] = useState<string>("");
  async function searchForecast(name: string) {
    if (name.trim() === "") {
      return;
    }
    try {
      setError("");
      setIsLoading(false);
      const response = await getForecastByCityName(name);
      if (response.ok) {
        const { list } = await response.json();
        setForecastData(() => [...selectItems(list)]);
        setIsLoading(true);
      } else {
        throw new Error("error");
      }
    } catch (error) {
      setError("City Not Found");
      setIsLoading(false);
    }
  }
  return { isLoading, forecastData, error, searchForecast };
}
