import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import Bookmark from "@/models/userBookmarks";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();
    const { userId, newBookmark } = reqBody;

    const user = await User.findById(userId).exec();
    if (!user) {
      throw new Error("User not found");
    }

    // Find the user's bookmarks
    let bookmarks = await Bookmark.findOne({ user: userId }).exec();

    if (!bookmarks) {
      // If the user doesn't have bookmarks, create a new bookmark document
      bookmarks = new Bookmark({
        user: userId,
        bookmark: [newBookmark],
      });
    } else {
      // If the user already has bookmarks, add the new bookmark
      bookmarks.bookmark.push(newBookmark);
    }
    console.log(bookmarks);
    await bookmarks.save();

    console.log("Bookmark added successfully");
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// export default async function addBookmark(userId, newBookmark) {
//   try {
//     // Find the user by their ID
//     const user = await User.findById(userId).exec();

//     if (!user) {
//       throw new Error("User not found");
//     }

//     // Find the user's bookmarks
//     let bookmarks = await Bookmark.findOne({ user: userId }).exec();

//     if (!bookmarks) {
//       // If the user doesn't have bookmarks, create a new bookmark document
//       bookmarks = new Bookmark({
//         user: userId,
//         bookmarks: [newBookmark],
//       });
//     } else {
//       // If the user already has bookmarks, add the new bookmark
//       bookmarks.bookmarks.push(newBookmark);
//     }

//     await bookmarks.save();

//     console.log("Bookmark added successfully");
//   } catch (error) {
//     console.error("Error adding bookmark:", error);
//   }
// }

// Usage example:
