import React, { useEffect, useState } from "react";
import "./index.css";
import SearchIcon from "./Search.svg";
import Movie from "./Movie";

const API_URL = "https://www.omdbapi.com?apikey=6aed74a0";

// const App = () => {
//   const [movies, setMovies] = useState([]);
// const [searchItem, setSearchItem] = useState('')

//   useEffect(() => {
//     searchMovies("Spiderman");
//   }, []);

//   const searchMovies = async (title) => {
//     const res = await fetch(`${API_URL}&s=${title}`);
//     const data = await res.json();
//     setMovies(data.Search);
//   };

//   return (
//     <div className="app">
//       <h1>CinemaLand</h1>
//       <div className="search">
//         <input
//           placeholder="Search your movies"
//           value={searchItem}
//           onChange={(e) => setSearchItem(e.target.value)}
//         />
//         <img src={SearchIcon} alt="search" onClick={() =>searchMovies(searchItem)} />
//       </div>

//       {
//       movies?.length > 0
//       ? (
//         <div className="container">
//           {movies.map((movie) => (
//             <Movie movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div className="empty">
//           <h2>No movies found</h2>
//         </div>
//       )}
//     </div>
//   );
// };

const App = () => {
  const [movies, setMovies] = useState([])
const [searchItem, setSearchItem] = useState('')
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };

  return(
    <div className="app">
      <h1>CinemaLand</h1>
      <div className="search">
        <input
          placeholder="Search your movies"
          value={searchItem}
          onChange={(e) =>setSearchItem(e.target.value) }
        />
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchItem)} />
      </div>

       { 
       movies?.length > 0
        ? 
        (<div className="container">
          
          {movies.map((movie)=>(
            <Movie movie={movie}/>
          ))}
        </div>
        )
      :
        (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
        )
      }
    </div>
  )
};
export default App;
