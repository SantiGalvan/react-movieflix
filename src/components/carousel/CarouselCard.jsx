const CarouselCard = ({ movie }) => {

    const coverSrc = () => {
        if (!movie.poster_path) {
            return 'src/assets/img/not-image.png'
        }

        return `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
    }

    const setAverage = vote => {
        const average = (vote.toFixed(1) % 1 === 0) ? Math.floor(vote.toFixed(1)) : vote.toFixed(1);
        const percentage = Math.floor(vote * 10);
        return { average, percentage };
    }

    return (
        <div className="m-2 w-[200px] h-[250px] hover:scale-[1.3] hover:z-10 transition-all duration-250 ease-in-out flex-shrink-0 cursor-pointer relative">

            <div className="rounded-xl overflow-hidden h-full w-full ">
                <img className="h-full w-full" src={`${coverSrc()}`} alt={movie.title} />
            </div>

            {movie.vote_average !== 0 &&
                <div className='text-white border-[3px] border-green-300 absolute top-[250px] -translate-y-1/2 left-2 w-12 h-12 bg-[#081c22] rounded-full flex items-center justify-center'>
                    <span>{setAverage(movie.vote_average).average}</span>
                </div>
            }

        </div>
    )
}

export default CarouselCard;