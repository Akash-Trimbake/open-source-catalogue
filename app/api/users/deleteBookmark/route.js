import { connect } from "@/dbConfig/dbConfig"; // Import database connection setup
import User from "@/models/userModel"; // Import the User model
import { NextRequest, NextResponse } from "next/server"; // Import Next.js request and response utilities

export async function DELETE(request) {
  try {
    const reqBody = await request.json(); // Parse the JSON body of the request
    const { email, bookmarkId } = reqBody; // Extract email and bookmarkId from the request body

    // Find a user in the database based on the provided email
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Remove the bookmark with the specified bookmarkId from the user's bookmarks
    user.bookmarks = user.bookmarks.filter(
      (bookmark) => bookmark._id !== bookmarkId
    );

    // Save the updated user object
    await user.save();

    return NextResponse.json({ message: "Bookmark deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
