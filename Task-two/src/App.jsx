

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom"
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import MovieDetails from "./Movie";


function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const url = "https://api.themoviedb.org/3/discover/movie";
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
        setData(json.results);
      } catch (err) {
        console.error("error: " + err);
      }
    };

    fetchData();
  }, []);
  const filterData = (query) => {
    const filteredMovies = data.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredMovies);
  };

   return (<>
   <Routes>
        <Route path="/" element={ <><Navbar data={data} onSearch={filterData} /><Body data={filteredData.length > 0 ? filteredData : data} /> <Footer /></> } />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      </>
  );
}





 

export default App;



