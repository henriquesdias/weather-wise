import { WeatherIcon } from "../styles/Icons";

type SecundaryWeatherProps = {
  time: string;
  temperature: number;
  icon: string;
};

export default function SecundaryWeather({
  icon,
  time,
  temperature,
}: SecundaryWeatherProps) {
  const day = time.split("-")[2];
  const month = time.split("-")[1];
  return (
    <div className="w-28 h-28 rounded-2xl flex flex-col items-center justify-between drop-shadow-[4px_4px_rgba(0,0,0,0.1)] bg-gradient-to-t from-[#312e31] to-[#AC64C5]">
      <div className="text-white">{`${day}/${month}`}</div>
      <WeatherIcon description={icon} />
      <div className=" w-28 h-12 flex items-end justify-center rounded-t-3xl">
        <span className="text-white">{temperature}&deg;</span>
      </div>
    </div>
  );
}
