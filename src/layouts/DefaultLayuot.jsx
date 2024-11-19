import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const DefaultLayout = () => {

    const [genresList, setGenresList] = useState();

    const fetchGenresList = async () => {
        const res = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?${apiKey}&language=it-IT`);
        const genres = res.data.genres;
        setGenresList(genres);
    }

    useEffect(() => {
        fetchGenresList();
    }, [])

    return (
        <>

            <Header genres={genresList} />

            <main>

                <Outlet />

            </main>

        </>
    )
}

export default DefaultLayout;