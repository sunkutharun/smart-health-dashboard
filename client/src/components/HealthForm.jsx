import React, { useState } from "react";
import axios from "axios";

const HealthForm = ({ setResult, fetchHistory }) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    bp: "",
    sugar: "",
    heartRate: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/health/predict", formData);
      setResult(res.data);
      fetchHistory();
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-center mb-3 text-blue-600 dark:text-blue-400">
        🩺 Health Data Form
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type={key === "name" ? "text" : "number"}
            name={key}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
            value={formData[key]}
            onChange={handleChange}
            required
            className="p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          />
        ))}
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-md hover:scale-[1.02] transition-all"
      >
        Predict Health
      </button>
    </form>
  );
};

export default HealthForm;
