import { UserData } from "@/types";
import React, { useEffect, useState } from "react";


interface Props {
  data?: UserData[];
}

const withDataFetching = (WrappedComponent: React.ComponentType<Props>) => {
  const ComponentWithData = () => {
    const [data, setData] = useState<UserData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/users");
          const json = await res.json();
          setData(json);
        } catch (err) {
          console.error("Fetch failed", err);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;

    return <WrappedComponent data={data} />;
  };

  return ComponentWithData;
};

export default withDataFetching;
