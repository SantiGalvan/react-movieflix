import CarouselCard from "./CarouselCard";

const Carousel = ({ movies, title }) => {

    return (
        <section className="overflow-x-clip w-full pt-8">

            <h2 className="text-white text-center text-5xl uppercase mb-6">{title}</h2>


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