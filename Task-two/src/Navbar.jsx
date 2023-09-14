import React, { useState } from "react";
import './Navbar.css';
import './index.css'
import Logo from './assets/Logo.svg';
import Menu from './assets/Menu.svg';
import search from './assets/Search.svg';
import IMDB from './assets/imdb.svg';
import rt from './assets/tomato.svg';
import playBtn from './assets/Play.svg';

function Navbar({ data, onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = () => {
    // Call the onSearch callback with the searchInput value
    onSearch(searchInput);
  };

  const movie = data && data.length >= 2 ? data[0] : null;
  const backImg = movie ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : '';
  const backgroundStyle = {
    backgroundImage: `url(${backImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <nav className="nav flex flex-col md:flex-row justify-between items-center p-5 text-white mb-20">
        <div className="left flex-1">
          <img src={Logo} data-testid='movie-poster' alt="logo" className="logo-img ml-3" />
        </div>
        <div className="center flex-1 text-center mt-5 md:mt-0">
          <input
            type="text"
            className="input flex p-3 border-white text-black w-full"
            placeholder="What do you want to watch?"
            value={searchInput}
            onChange={handleSearchChange}
          />
          <img src={search} alt="Search" className="search mx-auto mt-2 md:mt-0" onClick={handleSearchSubmit} />
        </div>
        <div className="right flex-1 flex justify-end items-center">
          <h1 className="hidden md:block">Sign in</h1>
          <img src={Menu} alt='menu' className="menu-img ml-5" />
        </div>
      </nav>
      {movie && (
        <div className="info bg-red w-full md:w-1/2 text-red-600 mt-5 p-5 pb-20">
          <h1 className="text-3xl md:text-5xl mb-3">{movie.original_title}</h1>
          <section className="section flex mt-5">
            <img src={IMDB} alt="IMDB" className="mr-2"></img>
            <p className="mr-5">{movie.vote_average}/10</p>
            <img src={rt} alt="Rotten Tomatoes" className="mr-2"></img>
            <p className="mr-2">8.8</p>
          </section>
          <h2 className="text-xl md:text-2xl mt-5 mb-3 ">{movie.overview}</h2>
          <button className="mb-5 md:mb-20 bg-red-600 hover:bg-red-500 rounded-md text-white flex items-center p-2 pl-5 pr-5 cursor-pointer">
            <img src={playBtn} alt="Play" className="mr-2"></img>WATCH TRAILER
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
