"use client";
import { UserButton } from "@clerk/nextjs";

import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "@/components/Card";

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function formatNumberToK(number) {
    if (number >= 1000) {
      const suffixes = ["", "k", "M", "B", "T"]; // Add more suffixes as needed
      const magnitude = Math.floor(Math.log10(number) / 3);
      const scaledNumber = number / Math.pow(1000, magnitude);
      return `${scaledNumber.toFixed(1)}${suffixes[magnitude]}`;
    }
    return number.toString();
  }

  const getTrendingData = async () => {
    try {
      const response = await axios.get("/api/users/trending");
      console.log(response.data);

      if (response.data.items.length % 2 === 1) {
        setData([response.data.items.pop()]);
      } else {
        setData(response.data.items);
      }

      setIsLoading(false); // Set loading to false after data is fetched
    } catch (error) {
      console.log("Error at home client:", error);
      setIsLoading(false); // Set loading to false even if there's an error
    }
  };

  useEffect(() => {
    const storedData = localStorage.getItem("trendingData");

    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      getTrendingData();
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("trendingData", JSON.stringify(data));
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      {/* <UserButton afterSignOutUrl="/" /> */}

      {/* <button onClick={getTrendingData}>test</button> */}
      <div className="grid grid-flow-row gap-4 grid-cols-1 md:grid-cols-2 w-3/4">
        {data &&
          data.map((item) => (
            <Card
              key={item.name}
              full_name={item.full_name}
              name={item.name}
              homepage={item.homepage}
              git_url={item.svn_url}
              topics={item.topics}
              stars={formatNumberToK(item.stargazers_count)}
              owner={item.owner.login}
              img={item.owner.avatar_url}
              forks={formatNumberToK(item.forks_count)}
              openIssues={formatNumberToK(item.open_issues_count)}
              description={item.description}
            />
          ))}
      </div>
    </div>
  );
}
