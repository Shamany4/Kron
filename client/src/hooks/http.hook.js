import {useCallback, useState} from "react";


export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method  = 'POST', body = null, headers = {}) => {
    setLoading(true);

    if (body) {
      body = JSON.stringify(body);
      headers['Content-Type'] = 'application/json'
    }

    try {
      let response = await fetch(url, {method, body, headers});
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так');
      }
      setLoading(false);
      return data;
    }

    catch (e) {
      setLoading(false);
      setError(e.message)
      throw e;
    }

  }, []);

  const clearError = () => setError(null);

  return { loading, request, error, clearError }
}