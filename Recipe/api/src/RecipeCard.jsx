// import React from 'react';

// function RecipeCard({ recipe }) {
//   const { label, image, ingredients } = recipe.recipe;

//   return (
//     <div className="recipe-card">
//       <h2>{label}</h2>
//       <img src={image} alt={label} />
//       <h3>Ingredients:</h3>
//       <ul>
//         {ingredients.map((ingredient, index) => (
//           <li key={index}>{ingredient.text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default RecipeCard;


import React from 'react';
import './RecipeCard.css'; // Import CSS file

function RecipeCard({ recipe }) {
  const { label, image, ingredients } = recipe.recipe;

  return (
    <div className="recipe-card">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <h3>Ingredients:</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeCard;
