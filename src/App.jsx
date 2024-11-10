import { useState, useEffect } from "react";
import Header from "./components/Header";
import Carousel from "./components/carousel/Carousel";
import axios from "axios";

const apiKey = 'api_key=8bc2cb9796f692eef04d762a324418a9';

const App = () => {

  const [ratedMovies, setRatedMovies] = useState();
  const [genresList, setGenresList] = useState();

  const fetchRatedMovies = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?${apiKey}&language=it-IT`);
    const movies = res.data.results;
    setRatedMovies(movies);
  }

  const fetchGenresList = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?${apiKey}&language=it-IT`);
    const genres = res.data.genres;
    setGenresList(genres);
    console.log(genres);
  }

  useEffect(() => {
    fetchRatedMovies();
    fetchGenresList();
  }, [])

  return (
    <>
      <Header genres={genresList} />
      <main>

        {/* Carosello dei migliori film */}
        <Carousel movies={ratedMovies} />

      </main>
    </>
  )
}

export default App;