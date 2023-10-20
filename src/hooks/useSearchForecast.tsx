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
      setIsLoading(true);
      const response = await getForecastByCityName(name);
      if (response.ok) {
        const { list } = await response.json();
        setForecastData(() => [...selectItems(list)]);
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
  return { isLoading, forecastData, error, searchForecast };
}
