import get from 'lodash/get';

const getPosterPath = posterPath => `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${posterPath}`;
const getBackgroundPosterPath = posterPath => `https://www.themoviedb.org/t/p/w300_and_h450_bestv2_filter(blur)/${posterPath}`;
/**
 * @typedef {Object} MovieModel
 *
 */
export default (item) => {
    return {
        id: get(item, 'id') || 0,
        title: get(item, 'title') || '',
        tagline:  get(item, 'tagline') || '',
        original_title: get(item, 'original_title') || '',
        overview: get(item, 'overview') || '',
        posterPath: getPosterPath(get(item, 'poster_path') || ''),
        backGroundPoster: getPosterPath(get(item, 'backdrop_path') || ''),
        genres: get(item, 'genres') || [],
        budget: get(item, 'budget') || '',
        voteAverage: get(item, 'vote_average') || '',
        webSite: get(item, 'homepage') || '',
    };
};
