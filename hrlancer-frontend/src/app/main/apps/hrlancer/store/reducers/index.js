import {combineReducers} from 'redux';
import job from './job.reducer';
import jobs from './jobs.reducer';

const reducer = combineReducers({
    job,
    jobs
});
export default reducer;