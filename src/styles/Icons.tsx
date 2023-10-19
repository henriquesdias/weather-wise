import { TbCloudSearch } from "react-icons/tb";
import { BsThermometerHalf } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import rain from "../assets/rain.svg";
import clearNight from "../assets/clear-night.svg";
import fewCloudsNight from "../assets/few-clouds-night.svg";
import fewCloudDay from "../assets/few-clouds.svg";
import sunny from "../assets/sunny.svg";
import rainDay from "../assets/rain-day.svg";
import clouds from "../assets/clouds.svg";

type ClassnameIcons = {
  classname?: string;
  onClick?: () => void;
};
export function SearchIcon({ classname, onClick }: ClassnameIcons) {
  return (
    <div className={`${classname}`} onClick={onClick}>
      <TbCloudSearch />
    </div>
  );
}
export function ThermometerIcon({ classname }: ClassnameIcons) {
  return (
    <div className={`${classname}`}>
      <BsThermometerHalf />
    </div>
  );
}
export function LocationIcon({ classname }: ClassnameIcons) {
  return (
    <div className={`${classname}`}>
      <CiLocationOn />
    </div>
  );
}
type WeatherIconsDescription = {
  description: string;
};
export function WeatherIcon({ description }: WeatherIconsDescription) {
  const icons: any = {
    "01n": clearNight,
    "01d": sunny,
    "02n": fewCloudsNight,
    "02d": fewCloudDay,
    "10d": rainDay,
    "10n": rain,
    "04n": fewCloudsNight,
  };
  return (
    <img
      src={`${icons[description]}` || clouds}
      alt="weather-icon"
      className="w-16"
    />
  );
}
