import type { StorageKeys } from './StorageKeys';

class LocalStorageHelper {
  static get(key: StorageKeys) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }

  static set<T>(key: StorageKeys, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static clear(): void {
    localStorage.clear();
  }
}

export default LocalStorageHelper;
