import { ThermometerIcon, LocationIcon } from "../styles/Icons";
import { WeatherDataApi } from "../types";

type PrincipalWeatherProps = {
  weatherData: WeatherDataApi | null;
  isLoading: boolean;
};

export default function PrincipalWeather({
  weatherData,
}: PrincipalWeatherProps) {
  const data = new Date();
  return (
    <div className="sm:w-[530px] w-full h-72 bg-gradient-to-l from-[#333333] to-[#B167CB] rounded-xl sm:p-5 p-2 flex flex-col justify-between text-white sm:text-base text-xs">
      <div className="flex items-center gap-2">
        <h1>{weatherData?.name}</h1>
        <LocationIcon classname="text-2xl" />
      </div>
      <div className="flex items-center justify-center text-4xl">
        <ThermometerIcon />
        <span>{weatherData?.main.temp}&deg;C</span>
      </div>
      <span className="underline">{data.toDateString()}</span>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span>HUMIDITY</span>
          <span>{weatherData?.main.humidity}%</span>
        </div>
        <div className="flex flex-col">
          <span>VISIBLITY</span>
          <span>
            {weatherData?.visibility && weatherData.visibility / 1000}km
          </span>
        </div>
        <div className="flex flex-col">
          <span>AIR PRESSURE</span>
          <span>{weatherData?.main.pressure}hPa</span>
        </div>
        <div className="flex flex-col">
          <span>WIND</span>
          <span>{weatherData?.wind.speed}m/s</span>
        </div>
      </div>
    </div>
  );
}
