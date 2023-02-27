import React, { useEffect } from "react";
import Feed from "components/Feed";

import { getAllFeeds } from "../api";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const { data } = useQuery(["feed"], getAllFeeds);
  // console.log(data);

  return (
    <>
      {data?.map((feed) => (
        <Feed key={feed.id} {...feed} />
      ))}
    </>
  );
}

export default Home;
