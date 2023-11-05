import LocalStorageHelper from './LocalStorageHelper';
import type { StorageMapper } from './StorageMapper';
import type { StorageKeys } from './StorageKeys';

class Storage<T> {
  private key: StorageKeys;

  private mapper: StorageMapper<T>;

  constructor(key: StorageKeys, mapper: StorageMapper<T>) {
    this.key = key;
    this.mapper = mapper;
  }

  static clear() {
    LocalStorageHelper.clear();
  }

  get(): T {
    return this.mapper.fromJson(LocalStorageHelper.get(this.key));
  }

  set(target: T) {
    LocalStorageHelper.set<T>(this.key, this.mapper.toJson(target));
  }
}

export default Storage;
