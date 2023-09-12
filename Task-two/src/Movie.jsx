import React from 'react';
import { useParams } from 'react-router-dom';
import Logo from './assets/Logo2.svg';
import Home from './assets/Home.svg';
import TV from './assets/TV Show.svg';
import play from './assets/Movie Projector.svg';
import calendar from './assets/Calendar.svg';

function MovieDetails() {
  const [movieData, setMovieData] = React.useState([]);
  const { id } = useParams();

  
 React.useEffect(() => {
        console.log(id)
const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmRmNDk3OThlMThkNmMwNTU4NTc1NjA0OTRkNzlhNyIsInN1YiI6IjY0ZmY1Y2I5ZGI0ZWQ2MTAzM2ExOWJlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kk69DWPOZav3eCeXNEaCJNxfsRrviGmrm3uuEaT8f0k", // Replace with your API key
      },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setMovieData(json)
        console.log(json)
      } catch (err) {
        console.error("error: " + err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <nav className="bg-white w-full md:w-1/5 p-4 border-b md:border-r rounded">
        <ul className='bg-white'>
          <img src={Logo} alt="MovieBox" className="mb-10 mx-auto md:mx-0"></img>

          <div className="item flex items-center mb-6 md:mb-10 ml-2 p-3">
            <img src={Home} alt="Home" className="mb-3"></img>
            <h1 className="mb-3 text-xl ml-2">Home</h1>
          </div>

          <div className="item flex items-center mb-6 md:mb-10 ml-2 bg-pink-200 p-3">
            <img src={play} alt="play" className="mb-3"></img>
            <h1 className="mb-3 text-xl ml-2">Movies</h1>
          </div>

          <div className="item flex items-center mb-6 md:mb-10 ml-2 p-3">
            <img src={TV} alt="TV" className="mb-3"></img>
            <h1 className="mb-3 text-xl ml-2">Streaming</h1>
          </div>

          <div className="item flex items-center ml-2 p-3">
            <img src={calendar} alt="upcoming" className="mb-3"></img>
            <h1 className="mb-3 text-xl ml-2">Calendar</h1>
          </div>
        </ul>
      </nav>

      <main className="w-full md:w-4/5 p-4">
        <div className="main-image animate-slide-up mb-8">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt=""
            className="w-full md:w-1/2 mx-auto"
          ></img>
        </div>
        <div className="info flex flex-wrap items-center mb-8">
          <h1 data-testid="movie-title" className="w-full md:w-auto mb-3 md:mr-10 p-3">{movieData.original_title}</h1>
          <h1 data-testid="movie-release-date" className="w-full md:w-auto mb-3 md:mr-10 p-3">{movieData.release_date}</h1>
          <h1 data-testid="movie-runtime" className="w-full md:w-auto mb-3 md:mr-10 p-3">{movieData.runtime}</h1>
          
        </div>
        <h1 data-testid="movie-overview" className="mt-8">
          {movieData.overview}
        </h1>
      </main>
    </div>
  );
}

export default MovieDetails;




