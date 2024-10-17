import { useEffect, useState } from "react";

const useFetchingData = (url: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, { signal });
        const result = await response.json();

        if (!signal.aborted && result) setData(result);
      } catch (error) {
        if (!signal.aborted) setError(error as Error);
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return { data, error, loading };
};

export { useFetchingData };
