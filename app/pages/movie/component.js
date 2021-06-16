import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link  } from 'react-router-dom';
import get from 'lodash/get';
import { loadCurrentMovie } from 'common/actions';
import Description from './Decription';
import Card from 'components/Card';

import './index.scss';

const baseClassName = 'movie-page';

const getClassNames = () => {
    return {
        component: baseClassName,
        content: `${baseClassName}__content`,
        back: `${baseClassName}__back`,
        description: `${baseClassName}__description`,
        backGroundPoster: `${baseClassName}__background-poster`,
    };
};
const classNames = getClassNames();

const movieSelector = movieId => state => get(state, `app.moviesCurrentList[${movieId}]`) || null;

const MoviePage = () => {
    const dispatch = useDispatch();
    const { movieId } = useParams();
    const movie = useSelector(movieSelector(movieId));
    
    useEffect(() => {
        if (!movie) {
            dispatch(loadCurrentMovie(movieId));
        }
    }, []);

    if (!movie) {
        return null;
    }

    const { backGroundPoster, posterPath, titile } = movie;

    return (
        <div className={classNames.component}>
            <div className={classNames.content}>
                <div className={classNames.backGroundPoster}>
                    <img src={backGroundPoster} alt={titile} />
                </div>
                <div className={classNames.back}>
                    <Link to={'/'} >Back</Link>
                </div>

                <div className={classNames.description}>
                    <Card movie={movie} />
                
                    <Description movie={movie} />
                </div>
            </div>
        </div>
    );
}

export default MoviePage;
