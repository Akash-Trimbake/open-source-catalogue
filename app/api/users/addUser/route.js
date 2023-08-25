import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { currentUser } from "@clerk/nextjs";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

connect();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();
    const { username, email, image } = reqBody;

    //check if user already exist
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User with this email already exists!" },
        { status: 400 }
      );
    }

    const newUser = new User({
      username,
      email,
      image,
    });

    const savedUser = await newUser.save();
    console.log(savedUser);

    return NextResponse.json("SignedUp Successfully!");
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred at homeSearch server: " + error.message },
      { status: 500 }
    );
  }
}
