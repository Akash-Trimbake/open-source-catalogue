"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import BookmarkTable from "@/components/BookmatkTable";

export default function UserProfile({ params }) {
  const { isLoaded, isSignedIn, user } = useUser();

  // useEffect(() => {
  //   if (isLoaded && isSignedIn) {
  //     getBookmark();
  //   }
  // }, [isLoaded, isSignedIn]);

  const [data, setData] = useState([]);

  const getBookmark = async () => {
    try {
      const email = { email: "onlyforsave1@gmail.com" };
      const response = await axios.post("/api/users/getBookmark", email);
      localStorage.setItem("bookmarkData", JSON.stringify(response));

      console.log("Bookmark fetch Sucess!", response.data);
      setData(response.data);
    } catch (error) {
      console.log("Bookmark fetch failed!!!!", error.message);
    }
  };

  const dummydata = [
    {
      title: "godotengine/godot",
      stars: "63.7k",
      forks: "13.3k",
      openIssues: "10.1k",
    },
    {
      title: "sindresorhus/awesome",
      stars: "266.7k",
      forks: "26.4k",
      openIssues: "61",
    },
    {
      title: "EbookFoundation/free-programming-books",
      stars: "296.4k",
      forks: "57.0k",
      openIssues: "48",
    },
    {
      title: "public-apis/public-apis",
      stars: "252.9k",
      forks: "29.0k",
      openIssues: "183",
    },
  ];

  return (
    <div>
      {isLoaded && isSignedIn ? (
        <span className="mt-10">
          <Image
            src={user.imageUrl}
            alt={params.id}
            width={75}
            height={75}
            className="rounded-full"
          />
          <h1>Hello {user.username}</h1>
          <h1>Profile Page {params.id}</h1>
          <button onClick={() => console.log(params)}>param</button>
          <br />
        </span>
      ) : null}
      <button onClick={getBookmark}>bookmarks</button>
      <div className="mt-20">
        {isLoaded && isSignedIn && (
          <BookmarkTable
          // data={data}
          // dummydata={dummydata.map((item) => ({ ...item, id: item._id }))}
          // data={data.map((item) => ({ ...item, id: item._id }))}
          />
        )}
      </div>
    </div>
  );
}
