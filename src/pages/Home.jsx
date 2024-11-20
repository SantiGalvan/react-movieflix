import { useState, useEffect, useRef } from "react";
import Carousel from "../components/Carousel/Carousel";
import axios from "axios";
import { useLoader } from "../contexts/LoaderContext";

const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {

    const [trendigMovies, setTrendingMovies] = useState();
    const [trendingTv, setTrendingTv] = useState();
    const [weekMovies, setWeekMovies] = useState(false);
    const [weekTv, setWeekTv] = useState(false);

    const { loader, setLoader } = useLoader();

    const fetchTrendingMovies = async bool => {
        const time = bool ? 'week' : 'day';
        const res = await axios.get(`https://api.themoviedb.org/3/trending/movie/${time}?${apiKey}&language=it-IT`);
        const trending = res.data.results;
        setTrendingMovies(trending);
    }

    const fetchTrendingTv = async bool => {
        const time = bool ? 'week' : 'day';
        const res = await axios.get(`https://api.themoviedb.org/3/trending/tv/${time}?${apiKey}&language=it-IT`);
        const trending = res.data.results;
        setTrendingTv(trending);
    }

    const timeout = () => {
        setTimeout(() => {
            setLoader(true);
        }, 500);
    }

    useEffect(() => {
        timeout();
    }, [])

    // UseEffect per i Film
    useEffect(() => {
        fetchTrendingMovies(weekMovies)
    }, [weekMovies]);

    // UseEffect per le Serie TV
    useEffect(() => {
        fetchTrendingTv(weekTv)
    }, [weekTv]);

    return (
        <>

            {loader &&
                <main>

                    {/* Carosello dei top film della settimana */}
                    <Carousel
                        type={'movies'}
                        movies={trendigMovies}
                        title="Film popolari"
                        toogleChange={() => setWeekMovies(!weekMovies)}
                        toogleChecked={weekMovies}
                    />

                    {/* Carosello delle top serie tv della settimana */}
                    <Carousel
                        type={'tv'}
                        movies={trendingTv}
                        title="Serie Tv popolari"
                        toogleChange={() => setWeekTv(!weekTv)}
                        toogleChecked={weekTv}
                    />

                </main>
            }

        </>
    )
}

export default Home;