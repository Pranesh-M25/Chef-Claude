import React from "react";
import Recipe from "./RecipeInstructions";
// 1. Import the custom hook we just created
import { useGemini } from "./gemini.js";

export function Form() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  // 2. Use the hook to get the state and function
  const { generatedRecipe, isLoading, fetchRecipe } = useGemini();

  const listItems = ingredients.map((list) => <li key={list}>{list}</li>);

  function Submit(formData) {
    const ing = formData.get("ingredient").trim();
    if (ing) {
      setIngredients((prevIng) => [...prevIng, ing]);
    }
    formData.set("ingredient", "");
  }

  // 3. This function now calls the fetchRecipe from our hook
  function handleGetRecipe() {
    setRecipeShown(true);
    fetchRecipe(ingredients);
  }

  return (
    <main>
      <form action={Submit} className="form">
        <input className="inputBox" placeholder="Ingredients here..." type="text" name="ingredient" />
        <button className="addBtn">Add ingredient</button>
      </form>
      <section className="ingList">
        {ingredients.length > 0 && (
          <div className="bullet">
            <h1 className="ingTitle">Ingredients on Hand: </h1>
            <ul>{listItems}</ul>
          </div>
        )}
        {ingredients.length >= 5 && (
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            {/* 4. The button calls our new handler function */}
            <button onClick={handleGetRecipe} disabled={isLoading}>
              {isLoading ? "Generating..." : "Get a recipe"}
            </button>
          </div>
        )}
      </section>

      {/* This part remains the same, passing the props down */}
      {recipeShown && <Recipe recipeText={generatedRecipe} isLoading={isLoading} />}
    </main>
  );
}