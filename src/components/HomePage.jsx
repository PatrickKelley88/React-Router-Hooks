function HomePage() {
    return(
        <>
            <h1>Movie Watchlist</h1>
            <form>
                <label htmlFor="movieInput">Enter movie to watch later</label>
                <input type="text" name="movieInput" id="movieInput"/>
                <button>Add Movie</button>
            </form>
            <ul>
                <li>
                    <p>Jurassic Park</p>
                </li>
                <li>
                    <p>Smokey and the Bandit</p>
                </li>
                <li>
                    <p>Gleaming the Cube</p>
                </li>
            </ul>
        </>
    )
}

export default HomePage;