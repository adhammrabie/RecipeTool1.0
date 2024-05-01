// import React, { useState } from 'react';

// function Search({ updateRecipes }) {
//   const [query, setQuery] = useState('');

//   const handleChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     fetchRecipes();
//   };

//   const fetchRecipes = async () => {
//     const APP_ID = 'a7a6d04f';
//     const APP_KEY = '8c314e986b20eebaf0f65cde8c3b94f2';
//     const response = await fetch(
//       `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
//     );
//     const data = await response.json();
//     updateRecipes(data.hits);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         placeholder="Search for recipes..."
//       />
//       <button type="submit">Search</button>
//     </form>
//   );
// }

// export default Search;



import React, { useState } from 'react';
import './Search.css'; // Import CSS file

function Search({ updateRecipes }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetchRecipes();
  };

  const fetchRecipes = async () => {
    const APP_ID = 'a7a6d04f';
    const APP_KEY = '8c314e986b20eebaf0f65cde8c3b94f2';
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    updateRecipes(data.hits);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for recipes..."
      />
      <button className="search-button" type="submit">Search</button>
    </form>
  );
}

export default Search;
