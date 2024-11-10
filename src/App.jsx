import { useState, useEffect } from "react";
import Header from "./components/Header";
import Carousel from "./components/carousel/Carousel";
import axios from "axios";

const apiKey = 'api_key=8bc2cb9796f692eef04d762a324418a9';

const App = () => {

  const [ratedMovies, setRatedMovies] = useState();

  const fetchRatedMovies = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?${apiKey}&language=it-IT`);
    const movies = res.data.results;
    setRatedMovies(movies);
  }

  useEffect(() => {
    fetchRatedMovies();
  }, [])

  return (
    <>
      <Header />
      <main>

        {/* Carosello dei migliori film */}
        <Carousel movies={ratedMovies} />

      </main>
    </>
  )
}

export default App;