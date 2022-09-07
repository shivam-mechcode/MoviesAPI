import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  const  fetchMovieHandler=async()=>{
    setLoading(true)
    setError(null)
    try{
      const response = await fetch('https://swapi.dev/api/films/')
      if(!response.ok){
       throw new Error('Something is wrong')
      }
    console.log(response)
     const data = await response.json()
    
      const transformedMovies = data.results.map(movieData => {
        return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date,
          };
      })
      console.log(data.results)

      setMovies(transformedMovies)
    } 
    catch(error){
      console.log(error)
      setError(false) 
    }
    setLoading(false)
  }
    return (
    <React.Fragment>
      <section>
        
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
        
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length===0 && !error && <p>Found no Movies</p>}
        {!isLoading && error && <p>{error}</p>} 
        {isLoading && <p>Loading...</p>}
        
      </section>
    </React.Fragment>
  );
  }

export default App;


// import React, { useState } from 'react';

// import MoviesList from './components/MoviesList';
// import './App.css';
// function App() {
//   const [movies, setMovies] = useState([]);
//   const [isLoading, setLoading] = useState(false)
//   const [error, setError] = useState(null)


//   const  fetchMovieHandler=async()=>{
//     setLoading(true)
//     setError(null)
//     try{
//       const response = await fetch('https://swapi.dev/api/film/')
//       if(!response.ok){
//        throw new Error('Something is wrong')
//       }
//     console.log(response)
//      const data = await response.json()
    
//       const transformedMovies = data.results.map(movieData => {
//         return {
//             id: movieData.episode_id,
//             title: movieData.title,
//             openingText: movieData.opening_crawl,
//             releaseDate: movieData.release_date,
//           };
//       })
//       console.log(data.results)

//       setMovies(transformedMovies)
//     } 
//     catch(error){
//       console.log(error)
//       setError(false) 
//     }
//     setLoading(false)
//   }
//     return (
//     <React.Fragment>
//       <section>
        
//         <button onClick={fetchMovieHandler}>Fetch Movies</button>
        
//       </section>
//       <section>
//         {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
//         {!isLoading && movies.length===0 && !error && <p>Found no Movies</p>}
//         {!isLoading && error && <p>{error}</p>} 
//         {isLoading && <p>Loading...</p>}
        
//       </section>
//     </React.Fragment>
//   );
//   }
// export default App;