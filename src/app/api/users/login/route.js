import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    // Check if user exists in database with given credentials
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist!" },
        { status: 400 }
      );
    }

    // check if password is correct
    const isValidPassword = await bcryptjs.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Password is invalid!" },
        { status: 400 }
      );
    }

    // create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    // create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });
    const response = NextResponse.json({
      message: "Login successful!",
      success: true,
    });

    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
