import type { StorageMapper } from '../../shared/data/StorageMapper';
import type { Forecast } from './types';

class WeatherStorageMapper implements StorageMapper<Forecast> {
  fromJson(json: Forecast): Forecast {
    return json;
  }

  toJson(item: Forecast): Forecast {
    return item;
  }
}

export default WeatherStorageMapper;
