import axios from 'axios';
import { KEY, BASE_URL, LOAD_MOVIE_LIST, LOAD_CURRENT_MOVIE } from './constants';
import movieModel from 'models/MovieModel';

const LOAD_LIST_URL = `${BASE_URL}movie/popular${KEY}`;
const getLoadCurrentMovieUrl = id => `${BASE_URL}movie/${id}${KEY}`;

const createModelsArray = (data, typeModel) => {
    let model;

    if (Array.isArray(data)) {
        model = data.map((item) => {
            return typeModel(item);
        });
    }

    return model || [];
};

export const loadCurrentMovie = id => dispatch => {
    axios
    .get(getLoadCurrentMovieUrl(id))
    .then(res => dispatch(lodedCurrentMovie(movieModel(res.data))))
    .catch(console.log);
}

export const loadMovieList = () => dispatch => {
    axios
    .get(LOAD_LIST_URL)
    .then(res => dispatch(lodedMovieList(createModelsArray(res.data.results, movieModel))))
    .catch(console.log);
}

const lodedCurrentMovie = data => ({
    type: LOAD_CURRENT_MOVIE,
    payload: data,
})

const lodedMovieList = data => ({ 
    type: LOAD_MOVIE_LIST,
    payload: data,
});