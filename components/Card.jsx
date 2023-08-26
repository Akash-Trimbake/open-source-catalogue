"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Chip from "@mui/material/Chip";
import Star from "./images/star.svg";
import Bookmark from "./images/bookmark.svg";
import BookmarkFill from "./images/bookmarkFill.svg";
import Fork from "./images/fork.svg";
import OpenIssues from "./images/openIssue.svg";
function Card(props) {
  const [bookmarkState, setBookmarkState] = useState(false);

  const [bookmark, setBookmark] = useState({
    email: "onlyforsave1@gmail.com",
    title: props.full_name,
    stars: props.stars,
    forks: props.forks,
    openIssues: props.openIssues,
    id: props.id,
  });

  const getWishlistData = () => {
    setBookmarkState(!bookmarkState);
  };

  const addBookmark = async () => {
    try {
      const response = await axios.post("/api/users/addBookmark", bookmark);
      console.log("Bookmark Sucess!", response.data);
      // setBookmark(response.data);
    } catch (error) {
      console.log("Bookmark failed!!!!", error.message);
    }
  };

  return (
    <div className="border border-gray-300 border-1 p-2 rounded-lg">
      <div className="flex justify-between">
        <div className="flex m-2">
          <Image
            className="rounded-lg "
            src={props.img}
            alt="Repo pic"
            width={40}
            height={40}
          />
          <Link
            className="flex flex-col text-blue-700 text-md mt-2 mx-2 md:flex-row"
            href={props.git_url}
            target="_blank"
          >
            {props.owner}/
            <span className="text-blue-700 font-bold">{props.name}</span>
          </Link>
        </div>
        <Image
          onClick={() => {
            getWishlistData(), addBookmark();
          }}
          className="cursor-pointer"
          src={bookmarkState ? BookmarkFill : Bookmark}
          alt="Bookmark"
          width={24}
          height={24}
        />
      </div>
      <div className="max-w-xs sm:max-w-md m-2 ">
        <p className="text-sm overflow-hidden">
          {props.description ? props.description.slice(0, 100) + "..." : "..."}
        </p>
      </div>
      <div className="overflow-auto">
        {props.topics
          .filter((item) => item.length < 15)
          .slice(0, 5)
          .map((item, index) => (
            <Chip
              label={item}
              size="small"
              key={index}
              className="text-blue-800 bg-sky-100 text-xs m-1"
            />
          ))}
      </div>
      <div className="grid grid-flow-row gap-4 grid-cols-2 md:grid-cols-3">
        <div className="flex justify-center md:my-2 mx-2 p-1 bg-gray-50 border border-gray-300 rounded-lg">
          <Image src={Star} alt="Github Stars:" width={16} height={16} />
          <p className="text-xs mt-0.5 mx-1 mr-2">
            {" "}
            Star{" "}
            <span className="text-xs font-semibold bg-gray-200 py-0.5 px-2 rounded-full">
              {props.stars}
            </span>
          </p>
        </div>

        <div className="flex justify-center md:my-2 mx-2 p-1 bg-gray-50 border border-gray-300 rounded-lg">
          <Image src={Fork} alt="Github Stars:" width={16} height={16} />
          <p className="text-xs mt-0.5 mx-1 mr-2">
            {" "}
            Fork{" "}
            <span className="text-xs font-semibold bg-gray-200 py-0.5 px-2 rounded-full">
              {props.forks}
            </span>
          </p>
        </div>

        <div className="flex justify-center items-center md:my-2 mx-2 p-1 bg-gray-50 border border-gray-300 rounded-lg">
          <Image src={OpenIssues} alt="Github Stars:" width={16} height={16} />
          <p className="text-xs mt-0.5 mx-0.5 md:mr-2">
            {" "}
            Issue{" "}
            <span className="text-xs font-semibold bg-gray-200 py-0.5 px-2 rounded-full">
              {props.openIssues}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
