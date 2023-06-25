import axios from "axios";
import React, { useEffect, useState } from "react";

const SuperHeroPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:4000/Supermans")
      .then((response) => setData(response.data))
      .catch((err) => setError(err));
  }, []);

  console.log(data);

  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      {
        <>
          {data ? (
            data.map((item) => <div key={item.id}>{item.name}</div>)
          ) : (
            <div>Loading.....</div>
          )}
        </>
      }
    </div>
  );
};

export default SuperHeroPage;
