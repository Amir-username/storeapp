import { useEffect } from "react";

export function useStore(query, setState, setError, setLoading, depends) {
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(query);
        const data = await res.json();
        setState(data);
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData()
  }, depends);
}
