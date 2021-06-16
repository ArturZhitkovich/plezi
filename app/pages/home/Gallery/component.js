import React, { useEffect } from 'react';
import Card from 'components/Card';

import './index.scss';

const baseClassName = 'gallery';

const getClassNames = () => ({
    component: baseClassName,
})

const classNames = getClassNames();

const Gallery = ({ movies = [], dataLoaded, loadData }) => {
    useEffect(() => {
        if (!dataLoaded) {
            loadData();
        }
    }, [])

    
    if (!movies.length) {
        return null;
    }

    const renderMovies = () => movies.map(movie => (
        <Card movie={movie} key={movie.id} />
    ))
  
    return (
        <div className={classNames.component}>
            {renderMovies()} 
        </div>
    )
}

export default Gallery;