import React from "react";

const PredictionResult = ({ result }) => {
  if (!result?.success) return null;

  return (
    <div className="bg-green-100 dark:bg-green-900 rounded-xl p-5 shadow-md text-center">
      <h3 className="text-xl font-semibold mb-2">Prediction Result</h3>
      <p>BMI: <span className="font-bold">{result.bmi}</span></p>
      <p>
        Risk Level:
        <span
          className={`font-bold ml-1 ${
            result.riskLevel === "High Risk"
              ? "text-red-600"
              : result.riskLevel === "Moderate Risk"
              ? "text-yellow-500"
              : "text-green-600"
          }`}
        >
          {result.riskLevel}
        </span>
      </p>
    </div>
  );
};

export default PredictionResult;
