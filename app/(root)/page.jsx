"use client";
import { UserButton } from "@clerk/nextjs";

import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "@/components/Card";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [bookmarkData, setBookmarkData] = useState([]);
  const { isLoaded, isSignedIn, user } = useUser();

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

  const onSignin = async () => {
    try {
      const addUser = {
        email: user.primaryEmailAddress.emailAddress,
        username: user.username,
        image: user.imageUrl,
      };

      const response = await axios.post("/api/users/addUser", addUser);
      console.log("Signin Sucess!", response.data);
      // console.log(addUser);
    } catch (error) {
      console.log("Signup went wrong!!!!", error.message);
    }
  };

  const getBookmark = async () => {
    try {
      // const email = { email: "onlyforsave1@gmail.com" };
      const email = { email: user.primaryEmailAddress.emailAddress };
      const response = await axios.post("/api/users/getBookmark", email);

      setBookmarkData(response.data.bookmarks);

      console.log("Bookmark fetch Sucess!", response.data);
    } catch (error) {
      console.log("Bookmark fetch failed!!!!", error.message);
    }
  };

  // useEffect(() => {
  //   getBookmark();
  // }, [isLoaded, isSignedIn]);

  useEffect(() => {
    const storedData = localStorage.getItem("trendingData");

    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      getTrendingData();
    }
  }, []);

  useEffect(() => {
    if (user && isSignedIn) {
      onSignin();
      getBookmark();
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("trendingData", JSON.stringify(data));
  }, [data]);
  useEffect(() => {
    localStorage.setItem("bookmarkData", JSON.stringify(bookmarkData));
  }, [bookmarkData]);

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      {/* <UserButton afterSignOutUrl="/" /> */}

      {/* <button onClick={() => console.log(user)}>user</button> */}
      {/* <button onClick={onSignin}>add user</button> */}
      <div className="grid grid-flow-row gap-4 grid-cols-1 md:grid-cols-2 w-11/12 md:w-3/4 mt-4">
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
              id={item.id}
            />
          ))}
      </div>
    </div>
  );
}
