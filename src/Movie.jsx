import React from 'react';
import { useParams, Link } from 'react-router-dom';
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
      <nav className="bg-white w-full md:w-1/5 p-4 border-b md:border-r rounded-sm">
        <ul className='bg-white'>
          <img src={Logo} alt="MovieBox" className="mb-10 mx-auto md:mx-0"></img>

          <div className="item flex items-center mb-6 md:mb-10 ml-2 p-3">
            <img src={Home} alt="Home" className="mb-3"></img>
            <Link to="/">
            <h1 className="mb-3 text-xl ml-2">Home</h1>
            </Link>
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
          <a href={movieData.homepage}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt=""
            className="w-full md:w-1/2 mx-auto"
          ></img></a>
        </div>
        <div className="info flex flex-wrap items-center mb-8">
          <h1 data-testid="movie-title" className="w-full md:w-auto mb-3 md:mr-10 p-3">{movieData.original_title}</h1>
          <h1 data-testid="movie-release-date" className="w-full md:w-auto mb-3 md:mr-10 p-3">{movieData.release_date}</h1>
          <h1 data-testid="movie-runtime" className="w-full md:w-auto mb-3 md:mr-10 p-3">{movieData.runtime} minutes</h1>
          {movieData.length === 0 ? null :movieData.genres.map((genre)=>(
            <span key={genre.id} className='w-1/4 mr-2 md:w-auto mb-3 md:mr-10 p-3 text-red-400 border border-red-950 rounded-md'>{genre.name}</span>
          ))}
        </div>
        <h1 data-testid="movie-overview" className="mt-8 p-3 mb-3">
          {movieData.overview}
        </h1>
        <h1 className='mb-3 p-3'>Production Companies:</h1>
        {movieData.length === 0 ? null :movieData.production_companies.map((genre)=>(
            <span key={genre.id} className='w-1/4 p-3 mr-2 md:w-auto mb-3 md:mr-10  text-red-400 border border-red-950 rounded-md'>{genre.name}</span>
          ))}
      </main>
    </div>
  );
}

export default MovieDetails;




