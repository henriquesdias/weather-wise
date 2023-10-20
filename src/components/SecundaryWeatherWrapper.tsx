import SecundaryWeather from "./SecundaryWeather";
import { LocationData } from "../types";

type SecundaryWeatherWrapperProps = {
  forecastData: LocationData[] | null;
  isLoading: boolean;
};
export default function SecundaryWeatherWrapper({
  forecastData,
  isLoading,
}: SecundaryWeatherWrapperProps) {
  return (
    <div className="flex my-4 gap-5 sm:w-[600px] w-full overflow-x-auto px-5">
      {forecastData?.map((e) => (
        <SecundaryWeather
          key={e.dt_txt}
          isLoading={isLoading}
          icon={e.weather[0].icon}
          temperature={e.main.temp}
          time={e.dt_txt.split(" ")[0]}
          hour={e.dt_txt.split(" ")[1]}
        />
      ))}
    </div>
  );
}
