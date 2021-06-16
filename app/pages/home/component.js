import React from 'react';
import Gallery from './Gallery';

import './index.scss';

const baseClassName = 'home-page';

const getClassNames = () => {
    return {
        component: baseClassName,
        header: `${baseClassName}__header`,
        content: `${baseClassName}__content`
    };
};

const classNames = getClassNames();

const HomePage = () => (
    <div className={classNames.component}>
        <div className={classNames.header}>
            TMDB
        </div>
        <div className={classNames.content}>
            <Gallery />
        </div>
    </div>
);

HomePage.Prop

export default HomePage;
