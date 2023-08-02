"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Button from "@mui/material/Button";
import React, { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("");
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserDetails = async () => {
    try {
      const res = await axios.get("/api/users/me");
      setData(res.data.data._id);
      console.log(res.data);
    } catch (error) {
      console.log("at me page", error);

      // alert("res");
    }
  };

  // const getUserDetails = async () => {
  //   const res = await axios.get("/api/users/me");
  //   console.log(res.data);
  //   setData(res.data.data._id);
  // };

  return (
    <div>
      <h1>Profile Page</h1>
      <h2 className="p-1 rounded bg-green-500">
        {data === "" ? "Nothing....." : <p>{data}</p>}
      </h2>
      <button
        onClick={getUserDetails}
        className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        GetUser Details
      </button>

      <Button onClick={logout} variant="outlined">
        Logout
      </Button>
    </div>
  );
}
