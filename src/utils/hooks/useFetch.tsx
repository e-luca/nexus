import { useCallback, useEffect, useState } from 'react';
import { FetchOptions } from '../../models/fetchOptions';

export function useFetch<T>(url: string, options?: FetchOptions) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP Error! Response status: ${response.status}`);
      }

      const result = (await response.json()) as T;
      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
    error,
    loading,
    refetch: fetchData,
  };
}
