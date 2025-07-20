import React, { useState, useEffect } from 'react';

// De API URL wordt hier direct uit de environment gehaald
const API_URL = import.meta.env.PUBLIC_API_URL + '/api/recipes';

// Dit is de Astro RecipeCard component, maar dan in React.
function RecipeCard({ recipe }) {
  return (
    <a href={`/ninja-creami-site/recept/${recipe.slug}`} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 block">
      <div className="p-6">
        <p className="text-sm text-ice-green font-bold mb-2">{recipe.category}</p>
        <h3 className="text-2xl font-serif-display mb-3">{recipe.title}</h3>
        <p className="text-gray-600 line-clamp-3 mb-4">{recipe.short_description}</p>
        {recipe.submitter_name && (
          <p className="text-xs text-gray-500 italic">Ingezonden door: {recipe.submitter_name}</p>
        )}
      </div>
    </a>
  );
}

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Netwerkfout bij het ophalen van recepten.');
        }
        const data = await response.json();
        setRecipes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRecipes();
  }, []);

  if (loading) {
    return <p className="text-center">Recepten worden geladen...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Fout: {error}</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {recipes.length > 0 ? (
        recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)
      ) : (
        <p className="col-span-full text-center">Geen recepten gevonden. Voeg er een toe of kom later terug!</p>
      )}
    </div>
  );
}