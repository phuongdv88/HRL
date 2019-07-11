import axios from 'axios';
import {showMessage} from 'app/store/actions/fuse';

export const GET_JOB = '[JOBS] GET JOB';
export const SAVE_JOB = '[JOBS] SAVE JOB';
export const UNSAVE_JOB = '[JOBS] UNSAVE JOB';
export const UPDATE_JOB = '[JOBS] UPDATE JOB';
export const CREATE_JOB = '[JOBS] CREATE JOB';
export const DELETE_JOB = '[JOBS] DELETE JOB';

// /api/jobs/categories
// /api/jobs/locations
// /api/jobs/all
// /api/job
export function getjob(params){
    const request = axios.get('/api/job', {params});
    return (dispatch) => request.then((response) =>
    dispatch({
        type: GET_JOB,
        payload: response.data
    })
    );
}

// save job to list
export function saveJob(data){
    const request = axios.post('/api/jobs/save', data);
    return (dispatch) =>
    request.then((response) => {
        dispatch(showMessage({message: 'Đã lưu công việc'}));
        return dispatch({
            type:SAVE_JOB,
            payload: response.data
        })
    });
}

export function unsaveJob(data){
    const request = axios.post('/api/jobs/unsave', data);
    return (dispatch) =>
    request.then((response) => {
        dispatch(showMessage({message: 'Đã dừng lưu công việc này'}));
        return dispatch({
            type:UNSAVE_JOB,
            payload: response.data
        })
    });
}