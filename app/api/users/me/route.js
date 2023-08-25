import { getDataFromToken } from "@/helper/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
// import jwt from "jsonwebtoken";

connect();

export async function GET(NextRequest) {
  try {
    // const userId = await getDataFromToken(NextRequest);
    // // console.log("at route me", getDataFromToken(NextRequest));
    // // console.log("at route me", userId);
    // const user = await User.findOne({ _id: userId }).select("-password");
    // return NextResponse.json({
    //   message: "User found",
    //   data: user,
    // });

    const token = NextRequest.cookies.get("token")?.value || "Token not found";
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);

    return NextResponse.json({ message: decodedToken });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
