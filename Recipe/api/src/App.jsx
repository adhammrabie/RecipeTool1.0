import React, { useState } from 'react';
import Search from './Search';
import RecipeCard from './RecipeCard';
import Register from './Register';
function App() {
  const [recipes, setRecipes] = useState([]);

  //update recipes data from API
  const updateRecipes = (data) => {
    setRecipes(data);
  };

//   return (
//     <div>
// <Register/>
//   </div>
//   );
// }



return (
  <div>
  <h1>Recipe App</h1>
  <Search updateRecipes={updateRecipes} />
  <div className="recipe-container">
    {recipes.map((recipe, index) => (
      <RecipeCard key={index} recipe={recipe} />
    ))}
  </div>
</div>
);
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Auth from './auth';
// import Search from './Search';
// import RecipeCard from './RecipeCard';

// function App() {
//   return (
//     <Router>
//       <div>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/auth" component={Auth} />
//           <Route path="/recipes" component={RecipeSearch} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// const Home = () => (
//   <div>
//     <h1>Welcome to Recipe App</h1>
//     <p>Please login or sign up to continue.</p>
//     <a href="/auth">Login / Sign Up</a>
//   </div>
// );

// const RecipeSearch = () => (
//   <div>
//     <h1>Recipe Search Tool</h1>
//     <Search />
//     <RecipeCard />
//   </div>
// );

// export default App;


// import React, { useState } from 'react';
// import './app.css'; // Import CSS file
// import Search from './Search';
// import RecipeCard from './RecipeCard';

// function App() {
//   const [recipes, setRecipes] = useState([]);

//   // Function to update recipes state with data from API
//   const updateRecipes = (data) => {
//     setRecipes(data);
//   };

//   return (
//     <div className="container">
//       <h1>Recipe App</h1>
//       <Search updateRecipes={updateRecipes} />
//       <div className="recipe-container">
//         {recipes.map((recipe, index) => (
//           <RecipeCard key={index} recipe={recipe} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;
