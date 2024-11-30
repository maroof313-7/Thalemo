import React, { useState } from "react";

const Parent: React.FC = () => {
  const [childName, setChildName] = useState("");
  const [lastTransfusionDate, setLastTransfusionDate] = useState("");
  const [transfusionReminder, setTransfusionReminder] = useState<string | null>(null);
  const [healthLog, setHealthLog] = useState<string>("");
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string | null>(null);

  // Predefined topics and answers
  const qaDictionary: Record<string, string> = {
    thalassemiaSymptoms: "Common symptoms of Thalassemia include fatigue, pale skin, delayed growth, weakness, and bone deformities. Some individuals may also experience enlarged organs such as the spleen or liver.",
    thalassemiaTreatment: "Treatment for Thalassemia usually involves regular blood transfusions to manage anemia. Iron chelation therapy is used to remove excess iron from the body. Bone marrow or stem cell transplant may be considered in severe cases.",
    thalassemiaCauses: "Thalassemia is caused by genetic mutations that affect the production of hemoglobin. It is inherited in an autosomal recessive manner, meaning both parents must carry the gene for the condition to be passed on.",
    thalassemiaDiagnosis: "Thalassemia is diagnosed through blood tests, including a complete blood count (CBC) and hemoglobin electrophoresis. Genetic testing may also be used to confirm the diagnosis.",
    thalassemiaPrevention: "Since Thalassemia is genetic, there is no way to prevent it. However, genetic counseling can help individuals understand the risks and make informed decisions about having children.",
    ironChelation: "Iron chelation is a treatment used to remove excess iron from the body, often necessary for patients who receive frequent blood transfusions.",
    thalassemiaFatal: "Thalassemia can be life-threatening if left untreated. However, with proper treatment, people with thalassemia can live long and healthy lives.",
    thalassemiaDiet: "Foods high in iron, such as red meat and fortified cereals, should be avoided if iron levels are high in people with thalassemia. Consult your doctor for personalized dietary advice.",
    bloodTransfusions: "The frequency of blood transfusions varies depending on the severity of the condition. Some patients may need them every few weeks.",
    lifeExpectancy: "With proper treatment, many individuals with thalassemia can live into their 40s, 50s, or even longer, but life expectancy can vary depending on the type and severity of the condition.",
    thalassemiaInheritance: "Thalassemia is inherited in an autosomal recessive manner, meaning that both parents must carry the mutated gene for their child to inherit the disease.",
  thalassemiaTypes: "There are two main types of thalassemia: Alpha and Beta. Both types can be severe, but beta-thalassemia major is typically more serious.",
  thalassemiaManagement: "Management of thalassemia includes regular blood transfusions, iron chelation therapy, and sometimes bone marrow or stem cell transplants.",
  thalassemiaSymptomsSevere: "Severe symptoms of thalassemia may include severe anemia, slow growth in children, heart problems, and bone deformities.",
  thalassemiaTransfusionFrequency: "Transfusions may be needed every 2 to 4 weeks, depending on the severity of the thalassemia." ,
  thalassemiaIronOverload: "Iron overload is a common complication due to repeated blood transfusions. It can lead to organ damage if not treated with chelation therapy.",
  thalassemiaBoneMarrowTransplant: "Bone marrow or stem cell transplants offer a potential cure for thalassemia but are not suitable for all patients due to risks and availability of donors.",
  thalassemiaGeneTherapy: "Gene therapy is a potential future treatment for thalassemia that aims to correct the genetic mutation responsible for the disease.",
  thalassemiaNewbornScreening: "Newborn screening for thalassemia is recommended in certain regions to ensure early diagnosis and management.",
  thalassemiaChronicCondition: "Thalassemia is a chronic condition that requires lifelong management, including blood transfusions and iron chelation therapy.",
  thalassemiaPsychologicalImpact: "Thalassemia can have a psychological impact, leading to stress, anxiety, and depression due to the lifelong treatment and uncertainty about the future.",
  thalassemiaAndPregnancy: "Pregnancy in women with thalassemia requires careful management, including monitoring of blood counts and iron levels.",
  thalassemiaInAdulthood: "With proper care, individuals with thalassemia can live well into adulthood, but they may face complications related to organ damage or transfusion-related iron overload.",
  thalassemiaPainManagement: "Thalassemia patients may experience bone pain or joint pain, especially as a result of bone marrow expansion. Pain management strategies are important for improving quality of life.",
  thalassemiaBoneDeformities: "Long-term thalassemia may lead to bone deformities due to bone marrow expansion as the body compensates for low red blood cell production.",
  thalassemiaRiskOfInfections: "Thalassemia patients are at higher risk of infections, especially if they have undergone splenectomy (removal of the spleen). Regular vaccinations and antibiotic prophylaxis are essential.",
  thalassemiaHeartComplications: "Chronic anemia and iron overload can lead to heart complications such as heart failure or arrhythmias in people with thalassemia.",
  thalassemiaLiverDamage: "Iron overload can lead to liver damage and cirrhosis in patients with thalassemia who receive frequent blood transfusions.",
  thalassemiaKidneyComplications: "Thalassemia can affect kidney function, especially in patients with iron overload or those who have had repeated blood transfusions.",
  thalassemiaScreeningTests: "Common tests for diagnosing thalassemia include hemoglobin electrophoresis, CBC (complete blood count), and genetic testing to identify specific mutations.",
  thalassemiaDifferentialDiagnosis: "Thalassemia can be mistaken for other forms of anemia, so it's important for doctors to conduct appropriate tests to confirm the diagnosis.",
  thalassemiaSplenectomy: "Some patients with thalassemia may require a splenectomy (removal of the spleen) due to its enlargement and the risk of infection.",
  thalassemiaHormonalImbalance: "Thalassemia patients are at risk for hormonal imbalances, particularly thyroid issues or delayed puberty due to the chronic blood loss and iron overload.",
  thalassemiaChronicFatigue: "Fatigue is a common symptom of thalassemia, especially in those with severe anemia. Energy management strategies are vital for maintaining daily activities.",
  thalassemiaBoneMarrowFailure: "Bone marrow failure can occur in some thalassemia patients, leading to complications such as increased risk of infections or anemia.",
  thalassemiaEmotionalSupport: "Emotional support and counseling can be helpful for patients dealing with the mental health challenges of living with a chronic disease like thalassemia.",
  thalassemiaGeneMutation: "Thalassemia is caused by mutations in the alpha or beta globin gene, leading to reduced or absent hemoglobin production, causing anemia.",
  thalassemiaCarrierStatus: "People who carry one mutated gene for thalassemia (thalassemia trait) usually do not show symptoms but can pass the gene on to their children.",
  thalassemiaFamilyPlanning: "Genetic counseling is important for families with thalassemia to understand the risk of passing the condition on to future generations.",
  thalassemiaBoneExpansion: "In thalassemia, the bone marrow expands to compensate for low red blood cell production, leading to facial bone deformities in some individuals.",
  thalassemiaBloodTests: "Blood tests for thalassemia typically show low hemoglobin levels, low red blood cells, and abnormal hemoglobin types, such as hemoglobin F or hemoglobin A2.",
  thalassemiaBoneMarrowTransplantsSuccess: "Bone marrow transplants can be successful in curing thalassemia, but the process is complex, and not all patients are eligible due to risks involved.",
  thalassemiaLifestyleChanges: "Lifestyle changes for thalassemia patients include maintaining a healthy diet, avoiding iron-rich foods, and managing stress.",
  thalassemiaDiseaseProgression: "Without treatment, thalassemia can lead to severe complications, including organ damage, growth delays, and early death.",
  thalassemiaTransfusionRelatedComplications: "Transfusion-related complications include iron overload, infections, and reactions to blood products.",
  thalassemiaSplenomegaly: "Enlargement of the spleen (splenomegaly) is a common symptom of thalassemia and may require splenectomy if it leads to other complications.",
  thalassemiaDiagnosisInAdults: "Thalassemia can be diagnosed in adulthood, especially in areas where the disease is less common, through genetic testing and blood tests.",
  thalassemiaInheritedDisorder: "Thalassemia is inherited from both parents, and both parents must carry the thalassemia trait for the child to inherit the disease.",
  thalassemiaInSubcontinent: "Thalassemia is more prevalent in regions such as the Mediterranean, Middle East, South Asia, and Southeast Asia.",
  thalassemiaPrenatalDiagnosis: "Thalassemia can be diagnosed prenatally through amniocentesis or chorionic villus sampling (CVS) if there is a family history of the disease.",
  thalassemiaTransfusionSupport: "Supportive care during blood transfusions, such as managing transfusion reactions and maintaining proper iron levels, is crucial for long-term health.",
  thalassemiaEmergentCare: "Emergency care may be required for thalassemia patients during crises, such as severe anemia, infection, or complications from iron overload.",
  thalassemiaMonitoring: "Ongoing monitoring of iron levels, heart function, and overall health is essential for managing thalassemia effectively.",
  thalassemiaGeneEditing: "Gene editing, such as CRISPR, is being researched as a potential treatment for thalassemia to directly correct the genetic mutation.",
  thalassemiaAsymptomaticCarriers: "Asymptomatic carriers of thalassemia (people with one mutated gene) typically do not show symptoms but can pass the gene to their children.",
  thalassemiaStemCellResearch: "Stem cell research is exploring alternatives to bone marrow transplants for treating thalassemia, with the goal of improving treatment outcomes and accessibility.",
  thalassemiaGlobalPrevalence: "Thalassemia affects millions of people worldwide, particularly in countries with a high prevalence of Mediterranean, African, or Asian ancestry.",
  thalassemiaBloodScreening: "Blood screening for thalassemia is important for early detection, especially in areas with high rates of thalassemia traits.",
  thalassemiaTransfusionIronBalance: "Maintaining an appropriate balance of iron during blood transfusions is critical to prevent iron overload and organ damage.",
  thalassemiaAlternativeTreatments: "Research into alternative treatments, including gene therapy and synthetic blood products, is ongoing to improve the management of thalassemia."

};

const handleAddLog = () => {
    if (healthLog) {
      alert("Health log added successfully!");
      setHealthLog(""); // Reset after adding
    }
  };

  const calculateNextTransfusionDate = (date: string) => {
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 30); // Assuming transfusions are needed every 30 days
    return nextDate.toLocaleDateString();
  };

  const handleSubmitTransfusion = () => {
    if (lastTransfusionDate) {
      setTransfusionReminder(`Next transfusion due: ${calculateNextTransfusionDate(lastTransfusionDate)}`);
    }
  };

  // Function to handle question submission
  const handleQuestionSubmit = () => {
    if (question) {
      // Normalize the question to lowercase to ensure a case-insensitive comparison
      const lowerCaseQuestion = question.toLowerCase();

      // Check if the question contains any of the keywords from predefined topics
      if (lowerCaseQuestion.includes("symptoms")) {
        setAnswer(qaDictionary.thalassemiaSymptoms);
      } else if (lowerCaseQuestion.includes("treatment")) {
        setAnswer(qaDictionary.thalassemiaTreatment);
      } else if (lowerCaseQuestion.includes("causes")) {
        setAnswer(qaDictionary.thalassemiaCauses);
      } else if (lowerCaseQuestion.includes("diagnosis")) {
        setAnswer(qaDictionary.thalassemiaDiagnosis);
      } else if (lowerCaseQuestion.includes("prevention")) {
        setAnswer(qaDictionary.thalassemiaPrevention);
      } else if (lowerCaseQuestion.includes("chelation") || lowerCaseQuestion.includes("iron")) {
        setAnswer(qaDictionary.ironChelation);
      } else if (lowerCaseQuestion.includes("fatal")) {
        setAnswer(qaDictionary.thalassemiaFatal);
      } else if (lowerCaseQuestion.includes("diet") || lowerCaseQuestion.includes("food")) {
        setAnswer(qaDictionary.thalassemiaDiet);
      } else if (lowerCaseQuestion.includes("transfusions")) {
        setAnswer(qaDictionary.bloodTransfusions);
      } else if (lowerCaseQuestion.includes("life expectancy")) {
        setAnswer(qaDictionary.lifeExpectancy);
      } else if (lowerCaseQuestion.includes("inheritance")) {
        setAnswer(qaDictionary.thalassemiaInheritance);
      } else if (lowerCaseQuestion.includes("types")) {
        setAnswer(qaDictionary.thalassemiaTypes);
      } else if (lowerCaseQuestion.includes("management")) {
        setAnswer(qaDictionary.thalassemiaManagement);
      } else if (lowerCaseQuestion.includes("severe") || lowerCaseQuestion.includes("complications")) {
        setAnswer(qaDictionary.thalassemiaSymptomsSevere);
      } else if (lowerCaseQuestion.includes("transfusion frequency")) {
        setAnswer(qaDictionary.thalassemiaTransfusionFrequency);
      } else if (lowerCaseQuestion.includes("iron overload")) {
        setAnswer(qaDictionary.thalassemiaIronOverload);
      } else if (lowerCaseQuestion.includes("bone marrow transplant")) {
        setAnswer(qaDictionary.thalassemiaBoneMarrowTransplant);
      } else if (lowerCaseQuestion.includes("gene therapy")) {
        setAnswer(qaDictionary.thalassemiaGeneTherapy);
      } else if (lowerCaseQuestion.includes("newborn screening")) {
        setAnswer(qaDictionary.thalassemiaNewbornScreening);
      } else if (lowerCaseQuestion.includes("chronic condition")) {
        setAnswer(qaDictionary.thalassemiaChronicCondition);
      } else if (lowerCaseQuestion.includes("psychological impact")) {
        setAnswer(qaDictionary.thalassemiaPsychologicalImpact);
      } else if (lowerCaseQuestion.includes("pregnancy")) {
        setAnswer(qaDictionary.thalassemiaAndPregnancy);
      } else if (lowerCaseQuestion.includes("adulthood")) {
        setAnswer(qaDictionary.thalassemiaInAdulthood);
      } else if (lowerCaseQuestion.includes("pain management")) {
        setAnswer(qaDictionary.thalassemiaPainManagement);
      } else if (lowerCaseQuestion.includes("bone deformities")) {
        setAnswer(qaDictionary.thalassemiaBoneDeformities);
      } else if (lowerCaseQuestion.includes("infections")) {
        setAnswer(qaDictionary.thalassemiaRiskOfInfections);
      } else if (lowerCaseQuestion.includes("heart complications")) {
        setAnswer(qaDictionary.thalassemiaHeartComplications);
      } else if (lowerCaseQuestion.includes("liver damage")) {
        setAnswer(qaDictionary.thalassemiaLiverDamage);
      } else if (lowerCaseQuestion.includes("kidney complications")) {
        setAnswer(qaDictionary.thalassemiaKidneyComplications);
      } else if (lowerCaseQuestion.includes("screening tests")) {
        setAnswer(qaDictionary.thalassemiaScreeningTests);
      } else if (lowerCaseQuestion.includes("differential diagnosis")) {
        setAnswer(qaDictionary.thalassemiaDifferentialDiagnosis);
      } else if (lowerCaseQuestion.includes("splenectomy")) {
        setAnswer(qaDictionary.thalassemiaSplenectomy);
      } else if (lowerCaseQuestion.includes("hormonal imbalance")) {
        setAnswer(qaDictionary.thalassemiaHormonalImbalance);
      } else if (lowerCaseQuestion.includes("chronic fatigue")) {
        setAnswer(qaDictionary.thalassemiaChronicFatigue);
      } else if (lowerCaseQuestion.includes("bone marrow failure")) {
        setAnswer(qaDictionary.thalassemiaBoneMarrowFailure);
      } else if (lowerCaseQuestion.includes("emotional support")) {
        setAnswer(qaDictionary.thalassemiaEmotionalSupport);
      } else if (lowerCaseQuestion.includes("gene mutation")) {
        setAnswer(qaDictionary.thalassemiaGeneMutation);
      } else if (lowerCaseQuestion.includes("carrier status")) {
        setAnswer(qaDictionary.thalassemiaCarrierStatus);
      } else if (lowerCaseQuestion.includes("family planning")) {
        setAnswer(qaDictionary.thalassemiaFamilyPlanning);
      } else if (lowerCaseQuestion.includes("bone expansion")) {
        setAnswer(qaDictionary.thalassemiaBoneExpansion);
      } else if (lowerCaseQuestion.includes("blood tests")) {
        setAnswer(qaDictionary.thalassemiaBloodTests);
      } else if (lowerCaseQuestion.includes("bone marrow transplant success")) {
        setAnswer(qaDictionary.thalassemiaBoneMarrowTransplantsSuccess);
      } else if (lowerCaseQuestion.includes("lifestyle changes")) {
        setAnswer(qaDictionary.thalassemiaLifestyleChanges);
      } else if (lowerCaseQuestion.includes("disease progression")) {
        setAnswer(qaDictionary.thalassemiaDiseaseProgression);
      } else if (lowerCaseQuestion.includes("transfusion related complications")) {
        setAnswer(qaDictionary.thalassemiaTransfusionRelatedComplications);
      } else if (lowerCaseQuestion.includes("splenomegaly")) {
        setAnswer(qaDictionary.thalassemiaSplenomegaly);
      } else if (lowerCaseQuestion.includes("diagnosis in adults")) {
        setAnswer(qaDictionary.thalassemiaDiagnosisInAdults);
      } else if (lowerCaseQuestion.includes("inherited disorder")) {
        setAnswer(qaDictionary.thalassemiaInheritedDisorder);
      } else if (lowerCaseQuestion.includes("in subcontinent")) {
        setAnswer(qaDictionary.thalassemiaInSubcontinent);
      } else if (lowerCaseQuestion.includes("prenatal diagnosis")) {
        setAnswer(qaDictionary.thalassemiaPrenatalDiagnosis);
      } else if (lowerCaseQuestion.includes("transfusion support")) {
        setAnswer(qaDictionary.thalassemiaTransfusionSupport);
      } else if (lowerCaseQuestion.includes("emergent care")) {
        setAnswer(qaDictionary.thalassemiaEmergentCare);
      } else if (lowerCaseQuestion.includes("monitoring")) {
        setAnswer(qaDictionary.thalassemiaMonitoring);
      } else if (lowerCaseQuestion.includes("gene editing")) {
        setAnswer(qaDictionary.thalassemiaGeneEditing);
      } else if (lowerCaseQuestion.includes("asymptomatic carriers")) {
        setAnswer(qaDictionary.thalassemiaAsymptomaticCarriers);
      } else if (lowerCaseQuestion.includes("stem cell research")) {
        setAnswer(qaDictionary.thalassemiaStemCellResearch);
      } else if (lowerCaseQuestion.includes("global prevalence")) {
        setAnswer(qaDictionary.thalassemiaGlobalPrevalence);
      } else if (lowerCaseQuestion.includes("blood screening")) {
        setAnswer(qaDictionary.thalassemiaBloodScreening);
      } else if (lowerCaseQuestion.includes("transfusion iron balance")) {
        setAnswer(qaDictionary.thalassemiaTransfusionIronBalance);
      } else if (lowerCaseQuestion.includes("alternative treatments")) {
        setAnswer(qaDictionary.thalassemiaAlternativeTreatments);
      } else {
        setAnswer("I'm sorry, I don't have information on that topic.");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-50 to-teal-100 p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
        <h1 className="text-4xl font-extrabold text-teal-700 tracking-wide text-center mb-6">
          Parent Dashboard
        </h1>

        <div className="space-y-6">
          <div>
            <label htmlFor="childName" className="block text-lg font-semibold text-teal-800 mb-2">
              Child's Name
            </label>
            <input
              type="text"
              id="childName"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              className="w-full px-4 py-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter child's name"
            />
          </div>

          <div>
            <label htmlFor="lastTransfusionDate" className="block text-lg font-semibold text-teal-800 mb-2">
              Last Blood Transfusion Date
            </label>
            <input
              type="date"
              id="lastTransfusionDate"
              value={lastTransfusionDate}
              onChange={(e) => setLastTransfusionDate(e.target.value)}
              className="w-full px-4 py-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              onClick={handleSubmitTransfusion}
              className="mt-3 w-full py-3 bg-teal-600 text-white rounded-lg shadow-md transition-all duration-300 transform hover:bg-teal-700 hover:scale-105"
            >
              Set Reminder
            </button>
          </div>

          {transfusionReminder && (
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-teal-800">Reminder</h2>
              <p className="text-teal-700">{transfusionReminder}</p>
            </div>
          )}

          <div>
            <label htmlFor="healthLog" className="block text-lg font-semibold text-teal-800 mb-2">
              Health Progress Log
            </label>
            <textarea
              id="healthLog"
              value={healthLog}
              onChange={(e) => setHealthLog(e.target.value)}
              className="w-full px-4 py-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter health progress or notes"
              rows={4}
            ></textarea>
            <button
              onClick={handleAddLog}
              className="mt-3 w-full py-3 bg-teal-600 text-white rounded-lg shadow-md transition-all duration-300 transform hover:bg-teal-700 hover:scale-105"
            >
              Add Log
            </button>
          </div>

          <div>
            <label htmlFor="question" className="block text-lg font-semibold text-teal-800 mb-2">
              Ask a Question about Thalassemia
            </label>
            <input
              type="text"
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full px-4 py-3 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Ask about symptoms, treatment, cause, etc."
            />
            <button
              onClick={handleQuestionSubmit}
              className="mt-3 w-full py-3 bg-teal-600 text-white rounded-lg shadow-md transition-all duration-300 transform hover:bg-teal-700 hover:scale-105"
            >
              Get Answer
            </button>

            {answer && (
              <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h2 className="text-xl font-semibold text-yellow-800">Answer</h2>
                <p className="text-yellow-700">{answer}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parent;