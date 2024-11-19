import { useState, useEffect } from "react";
import Carousel from "../components/Carousel/Carousel";
import axios from "axios";
import { useLoader } from "../contexts/LoaderContext";

const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

    const [trendingTv, setTrendingTv] = useState();
    const [trendigMovies, setTrendingMovies] = useState();

    const { loader, setLoader } = useLoader();

    const fetchTrendingMovies = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?${apiKey}&language=it-IT`);
        const trending = res.data.results;
        setTrendingMovies(trending);
        setLoader(true);
    }

    const fetchTrendingTv = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/tv/week?${apiKey}&language=it-IT`);
        const trending = res.data.results;
        setTrendingTv(trending);
        setLoader(true);
    }

    const timeout = () => {
        setTimeout(() => {
            fetchTrendingMovies();
            fetchTrendingTv();
        }, 500);
    }

    useEffect(() => {
        timeout();
    }, [])

    return (
        <>

            {loader &&
                <main>

                    {/* Carosello dei top film della settimana */}
                    <Carousel movies={trendigMovies} title="Film popolari" />

                    {/* Carosello delle top serie tv della settimana */}
                    <Carousel movies={trendingTv} title="Serie Tv popolari" />

                </main>
            }

        </>
    )
}

export default Home;