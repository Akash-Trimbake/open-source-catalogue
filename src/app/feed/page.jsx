"use client";

import React, { useState } from "react";
import axios from "axios";

export default function Feed() {
  const [data, setData] = useState([]);
  const [bookmark, setBookmark] = useState({
    email: "five@gmail.com",
    title: "test100",
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
      const response = await axios.get("/api/users/getBookmark");
      console.log("Bookmark Sucess!", response.data.bookmarks);
      setData(response.data);
    } catch (error) {
      console.log("Bookmark failed!!!!", error.message);
    }
  };

  return (
    <div>
      <p>gfzds</p>
      <div className="mt-24">
        <button onClick={addBookmark}>add bookmark</button>
        {/* <button onClick={getBookmark}>get bookmark</button> */}
      </div>
    </div>
  );
}
