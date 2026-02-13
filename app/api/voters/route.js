// app/api/voters/route.js
import connectDB from "@/app/libs/database";
import Voter from "@/app/model/Voter.model";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const epic = searchParams.get("epic");

    if (!epic) {
      return Response.json({ error: "EPIC required" }, { status: 400 });
    }

    // no fancy transform, just trim user input
    const key = epic.trim();


    const voter = await Voter.findOne({ "Epic No": key }).lean(); // exact match

    if (!voter) {
      return Response.json(null, { status: 404 });
    }

    // return DB doc as-is
    return Response.json(voter);
  } catch (err) {
    console.error("VOTER API ERROR:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
