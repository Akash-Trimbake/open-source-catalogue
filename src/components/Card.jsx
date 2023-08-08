"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card(props) {
  return (
    <div className="border border-gray-300 border-1 p-2 rounded-lg">
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
      <div className="max-w-xs sm:max-w-md m-2">
        <p className="text-sm ">{props.description.slice(0, 150) + "..."}</p>
      </div>
      <div>
        {props.topics.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default Card;
