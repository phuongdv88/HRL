import * as Actions from '../actions';
const initialState = null;
const jobReducer = function(state=initialState, action){
    switch (action.type) {
        case Actions.GET_JOB:
            {
                return {
                    ...action.payload
                };
            }
        case Actions.SAVE_JOB:
            {
                return {
                    ...action.payload
                };
            }
        case Actions.UNSAVE_JOB:
            {
                return {
                    ...action.payload
                };
            }
        case Actions.UPDATE_JOB:
                {
                    return {
                        ...state,
                        ...action.payload
                    };
                }
                                    
        default:
            return state;
    }
}

export default jobReducer;