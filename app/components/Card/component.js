import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

const baseClassName = 'card';

const getClassNames = () => ({
    component: baseClassName,
    link: `${baseClassName}__link`,
    content: `${baseClassName}__content`,
    poster: `${baseClassName}__poster`
})

const classNames = getClassNames();

const Card = ({ movie }) => {
    const { posterPath, title, id } = movie;

    return (
        <div className={classNames.component}>
            <Link className={classNames.link} to={`/${id}`} key={id} >
                <div className={classNames.poster}>
                    <img src={posterPath} alt='poster' />
                </div>
                <div className={classNames.content}>
                    {title}
                </div>
            </Link>
        </div>
    )
}

export default Card;