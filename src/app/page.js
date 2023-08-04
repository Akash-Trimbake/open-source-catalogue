"use client";
import Image from "next/image";
import Search from "@/components/Search";
import Sort from "@/components/Sort";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center pt-20">
      <Search />
      <br />
      <Sort />
    </div>
  );
}
