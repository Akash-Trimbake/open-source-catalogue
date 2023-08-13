"use client";

import React, { useState } from "react";
import axios from "axios";

export default function Feed() {
  const [data, setData] = useState([]);
  const [bookmark, setBookmark] = useState({
    email: "five@gmail.com",
    title: "64d78c6c028cc5469e217a04",
  });

  const addBookmark = async () => {
    try {
      const response = await axios.post("/api/users/addBookmark", bookmark);
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
      </div>
    </div>
  );
}
