import React, { useState, useEffect } from "react";
import axios from "axios";
import HealthForm from "./components/HealthForm";
import PredictionResult from "./components/PredictionResult";
import HealthChart from "./components/HealthChart";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    const res = await axios.get("http://localhost:5000/api/health/history");
    setHistory(res.data);
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen p-6 flex flex-col gap-6 items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-[#0f172a] dark:to-[#1e293b] transition-all">
      <h1 className="text-3xl font-bold text-center mb-2 text-blue-700 dark:text-blue-300">
        🏥 Smart Health Prediction Dashboard
      </h1>
      <ThemeToggle />
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-6xl">
        <HealthForm setResult={setResult} fetchHistory={fetchHistory} />
        <div className="space-y-6">
          <PredictionResult result={result} />
          <HealthChart history={history} />
        </div>
      </div>
    </div>
  );
};

export default App;

