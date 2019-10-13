import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOT_SUCCESS,

} from './constants.js';
import { robots } from './robots';


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestRobots = () => (dispatch) => {
    dispatch({type: REQUEST_ROBOT_SUCCESS, payload: robots})};
   