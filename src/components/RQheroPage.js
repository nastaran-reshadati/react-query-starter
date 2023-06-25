import axios from "axios";
import React from "react";
import { useQuery } from "react-query";

const fetchDatas = () => {
  return axios.get("http://localhost:4000/Supermans");
};

const RQheroPage = () => {
  const { data, isLoading, error, isError } = useQuery(
    "super-heroes",
    fetchDatas,
    {
      cacheTime: 5000,
    }
  );

  console.log(data);

  if (isLoading) {
    return <h3>Loading....</h3>;
  }

  if (isError) {
    return <h3>{error.message}</h3>;
  }
  return (
    <>
      <div>{data && data.data.map((item) => <div>{item.name}</div>)}</div>
    </>
  );
};

export default RQheroPage;
