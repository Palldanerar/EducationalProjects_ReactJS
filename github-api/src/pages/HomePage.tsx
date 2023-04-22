import React from "react";
import { useSearchUsersQuery } from "../store/github/github.api";

const HomePage = () => {
  const { data } = useSearchUsersQuery("palldanerar");
  console.log(data);
  return <div>HomePage</div>;
};

export default HomePage;
