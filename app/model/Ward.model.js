import mongoose from "mongoose";

const WardSchema = new mongoose.Schema(
  {
    epicNo: { type: String, required: true, unique: true, index: true },
    Location: String,
    "Serial No": Number,
    "Name(Hindi)": String,
    "Name(English)": String,
    "Father's ": {
      " Husband's Name": String,
      " Husband's Name (English)": String,
    },
    Gender: String,
    Age: Number,
  },
  { timestamps: true }
);

// 🔥 Prevent model overwrite on hot reload
export default mongoose.models.Ward || mongoose.model("Ward", WardSchema);