import { useState, useEffect } from "react";
import Header from "./components/Header";
import Carousel from "./components/carousel/Carousel";
import axios from "axios";

const apiKey = 'api_key=8bc2cb9796f692eef04d762a324418a9';

const App = () => {

  const [genresList, setGenresList] = useState();
  const [trendingTv, setTrendingTv] = useState();
  const [trendigMovies, setTrendingMovies] = useState();

  const fetchGenresList = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?${apiKey}&language=it-IT`);
    const genres = res.data.genres;
    setGenresList(genres);
  }

  const fetchTrendingMovies = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?${apiKey}&language=it-IT`);
    const trending = res.data.results;
    setTrendingMovies(trending);
  }

  const fetchTrendingTv = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?${apiKey}&language=it-IT`);
    const trending = res.data.results;
    setTrendingTv(trending);
    console.log(trending);
  }

  useEffect(() => {
    fetchGenresList();
    fetchTrendingMovies();
    fetchTrendingTv();
  }, [])

  return (
    <>
      <Header genres={genresList} />

      <main>

        {/* Carosello dei top film della settimana */}
        <Carousel movies={trendigMovies} title="Film popolari" />

        {/* Carosello delle top serie tv della settimana */}
        <Carousel movies={trendingTv} title="Serie Tv popolari" />

      </main>

    </>
  )
}

export default App;