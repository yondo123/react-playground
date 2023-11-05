import { get } from '../../../shared/utils/http';
import type { Weather, Country } from '../types';

export const getCurrentWeather = async (country: Country) => {
  const weather = await get<Weather>({
    url: `current.json?key=689183bd5c444749ae491337233010&q=${country}&aqi=no`
  });
  return weather;
};
