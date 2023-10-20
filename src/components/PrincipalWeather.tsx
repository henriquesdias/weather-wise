import { Dispatch, SetStateAction } from "react";

import { ThermometerIcon, LocationIcon } from "../styles/Icons";
import { WeatherDataApi } from "../types";
import { WeatherIcon, HeartIcon, FillHeartIcon } from "../styles/Icons";
import SkeletonLoading from "./SkeletonLoading";
import { FavoritePlace } from "../types";

type PrincipalWeatherProps = {
  weatherData: WeatherDataApi | null;
  isLoading: boolean;
  handlePlaces: {
    favoritePlaces: FavoritePlace[];
    insertFavoritePlace: (cityName: string, cityId: number) => void;
    setFavoritePlaces: Dispatch<SetStateAction<FavoritePlace[]>>;
  };
};

export default function PrincipalWeather({
  weatherData,
  isLoading,
  handlePlaces,
}: PrincipalWeatherProps) {
  const data = new Date();
  function isAFavoritePlace() {
    const cityNames = localStorage.getItem("names");
    if (cityNames) {
      return JSON.parse(cityNames).find(
        (e: { name: string; id: number }) => e.name === weatherData?.name,
      );
    }
    return false;
  }
  return (
    <div className="sm:w-[530px] w-full h-72 bg-gradient-to-l from-[#333333] to-[#B167CB] rounded-xl sm:p-5 p-2 flex flex-col justify-between text-white sm:text-base text-xs relative">
      {!weatherData ? (
        <div>Search a location</div>
      ) : (
        <>
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={() => {
              const cityName = weatherData?.name;
              const cityId = weatherData?.id;
              if (cityName && cityId) {
                handlePlaces.insertFavoritePlace(cityName, cityId);
              }
            }}
          >
            {isAFavoritePlace() ? (
              <FillHeartIcon classname="text-2xl" />
            ) : (
              <HeartIcon classname="text-2xl" />
            )}
          </div>
          <div className="flex items-center gap-2">
            <SkeletonLoading
              className="animate-pulse w-20 h-5 bg-slate-700 rounded-lg"
              isLoading={isLoading}
            >
              <h1>
                {weatherData?.name} ({weatherData?.sys.country})
              </h1>
            </SkeletonLoading>
            <LocationIcon classname="text-2xl" />
          </div>
          <SkeletonLoading
            isLoading={isLoading}
            className="animate-pulse w-20 h-5 bg-slate-700 rounded-lg mx-auto"
          >
            <div className="flex items-center justify-center text-3xl">
              <ThermometerIcon />
              <span className="flex items-center">
                {weatherData?.main.temp}&deg;C
                {weatherData?.weather[0].icon && (
                  <WeatherIcon description={weatherData?.weather[0].icon} />
                )}
              </span>
            </div>
          </SkeletonLoading>
          <SkeletonLoading
            isLoading={isLoading}
            className="animate-pulse w-20 h-5 bg-slate-700 rounded-lg"
          >
            <span className="underline">{data.toDateString()}</span>
          </SkeletonLoading>
          <div className="flex justify-between">
            <SkeletonLoading
              isLoading={isLoading}
              className="animate-pulse w-20 h-5 bg-slate-700 rounded-lg mx-auto"
            >
              <div className="flex flex-col">
                <span>HUMIDITY</span>
                <span>{weatherData?.main.humidity}%</span>
              </div>
            </SkeletonLoading>
            <SkeletonLoading
              isLoading={isLoading}
              className="animate-pulse w-20 h-5 bg-slate-700 rounded-lg mx-auto"
            >
              <div className="flex flex-col">
                <span>VISIBLITY</span>
                <span>
                  {weatherData?.visibility && weatherData.visibility / 1000}km
                </span>
              </div>
            </SkeletonLoading>
            <SkeletonLoading
              isLoading={isLoading}
              className="animate-pulse w-20 h-5 bg-slate-700 rounded-lg mx-auto"
            >
              <div className="flex flex-col">
                <span>AIR PRESSURE</span>
                <span>{weatherData?.main.pressure}hPa</span>
              </div>
            </SkeletonLoading>
            <SkeletonLoading
              isLoading={isLoading}
              className="animate-pulse w-20 h-5 bg-slate-700 rounded-lg mx-auto"
            >
              <div className="flex flex-col">
                <span>WIND</span>
                <span>{weatherData?.wind.speed}m/s</span>
              </div>
            </SkeletonLoading>
          </div>
        </>
      )}
    </div>
  );
}
