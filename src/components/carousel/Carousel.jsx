import CarouselCard from "./CarouselCard";

const Carousel = ({ movies, title }) => {

    return (
        <section className="overflow-hidden w-full pt-4">

            <h2 className="text-white text-center text-5xl mb-6">{title}</h2>

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

        </section >
    )
}

export default Carousel;