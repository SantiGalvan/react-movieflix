import { useState, useEffect } from "react";
import Carousel from "../components/carousel/Carousel";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [trendingTv, setTrendingTv] = useState();
    const [trendigMovies, setTrendingMovies] = useState();


    const fetchTrendingMovies = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?${apiKey}&language=it-IT`);
        const trending = res.data.results;
        setTrendingMovies(trending);
    }

    const fetchTrendingTv = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?${apiKey}&language=it-IT`);
        const trending = res.data.results;
        setTrendingTv(trending);
    }

    useEffect(() => {
        fetchTrendingMovies();
        fetchTrendingTv();
    }, [])

    return (
        <>

            <main>

                {/* Carosello dei top film della settimana */}
                <Carousel movies={trendigMovies} title="Film popolari" />

                {/* Carosello delle top serie tv della settimana */}
                <Carousel movies={trendingTv} title="Serie Tv popolari" />

            </main>

        </>
    )
}

export default Home;