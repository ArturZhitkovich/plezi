import React from 'react';

import './index.scss';

const baseClassName = 'description';

const getClassNames = () => ({
    component: baseClassName,
    title: `${baseClassName}__title`,
    back: `${baseClassName}__back`,
    description: `${baseClassName}__description`,
    tagline: `${baseClassName}__tagline`,
    overview: `${baseClassName}__overview`,
    field: `${baseClassName}__field`,
    fieldTitle: `${baseClassName}__field_title`,
});

const classNames = getClassNames();

const Description = ({ movie: { title,webSite, overview, tagline, genres, budget, voteAverage } }) => {
    return (
        <div className={classNames.component}>
            <div className={classNames.title}>
                {title}
            </div>
            <div className={classNames.tagline}>
                {tagline}
            </div>
            <div className={classNames.overview}>
                {overview}
            </div>

            {genres.length && (
                <div className={classNames.field}>
                    <span  className={classNames.fieldTitle}>Genre: </span>
                    {genres.map(it => it.name).join(', ')}   
                </div>
            )}

            {budget && (
                <div className={classNames.field}>
                    <span  className={classNames.fieldTitle}>Budget: </span>
                    {budget}   
                </div>
            )}

            
            {voteAverage && (
                <div className={classNames.field}>
                    <span  className={classNames.fieldTitle}>Rating: </span>
                    {voteAverage}   
                </div>
            )}

            {webSite && (
                <div className={classNames.field}>
                    <span  className={classNames.fieldTitle}>Official website: </span>
                    <a href={webSite}>{webSite}</a>
                </div>
            )}
        </div>
    )
}

export default Description;