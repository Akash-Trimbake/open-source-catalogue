import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const currentDate = new Date();
    const oneMonthAgo = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() - 30
    );
    const formattedOneMonthAgo = oneMonthAgo.toISOString();

    const query = `https://api.github.com/search/repositories?q=pushed:>=${formattedOneMonthAgo}&sort=commits&order=desc&per_page=100&page=1`;

    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: query,
      headers: {},
    };

    try {
      const response = await axios.request(config);

      return NextResponse.json(response.data);
    } catch (error) {
      console.log("Error while querying GitHub API:", error);
      return NextResponse.json(
        { error: "An error occurred while querying GitHub API." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.log("Error:", error);
    return NextResponse.json(
      { error: "An error occurred in the server." },
      { status: 500 }
    );
  }
}
