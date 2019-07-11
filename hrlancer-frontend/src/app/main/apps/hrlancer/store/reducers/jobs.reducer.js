import * as Actions from '../actions';

const initialState = {
    data: null,
    levels: [],
    locations: []
};

const jobsReducer = function(state = initialState, action){
    switch (action.type) {
        case Actions.GET_JOBS:
            {
                return{
                    ...state,
                    data:action.payload
                };
            }
            case Actions.GET_LEVELS:
            {
                return{
                    ...state,
                    levels:action.payload
                };
            }
            case Actions.GET_LOCATIONS:
            {
                return{
                    ...state,
                    locations:action.payload
                };
            }
        default:
            return state;
    }
}


export default jobsReducer;