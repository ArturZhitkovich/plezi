import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { LOAD_MOVIE_LIST, LOAD_CURRENT_MOVIE } from './constants';
  
const initialState = {
    movies: [],
    movieCurrentList: {},
};
  
function moviesReducer(state = initialState, action) {
    switch (action.type) {
      case LOAD_MOVIE_LIST:
        return {
          ...state,
          movies: action.payload,
        };
      case LOAD_CURRENT_MOVIE:
          return {
            ...state,
            moviesCurrentList: { ...state.moviesCurrentList, [action.payload.id]: action.payload },
          }
      default:
        return state;
    }
  }

const reducers = combineReducers({
    app: moviesReducer,
});

const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;
