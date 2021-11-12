const SearchBar = () => {
    return(
        <form action="/" method = "get">
            <label htmlFor="header-search">
                <span className="visuallyHidden"> Search videogames</span>
            </label>
            <input  type = "text" id="header-search" placeholder="Search videogames" name="s"/>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchBar