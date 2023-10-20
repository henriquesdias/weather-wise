import { WeatherIcon } from "../styles/Icons";
import SkeletonLoading from "./SkeletonLoading";

type SecundaryWeatherProps = {
  time: string;
  temperature: number;
  icon: string;
  isLoading: boolean;
  hour: string;
};

export default function SecundaryWeather({
  icon,
  time,
  temperature,
  isLoading,
  hour,
}: SecundaryWeatherProps) {
  const day = time.split("-")[2];
  const month = time.split("-")[1];
  return (
    <div className="w-28 h-28 rounded-2xl flex flex-col items-center justify-between drop-shadow-[4px_4px_rgba(0,0,0,0.1)] bg-gradient-to-t from-[#312e31] to-[#AC64C5]">
      <SkeletonLoading
        isLoading={isLoading}
        className="animate-pulse w-20 h-5 bg-slate-700 rounded-lg mt-2"
      >
        <div className="text-white">{`${day}/${month} ${hour.slice(
          0,
          5,
        )}`}</div>
      </SkeletonLoading>
      <SkeletonLoading
        isLoading={isLoading}
        className="animate-pulse w-20 h-5 bg-slate-700 rounded-lg"
      >
        <WeatherIcon description={icon} />
      </SkeletonLoading>
      <div className=" w-28 h-12 flex items-end justify-center rounded-t-3xl">
        <SkeletonLoading
          isLoading={isLoading}
          className="animate-pulse w-20 h-5 bg-slate-700 rounded-lg mb-2"
        >
          <span className="text-white">{temperature}&deg;C</span>
        </SkeletonLoading>
      </div>
    </div>
  );
}
