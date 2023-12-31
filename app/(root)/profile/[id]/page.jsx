"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import BookmarkTable from "@/components/BookmatkTable";

export default function UserProfile({ params }) {
  const { isLoaded, isSignedIn, user } = useUser();

  const [bookmarkData, setBookmarkData] = useState([]);

  // useEffect(() => {
  //   getBookmark();
  // }, [isLoaded, isSignedIn]);

  const getBookmark = async () => {
    try {
      // const email = { email: "onlyforsave1@gmail.com" };
      // const response = await axios.post("/api/users/getBookmark", email);

      // setBookmarkData(response.data);
      let bookmarks = localStorage.getItem("bookmarkData");

      setBookmarkData(bookmarks);

      console.log("Bookmark fetch Sucess!", bookmarks);
    } catch (error) {
      console.log("Bookmark fetch failed!!!!", error.message);
    }
  };

  // const dummydata = [
  //   {
  //     title: "godotengine/godot",
  //     stars: "63.7k",
  //     forks: "13.3k",
  //     openIssues: "10.1k",
  //   },
  //   {
  //     title: "sindresorhus/awesome",
  //     stars: "266.7k",
  //     forks: "26.4k",
  //     openIssues: "61",
  //   },
  //   {
  //     title: "EbookFoundation/free-programming-books",
  //     stars: "296.4k",
  //     forks: "57.0k",
  //     openIssues: "48",
  //   },
  //   {
  //     title: "public-apis/public-apis",
  //     stars: "252.9k",
  //     forks: "29.0k",
  //     openIssues: "183",
  //   },
  // ];

  return (
    <div className="flex flex-col justify-center items-center">
      {isLoaded && isSignedIn ? (
        <span className="mt-10 ">
          <Image
            src={user.imageUrl}
            alt={params.id}
            width={100}
            height={100}
            className="rounded-full"
          />
          <h1 className="my-4 ">
            Hello <b className="text-lg">{user.username}</b>
          </h1>
          {/* <h1>Profile Page {params.id}</h1>
          <button onClick={() => console.log(params)}>param</button>
          <button onClick={() => console.log(user)}>user</button> */}
          <br />
        </span>
      ) : null}
      <button onClick={getBookmark}>bookmarks</button>
      {/* {isLoaded && isSignedIn && (
        <div className="mt-4 w-full md:w-11/12 ">
          <BookmarkTable />
        </div>
      )} */}
    </div>
  );
}
