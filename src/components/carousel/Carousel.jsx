import { useState } from "react";
import CarouselCard from "./CarouselCard";
import Toogle from "../Toogle/Toogle";

const Carousel = ({ movies, title, type, toogleChange, toogleChecked }) => {

    const [isType, setIsType] = useState(false);

    return (
        <section className="overflow-x-clip w-full pt-8">

            <div className="mb-6 flex items-center justify-center gap-5">

                {/* Titolo */}
                <h2 className="text-white text-center text-5xl uppercase">{title}</h2>

                {/* Toggle */}
                <Toogle
                    isChecked={toogleChecked}
                    handleChange={toogleChange}
                    type={type}
                />

            </div>


            <div className="flex whitespace-nowrap animate-scroll">

                {movies?.map(movie => (
                    <CarouselCard key={`movie-1-${movie.id}`} movie={movie} />
                ))}

                {movies?.map(movie => (
                    <CarouselCard key={`movie-2-${movie.id}`} movie={movie} />
                ))}

            </div>


        </section >
    )
}

export default Carousel;