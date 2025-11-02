import mongoose from "mongoose";

const healthRecordSchema = new mongoose.Schema({
  name: String,
  age: Number,
  weight: Number,
  height: Number,
  bp: Number,
  sugar: Number,
  heartRate: Number,
  bmi: Number,
  riskLevel: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const HealthRecord = mongoose.model("HealthRecord", healthRecordSchema);
export default HealthRecord;
