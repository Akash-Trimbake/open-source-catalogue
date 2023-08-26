"use client";

import React, { useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

export default function Feed() {
  const [data, setData] = useState([]);
  const [bookmark, setBookmark] = useState({
    email: "onlyforsave1@gmail.com",
    title: "facebook/react-native-website",
  });

  const { isLoaded, isSignedIn, user } = useUser();
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  const addUser = {
    email: user.emailAddresses[0].emailAddress,
    username: user.username,
    image: user.imageUrl,
  };

  const addToBookmarks = {
    email: user.emailAddresses[0].emailAddress,
    title: "facebook/react-native-website",
  };

  const onSignup = async () => {
    try {
      const response = await axios.post("/api/users/addUser", addUser);
      console.log("Signup Sucess!", response.data);
    } catch (error) {
      console.log("Signup failed!!!!", error.message);
    }
  };

  const addBookmark = async () => {
    try {
      const response = await axios.post(
        "/api/users/addBookmark",
        addToBookmarks
      );
      console.log("Bookmark Sucess!", response.data);
      // setBookmark(response.data);
    } catch (error) {
      console.log("Bookmark failed!!!!", error.message);
    }
  };

  const getBookmark = async () => {
    try {
      const response = await axios.post("/api/users/getBookmark", bookmark);
      console.log("Bookmark fetch Sucess!", response.data);
      setData(response.data);
    } catch (error) {
      console.log("Bookmark fetch failed!!!!", error.message);
    }
  };

  const deleteBookmark = async () => {
    try {
      const response = await axios.delete("/api/users/deleteBookmark");
      console.log("Bookmark delete Sucess!", response.data);
    } catch (error) {
      console.log("Bookmark delete failed!!!!", error.message);
    }
  };

  return (
    <div>
      <p>gfzds</p>
      <div className="mt-24">
        <button onClick={addBookmark}>add bookmark</button>
        <br />
        <button onClick={getBookmark}>get bookmark</button>
        <br />
        <button onClick={deleteBookmark}>delete bookmark</button>
        <br />
        <button onClick={onSignup}>add user to mongo</button>
        <br />
        <button onClick={() => console.log(isLoaded, isSignedIn, user)}>
          user
        </button>
      </div>
    </div>
  );
}
