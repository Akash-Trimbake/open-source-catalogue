import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();
    const { email, title, stars, forks, openIssues } = reqBody;

    // console.log(reqBody);

    const newBookmark = {
      title,
      stars,
      forks,
      openIssues,
    };
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    user.bookmarks.push(newBookmark);
    // user.bookmarks.pop(newBookmark);
    await user.save();

    // user.bookmark = newBookmark;
    // await user.save();

    return NextResponse.json({
      message: "Bookmark added successfully!",
      success: true,
      newBookmark,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
