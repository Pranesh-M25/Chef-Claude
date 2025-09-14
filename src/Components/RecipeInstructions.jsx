import ReactMarkdown from "react-markdown";

export default function Recipe({ recipeText, isLoading }) {
  return (
    <section>
      <article className="suggested-recipe-container" aria-live="polite">
        <h2>Chef Claude Recommends:</h2>

        {/* 3. Display a loading message or the recipe */}
        {isLoading && <p>Thinking of a delicious recipe for you...</p>}

        {recipeText && (
          <div>
            {/* 4. Use ReactMarkdown to render the recipe from the API */}
            <ReactMarkdown>{recipeText}</ReactMarkdown>
          </div>
        )}
      </article>
    </section>
  );
}
