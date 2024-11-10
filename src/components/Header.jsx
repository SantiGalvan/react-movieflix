const Header = ({ genres }) => {
    return (
        <header className="h-[100px] bg-gray-950 flex px-6 items-center justify-between" >

            {/* Titolo */}
            <div>
                <h1 className="text-5xl uppercase font-bold text-red-600" >MovieFlix</h1>
            </div>

            {/* Filtri */}
            <div>
                <select
                    className="w-56 px-3 text-base mr-4 rounded-md border-0 h-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600"
                    name="genre"
                    id="genre">

                    <option className="hover:bg-red-600 text-base active:bg-red-600" value="All">All</option>

                    {genres?.map(genre => (
                        <option className="hover:bg-red-600 text-base active:bg-red-600" value={genre.id}>{genre.name}</option>
                    ))}

                </select>

                <input className="w-80 placeholder:text-bold placeholder:text-base text-bold text-base placeholder:text-gray-600 px-3 rounded-md border-0 h-10 text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600" type="text" placeholder="Cerca un film o una serie TV" />

            </div>

        </header>
    )
}

export default Header;
