export interface StorageMapper<T> {
  fromJson(json: unknown): T;
  toJson(item: T): T;
}
