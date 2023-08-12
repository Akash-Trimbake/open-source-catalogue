export default function UserProfile({ params }) {
  return (
    <div>
      <span className="mt-10">
        <h1>Profile Page {params.id}</h1>
      </span>
      <div className="mt-20"></div>
    </div>
  );
}

// "use client";
// import axios from "axios";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// // import Button from "@mui/material/Button";
// import React, { useState } from "react";

// export default function ProfilePage() {
//   const router = useRouter();
//   const [data, setData] = useState({});
//   const logout = async () => {
//     try {
//       await axios.get("/api/users/logout");
//       router.push("/login");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   // const getUserDetails = async () => {
//   //   const res = await axios.get("/api/users/me");
//   //   // console.log("at get user", res.data.message);
//   //   setData(res.data.message);
//   // };

//   const getUserDetails = async () => {
//     try {
//       const res = await axios.get("/api/users/me");
//       // console.log("at get user", res.data.message);
//       setData(res.data.message);
//     } catch (error) {
//       console.log("at profile page", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Profile Page</h1>
//       <Link href="#">{data.email}</Link>
//       <h2 className="p-1 rounded bg-green-500">
//         {<Link href={`/profile/${data.id}`}>{data.id}</Link>}
//       </h2>
//       <button
//         onClick={getUserDetails}
//         className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         GetUser Details
//       </button>

//       <button onClick={logout} variant="outlined">
//         Logout
//       </button>
//     </div>
//   );
// }
