export type WeatherDataApi = {
  base: string;
  cod: number;
  dt: number;
  id: number;
  name: string;
  timezone: number;
  visibility: number;
  clouds: {
    all: number;
  };
  coord: {
    lon: number;
    lat: number;
  };
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  wind: {
    speed: number;
    deg: number;
  };
};
