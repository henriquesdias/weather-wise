import { TbCloudSearch } from "react-icons/tb";
import { BsThermometerHalf } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

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
