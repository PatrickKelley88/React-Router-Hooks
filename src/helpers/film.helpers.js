/**
 * 
 * @param {Array} list An array of "movie" objects. They must have a director property 
 * @param {string} director the name of the director (case-sensetive) 
 * @returns A filtered array of movies that match the given director
 */
export function filterFilmsByDirector(list, director) {
    if (director) {
        return list.filter((movieObj) => {
            if (movieObj.director == director) {
                return true;
            }
        });
    }
    return list;
}

/**
 * 
 * @param {Array} list An array of "movie" objects 
 * @param {string} prop A single property on a "movie" object
 * @returns A cumulative list of items including every unique value that exists in the list at the specified property
 */
export function getListOf(list, prop) {
    const tempObj = {};
    for (let i = 0; i < list.length; i++) {
        if (!tempObj[list[i][prop]]) {
            tempObj[list[i][prop]] = true;
        }
    }

    return Object.keys(tempObj);
}


/**
 * 
 * @param {Array} list An array of "movie objects"
 * @returns an object with the accumulate score, average score, total count, and latest release date for the given list of movies
 */

export function getFilmStats(list) {
    // the total movie count is simply the length of the array
    const total = list.length;
    // this adds the scores together
    let acc_score = 0;
    for (let i=0; i<list.length; i++) {
        acc_score += Number(list[i].rt_score);
    }
    // this calculates avg score
    const avg_score = acc_score / total;
    // looks through release dates and finds the highest number 
    const latest = Math.max(...list.map((movie) => Number(movie.release_date)));

    // let mostRecent = Number(list [0].release_date);
    // for (let i = 1; i < list.length; i++) {
    //     if(Number(list[i].release_date) > mostRecent) {
    //         mostRecent = Number(list[i].release_date);
    //     }
    // }

return {
     acc_score,
     avg_score,
     total,
     latest
 }
}

