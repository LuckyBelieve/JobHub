import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (endPoint, query) => {
  const [data, setData] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endPoint}`,
    headers: {
      "X-RapidAPI-Key": "d3b0063122msh67eaf2f86fde04dp1727d8jsn5ec8c2c70d9f",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      ...query,
    },
  };
  const FetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("there is an error");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);
  const reFetch = () => {
    setIsLoading(true);
    FetchData();
  };
  return { data, isloading, error, reFetch };
};
export default useFetch;
