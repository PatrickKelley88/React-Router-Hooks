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
export function getListOf(list, prop){
    const tempObj = {};
    for (let i = 0; i < list.length; i++) {
        if (!tempObj[list[i][prop]]) {
            tempObj[list[i][prop]] = true;
        }
    }

    return Object.keys(tempObj);
}

