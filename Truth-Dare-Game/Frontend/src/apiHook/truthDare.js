import { useState } from "react";

const useTruthDareApi = () => {
  const [truthQuestion, setTruthQuestion] = useState("Click for your question");
const [dareQuestion , setDareQuestion] = useState("Click for your Dare");
  const fetchTruth = async () => {
    try {
      const response = await fetch("https://api.truthordarebot.xyz/v1/truth");
      if (!response.ok) {
        throw new Error("Failed to fetch truth question");
      }
      const data = await response.json();
      console.log(data , "Truth");
      setTruthQuestion(data.question);
    } catch (error) {
      console.error("Error fetching truth question:", error);
      setTruthQuestion("Unable to fetch a truth question at the moment.");
    }
};

const fetchDare = async() =>{
    try{
        const response = await fetch("https://api.truthordarebot.xyz/api/dare")
        if(!response.ok){
            throw new Error("Failed to fetch dare question");
        }
        const data = await response.json();
        setDareQuestion(data.question);
        console.log(data, "Dare");
    }
    catch(error){
        console.error("Error fetching dare question:", error);
        setDareQuestion("Unable to fetch a dare question at the moment.");
    }
}


return { truthQuestion, fetchTruth , fetchDare};
};

export default useTruthDareApi;
