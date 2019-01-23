/*--------------------------------------------------------*\
	create root reducer
\*--------------------------------------------------------*/

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import wpReducer from './wp';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    wp: wpReducer,
})

export default rootReducer
