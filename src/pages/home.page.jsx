import { useState } from "react";


function HomePage() {
    //This will be used for input fields text value
    const [movieTitle, setMovieTitle] = useState("");
    //an Array that holds all the different movie titles
    const[watchList, setWatchList] = useState([]);

    return(
        <>
            <h1>Movie Watchlist</h1>
            <form onSubmit={(submitEvent) => {
                submitEvent.preventDefault();
                //updated our list of movies to include what the user typed into input field
                setWatchList([...watchList, movieTitle]);
                setMovieTitle("");
            }}>
                <label htmlFor="movieInput">Enter movie to watch later</label>
                <input 
                    type="text" 
                    name="movieInput" 
                    id="movieInput"
                    value={movieTitle}
                    onChange={(changeEvent) => { 
                        console.log(changeEvent);
                        setMovieTitle(changeEvent.target.value);
                    }}
                /> 
                <button>Add Movie</button>
            </form>
            <ul id="watchlist"> 
                {watchList.map((title, index) => {
                    return <li key={index}>{title}</li>
                })}
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