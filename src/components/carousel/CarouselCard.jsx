const CarouselCard = ({ movie }) => {

    const coverSrc = () => {
        if (!movie.poster_path) {
            return 'src/assets/img/not-image.png'
        }

        return `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
    }

    return (
        <div className="m-2 w-[350px] h-[300px] flex-shrink-0 cursor-pointer">

            <div className="rounded-3xl overflow-hidden h-full w-full hover:scale-105 transition-all duration-150 ease-in-out">
                <img className="h-full w-full" src={`${coverSrc()}`} alt={movie.title} />
            </div>

        </div>
    )
}

export default CarouselCard;