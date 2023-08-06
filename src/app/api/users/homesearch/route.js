import { NextRequest, NextResponse } from "next/server";

export async function POST(NextRequest) {
  try {
    const reqBody = await NextRequest.json();
    const { chips, language, selectedSearchType, stars, forks } = reqBody;

    // chips array to string
    let customSeparator = "";
    if (selectedSearchType === "strict") {
      customSeparator = " and ";
    } else if (selectedSearchType === "lazy") {
      customSeparator = " ";
    }
    const chipsWithCustomSeparator = chips.join(customSeparator);

    let query = `https://api.github.com/search/repositories?q=language:${language} ${chipsWithCustomSeparator} stars:${stars[0]}..${stars[1]} forks:${forks[0]}..${forks[1]} &sort=forks&order=desc&per_page=100&page=1`;
    return NextResponse.json({ query });

    // return NextResponse.json({
    //   chips,
    //   language,
    //   selectedSearchType,
    //   stars,
    //   forks,
    // });
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred at homeSearch server: " + error.message },
      { status: 500 }
    );
  }
}

// https://api.github.com/search/repositories?q=language:${language} ${chipsWithCustomSeparator} stars:${stars[0]}..${stars[1]} forks:${forks[0]}..${forks[1]} &sort=forks&order=desc&per_page=100&page=1

// chips array to string
// let customSeparator = "";
// if (selectedSearchType === "strict") {
//   customSeparator = " and ";
// } else if (selectedSearchType === "lazy") {
//   customSeparator = " ";
// }
// const chipsWithCustomSeparator = chips.join(customSeparator);
