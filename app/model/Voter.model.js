// models/Voter.js
import mongoose from "mongoose";

const VoterSchema = new mongoose.Schema(
  {
    epicNo: { type: String, unique: true, index: true },
    serialNo: Number,
    location: String,
    sr: String,
    nameHi: String,
    nameEn: String,
    fatherNameHi: String,
    fatherNameEn: String,
    gender: String,
    age: Number,
  },
  { timestamps: true }
);

export default mongoose.models.Voter || mongoose.model("Voter", VoterSchema);
