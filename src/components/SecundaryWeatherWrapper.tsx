import SecundaryWeather from "./SecundaryWeather";
import { LocationData } from "../types";

type SecundaryWeatherWrapperProps = {
  forecastData: LocationData[] | null;
};
export default function SecundaryWeatherWrapper({
  forecastData,
}: SecundaryWeatherWrapperProps) {
  return (
    <div className="flex my-4 gap-5 sm:w-[600px] w-full overflow-x-auto px-5">
      {forecastData?.map((e) => (
        <SecundaryWeather
          key={e.dt_txt}
          icon={e.weather[0].icon}
          temperature={e.main.temp}
          time={e.dt_txt.split(" ")[0]}
        />
      ))}
    </div>
  );
}
