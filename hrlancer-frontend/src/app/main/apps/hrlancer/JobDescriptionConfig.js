import React from 'react';
import {Redirect} from 'react-router-dom';

export const JobDescriptionConfig = {
    setting: {
        layout:{}
    },
    routes:[
        {
            path: '/apps/hrlancer/job/:jobId/:jobHandle?',
            component: React.lazy(()=> import ('./job/Job'))
        },
        {
            path: '/apps/hrlancer/all',
            component: React.lazy(()=> import ('./jobs/Jobs'))
        },
        {
            path: '/home',
            component: ()=><Redirect to ="apps/hrlancer/all"/>
        }
    ]
}

