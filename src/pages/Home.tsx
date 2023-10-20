import { useState } from "react";

import Header from "../components/Header";
import WeatherDisplay from "../components/WeatherDisplay";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  return (
    <div className="bg-principalBackground min-h-screen">
      <Header setSearch={setSearch} />
      <WeatherDisplay search={search} />
    </div>
  );
}
