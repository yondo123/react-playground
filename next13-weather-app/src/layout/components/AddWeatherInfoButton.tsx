'use client';

import Storage from '../../shared/data/storage';
import WeatherStorageMapper from '../../domain/weather/StorageMapper';
import type { Forecast } from '../../domain/weather/types';

const storage = new Storage('WEATHER', new WeatherStorageMapper());

interface AddWeatherInfoButtonProps {
  forecast: Forecast;
}

export const AddWeatherInfoButton = ({ forecast }: AddWeatherInfoButtonProps) => {
  const addWeatherInfo = () => {
    storage.set(forecast);
  };
  return (
    <button type="button" onClick={addWeatherInfo}>
      스토리지에 추가
    </button>
  );
};
