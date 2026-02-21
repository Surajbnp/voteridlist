// app/api/voters/route.js
import { NextResponse } from "next/server";
import connectDB from "@/app/libs/database";
import Ward from "@/app/model/Ward.model";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const epic = searchParams.get("epic");

    if (!epic) {
      return NextResponse.json({ error: "EPIC required" }, { status: 400 });
    }

    const key = epic.replace(/\s+/g, "").trim().toUpperCase();

    const voter = await Ward.findOne({
      $or: [
        { epicNo: key },          // new normalized field (if present)
        { "Epic No": key },       // current records
        { "Epic No.": key },      // legacy records (if any left)
      ],
    }).lean();

    if (!voter) {
      return NextResponse.json(null, { status: 404 });
    }

    return NextResponse.json(voter);
  } catch (err) {
    console.error("VOTER API ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}