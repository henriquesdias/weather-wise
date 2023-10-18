const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export async function getWeatherByCityName(cityName: string) {
  const URL = `${BASE_URL}?q=${cityName}&appid=${
    import.meta.env.VITE_API_KEY
  }&units=metric&lang=pt_br`;
  return fetch(URL, {
    method: "GET",
  });
}
