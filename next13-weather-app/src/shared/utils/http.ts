const { BASE_URL } = process.env;

interface FetchOptions {
  url: string;
  baseUrl?: string;
  cacheTime?: number;
}

export const get = async <T>({ baseUrl = BASE_URL, url, cacheTime }: FetchOptions): Promise<T> => {
  const requestUrl = `${baseUrl}${url}`;
  const response = await fetch(requestUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    next: {
      revalidate: cacheTime
    }
  });
  const result = await response.json();
  if (result.error || !response.ok) {
    throw new Error(result.error?.message ?? '오류가 발생하였습니다.');
  }
  return result;
};
