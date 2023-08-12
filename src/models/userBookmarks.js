import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  item: { type: String },
  // Other cart-related fields
});

const Bookmark =
  mongoose.models.bookmark || mongoose.model("bookmark", bookmarkSchema);

export default Bookmark;
