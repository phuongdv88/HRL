import axios from 'axios';

export const GET_JOBS = '[JOBS] GET JOBS';
export const GET_LEVELS = '[JOBS] GET lEVELS';
export const GET_LOCATIONS = '[JOBS] GET LOCATIONS';

export function getJobs(){
    const request = axios.get('/api/jobs/all');
    return (dispatch) =>
    request.then((response) => 
    dispatch({
        type: GET_JOBS,
        payload: response.data
    })
    );
}

export function getLevels(){
    const request = axios.get('/api/jobs/levels');
    return (dispatch) => 
    request.then((response) => dispatch({
        type: GET_LEVELS   ,
        payload: response.data
    }));
}

export function getLocations(){
    const request = axios.get('/api/jobs/locations');
    return (dispatch) => 
    request.then((response) => dispatch({
        type: GET_LOCATIONS,
        payload: response.data
    }));
}