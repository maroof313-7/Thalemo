import React, { useState } from "react";

const Doctor: React.FC = () => {
  const [patientName, setPatientName] = useState("");
  const [reportData, setReportData] = useState("");
  const [prediction, setPrediction] = useState<string | null>(null);
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const symptomsDatabase: { [key: string]: string[] } = {
    anemia: [
      "fatigue",
      "pale skin",
      "low hemoglobin",
      "low RBC count",
      "dizziness",
      "shortness of breath",
    ],
    thalassemia: [
      "fatigue",
      "pale skin",
      "frequent infections",
      "abdominal swelling",
      "bone deformities",
      "low hemoglobin",
      "abnormal RBC morphology",
      "family history of thalassemia",
    ],
    ironDeficiencyAnemia: [
      "fatigue",
      "brittle nails",
      "weakness",
      "dizziness",
      "frequent infections",
      "low iron levels",
    ],
    sickleCellAnemia: [
      "painful episodes",
      "fatigue",
      "jaundice",
      "swelling in hands and feet",
      "shortness of breath",
      "frequent infections",
    ],
    leukemia: [
      "fatigue",
      "unexplained weight loss",
      "easy bruising",
      "frequent infections",
      "bone or joint pain",
      "swollen lymph nodes",
    ],
    polycythemiaVera: [
      "high RBC count",
      "dizziness",
      "headache",
      "tiredness",
      "shortness of breath",
      "itching after shower",
    ],
    hemophilia: [
      "easy bruising",
      "excessive bleeding",
      "joint pain",
      "frequent nosebleeds",
      "blood in urine or stool",
    ],
    vitaminB12Deficiency: [
      "fatigue",
      "pale skin",
      "nerve problems",
      "weakness",
      "memory problems",
    ],
    plateletDisorder: [
      "easy bruising",
      "petechiae",
      "heavy bleeding",
      "frequent nosebleeds",
    ],
  };

  const analyzeReport = (report: string) => {
    const detectedSymptoms: { [key: string]: number } = {
      anemia: 0,
      thalassemia: 0,
      ironDeficiencyAnemia: 0,
      sickleCellAnemia: 0,
      leukemia: 0,
      polycythemiaVera: 0,
      hemophilia: 0,
      vitaminB12Deficiency: 0,
      plateletDisorder: 0,
    };

    Object.keys(symptomsDatabase).forEach((condition) => {
      symptomsDatabase[condition as keyof typeof symptomsDatabase].forEach((symptom: string) => {
        if (report.toLowerCase().includes(symptom)) {
          detectedSymptoms[condition]++;
        }
      });
    });

    let highestCondition = "";
    let highestCount = 0;
    Object.keys(detectedSymptoms).forEach((condition) => {
      if (detectedSymptoms[condition] > highestCount) {
        highestCount = detectedSymptoms[condition];
        highestCondition = condition;
      }
    });

    let predictionResult = "";
    let accuracyResult = 0;
    let detailedResults: string[] = [];

    switch (highestCondition) {
      case "anemia":
        predictionResult = "Possible Anemia";
        accuracyResult = (detectedSymptoms.anemia / symptomsDatabase.anemia.length) * 100;
        detailedResults.push("Anemia detected");
        break;
      case "thalassemia":
        predictionResult = "Possible Thalassemia";
        accuracyResult = (detectedSymptoms.thalassemia / symptomsDatabase.thalassemia.length) * 100;
        detailedResults.push("Thalassemia detected");
        break;
      case "ironDeficiencyAnemia":
        predictionResult = "Possible Iron Deficiency Anemia";
        accuracyResult = (detectedSymptoms.ironDeficiencyAnemia / symptomsDatabase.ironDeficiencyAnemia.length) * 100;
        detailedResults.push("Iron Deficiency Anemia detected");
        break;
      case "sickleCellAnemia":
        predictionResult = "Possible Sickle Cell Anemia";
        accuracyResult = (detectedSymptoms.sickleCellAnemia / symptomsDatabase.sickleCellAnemia.length) * 100;
        detailedResults.push("Sickle Cell Anemia detected");
        break;
      case "leukemia":
        predictionResult = "Possible Leukemia";
        accuracyResult = (detectedSymptoms.leukemia / symptomsDatabase.leukemia.length) * 100;
        detailedResults.push("Leukemia detected");
        break;
      case "polycythemiaVera":
        predictionResult = "Possible Polycythemia Vera";
        accuracyResult = (detectedSymptoms.polycythemiaVera / symptomsDatabase.polycythemiaVera.length) * 100;
        detailedResults.push("Polycythemia Vera detected");
        break;
      case "hemophilia":
        predictionResult = "Possible Hemophilia";
        accuracyResult = (detectedSymptoms.hemophilia / symptomsDatabase.hemophilia.length) * 100;
        detailedResults.push("Hemophilia detected");
        break;
      case "vitaminB12Deficiency":
        predictionResult = "Possible Vitamin B12 Deficiency";
        accuracyResult = (detectedSymptoms.vitaminB12Deficiency / symptomsDatabase.vitaminB12Deficiency.length) * 100;
        detailedResults.push("Vitamin B12 Deficiency detected");
        break;
      case "plateletDisorder":
        predictionResult = "Possible Platelet Disorder";
        accuracyResult = (detectedSymptoms.plateletDisorder / symptomsDatabase.plateletDisorder.length) * 100;
        detailedResults.push("Platelet Disorder detected");
        break;
      default:
        predictionResult = "Condition Not Identified";
        accuracyResult = 0;
        detailedResults.push("Condition not identified");
        break;
    }

    setPrediction(predictionResult);
    setAccuracy(accuracyResult);

    if (highestCondition) {
      detailedResults.push(`${highestCondition} detection accuracy: ${accuracyResult}%`);
    }

    setPrediction(prev => `${prev} | ${detailedResults.join(', ')}`);
  };

  const handleSubmit = () => {
    if (reportData.trim()) {
      setLoading(true);
      analyzeReport(reportData);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-teal-50 to-teal-100 p-8">
      <h1 className="text-4xl font-extrabold text-teal-700 mb-8">Doctor Dashboard</h1>
      <form onSubmit={(e) => {e.preventDefault(); handleSubmit();}} className="space-y-8 bg-white p-8 rounded-xl shadow-lg w-full max-w-xl">
        <div>
          <label htmlFor="patientName" className="block text-lg font-medium text-gray-700">Patient's Name</label>
          <input
            type="text"
            id="patientName"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-teal-500"
            placeholder="Enter patient's name"
            required
          />
        </div>
        <div>
          <label htmlFor="reportData" className="block text-lg font-medium text-gray-700">Report Data (e.g., blood test results)</label>
          <textarea
            id="reportData"
            value={reportData}
            onChange={(e) => setReportData(e.target.value)}
            className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:ring-teal-500"
            placeholder="Enter report data here"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-teal-600 text-white text-lg rounded-xl shadow-lg hover:bg-teal-700 transform transition-all duration-300"
        >
          {loading ? "Getting Prediction..." : "Get Prediction"}
        </button>
      </form>

      {prediction && (
        <div className="mt-8 p-6 bg-white border border-teal-200 rounded-xl shadow-md max-w-xl w-full">
          <h2 className="text-2xl font-semibold text-teal-700">Prediction:</h2>
          <p className="text-lg text-teal-600">{prediction}</p>
          {accuracy && (
            <p className="text-sm text-gray-500 mt-4">Prediction Accuracy: {accuracy}%</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Doctor;
