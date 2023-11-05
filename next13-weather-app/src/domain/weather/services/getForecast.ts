import { get } from '../../../shared/utils/http';
import type { ForecastWeather, Country } from '../types';

export const getForecast = async (country: Country) => {
  const forecast = await get<ForecastWeather>({
    url: `forecast.json?key=689183bd5c444749ae491337233010&q=${country}&days=3&aqi=no&alerts=no`
  });
  return forecast;
};
