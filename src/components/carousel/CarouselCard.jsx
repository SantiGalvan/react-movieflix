const CarouselCard = ({ movie }) => {

    const coverSrc = () => {
        if (!movie.poster_path) {
            return 'src/assets/img/not-image.png'
        }

        return `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
    }

    return (
        <div className="m-2 w-[250px] h-[200px] hover:scale-[2] transition-all duration-250 ease-in-out flex-shrink-0 cursor-pointer">

            <div className="rounded-xl overflow-hidden h-full w-full ">
                <img className="h-full w-full" src={`${coverSrc()}`} alt={movie.title} />
            </div>

        </div>
    )
}

export default CarouselCard;