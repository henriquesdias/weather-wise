import Header from "../components/Header";
import WeatherDisplay from "../components/WeatherDisplay";

export default function Home() {
  return (
    <div className="bg-principalBackground min-h-screen">
      <Header />
      <WeatherDisplay />
    </div>
  );
}
