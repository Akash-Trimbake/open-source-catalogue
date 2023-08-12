"use client";

import React, { useState } from "react";
import axios from "axios";

export default function Feed() {
  const [bookmark, setBookmark] = useState({
    userId: "64d311a93215a6611b4c0953",
    newBookmark: "success",
  });

  const addBookmark = async () => {
    try {
      const response = await axios.post("/api/users/addBookmark", bookmark);
      console.log("Bookmark Sucess!", response.data);
      setBookmark(response.data);
    } catch (error) {
      console.log("Bookmark failed!!!!", error.message);
    }
  };

  return (
    <div>
      <p>gfzds</p>
      <div className="mt-24">
        <button onClick={addBookmark}>bookmark</button>
      </div>
    </div>
  );
}
