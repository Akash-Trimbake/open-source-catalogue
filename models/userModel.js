import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
  email: String,
  title: String,
  stars: String,
  forks: String,
  openIssues: String,
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  image: {
    type: String,
  },

  bookmarks: [bookmarkSchema],
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
