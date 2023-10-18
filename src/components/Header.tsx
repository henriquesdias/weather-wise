import cloudImage from "../assets/cloud.svg";

export default function Header() {
  return (
    <header className="text-white flex items-center justify-between p-5 pt-10 relative">
      <img src={cloudImage} alt="cloud" className="w-12 fixed top-0 left-0" />
      <div>
        <h1 className="sm:text-5xl text-3xl">Weather Wise</h1>
      </div>
      <ul className="sm:flex sm:flex-row flex-col gap-5">
        <li className="cursor-pointer">Today</li>
        <li className="cursor-pointer ">My Locations</li>
      </ul>
    </header>
  );
}
