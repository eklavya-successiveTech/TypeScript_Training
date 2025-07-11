// components/HocData.tsx
import React from "react";
import withDataFetching from "../hoc/withDataFetching";
import { UserData } from "@/types";

interface Props {
  data?: UserData[];
}

const HocData = ({ data = [] }: Props) => {
  return (
    <>
      {data.map((item, index) => (
        <ul key={index}>
          <li>{item.name}</li>
        </ul>
      ))}
    </>
  );
};

export default withDataFetching(HocData);
