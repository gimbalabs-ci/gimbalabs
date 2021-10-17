import { useEffect, useState } from "react";

export default function useAPIById(id) {
  const [data, setData] = useState(null);

  const searchEndpoint = (query) => `/api/search?q=${query}`;

  const getData = (query) => {
    fetch(searchEndpoint(query))
      .then((res) => res.json())
      .then((res) => {
        if (res.results.length >= 1) {
          setData(res.results[0]);
        }
      });
  };

  useEffect(() => {
    getData(id);
  }, [id]);
  return data;
}
