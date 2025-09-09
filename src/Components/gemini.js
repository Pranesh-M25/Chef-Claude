import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// This is our custom hook
export function useGemini() {
  const [generatedRecipe, setGeneratedRecipe] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // This function will be called from our component
  const fetchRecipe = async (ingredients) => {
    setIsLoading(true);
    setGeneratedRecipe(""); // Clear previous recipe

    try {
      // Initialize the SDK with your API key
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });

      const ingredientsString = ingredients.join(", ");
      const prompt = `You are a master chef. Based on the following ingredients, create a delicious recipe. Provide a title, a list of ingredients, the recipe must only contain the ingridients which have been mentioned and do not add any other extra ingredients. Provide step-by-step instructions. Please format the response using markdown. The ingredients are: ${ingredientsString}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      setGeneratedRecipe(text);
    } catch (error) {
      console.error("Error fetching recipe:", error);
      setGeneratedRecipe("Sorry, I couldn't get a recipe for you. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // The hook returns the state and the function to the component
  return { generatedRecipe, isLoading, fetchRecipe };
}