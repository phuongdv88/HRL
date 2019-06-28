import React from 'react';

export const HomePageConfig = {
    layout          : {
        style : 'layout3',
        config: {
            scroll : 'content',
            navbar : {
                display : true,
                folded  : false,
                position: 'left'
            },
            toolbar: {
                display : false,
                style   : 'fixed',
                position: 'below'
            },
            footer : {
                display : false,
                style   : 'fixed',
                position: 'below'
            },
            mode   : 'fullwidth'
        }
    },
    routes: [
        {
            path: '/home',
            component: React.lazy(()=> import('./HomePage'))
        }
    ]
}

export default HomePageConfig;