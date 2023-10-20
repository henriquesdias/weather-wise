const BASE_URL = "https://api.openweathermap.org/data/2.5/";

export async function getWeatherByCityName(cityName: string) {
  const URL = `${BASE_URL}weather?q=${cityName}&appid=${
    import.meta.env.VITE_API_KEY
  }&units=metric&lang=pt_br`;
  return fetch(URL, {
    method: "GET",
  });
}
export async function getForecastByCityName(cityName: string) {
  const URL = `${BASE_URL}forecast?q=${cityName}&appid=${
    import.meta.env.VITE_API_KEY
  }&units=metric&lang=pt_br`;
  return fetch(URL, {
    method: "GET",
  });
}
export async function getWeatherByCoordinates(
  latitude: number,
  longitude: number,
) {
  const URL = `${BASE_URL}weather?lat=${latitude}&lon=${longitude}&appid=${
    import.meta.env.VITE_API_KEY
  }&units=metric&lang=pt_br`;
  return fetch(URL, {
    method: "GET",
  });
}
