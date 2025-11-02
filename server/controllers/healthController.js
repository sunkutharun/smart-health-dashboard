import HealthRecord from "../models/healthRecord.js";

// 🧮 Function to calculate BMI and risk
const calculateRisk = (data) => {
  const bmi = (data.weight / ((data.height / 100) ** 2)).toFixed(2);
  let riskLevel = "Healthy";

  if (bmi > 30 || data.bp > 140 || data.sugar > 160) riskLevel = "High Risk";
  else if (bmi > 25 || data.bp > 130) riskLevel = "Moderate Risk";

  return { bmi, riskLevel };
};

// 🩺 POST /predict
export const predictHealth = async (req, res) => {
  try {
    const data = req.body;
    const { bmi, riskLevel } = calculateRisk(data);

    const record = new HealthRecord({ ...data, bmi, riskLevel });
    await record.save();

    res.status(201).json({ success: true, bmi, riskLevel, record });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// 📜 GET /history
export const getHistory = async (req, res) => {
  try {
    const records = await HealthRecord.find().sort({ createdAt: -1 });
    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

