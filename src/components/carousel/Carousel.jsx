import CarouselCard from "./CarouselCard";

const Carousel = ({ movies }) => {

    return (
        <section className="overflow-hidden w-full pt-8" id="carousel">

            <h2 className="text-white text-center text-5xl pl-6 mb-6">I migliori di sempre</h2>

            <div className="carousel">

                <div className="flex whitespace-nowrap animate-scroll">

                    {movies?.map(movie => (
                        <CarouselCard key={`movie-1-${movie.id}`} movie={movie} />
                    ))}

                    {movies?.map(movie => (
                        <CarouselCard key={`movie-2-${movie.id}`} movie={movie} />
                    ))}

                </div>

            </div>

        </section>
    )
}

export default Carousel;